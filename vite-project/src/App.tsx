import './App.css'
import type { JSX } from 'react'
import TodoList from './components/TodoList'
import FileDirectory from './components/FileDirectory'
import explorer from './data/fileExplorer';

function App(): JSX.Element {

  return (
    <>
      <h1>Todos</h1>
      <FileDirectory directory={explorer} />
      <TodoList />
    </>
  )
}

export default App
