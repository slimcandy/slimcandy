import { CreatePagesArgs, GatsbyNode } from "gatsby"
import path from "path"
import { TCategoryContext, TPostContext } from "./src/utils/types"

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
          nodes: TPostContext[]
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

const turnCategoriesIntoPages: GatsbyNode["createPages"] =
  async function turnCategoriesIntoPages({ graphql, actions }) {
    // 1. Get a template for this page
    const categoryTemplate = path.resolve("./src/templates/PostList.tsx")
    // 2. Query all categories
    const {
      data,
    }: {
      data?: {
        allSanityCategory: {
          nodes: TCategoryContext[]
        }
      }
    } = await graphql(`
      query AllCategories {
        allSanityCategory(sort: { _createdAt: DESC }, limit: 100) {
          nodes {
            name
            slug {
              current
            }
          }
        }
      }
    `)

    const categories = data?.allSanityCategory?.nodes
    // 3. Loop over each category and create a page for that category
    categories &&
      categories.forEach(category => {
        console.log("Creating page for ", category.name)
        actions.createPage({
          path: `categories/${category.slug.current}`,
          component: categoryTemplate,
          context: {
            slug: category.slug.current,
            name: category.name,
          },
        })
      })
  }

export async function createPages(params: CreatePagesArgs) {
  Promise.all([turnPostsIntoPages(params), turnCategoriesIntoPages(params)])
}
