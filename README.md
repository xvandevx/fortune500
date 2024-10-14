How to run:

1) Run Database:
- docker-compose up -d

2) Configure database setting by adding ./backend/.local.env file with data:

`
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_USER=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DB=postgres
`

3) Install frontend and backend packages

- cd frontend
- npm i
- cd ../backend
- npm i

4) Run backend

- cd backend
- npm run start:dev

5) Fill database by opening page in browser(only once) http://localhost:3010/api/companies/importData

6) Run frontend

- cd frontend
- npm run dev

7) Open http://localhost:3000/
