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

### Web

1. Clone the web version repository:

   ```bash
   git clone https://github.com/nilloferreiira/InOrbit-web.git
   ```

2. Navigate to the web project directory and install the dependencies:
   ```bash
   cd InOrbit-web
   npm install
   ```

### API

1. Clone the API repository:
   ```bash
   git clone https://github.com/nilloferreiira/InOrbit-API.git
   ```
2. Navigate to the API project directory and install the dependencies:
   ```bash
   cd InOrbit-API
   npm install
   ```

### Database

1. Ensure you have Docker installed on your machine.
2. In the API directory, run the following command to start PostgreSQL with Docker:
   ```bash
   docker-compose up -d
   ```
3. Add the database connection URL in the `.env` file.
   Example:
   ```
   DATABASE_URL=postgres://user:password@localhost:5432/inorbit
   ```

### Migrations

1. Ensure you have **Drizzle Kit** installed:

   ```bash
   npm install drizzle-kit --save-dev
   ```

2. Generate the migrations with Drizzle:

   ```bash
   npx drizzle-kit generate
   ```

3. Run the migrations to create the tables in the database:
   ```bash
   npx drizzle-kit migrate
   ```

### Seed

1. After the migrations, run the following command to seed the database with initial data:
   ```bash
   npm run seed
   ```

### Start the application

```bash
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
