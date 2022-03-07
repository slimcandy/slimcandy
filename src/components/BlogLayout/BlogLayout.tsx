import * as React from 'react'
import { Link } from 'gatsby'

import { blogPost } from './BlogLayout.module.scss'
import Layout from '../Layout'

const BlogLayout = ({ children, pageContext }: any) => {
  const { title = '', description = '', date = '' } = pageContext.frontmatter

  return (
    <Layout title={title} description={description} className={blogPost}>
      <div className='row align-items-start'>
        <h1>{title}</h1>
        <p className='post-date'>{date}</p>
        <article>
          <p>{description}</p>
          <hr />
          {children}
        </article>
      </div>
      <nav className='row p-2 mt-2' aria-label='Pagination'>
        <div className='col-4'>
          <Link to='/' className='btn btn-outline-primary post-button'>
            Back to posts
          </Link>
        </div>
      </nav>
    </Layout>
  )
}

export default BlogLayout
