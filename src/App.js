import { useEffect, useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import axios from 'axios';
import API_KEY from './keys';
import NewsResults from './components/NewsResults';

function App() {

  const [category, setCategory] = useState("general")
  const [resultsCount, setResultsCount ] = useState("")
  const [newsArray, setNewsArray ] = useState([])
  const [loadmore, setLoadMore] = useState(10)


  const newsAPI = async () =>{
     try{
        const news = await axios.get(
           `https://newsapi.org/v2/top-headlines?country=in&apikey=${API_KEY}
           &category=${category}&pageSize=${loadmore}`
        )
        setResultsCount(news.data.totalResults)
        setNewsArray(news.data.articles)

     }catch(error){
      console.log(error)
     }
  }

  useEffect(() => {
    newsAPI()
  } , [category, loadmore, resultsCount])

  return (
     <>
      <Nav setCategory={setCategory}/><br/><br/>
      <NewsResults 
       newsArray={newsArray}
       resultsCount={resultsCount}
       loadmore={loadmore}
       setLoadMore={setLoadMore}
        />

     </>
  );
}

export default App;
