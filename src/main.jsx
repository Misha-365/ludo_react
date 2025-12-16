import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './ludoGame.css'
// import App from './App.jsx'
// import LudoGame from './ludoGame.jsx'
import './todo.css'
import TodoList from './ToDo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <LudoGame /> */}
    <TodoList/>
  </StrictMode>,
)
