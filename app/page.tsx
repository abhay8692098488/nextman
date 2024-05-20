"use client";

import { useState } from 'react';
import styles from './SearchPage.module.css'; // Ensure you have this CSS module file

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const suggestions = [
    'what is farfalle?',
    'what’s gpt-4?',
    'what is groq?',
    'what happened to Ilya?'
  ];

  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    // Add your search handling logic here
    console.log(`Searching for: ${query}`);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Ask anything..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <ul className={styles.suggestionsList}>
          {filteredSuggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      </form>
    </div>
  );
};

export default SearchPage;
