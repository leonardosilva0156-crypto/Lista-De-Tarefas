import { useState, memo } from 'react'


function Tarefas(props) {
  
    return (
        <div>
            <h1>Lista de tarefas</h1>

        <ul>
            {props.tarefas.map((tarefa) => (
                    <li> <input type="checkbox" key={tarefa.id} />
                        <span>{tarefa.texto}</span>
                        <button onClick={() => props.removeTarefa(tarefa.id)}>Remover Tarefa</button>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default memo(Tarefas)