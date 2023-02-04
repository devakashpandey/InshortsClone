import { Button, Container } from '@mui/material';
import React from 'react'
import "./NewsResults.css"
import NewsCard from './NewsCard';
import {AiFillLinkedin} from "react-icons/ai"


const NewsResults = ({newsArray, resultsCount, loadmore, setLoadMore}) => {
  return (
     <>
     <Container maxWidth="md" >
       
       <div className='contents'>
               {
                 newsArray.map((allNews,id) => {
                      return(
                      <div className='card'>
                            <NewsCard allNews ={allNews} key={id} />
                      </div>
                         
                      )
                 })
               }       
       </div> <br/>

       { loadmore <= resultsCount && (
           <>
         <center>
           <div className='load-btn'>
              <Button onClick={() => setLoadMore(loadmore + 20)} variant="outlined">Load More</Button>
           </div>
        </center> 
           </>
       )
  }
     </Container>

 
    <footer>
      <div className='footer'>
        <div className='info'>
           <p>Copyright © 2023 - All Rights Reserved -  Akash Pandey</p>
                      
        <div className='icon'>
           <a href="https://www.linkedin.com/in/devakashpandey/" target="_blank"><AiFillLinkedin/></a>
        </div>
      </div>
    </div>
   
     
    </footer>

     </>
  )
}

export default NewsResults;
