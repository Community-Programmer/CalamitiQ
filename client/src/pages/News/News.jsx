import React, { useState, useEffect } from 'react';
import styles from './News.module.css';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const BASE_URL = 'https://newsapi.org/v2/top-headlines?sources=bbc-news&pageSize=12&apiKey=85ae652ddcf543f2b33f3e3b2c159bca';

const News = () => {
  let [data, setData] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json.articles);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch data");
        setLoading(false); 
      }
    };
    fetchData();
  }, []);

  if (error) return <div>{error}</div>;
  if (loading) return <div>loading....</div>;

  return (
    <div className={styles.main_container}>
      <div className={styles.top_container}>
        <div className="w-4/5 mx-auto">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              {data?.map((article, index) => (
                <CarouselItem key={index} className="relative w-full">
                  <img
                    src={article.urlToImage}
                    alt={article.title}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-4">
                    <h5 className="text-xl font-bold">{article.title}</h5>
                    <p className="text-sm">{article.description}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      <div>
    <h1 class="font-bold text-[26px]">News Headlines</h1>
</div>
      <div className={styles.bottom_container}>
  <div className={styles.news_content}>
    {data?.map((content, index) => (
      <Card key={index} className={styles.card}>
        <div className={styles.cardImage}>
          <img src={content.urlToImage} alt={content.title} />
        </div>
        <CardHeader className={styles.cardText}>
          <div>
            <CardTitle>{content.title}</CardTitle>
            <CardDescription>{content.description}</CardDescription>
          </div>
        </CardHeader>
      </Card>
    ))}
  </div>
</div>

    </div>
  );
};

export default News;
