
# Personal Portfolio

A modern and responsive personal portfolio website built with React and Tailwind CSS. This portfolio showcases your skills, projects, and experience in a visually appealing manner. It also features dynamic content fetched from GitHub, including starred repositories and profile details.

## Features

- **Homepage**: Displays an introduction with profile details and a dynamic count of starred repositories.
- **Projects Page**: Showcases a grid of starred repositories from GitHub with a card-based layout.
- **Skills Page**: Presents your technical skills with animated circular progress indicators.
- **Experience Page**: Lists your work experience in a horizontal timeline format.
- **Navbar**: A fixed navigation bar with smooth scrolling to different sections and a button to download your resume.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for custom styling.
- **Axios**: Promise-based HTTP client for making API requests.
- **SVG**: Scalable Vector Graphics for circular progress indicators.

## Setup

### Prerequisites

- Node.js (>= 14.x)
- npm or yarn

### Creating from scratch

1. **Create the project**

   ```bash
   npx create-react-app portfolio
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd portfolio
   ```

3. **Install Dependencies**

   ```bash
   npm install axios
   # or
   yarn install axios
   ```

4. **Create a github.js file**

   Create a github.js file in services folder in the root directory of the project and add your GitHub token:

   ```
   REACT_APP_GITHUB_TOKEN=your_github_token
   ```

5. **Setup tailwind css**

  ```bash
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
   ```

6. **Add in index.css file**

   @tailwind base;
   @tailwind components;
   @tailwind utilities;

7. **Start the Development Server**

   ```bash
   npm start
   # or
   yarn start
   ```
### Installation

1. **Clone the repository**

   ```bash
   git clone "project_url"
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd portfolio
   ```

3. **Install Dependencies**

   ```bash
   npm install 
   # or
   yarn install 
   ```

4. **Start the Development Server**

   ```bash
   npm start
   # or
   yarn start
   ```

   Your application will be available at `http://localhost:3000`.

## Usage

- **Homepage**: Displays your introduction, profile details, and a count of your starred repositories.
- **Projects Page**: Fetches and displays your starred repositories from GitHub.
- **Skills Page**: Displays your skills with progress indicators.
- **Experience Page**: Shows a timeline of your work experience.

## Customization

- **Profile Details**: Update your GitHub username and token in the `services/github.js` file.
- **Skills**: Modify the `skillsData` array in `Skills.js` to update your skills and proficiency levels.
- **Projects**: The `Projects` component fetches starred repositories; you can adjust the API calls as needed.
- **Experience**: Update the `timelineData` array in `Timeline.js` to reflect your work history.

## Deployment

To deploy the application, you can use platforms like Vercel, Netlify, or GitHub Pages. Follow the respective platform’s documentation for deployment instructions.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Tailwind CSS](https://tailwindcss.com/) for the styling framework.
- [React](https://reactjs.org/) for the UI library.
- [Axios](https://axios-http.com/) for handling API requests.
- [GitHub API](https://docs.github.com/en/rest) for fetching profile and repository data.

---
