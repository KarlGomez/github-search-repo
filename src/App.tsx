import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import RepoList from './components/RepoList';
import FilterControls from './components/FilterControls';
import { fetchRepos } from './services/githubService';
import './App.css';

const App: React.FC = () => {
  /* Used for storing the list of repositories */
  const [repos, setRepos] = useState([]);
  /*Used for  filtering the repositories by name */
  const [filterName, setFilterName] = useState('');
  /*used for filtering  repositories by programming language */
  const [filterLanguage, setFilterLanguage] = useState('');

  /*This is the search funcionality used for fetching repositories for 
  the specified Github username and this will update the repos state */
  const handleSearch = async (username: string) => {
    try {
      const data = await fetchRepos(username);
      setRepos(data);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('An unexpected error occurred.');
      }
    }
  };
  
  return (
    <div className="App">
      <h1>Github Search Repo</h1>
      <SearchBar onSearch={handleSearch} />
      {/* Filter controls component to filter the githug users repositories
      by name and programming language */}
      <FilterControls
        filterName={filterName}
        filterLanguage={filterLanguage}
        setFilterName={setFilterName}
        setFilterLanguage={setFilterLanguage}
      />
      
      {/* RepoList component to display the filtered list of repositories */}
      <RepoList repos={repos} filterName={filterName} filterLanguage={filterLanguage} />
    </div>
  );
};

export default App;
