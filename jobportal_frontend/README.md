# Jobify — Frontend

React + Vite client for the Jobify job portal. Provides role-based UI for job seekers (applicants) and recruiters (employers), backed by the Spring Boot API in [`jobportal_backend`](../jobportal_backend).

## Tech stack

- React 19, React Router v7
- Redux Toolkit for state (`src/Slices`)
- Axios with a request/response interceptor for auth (`src/Interceptor/AxiosInterceptor.jsx`)
- Mantine UI (core, forms, dates, notifications, Tiptap rich-text editor)
- Tailwind CSS v4

## Prerequisites

- Node.js 18+
- The backend running locally at `http://localhost:8080` (see `jobportal_backend/README` / root `readme.md` for setup) — the API base URL is hardcoded in `src/Interceptor/AxiosInterceptor.jsx` and `src/Services/AuthService.jsx`.
- MongoDB running locally (required by the backend, not this app directly).

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173` by default — this matches the CORS origin the backend allows (`SecurityConfig.java`). If you change the dev port, update the backend's CORS config to match.

## Scripts

- `npm run dev` — start the Vite dev server with HMR
- `npm run build` — production build
- `npm run preview` — preview the production build locally
- `npm run lint` — run ESLint

## Project structure

```
src/
  Components/   UI components, grouped by feature (Profile, PostJob, FindTalent, ApplyJob, ...)
  Pages/        Route-level page components
  Routes/       AppRoutes.jsx — role-gated routing (APPLICANT vs EMPLOYER)
  Services/     API calls (Auth, User, Job, Profile, NotificationApi) and route guards
  Slices/       Redux Toolkit slices (Jwt, User, Profile, Filter, Sort)
  Interceptor/  Axios instance with auth header injection
  Store.jsx     Redux store setup
```

## Roles

Routes are gated by account type via `ProtectedRoute` / `PublicRoute` in `src/Services/`:

- **Applicant** — browse/search jobs, view job details, apply, track application history, manage profile
- **Employer** — post jobs, manage posted jobs and applicants, search talent, view talent profiles
