# SkillHive - Campus Skill Exchange

SkillHive is a MERN web application for campus peer learning. Students can offer skills, find instructors, request and schedule sessions, track learning progress, and review completed sessions.

---

## Features

* Register and log in with JWT-based authentication.
* Create, edit, and delete your own skill listings.
* Search and filter listings by title, category, and learning mode; sort and paginate results.
* Request sessions, accept or reject requests, schedule sessions, and track progress and notes.
* Review completed sessions and view mentor- and skill-specific reviews.
* Manage profiles and notifications, view trending and recommended skills, and access usage statistics.

---

## Tech Stack

### Frontend

* React.js
* Vite
* JavaScript
* HTML
* CSS
* React Router DOM
* Axios
* Context API

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* bcryptjs
* dotenv
* cors
* nodemon

---

## Project Workflow

```txt
Request: Pending -> Accepted or Rejected -> Scheduled -> Completed
Learning progress: Not Started -> In Progress -> Completed
After completion: Review
```

---

## Folder Structure

```txt
Skill-Hive/
│
├── backend/
│   ├── api/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── .gitignore
│   ├── .env.example
│   ├── package.json
│   ├── package-lock.json
│   ├── server.js
│   └── vercel.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── data/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

## Installation and Setup

You need Node.js, npm, and access to a MongoDB database.

### 1. Clone the Repository

```bash
git clone https://github.com/anant121x/Skill-Hive.git
cd Skill-Hive
```

---

## Backend Setup

Go to the backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create `backend/.env` from the example file:

```powershell
Copy-Item .env.example .env
```

Set `MONGO_URI` to your MongoDB connection string and `JWT_SECRET` to a secure secret. `PORT` is optional and defaults to `5000`.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string_here
JWT_SECRET=your_jwt_secret_here
```

Start backend server:

```bash
npm run dev
```

Backend runs on:

```txt
http://localhost:5000
```

---

## Frontend Setup

Open another terminal and go to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start frontend:

```bash
npm run dev
```

Frontend runs on:

```txt
http://localhost:5173
```

---

## Environment Variables

The backend reads these variables from `backend/.env`:

* `MONGO_URI` — MongoDB connection string (required).
* `JWT_SECRET` — secret used to sign and verify JWTs (required).
* `PORT` — local server port (optional; defaults to `5000`).

For a deployed frontend, set `VITE_API_URL` to the backend API base URL, including `/api`. If it is unset, the frontend uses `http://localhost:5000/api`.
The real `.env` file is ignored by Git; commit `backend/.env.example`, never `backend/.env`.
The backend also includes a Vercel entry point and rewrite configuration; set `MONGO_URI` and `JWT_SECRET` in the deployment environment.

---

## API Routes

All routes are prefixed with `/api`. Routes marked **auth** require a JWT bearer token.

### Auth Routes

```txt
POST /api/auth/register
POST /api/auth/login
```

### Skill Routes

```txt
GET    /api/skills
GET    /api/skills/my-skills           auth
POST   /api/skills                     auth
GET    /api/skills/:id
PUT    /api/skills/:id                 auth
DELETE /api/skills/:id                 auth
```

### Request and Session Routes

```txt
POST /api/requests                     auth
GET  /api/requests/sent                auth
GET  /api/requests/received             auth
PUT  /api/requests/:id/status           auth
PUT  /api/requests/:id/schedule         auth
PUT  /api/requests/:id/progress         auth
```

### Review Routes

```txt
POST /api/reviews                      auth
GET  /api/reviews/mentor/:mentorId
GET  /api/reviews/skill/:skillId
```

### Notification Routes

```txt
GET /api/notifications                 auth
PUT /api/notifications/:id/read        auth
```

### Analytics Routes

```txt
GET /api/analytics/trending
GET /api/analytics/recommended         auth
GET /api/analytics/admin/stats         auth
```

### User Routes

```txt
GET /api/users/profile                 auth
PUT /api/users/profile                 auth
GET /api/users/:id
```

## Maintainer and Attribution

Maintained by Abhinav Anand ([aabhinav1909-hash](https://github.com/aabhinav1909-hash)).

Original project author: Md Yahiya Ariz.

---