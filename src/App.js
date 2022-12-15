import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DelayedFallback from './components/DelayedFallback'
import Header from './components/Header'

const CreateEmployee = lazy(() => import('./pages/CreateEmployee'))
const ListEmployee = lazy(() => import('./pages/ListEmployee'))
const Error = lazy(() => import('./pages/Error'))

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Suspense fallback={<DelayedFallback />}>
          <Routes>
            <Route path="/" element={<CreateEmployee />} />
            <Route path="/listemployee" element={<ListEmployee />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
