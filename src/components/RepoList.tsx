import React from 'react';
import RepoDetails from './RepoDetails';

/* The RepoList serves a component that is responsible for displaying the filtered
list of Github repositories.
It takes the array props of repos.. Then it will apply the filters to the list of 
repositories. It then renders each filtered repository using the RepoDetails component,
which shows all the details of the repo
*/

interface RepoListProps {
  repos: any[];
  filterName: string;
  filterLanguage: string;
}

const RepoList: React.FC<RepoListProps> = ({ repos, filterName, filterLanguage }) => {
  // Filter the list of repositories based on the filterName and filterLanguage
  const filteredRepos = repos.filter((repo) =>
    // Filter by repo name
    repo.name.toLowerCase().includes(filterName.toLowerCase()) &&
    // Filter by programming language
    (filterLanguage === '' || repo.language?.toLowerCase() === filterLanguage.toLowerCase())
  );

  return (
    <div>
      {filteredRepos.length > 0 ? (
        filteredRepos.map((repo) => (
          <RepoDetails key={repo.id} {...repo} />
        ))
      ) : (
        <p>No repositories found.</p>
      )}
    </div>
  );
};

export default RepoList;
