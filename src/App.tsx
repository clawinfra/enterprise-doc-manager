import { Routes } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Enterprise Document Manager
        </h1>
        <p className="text-gray-500">Phase 0 — scaffold complete ✅</p>
        <p className="text-sm text-gray-400 mt-4">
          Auth, dashboard, users &amp; documents coming in Phases 1–7
        </p>
      </div>
      <Routes>
        {/* Routes added in Phase 2 */}
      </Routes>
    </div>
  )
}

export default App
