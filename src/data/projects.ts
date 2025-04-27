// src/data/projects.ts

export interface Project {
    title: string;
    shortDesc: string;
    longDesc: string;
    image: string;
    link: string;
    category: 'Data Science' | 'Frontend' | 'Full stack' | 'Game Dev' | 'VR/AR'; 
    createdAt: string; // ISO date to sort
  }
  
  export const projects: Project[] = [
    {
      title: "BongaPlus",
      shortDesc: "Blogging platform.",
      longDesc: "BongaPlus is a full-stack blogging platform where users can read, write, edit, and interact with blog posts. Built with React on the frontend and Flask on the backend, the application supports authentication, user-specific content management, likes, comments, and more.",
      image: "/assets/projects/Bongaplus.png",
      link: "https://bongaplus.onrender.com/",
      category: "Full stack",
      createdAt: "2025-02-20",
    },
    {
      title: "EventFlow Manager",
      shortDesc: "Event management system.",
      longDesc: "EventFlow is a simple, easy-to-use app that helps you manage all your events in one place. It allows you to create, edit, delete, and view event details effortlessly. You can search and filter events by their themes or dates, and a notification bell will remind you when an event is coming up using React and Restful-API.",
      image: "/assets/projects/EvenFlow.png",
      link: "https://dynasty-29.github.io/EventFlow-Manager/",
      category: "Frontend",
      createdAt: "2024-12-20",
    },
    {
      title: "Crop Predictor",
      shortDesc: "Precision agriculture model.",
      longDesc: "Predict suitable crops to grow based on environmental factors using ML.",
      image: "/assets/projects/crop.jpg",
      link: "https://github.com/dynasty-29/MyKaggleX_ShowcaseProjects/blob/main/crops_recommendation.ipynb",
      category: "Data Science",
      createdAt: "2024-04-20",
    },
    {
      title: "Book Recommender",
      shortDesc: "Suggest books using ML.",
      longDesc: "Recommender system to suggest books based on previous reads.",
      image: "/assets/projects/bookgenre.jpg",
      link: "https://github.com/dynasty-29/Book-Genre-Classification/blob/main/Book_Genre_Classification.ipynb",
      category: "Data Science",
      createdAt: "2024-04-18",
    },
    {
      title: "Carbon Emission Prediction",
      shortDesc: "CO2 emission model.",
      longDesc: "Model to predict per capita CO2 emissions for carbon capture strategy.",
      image: "/assets/projects/carbonemission.jpg",
      link: "https://github.com/dynasty-29/MyKaggleX_ShowcaseProjects/blob/main/carbon_emission.ipynb",
      category: "Data Science",
      createdAt: "2024-04-17",
    },
    {
      title: "Chest Disease Prediction",
      shortDesc: "Medical image classification.",
      longDesc: "Deep learning model to detect chest diseases from medical images.",
      image: "/assets/projects/chestdisease.jpg",
      link: "https://github.com/dynasty-29/Chest_Disease_detection/blob/main/Disease_detection_Project.ipynb",
      category: "Data Science",
      createdAt: "2024-04-16",
    },
    {
      title: "Productivity Prediction",
      shortDesc: "Garment industry productivity model.",
      longDesc: "Predict employee productivity in the garment sector using ML models.",
      image: "/assets/projects/productivity.jpg",
      link: "https://github.com/dynasty-29/Productivity-Prediction-Project",
      category: "Data Science",
      createdAt: "2024-04-15",
    },
    {
      title: "Timeless Elegance Clock",
      shortDesc: "Analog Clock in HTML/CSS/JS.",
      longDesc: "A simple, elegant analog clock built using HTML, CSS, and JavaScript.",
      image: "/assets/projects/clock.png",
      link: "#",
      category: "Frontend",
      createdAt: "2024-03-25",
    },
    {
      title: "Calculative Craftsmanship Calculator",
      shortDesc: "Simple calculator app.",
      longDesc: "A calculator built using HTML, CSS, and JavaScript with elegant styling.",
      image: "/assets/projects/calculator.png",
      link: "#",
      category: "Frontend",
      createdAt: "2024-03-24",
    },
    {
      title: "Match Three Game",
      shortDesc: "Unity 2D puzzle game.",
      longDesc: "Swap gems to align 3 or more, unlocking levels in Unity.",
      image: "/assets/projects/Unity_Kb0YGZ8xjM.png",
      link: "githublink",
      category: "Game Dev",
      createdAt: "2024-02-15",
    },
    {
      title: "Kpop Quiz",
      shortDesc: "Kpop-themed quiz game.",
      longDesc: "Quiz game for Kpop fans using HTML/CSS/JS.",
      image: "/assets/projects/chrome_KaA3NmmJyJ.png",
      link: "githublink",
      category: "Game Dev",
      createdAt: "2024-02-10",
    },
    {
      title: "Jet Turbine VR Project",
      shortDesc: "VR jet turbine simulation.",
      longDesc: "Immersive VR experience simulating jet turbines built in Unity.",
      image: "/assets/projects/Unity_3hhwiTxuJc.png",
      link: "#",
      category: "VR/AR",
      createdAt: "2024-01-20",
    },
  ];
  