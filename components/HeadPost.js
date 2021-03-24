import Tag from './Tag'

export const HeadPost = ({ meta, isBlogPost }) => (
    <>
    <div className="flex">

  
    {meta.tags.map(t=>{
      return (
        <Tag name={t} />
        )
      })}
      
      </div>
      
     
      <h1 className={isBlogPost? 'great-title' :null} >{meta.title}</h1>
      <div className='details'>
      {
          isBlogPost? null: <p>{meta.description}</p>
      }  
        <span>{meta.date}</span>

      </div>
      <style jsx>
        {`
          h1 {
            font-size: 1.5rem;
            font-weight: 700;
            color: #f39c12;
          }
          .great-title {
              font-size: 2rem;
          }
          .details span {
            color: #bdbdbd;
            margin-right: 1rem;
          }
          .details {
            margin-bottom: 1rem;
          }
        `}
      </style>
    </>
  )
  