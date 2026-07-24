# Enterprise Document Manager

A React/TypeScript admin dashboard for enterprise document management, built with Firebase.

**Stack:** Vite + React 18 + TypeScript (strict) · Firebase (Auth, Firestore, Storage) · Tailwind CSS v4 · Zustand · react-router-dom v6 · react-hook-form + zod · lucide-react

---

## Local Development (Firebase Emulator Suite)

No real Firebase credentials needed for local dev. The app uses the **Firebase Local Emulator Suite** to run Auth, Firestore, and Storage locally.

### Prerequisites

```bash
npm install -g firebase-tools
```

### Start emulators + dev server

```bash
# Terminal 1: Start Firebase emulators
firebase emulators:start --import=./emulator-data --export-on-exit

# Terminal 2: Start Vite dev server
npm run dev
```

Or combined in a single command (runs the emulators in the background, then Vite — requires a Unix-like shell):
```bash
npm run dev:emulator
```

Emulator UI is available at: **http://localhost:4000**  
App runs at: **http://localhost:5173**

### First run

The emulators start empty. You can seed data via the Emulator UI at http://localhost:4000, or the app will create users/documents as you interact with it.

---

## Production Setup

1. Create a Firebase project at https://console.firebase.google.com
2. Enable Authentication (Email/Password + Google + GitHub)
3. Create a Firestore database
4. Create a Storage bucket
5. Copy `.env.production.example` → `.env.production` and fill in your Firebase config
6. Deploy: `npm run build` then serve the `dist/` folder

> ⚠️ Never commit `.env.production` — it's in `.gitignore`

---

## Project Structure

```
src/
├── components/          # Reusable UI components
├── features/
│   ├── auth/            # Login, Register, AuthGuard
│   ├── dashboard/       # Overview stats + activity feed
│   ├── documents/       # Document upload, list, manage
│   └── users/           # User CRUD (admin only)
├── hooks/               # Custom React hooks
├── lib/
│   └── firebase.ts      # Firebase init + emulator connection
├── pages/               # Route-level page components
├── stores/              # Zustand global state
│   └── authStore.ts     # Auth state
└── types/               # Shared TypeScript types
    └── index.ts
```

---

## Build Phases

| Phase | Description | Status |
|-------|-------------|--------|
| 0 | Scaffold + deps + Firebase emulator config | ✅ Done |
| 1 | TypeScript types + Zustand auth store | ⏳ |
| 2 | Router + layout shell (Sidebar/Navbar + AuthGuard) | ⏳ |
| 3 | Login + Register pages (email + Google + GitHub) | ⏳ |
| 4 | Dashboard overview (stats cards + activity feed) | ⏳ |
| 5 | Users CRUD (search, filter, edit/suspend/delete) | ⏳ |
| 6 | Documents upload (drag-drop, progress bar, grid/list) | ⏳ |
| 7 | Security rules, error boundaries, responsive audit | ⏳ |
