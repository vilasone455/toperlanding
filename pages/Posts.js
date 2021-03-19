import React from 'react'

export default function Posts() {
    const postList = filterPosts(props.summaryJson)
    return (
        <div className="center mw6 pa3 pa4-ns">
        {postList.map((article, i) => {
          const href = makeUrl(article)
          const date = formatDate(article.date)
          return (
            <PagePreview
              title={article.title}
              preview={article.preview}
              date={date}
              href={href}
              key={i}
            />
          )
        })}
      </div>
    )
}
