import React from "react";

import { useState, useEffect } from "react";
import NewsComp from "./NewsComp";
import axios from "./axios";
import instance from "./axios";

const News = () => {
  const [data, setData] = useState([]);

  const API_KEY = "bf76c94ca0784435a8e110cbf71a08e7";
  const api =
    "http://newsapi.org/v2//everything?q=stocks&from=2020-11-28&%20sortBy=popularity&apiKey=bf76c94ca0784435a8e110cbf71a08e7";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(api);
      console.log(request.data.articles);
      setData(request.data.articles);
      return request;
    }
    fetchData();
  }, []);
  return (
    <div>
      {data.map((item) => {
        return (
          <NewsComp
            key={item.publishedAt}
            name={item.title}
            author={item.author}
            description={item.description}
            image={item.urlToImage}
            content={item.content}
            title={item.title}
            link={item.url}
          />
        );
      })}
    </div>
  );
};

export default News;
