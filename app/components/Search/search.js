"use client";

import { useState } from "react";
import Link from "next/link";

export default function Search({ data }) {
  const [news, setNews] = useState(data);
  const [searchText, setSearchText] = useState("");

  const onSearch = (keyword) => {
    setSearchText(keyword);

    if (!keyword) {
      setNews(data);
      return;
    }

    // search with title and location
    setNews(
      data.filter(
        (item) =>
          item.title
            .toLocaleLowerCase()
            .includes(keyword.toLocaleLowerCase()) ||
          item.location
            .toLocaleLowerCase()
            .includes(keyword.toLocaleLowerCase())
      )
    );
  };

  return (
    <div className="search">
      <input
        type="search"
        placeholder="Ara..."
        className="search-input"
        onInput={(e) => onSearch(e.target.value)}
      />

      {searchText && news.length > 0 && (
        <div className="search-results">
          <ul>
            {news.map((item) => (
              <li key={item.id}>
                <Link href={`/news/${item.slug}`} key={item.id}>
                  <p>
                    {item.title} - {item.location}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
