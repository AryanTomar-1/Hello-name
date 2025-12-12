# Hello Names

A minimal full-stack example app to add and list names. The backend stores names in memory and exposes a small REST API; the frontend is a Vite + React + Tailwind UI that consumes that API.

**Tech stack**

- Backend: Node.js, Express
- Frontend: Vite, React, TypeScript
- Styling: Tailwind CSS
- Dev tools: nodemon (backend), Vite (frontend)

**How to run (backend)**

1. Open a terminal and navigate to the backend folder:

2. Install dependencies:

```powershell
npm install
```

3. Start the server (development with auto-reload):

```powershell
npm run dev
```

Or start normally:

```powershell
npm start
```

The backend exposes a simple API under `/api/names` (see source in `backend/src`).

**How to run (frontend)**

1. Open a terminal and navigate to the frontend folder:

2. Install dependencies:

```powershell
npm install
```

3. Start the dev server:

```powershell
npm run dev
```

By default Vite serves the app locally (see ports below). The frontend expects the backend API at `http://localhost:5000` unless you change the API base URL in the frontend code.

**Default ports used**

- Backend: `5000` (see `backend/src/server.js`)
- Frontend: `5173` (Vite default)

**Assumptions / Notes**

- The backend currently keeps names in memory (an array). Data is not persisted between restarts.
- CORS is enabled on the backend so the frontend can call the API during development.
- Tailwind CSS must be correctly installed/configured for styles to work (see `frontend/postcss.config.js`, `frontend/tailwind.config.js`, and `frontend/src/index.css`).
- If Tailwind classes do not apply, try reinstalling frontend deps and restarting the dev server:

```powershell
cd frontend
rm -r node_modules package-lock.json
npm install
npm run dev
```

**API (basic)**

- GET `/api/names/get` — list names
- POST `/api/names/add` — add a name (JSON body `{ "name": "Alice" }`)
- DELETE `/api/names/clear` — clear all names

**Future improvements (optional)**

- Persist names to a database (SQLite, Postgres, or MongoDB).
- Add validation and better error handling on backend.
- Add pagination or infinite scroll for large name lists.
- Add authentication if the app needs per-user lists.
- Make the list update via WebSockets for true real-time updates.

**Video Link**

- [Loom Video](https://www.loom.com/share/0a7fe9929f0d40b28a4cf809a8798cda)

