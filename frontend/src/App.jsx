import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Navigate to="/create-post" />} />

        <Route path="/feed" element={<Feed />} />
        <Route path="/create-post" element={<CreatePost />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App