import axios from 'axios';

// Replace 'YOUR_GITHUB_TOKEN' with your actual GitHub token
const GITHUB_TOKEN = GITHUB_TOKEN
const GITHUB_USERNAME = 'dynasty-29';

const githubApi = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
    },
});
export const fetchProfileDetails = async () => {
    try {
        const response = await githubApi.get(`/users/${GITHUB_USERNAME}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching profile details:', error);
        return null;
    }
};
export const fetchRepositories = async () => {
    try {
        const response = await githubApi.get(`/users/${GITHUB_USERNAME}/starred`);
        console.log(response)
        return response.data;
      
    } catch (error) {
        console.error('Error fetching repositories:', error);
        return [];
    }
};
export const fetchCountofRepo = async () => {
    try {
        const response = await githubApi.get(`/users/${GITHUB_USERNAME}/starred`);
        return response.data.length;
    } catch (error) {
        console.error('Error fetching starred repository count:', error);
        return 0;
    }
};

