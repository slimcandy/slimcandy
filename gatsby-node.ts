import { type CreatePagesArgs, type GatsbyNode } from "gatsby"
import path from "path"
import { type TCategoryContext, type TPostContext } from "./src/utils/types"

async function turnPostsIntoPages({
  graphql,
  actions,
}: CreatePagesArgs): Promise<void> {
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

  const posts = data?.allSanityPost?.nodes ?? []
  // 3. Loop over each post and create a page for that post
  posts.forEach(function createPostPage(post, index) {
    const next = index === posts.length - 1 ? null : posts[index + 1]
    const previous = index === 0 ? null : posts[index - 1]

    console.log("📄 Creating page for Article:", post.title)
    actions.createPage({
      path: `posts/${post.slug.current}`,
      component: postTemplate,
      context: {
        slug: post.slug.current,
        prevSlug: previous != null ? previous.slug.current : null,
        nextSlug: next != null ? next.slug.current : null,
      },
    })
  })
}

async function turnCategoriesIntoPages({
  graphql,
  actions,
}: CreatePagesArgs): Promise<void> {
  // 1. Get a template for this page
  const categoryTemplate = path.resolve("./src/templates/Categories.tsx")
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

  const categories = data?.allSanityCategory?.nodes ?? []
  // 3. Loop over each category and create a page for that category
  categories.forEach(category => {
    console.log("🏷️ Creating page for Category: ", category.name)
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

export const createPages: GatsbyNode["createPages"] =
  async function createPages(params) {
    Promise.all([turnPostsIntoPages(params), turnCategoriesIntoPages(params)])
      .then(function logSuccess() {
        console.log("✅ Finished creating pages.")
      })
      .catch(function logError(error) {
        console.error("❌ Failed to create pages:", error)
      })
  }
