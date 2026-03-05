import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Status from './components/Status'
import Tickets from './components/Tickets'
import { ToastContainer } from 'react-toastify';


const fetchIssues = async () => {
  const res = await fetch("/issues.json")
  const data = await res.json()
  return data
}

const issuesPromise = fetchIssues()

function App() {

  const [taskStatus, setTaskStatus] = useState([])

  return (
    <div className='bg-[#F5F5F5]'>
      <Navbar></Navbar>

      <Banner></Banner>

      <div className='lg:px-8 px-2 grid grid-cols-12 gap-8 mt-8'>
        <div className='col-span-8'>
          <Tickets issuesPromise={issuesPromise} taskStatus={taskStatus} setTaskStatus={setTaskStatus}></Tickets>
        </div>
        <div className='col-span-4'>
          <Status taskStatus={taskStatus}></Status>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
