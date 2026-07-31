import { useState, useEffect, memo } from 'react'
import Tarefas from './assets/Tarefa.jsx'


function App() {
const [tarefas, setTarefas] = useState([
  {
    id: 1,
    texto: 'Estudar React',
    isCompleted: false,
  },

  {
    id: 2,
    texto: 'Estudar Node.js',
    isCompleted: false,
  },

  {
    id: 3,
    texto: 'Estudar JavaScript',
    isCompleted: false,
  }

])

useEffect(() => {
  const tarefasSalvas = localStorage.getItem('tarefas')
  if(tarefasSalvas) {
    setTarefas(JSON.parse(tarefasSalvas))
  }
}, [])

useEffect(() => {
  localStorage.setItem('tarefas', JSON.stringify(tarefas))
}, [tarefas]) 

  function addTarefa(tarefa) {
  const novaTarefa = {
    id: tarefas.length + 1,
    texto: tarefa,
    isCompleted: false,
  }

  setTarefas([...tarefas, novaTarefa])
}

function remove(id) {
  const excluirTarefas = tarefas.filter((tarefa) => tarefa.id !== id)
  setTarefas(excluirTarefas)
}

const [tarefa, setTarefa] = useState('')

  return (
    <div>
      <h1>Lista de tarefas</h1>

      <input 
        type="text" 
        placeholder="Escreva uma tarefa..." 
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
      />
      <button type='submit' onClick={(e) => {
        if(tarefa.trim() === '') {
          alert('Digite uma tarefa!')
          return
        }
      e.preventDefault()
      addTarefa(tarefa)
      setTarefa('')
      }}>Adicionar Tarefa</button>

      <Tarefas tarefas={tarefas} removeTarefa={remove}  />

    </div>

    
     
  )}

export default memo(App)
