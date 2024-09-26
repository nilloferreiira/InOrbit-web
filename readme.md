# In.Orbit

In.Orbit is a goal management application designed to help users create, track, and achieve their personal objectives. With a simple and intuitive interface, users can register their goals, mark tasks as completed, and view detailed metrics on their progress.

## Features

- **Goal Tracking**: Create and manage personal goals.
- **Task Completion**: Mark tasks as completed and track progress.
- **Detailed Metrics**: View completion statistics and insights on your goals.
- **Date-Based Tracking**: Visualize metrics associated with completion dates.

## Tech Stack

- **Frontend**: React
- **Backend**: Node.js with Fastify
- **Database**: PostgreSQL using Drizzle ORM

## How to Run the Project

### 1. Clone the Repositories

Start by cloning both the **frontend** and **backend** repositories:

```bash
# Clone the frontend (web) repository
git clone https://github.com/nilloferreiira/InOrbit-web.git
cd InOrbit-web
npm install

# Go back to the root directory and clone the backend (API) repository
cd ..
git clone https://github.com/nilloferreiira/InOrbit-API.git
cd InOrbit-API
npm install
```

### 2. Set Up PostgreSQL with Docker

Ensure you have **Docker** installed. Then, start a PostgreSQL instance using Docker Compose:

```bash
docker-compose up -d
```

This will set up the PostgreSQL database. Once the database is running, make sure to update the `.env` file in the **API** repository with the correct database connection URL.

### 3. Seed the Database

Before running the application, you'll need to seed the database with initial data:

```bash
npm run seed
```

### 4. Start the Applications

Now that everything is set up, start both the frontend and backend services:

- **API (Backend)**:

  ```bash
  npm run dev
  ```

- **Web (Frontend)**:
  ```bash
  cd ../InOrbit-web
  npm run dev
  ```

Your application should now be running locally.

## Requirements

- Node.js
- Docker (for PostgreSQL)
- Docker Compose
- PostgreSQL
- Drizzle ORM

## Contato

For more information or questions, please contact me via email: [nilloferreiira@gmail.com](mailto:nilloferreiira@gmail.com)

![screenshot](src/assets/readme/readmeimg.png)
