import React, { useEffect, useState } from 'react';

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const News = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

  const API_KEY = 'd3c8a33eff4c4963a242e246b674c26c'; // Replace with your NewsAPI key
  const URL = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;

  useEffect(() => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch news:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading news...</p>;

  return (
    <div>
      <h1>Top Headlines</h1>
      <ul>
        {articles.map((article, index) => (
          <li key={index}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            {article.urlToImage && <img src={article.urlToImage} alt="news" style={{ width: '300px' }} />}
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
