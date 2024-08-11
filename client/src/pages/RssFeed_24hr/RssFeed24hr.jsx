import RSSFeed from "@/components/RssFeed/RSSFeed";

const RssFeed24hr = () => {
  return (
    <>
      <div className="rss-feed mt-6 mb-3">
        <div className="flex justify-center items-center gap-4 mb-5">
        <h1 className="text-2xl font-bold">Natural Disaster RSS Feed - 24 hours  </h1>
        <span className="live">
          <span>🟢</span>Live
        </span>
        </div>
        <RSSFeed rssUrl={"https://www.gdacs.org/xml/rss_24h.xml"} />
      </div>
    </>
  );
};

export default RssFeed24hr;
