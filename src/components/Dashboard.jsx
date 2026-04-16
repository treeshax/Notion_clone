import React, { useState } from 'react'
import Sidebar from '../components/pages/sidebar'
import Editor from '../components/pages/editor'
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
        currentPage={currentPage} 
        setPages={setPages} 
        pages={pages} 
      />
    </div>
  )
}

export default Dashboard