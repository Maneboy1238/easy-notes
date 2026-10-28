import { Routes, Route } from 'react-router'
import './App.css'
import Home from './pages/Home/Home'
import { useState, useEffect } from 'react'
import Compose from './pages/Compose/Compose'
import Note from './pages/Notes/Note'

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])
  console.log(notes)
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])
  return (
    <Routes>
      <Route index element={<Home notes={notes} setNotes={setNotes} />} />
      <Route path="/note/compose" element={<Compose notes={notes} setNotes={setNotes} />} />
      <Route path="/note/:noteId" element={<Note setNotes={setNotes} notes={notes} />} />
    </Routes>
  )
}

export default App
