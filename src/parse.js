export default (data) => {
  const parser = new DOMParser();
  const xmlDocument = parser.parseFromString(data, 'text/xml');
  const newsItems = xmlDocument.querySelectorAll('item');

  const handleNewsItem = (item) => {
    const newsItem = {
      title: item.querySelector('title').textContent,
      description: item.querySelector('description').textContent,
      link: item.querySelector('link').textContent,
    };

    return newsItem;
  };

  const newsFeed = {
    title: xmlDocument.querySelector('title').textContent,
    description: xmlDocument.querySelector('description').textContent,
    link: xmlDocument.querySelector('link').textContent,
    items: [...newsItems].map(handleNewsItem),
  };

  return newsFeed;
};
