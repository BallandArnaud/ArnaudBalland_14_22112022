import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateEmployee from './pages/CreateEmployee'
import ListEmployee from './pages/ListEmployee'
import Error from './pages/Error'
import Header from './components/Header'

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<CreateEmployee />} />
          <Route path="/listemployee" element={<ListEmployee />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
