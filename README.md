# Aya Khlif - Full Stack Developer Portfolio

This is a personal portfolio website for Aya Khlif, a Full Stack Web Developer. The project is built with React, Tailwind CSS, and Framer Motion, and is fully containerized with Docker.

## Features

-   **Bilingual Support:** Arabic (RTL) and English (LTR) using `i18next`.
-   **Responsive Design:** Built with Tailwind CSS.
-   **Animations:** Smooth transitions using Framer Motion.
-   **Pink Theme:** Custom color scheme.
-   **Dockerized:** Ready for development and production using Docker.

## Getting Started

### Prerequisites

-   Docker and Docker Compose installed on your machine.

### Running in Development Mode

To start the development server with hot-reloading:

```bash
docker-compose up dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

To build the production image and serve it with Nginx:

```bash
docker-compose up --build app
```

The application will be available at `http://localhost:8080`.

## Project Structure

-   `src/`: Source code.
-   `src/components/`: React components.
-   `src/locales/`: Translation files (en.json, ar.json).
-   `Dockerfile`: Production build configuration.
-   `docker-compose.yml`: Docker Compose configuration for dev and prod.
-   `nginx.conf`: Nginx configuration for serving the static build.

## Tech Stack

-   **Frontend:** React, Vite
-   **Styling:** Tailwind CSS, clsx, tailwind-merge
-   **Icons:** Lucide React
-   **Animations:** Framer Motion
-   **Internationalization:** i18next, react-i18next
-   **SEO:** react-helmet-async
