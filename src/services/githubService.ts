import axios from 'axios';

// Component to fetch the list of repositories by username using the github API

export const fetchRepos = async (username: string) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}/repos`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch the users repositories...');
  }
};
