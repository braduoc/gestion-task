import React, { useState } from 'react'
import { FormAddTask } from './FormAddTask'
import Task from '../Models/task'
import '../style/TableTaskStyle.css'

export const TableTask = () => {
    const [arryTask, setArryTask] = useState([]);

    const getInfo = (nameTask) => {
        const newTask = new Task(
            arryTask.length + 1,
            nameTask,
            false
        );

        setArryTask([...arryTask, newTask]);
    };
    const setCompletTask = (id) => {
        setArryTask(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? { ...task, completed: true } : task
            )
        );
        
    };

    const setInCompletTask = (id) => {
        setArryTask(prevTasks =>
            prevTasks.map(task =>
                task.id === id ? { ...task, completed: false } : task
            )
        );
    };
    const deleteTask = (id) => {
        setArryTask(prevTasks => prevTasks.filter(task => task.id !== id));
    };
    

    return (
        <>
            <FormAddTask sendInfo={(nameTask) => getInfo(nameTask)}></FormAddTask>
            <h1>Tabla Tareas</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Estado</th>
                        <th>Completada</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {arryTask.length < 1 ? (
                        <tr >
                            <td ></td>
                            <td >No hay tareas añadidas aun</td>
                        </tr>
                    ) :                    
                    arryTask.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td className={item.completed ? 'completada' : 'incompleta'}> {item.completed ? 'Completada' : 'Por realizar'}</td>
                            <td>
                                <button className='buttonCompletTask' onClick={() => setCompletTask(item.id)}>Sí</button>
                                <button className='buttonInCompletTask' onClick={() => setInCompletTask(item.id)}>No</button>
                            </td>
                            <td>
                            <button className='buttonDeleteTask' onClick={() => deleteTask(item.id)}>Eliminar</button>
                            </td>
                        </tr>

                    ))}
                </tbody>
            </table>
            
        </>
    )
}
