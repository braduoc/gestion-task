import React, { useState } from 'react';
import '../style/FormAddTaskStyle.css';

export const FormAddTask = ({ sendInfo }) => {
    const [nameTask, setNameTask] = useState('');
    const [error, setError] = useState('');

    const changeValueTaskName = (event) => {
        setNameTask(event.target.value);
        if (event.target.value.trim().length > 0) {
            setError('');
        }
    };

    const onSendMesagge = (event) => {
        event.preventDefault();
        if (nameTask.trim().length === 0) {
            setError('No puedes enviar tareas vacías');
            return;
        }

        sendInfo(nameTask);
        setNameTask('');
        setError('');
    };

    return (
        <>
            <h1>Agregar tareas</h1>
            <form onSubmit={onSendMesagge}>
                <label htmlFor="nameTask">Tarea</label>

                <div className="input-row">
                    <div className="input-wrapper">
                        <input
                            type="text"
                            id="nameTask"
                            placeholder="Añade una tarea"
                            value={nameTask}
                            onChange={changeValueTaskName}
                            className={error ? 'input-error' : ''}
                        />
                        {error && <div className="error-message">{error}</div>}
                    </div>
                    <button type="submit">Agregar</button>
                </div>

            </form>

        </>
    );
};
