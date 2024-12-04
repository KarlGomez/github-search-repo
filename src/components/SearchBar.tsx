import React, { useState } from 'react';

/* The SearchBar allows the user to enter a GitHub username and 
search for their repositories.
It takes the onSearch prop, which is a function that will be called 
when the user clicks the search button.
*/

// Props to execute a function that will be called with the entered username
interface SearchBarProps {
  onSearch: (username: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {

  // The username state will store the input value entered by the user
  const [username, setUsername] = useState('');

  // The handleSearch function will be called when the user clicks the search button
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
      {/*search button to trigger the handleSearch function */}
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
