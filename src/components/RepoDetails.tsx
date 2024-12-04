import React from 'react';

//Definition of the props interface used for typescript
interface RepoDetailsProps {
  name: string;   // Name of the repository
  description: string;  // Description of the repository
  language: string;   //Programming language used
  html_url: string;   //The url to the repository
}

// This component displays the details of a repository
const RepoDetails: React.FC<RepoDetailsProps> = ({ name, description, language, html_url }) => {
  return (
    <div className="repo-details">
      <h3><a href={html_url} target="_blank" rel="noopener noreferrer">{name}</a></h3>
      <p>{description || 'No description provided.'}</p>
      <span>{language}</span>
    </div>
  );
};

export default RepoDetails;
