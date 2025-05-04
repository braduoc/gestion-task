import React, { useReducer, useEffect, useState } from 'react';
import { FormAddTask } from './FormAddTask';
import { SearchTask } from './SearchTask';
import '../style/TableTaskStyle.css';

// Reducer
const reduceTask = (state, action) => {
  switch (action.type) {
    case '[ACTION] add Task':
      return [...state, action.payload];
    case '[ACTION] set Complet Task':
      return state.map(task =>
        task.id === action.payload ? { ...task, completed: true } : task
      );
    case '[ACTION] set In Complet Task':
      return state.map(task =>
        task.id === action.payload ? { ...task, completed: false } : task
      );
    case '[ACTION] deleteTask Task':
      return state.filter(task => task.id !== action.payload);
    default:
      return state;
  }
};

export const TableTask = () => {
  const [state, dispatch] = useReducer(reduceTask, []);
  const [searchTask, setSearchTask] = useState('');
  const [filteredTasks, setFilteredTasks] = useState([]);

  useEffect(() => {
    const results = state.filter(item =>
      item.id.toString().toLowerCase().includes(searchTask.toLowerCase()) ||
      item.name.toLowerCase().includes(searchTask.toLowerCase())
    );
    setFilteredTasks(results);
  }, [searchTask, state]);

  const getInfoFromFormAddTask = (taskName) => {
    const newTask = {
      id: Date.now(),
      name: taskName,
      completed: false
    };
    dispatch({ type: '[ACTION] add Task', payload: newTask });
  };

  const getInfoFromSearchTask = (text) => {
    setSearchTask(text);
  };

  return (
    <>
      <FormAddTask sendInfo={getInfoFromFormAddTask} />
      <SearchTask sendInfo={getInfoFromSearchTask} />

      <h1>Tabla Tareas</h1>
      <table className='table'>
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
          {filteredTasks.length === 0 ? (
            <tr>
              <td colSpan="5">No hay tareas añadidas o ninguna coincide</td>
            </tr>
          ) : (
            filteredTasks.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td className={item.completed ? 'completada' : 'incompleta'}>
                  {item.completed ? 'Completada' : 'Por realizar'}
                </td>
                <td>
                  <button className='buttonCompletTask' onClick={() => dispatch({ type: '[ACTION] set Complet Task', payload: item.id })}>Sí</button>
                  <button className='buttonInCompletTask' onClick={() => dispatch({ type: '[ACTION] set In Complet Task', payload: item.id })}>No</button>
                </td>
                <td>
                  <button className='buttonDeleteTask' onClick={() => dispatch({ type: '[ACTION] deleteTask Task', payload: item.id })}>Eliminar</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
};
