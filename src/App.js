import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/navbar/Nav";
import axios from "axios";
import API_KEY from "./keys";
import NewsResults from "./components/newsResult/NewsResults";
import Footer from "./components/footer/Footer";

function App() {
  const [category, setCategory] = useState("general"); // for storing the category section
  const [resultsCount, setResultsCount] = useState(""); // for storing all articles count (use for "load more" button)
  const [newsArray, setNewsArray] = useState([]); // for stroing all articles

  const [loadmore, setLoadMore] = useState(10); // for storing "load more" counting

  const newsAPI = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apikey=${API_KEY}
           &category=${category}&pageSize=${loadmore}`
      );
      setResultsCount(news.data.totalResults);
      setNewsArray(news.data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsAPI();
  }, [category, loadmore, resultsCount]);

  return (
    <>
      <Nav setCategory={setCategory} />
      <br />
      <br />
      <NewsResults
        newsArray={newsArray}
        resultsCount={resultsCount}
        loadmore={loadmore}
        setLoadMore={setLoadMore}
      />
      <Footer />
    </>
  );
}

export default App;
