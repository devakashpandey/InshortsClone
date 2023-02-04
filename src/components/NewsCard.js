import React from 'react'
import "./NewsCard.css"

const NewsCard = ({allNews}) => {

  const fullDate = new Date(allNews.publishedAt)
  var date = fullDate.toString().split(" ");

  const hour = parseInt(date[4].slice(0,2))
  const min = parseInt(date[4].slice(3,5))

  const time = hour > 12 ? true : false

  return (
     <>
     <div className='news-card'>
                      
      <img className='news-img'
        src={allNews.urlToImage ? allNews.urlToImage : "https://source.unsplash.com/random"} 
        alt={allNews.title}>                
      </img>

      <div className='news-description'>
         
            <span className='titile'>{allNews.title}</span> 
             <br/>
            <span className='author'>
              <a href={allNews.url} target="_blank">Short</a>
              <span>
                &nbsp; by {allNews.author ? allNews.author : "Unknown"} &nbsp; /
                &nbsp; {
                      time ? `${hour-12}:${min} pm ` : `${hour}:${min} am ` 
                } on {date[2]} {date[1]} {date[3]}, {date[0]}
              </span>
            </span>   

            
          <div className='lowernews-text'>
       
            <div className='description'>
               <p>{allNews.description}</p>
         
              <span className='readmore'><br/><br/>
                Read more at &nbsp; 
              <a className='source' 
                href={allNews.url} 
                target="_blank">{allNews.source.name}</a>

             </span>
           </div>
  
         </div>

      </div>

     </div>
     </>
  )
}

export default NewsCard
