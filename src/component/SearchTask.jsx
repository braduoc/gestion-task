import React, { useState } from 'react'

export const SearchTask = ({ sendInfo }) => {
    const [searchTask, setSearchTask] = useState('')

    const onChangeSearch = (event) => {
        setSearchTask(event.target.value)
        sendInfo(event.target.value)
    }

    return (
        <>
            <h1>Buscar tarea</h1>
            <div className='container'>
                <label htmlFor="searchTask">Tarea</label>
                <div className="input-row">
                    <div className="input-wrapper">
                        <input
                            type="text"
                            id="searchTask"
                            placeholder="Busca una tarea"
                            value={searchTask}
                            onChange={onChangeSearch}
                        />
                    </div>
                </div>
            </div>

        </>
    )

}