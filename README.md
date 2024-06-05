# Dot Slash News

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Description

Dot Slash News is a full-stack news portal web application built using the MERN stack (MongoDB, Express, React, Node.js). It features three types of login systems based on user roles, providing different pages and routes for visitors and logged-in users. Users can add, edit, and delete news articles. The application leverages Google Firebase for authentication and JWT tokens for security. Additionally, it includes features such as a dynamic navigation menu and a contact form implemented using React. The design is crafted with Tailwind CSS and daisyUI components.

## Key Features

- **Responsive Design:** Fully responsive, ensuring optimal viewing experience across all devices.
- **News Portal:** A comprehensive platform for managing news articles.
- **Dynamic API:** Utilizes dynamic APIs for data fetching and management.
- **Built with React:** Developed using JavaScript and React for a robust and maintainable front-end.
- **Styled with Tailwind CSS & daisyUI:** Modern and cohesive design using Tailwind CSS with daisyUI components.
- **Client-Side Routing:** Implements React Router for seamless navigation.
- **Secure Authentication:** Uses Google Firebase for authentication and JWT tokens for enhanced security.
- **Environment Variables:** Manages sensitive data securely using dotenv.
- **Database:** Utilizes MongoDB for efficient data storage and retrieval.
- **Hosting:** The front-end is hosted on Vercel, and the server is deployed on Render.
- **Server-Side:** Built with Node.js and Express for a reliable back-end.

## Live Links

- **Live Application:** [Dot Slash News](https://dot-slash-news.vercel.app/)
- **Server Live Link:** [Dot Slash News Backend](https://dotslashnews-backend.onrender.com/)

## Repository Links

- **Front-End Repository:** [GitHub - Front-End](https://github.com/mozammel787/dotSlashNews)
- **Back-End Repository:** [GitHub - Back-End](https://github.com/mozammel787/dotSlashNews_backEnd)

## Frameworks and Tools Used

- **Front-End:** React, Tailwind CSS, daisyUI
- **Back-End:** Node.js, Express
- **Database:** MongoDB
- **Authentication:** Google Firebase, JWT
- **Environment Management:** dotenv
- **Hosting:** Vercel (front-end), Render (server)
- **Build Tool:** Vite

## Code Philosophy

The codebase is designed to be simple and human-readable, ensuring that developers of all skill levels can understand and contribute effectively.

## Packages List

version: 0.1.0

```json
{
  "react-hot-toast": "^2.4.1", 
  "@types/react": "^18.2.66",
  "@types/react-dom": "^18.2.22",
  "@vitejs/plugin-react": "^4.2.1",
  "autoprefixer": "^10.4.19",
  "daisyui": "^4.11.1",
  "eslint": "^8.57.0",
  "eslint-plugin-react": "^7.34.1",
  "eslint-plugin-react-hooks": "^4.6.0",
  "eslint-plugin-react-refresh": "^0.4.6",
  "react-hot-toast": "^2.4.1",
  "postcss": "^8.4.38",
  "tailwindcss": "^3.4.3",
  "vite": "^5.2.0",
  "cors": "^2.8.5",
  "dotenv": "^16.4.5",
  "express": "^4.19.2",
  "jsonwebtoken": "^9.0.2",
  "mongodb": "^6.7.0",
  "nodemon": "^3.1.3"
}
```

## Credits
Special thanks to the Programming Hero team for their guidance and support.
