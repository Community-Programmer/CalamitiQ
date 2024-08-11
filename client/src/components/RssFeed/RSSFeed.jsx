import{ useEffect, useState } from 'react';
import xml2js from 'xml2js';

function RSSFeed({rssUrl}) {
  const [rssData, setRssData] = useState(null);
  const [error, setError] = useState(null);
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

  useEffect(() => {
    fetch(proxyUrl + rssUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.text();
      })
      .then((str) => {
        console.log("Raw XML response:", str); // Log the raw XML
        return xml2js.parseStringPromise(str); // Directly use xml2js to parse the XML string
      })
      .then((result) => {
        // Access the desired data structure
        const items = result.rss.channel[0].item;
        setRssData(items);
      })
      .catch((err) => {
        console.error("Failed to fetch RSS feed:", err);
        setError(err.message);
      });
  }, []);

  return (
    <>
      {error ? (
        <p className="rss-feed-error">Error: {error}</p>
      ) : rssData ? (
        <ul className="rss-feed-list">
          {rssData.map((item, index) => {
            const imageUrl = item.enclosure && item.enclosure[0].$.url;

            return (
              <li key={index} className="rss-feed-item">
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={item.title[0]}
                    className="rss-feed-image"
                  />
                )}
                <a href={item.link[0]} target="_blank" rel="noopener noreferrer" className="rss-feed-link">
                  {item.title[0]}
                </a>
                <p className="rss-feed-description">{item.description[0]}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="rss-feed-loading">Loading RSS feed...</p>
      )}
  </>
  );
}

export default RSSFeed;
