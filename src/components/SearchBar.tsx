import React, { useState } from 'react';

/* The SearchBar allows the user to enter a GitHub username and 
search for their repositories.
It takes the onSearch prop, which is a function that will be called 
when the user clicks the search button.

*/

interface SearchBarProps {
  onSearch: (username: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSearch = () => {
    if (username.trim()) onSearch(username);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
