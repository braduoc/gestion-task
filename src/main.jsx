import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { TableTask } from './component/TableTask.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TableTask   />
  </StrictMode>,
)
