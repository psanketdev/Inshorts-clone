import "./App.css";
import { useEffect, useState } from "react";
import { HOSTNAME } from "./constant";
import NavInshorts from "./components/NavInshorts";
import NewsContent from "./components/NewsContent/NewsContent";
import Footer from "./components/Footer/Footer";

function App() {
  const [newsArray, setNewsArray] = useState([]);
  const [newsResult, setNewsResult] = useState();
  const [category, setCategory] = useState("general");
  const [loadMore, setLoadMore] = useState(20);

  const fetchNewsData = async () => {
    try {
      const url = `${HOSTNAME}country=in&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}&pageSize=${loadMore}`;
      const response = await fetch(url);
      const news = await response.json();
      setNewsArray(news?.articles);
      setNewsResult(news?.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNewsData();
  }, [setNewsResult, category, loadMore]);

  return (
    <div className="app" id="home">
      <NavInshorts setCategory={setCategory} />

      {newsArray && (
        <NewsContent
          newsArray={newsArray}
          newsResult={newsResult}
          setLoadMore={setLoadMore}
          loadMore={loadMore}
        />
      )}

      <Footer />
    </div>
  );
}

export default App;
