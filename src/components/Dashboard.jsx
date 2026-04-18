import React, { useState } from 'react'
import Sidebar from './pages/sidebar'
import Editor from './pages/editor'
import './Dashboard.css'

function Dashboard() {
  const [pages, setPages] = useState([
    { id: 1, title: 'Untitled', content: '' }
  ])

  const [currentPage, setCurrentPage] = useState(pages[0])

  return (
    <div className="dashboard">
      <Sidebar 
        pages={pages} 
        setPages={setPages} 
        setCurrentPage={setCurrentPage} 
      />

      <Editor 
        page={currentPage} 
        setPages={setPages} 
        pages={pages} 
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
}

export default Dashboard