import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: `JS.Garden`,
    siteUrl: `https://js.garden`,
    author: `Aleksei Volkov`,
    motto: `My Journey to $10k/mo. before my 30s`,
    description: `Join me on my journey to make $10k a month through coding. I share my tips and strategies on Github pet projects, semantic HTML, and JS performance, CSS tricks, and showcases. My personal blog is for web developers who also aspire to stand out in the tech industry.`,
    social: {
      github: `https://github.com/slimcandy`,
      linkedin: `https://www.linkedin.com/in/2plus2is4/`,
      youtube: `https://www.youtube.com/js.garden`,
    },
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "qtyf8bhl",
        dataset: "production",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    "gatsby-plugin-postcss",
    "gatsby-plugin-netlify",
  ],
}

export default config
