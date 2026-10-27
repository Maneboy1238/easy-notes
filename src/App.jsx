import { Routes, Route } from 'react-router'
import './App.css'
import Home from './pages/Home/Home'
import { useState, useEffect } from 'react'
import Compose from './pages/Compose/Compose'
import Note from './pages/Notes/Note'

const defaultNotes = [
  {
    id: '1',
    head: "Anatomy lower limb",
    body: "The lower limbs comprises of the pelvic girdle, femur, tibia and fibula and the foot",
  },
  {
    id: '2',
    head: 'Embedding',
    body: "The tokenizer, conveerts the tokens to id's or an index using that index we get the token embedding from the token embedding matrix, and using it's position in the token sequence we get the position embedding from the positon embedding matrix",
  },
  {
    id: '3',
    head: 'Easy notes',
    body: 'Two textareas, one for the header and one to save notes'
  }
]
function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || defaultNotes)
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
