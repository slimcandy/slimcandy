import { CreatePagesArgs, GatsbyNode } from "gatsby"
import path from "path"
import { TCategoryContext, TPostContext, TTagContext } from "./src/utils/types"

async function turnPostsIntoPages({ graphql, actions }: CreatePagesArgs) {
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

  const posts = data?.allSanityPost?.nodes || []
  // 3. Loop over each post and create a page for that post
  posts.forEach(post => {
    console.log("Creating page for Article:", post.title)
    actions.createPage({
      path: `posts/${post.slug.current}`,
      component: postTemplate,
      context: {
        slug: post.slug.current,
      },
    })
  })
}

async function turnCategoriesIntoPages({ graphql, actions }: CreatePagesArgs) {
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

  const categories = data?.allSanityCategory?.nodes || []
  // 3. Loop over each category and create a page for that category
  categories.forEach(category => {
    console.log("Creating page for Category: ", category.name)
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

async function turnTagsIntoPages({ graphql, actions }: CreatePagesArgs) {
  // 1. Get a template for this page
  const tagTemplate = path.resolve("./src/templates/Tags.tsx")
  // 2. Query all categories
  const {
    data,
  }: {
    data?: {
      allSanityTag: {
        nodes: TTagContext[]
      }
    }
  } = await graphql(`
    query AllTags {
      allSanityTag(sort: { _createdAt: DESC }, limit: 100) {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `)

  const tags = data?.allSanityTag?.nodes || []
  // 3. Loop over each tag and create a page for that tag
  tags.forEach(tag => {
    console.log("Creating page for Tag: ", tag.name)
    actions.createPage({
      path: `tags/${tag.slug.current}`,
      component: tagTemplate,
      context: {
        slug: tag.slug.current,
        name: tag.name,
      },
    })
  })
}

export const createPages: GatsbyNode["createPages"] =
  async function createPages(params) {
    Promise.all([
      turnPostsIntoPages(params),
      turnCategoriesIntoPages(params),
      turnTagsIntoPages(params),
    ])
  }
