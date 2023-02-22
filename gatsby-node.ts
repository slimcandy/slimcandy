import { CreatePagesArgs, GatsbyNode } from "gatsby"
import path from "path"

type TPost = {
  title: string
  slug: {
    current: string
  }
}

const turnPostsIntoPages: GatsbyNode["createPages"] =
  async function turnPostsIntoPages({ graphql, actions }) {
    // 1. Get a template for this page
    const postTemplate = path.resolve("./src/templates/Post.tsx")
    // 2. Query all posts
    const {
      data,
    }: {
      data?: {
        allSanityPost: {
          nodes: TPost[]
        }
      }
    } = await graphql(`
      query AllPosts {
        allSanityPost(sort: { publishedAt: DESC }, limit: 100) {
          nodes {
            title
            slug {
              current
            }
          }
        }
      }
    `)

    const posts = data?.allSanityPost?.nodes
    // 3. Loop over each post and create a page for that post
    posts &&
      posts.forEach(post => {
        console.log("Creating page for ", post.title)
        actions.createPage({
          path: `posts/${post.slug.current}`,
          component: postTemplate,
          context: {
            slug: post.slug.current,
          },
        })
      })
  }

export async function createPages(params: CreatePagesArgs) {
  // Create pages dynamically
  // 1. Posts
  await turnPostsIntoPages(params)
}

//
//
