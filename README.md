# Galactic Ventures (React App)

Welcome to the **Galactic Ventures** React application! This project serves as a foundational exercise for students to practice integrating **React Router DOM** into a React application. By completing this challenge, you'll enhance your skills in client-side routing, navigation, and dynamic rendering within a React environment.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Current File Structure](#current-file-structure)
3. [Challenge Objectives](#challenge-objectives)
4. [Getting Started](#getting-started)
5. [Challenge Instructions](#challenge-instructions)
6. [What You Will Learn](#what-you-will-learn)
7. [Additional Resources](#additional-resources)
8. [Tips for Success](#tips-for-success)

---

## Project Overview

**Galactic Ventures** is a fictional space-travel company offering a range of interstellar services. The current setup includes:

- **Navbar**: Navigation bar with links to different sections.
- **Home**: Landing page welcoming users and showcasing services.
- **Services**: Displays a list of services offered by Galactic Ventures.
- **Contact**: A contact form for inquiries and bookings.
- **ServiceDetail**: A placeholder for detailed information about each service.

Currently, all components are rendered on a single page without distinct routes. Your task is to restructure the application to support multiple routes using **React Router DOM**.

---

## Current File Structure

```
.
├── src
│   ├── App.jsx
│   ├── App.css
│   ├── components
│   │   ├── Navbar.jsx
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── SingleService.jsx
│   │   ├── Contact.jsx
│   │   └── ServiceDetail.jsx
│   └── index.jsx
├── package.json
└── README.md
```

---

## Challenge Objectives

By the end of this challenge, you will be able to:

- **Implement Client-Side Routing**: Use React Router DOM to create navigable routes within the application.
- **Create Dynamic Routes**: Set up routes that handle dynamic parameters, allowing for detailed views of individual services.
- **Enhance Navigation**: Update the Navbar to use React Router's `<Link>` components for seamless navigation.
- **Organize Components**: Structure your application components to align with best practices for routing and scalability.

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js** (v14 or later)
- **npm** (v6 or later)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/galactic-ventures.git
   cd galactic-ventures
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Development Server**

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser to view the app.

---

## Challenge Instructions

### 1. Install React Router DOM

Begin by adding React Router DOM to your project to enable routing capabilities.

- **Task**: Install the `react-router-dom` package using npm.

### 2. Configure the Router

Wrap your application with the appropriate Router component to manage routing context.

- **Task**: Modify your entry file (`index.jsx` or `main.jsx`) to include the Router provider.

### 3. Define Routes in App.jsx

Set up the main routing structure within your `App.jsx` file to map URLs to corresponding components.

- **Task**: Replace the current component rendering in `App.jsx` with React Router's `<Routes>` and `<Route>` components.
- **Components to Route**:
  - `/` → `Home`
  - `/services` → `Services`
  - `/services/:serviceId` → `ServiceDetail`
  - `/contact` → `Contact`

### 4. Update the Navbar

Enhance the `Navbar` component to include navigational links that correspond to the defined routes.

- **Task**: Replace the existing `<button>` elements with React Router's `<Link>` components to enable client-side navigation.

### 5. Implement Dynamic Routing for Services

Ensure that each service in the `Services` component links to its detailed view using dynamic route parameters.

- **Task**: Modify the `SingleService` component to navigate to `/services/:serviceId` when a service is clicked, using either `<Link>` or programmatic navigation with `useNavigate`.

### 6. Fetch and Display Service Details

In the `ServiceDetail` component, retrieve the `serviceId` from the URL parameters and display detailed information about the selected service.

- **Task**: Use React Router's `useParams` hook to access the `serviceId` and display corresponding service details.

### 7. Test Your Routing

Verify that all routes work as expected by navigating through the application and ensuring components render correctly based on the URL.

- **Task**: Manually test each route:
  - Home page (`/`)
  - Services listing (`/services`)
  - Individual service details (`/services/1`, `/services/2`, etc.)
  - Contact page (`/contact`)
  - Non-existent routes (optional: implement a 404 page)

---

## What You Will Learn

- **Client-Side Routing**: Understand how to manage navigation within a single-page application without full page reloads.
- **Dynamic Route Parameters**: Learn to create routes that accept parameters, allowing for dynamic content rendering based on the URL.
- **Navigation Components**: Utilize React Router's `<Link>` and `useNavigate` for declarative and programmatic navigation.
- **Component Organization**: Structure your React components to work seamlessly with routing for better maintainability and scalability.

---

## Additional Resources

- **React Router Documentation**: [https://reactrouter.com/](https://reactrouter.com/)
- **React Official Documentation**: [https://reactjs.org/docs/getting-started.html](https://reactjs.org/docs/getting-started.html)
- **Vite Documentation**: [https://vitejs.dev/guide/](https://vitejs.dev/guide/)

---

## Tips for Success

- **Plan Your Routes**: Before diving into code, sketch out the different routes your application will have and which components they will render.
- **Start Simple**: Begin by setting up basic routes before moving on to dynamic parameters and nested routes.
- **Use React Developer Tools**: This browser extension can help you inspect the component hierarchy and ensure that routing is working correctly.
- **Test Frequently**: As you implement each routing step, test it in the browser to catch and resolve issues early.
- **Stay Organized**: Keep your components modular and organized, especially as the number of routes increases.
- **Leverage React Router Hooks**: Familiarize yourself with hooks like `useParams`, `useNavigate`, and `useLocation` to enhance your routing capabilities.

---

Good luck, and enjoy building your **Galactic Ventures** application with React Router DOM!