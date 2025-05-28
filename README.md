# Space Open Data

## Description

This project is a web application that provides access to space-related open data. It consists of a backend API that fetches data from the Space Devs API and a frontend application that displays the data in a user-friendly way. The project uses Docker for containerization and PostgreSQL as the database.

The aim of this project is to make space data more accessible for research, education, and public interest, as well as an opportunity to learn about open data, data ethics, and web development.

Here are some screenshots of the application running:

![Screenshot 1](screenshots/screenshot1.png)
![Screenshot 2](screenshots/screenshot2.png)
![Screenshot 3](screenshots/screenshot3.png)

## Running the project

This project is conviniently set up to run in a Docker container. To run the project, follow these steps:

1. Make sure you have Docker installed on your machine.
2. Make sure you have the environment variables correctly set up in the `.env` file:

    * `.env` in the root directory of the project should contain the following variables. Change the values as needed:
      ```
        POSTGRES_HOST=db
        POSTGRES_PORT=5432
        POSTGRES_USER=opendata
        POSTGRES_PASSWORD=e05df7bc9b2edcb18222de6f47048d6b
        POSTGRES_DB=space

        BACKEND_PORT=3001
        BACKEND_API_URL=https://lldev.thespacedevs.com/2.3.0

        POSTGRES_PORT_BINDING=5433
        BACKEND_PORT_BINDING=3001
        FRONTEND_PORT_BINDING=3000
      ```
    * `frontend/.env` in the frontend directory should contain the following variables:
      ```
        VITE_BACKEND_API_URL=http://localhost:3001/api
      ```

3. Run `docker compose up` and wait for the containers to start. This will set up the PostgreSQL database, the backend API, and the frontend application. Then, open your web browser and navigate to `http://localhost:${FRONTEND_PORT_BINDING}` to access the frontend application. Also, the backend API will be available at `http://localhost:${BACKEND_PORT_BINDING}/api`.

### Local Development

If you want to run the project locally without Docker, you can follow these steps:

1. Replace the `.env` file with the following variables:
    ```
    POSTGRES_HOST=localhost
    POSTGRES_PORT=5433
    POSTGRES_USER=opendata
    POSTGRES_PASSWORD=e05df7bc9b2edcb18222de6f47048d6b
    POSTGRES_DB=space

    BACKEND_PORT=3001
    BACKEND_API_URL=https://lldev.thespacedevs.com/2.3.0

    POSTGRES_PORT_BINDING=5433
    BACKEND_PORT_BINDING=3001
    FRONTEND_PORT_BINDING=3000
    ```
2. Replace the `frontend/.env` file with the following variables:
    ```
    VITE_BACKEND_API_URL=http://localhost:3001/api
    ```
3. Run `docker compose -f compose.dev.yaml up` to start the PostgreSQL database.
4. Run `cd backend && npm run db:migrate` to run the database migrations.
5. Run `cd backend && npm run dev` to start the backend API server.
6. Run `cd frontend && npm run dev` to start the frontend application.

## Final Remarks

This project was done in an academic environment, as part of the curriculum of Data Ethics & Open Data from University of Applied Sciences Technikum Wien (UASTW). The project was carried out by:

* Alejo Flores Lucey (ID: if24x390)
* Lucía Digon (ID: se24m504)
* Fabian Londen (ID: ee24x035)