import { Home, Qrcode } from './pages/index.jsx'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

function App() {
  return (
    <div className="hs_container">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/qrcode/:index" element={<Qrcode />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
