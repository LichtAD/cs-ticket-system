import { use, useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Status from './components/Status'
import Tickets from './components/Tickets'
import { ToastContainer } from 'react-toastify';
import Footer from './components/Footer'


const fetchIssues = async () => {
  const res = await fetch("/issues.json")
  const data = await res.json()
  return data
}

const issuesPromise = fetchIssues()

function App() {

  const initialIssues = use(issuesPromise)

  const [issues, setIssues] = useState(initialIssues)

  const [taskStatus, setTaskStatus] = useState([])
  const [resolvedTasks, setResolvedTasks] = useState([])

  return (
    <div className='bg-[#F5F5F5]'>
      <Navbar></Navbar>

      <Banner taskStatus={taskStatus} resolvedTasks={resolvedTasks}></Banner>

      <div className='lg:px-8 px-2 grid grid-cols-12 gap-8 mt-8'>
        <div className='col-span-8'>
          <Tickets issues={issues} taskStatus={taskStatus} setTaskStatus={setTaskStatus}></Tickets>
        </div>
        <div className='col-span-4'>
          <Status issues={issues} setIssues={setIssues} taskStatus={taskStatus} setTaskStatus={setTaskStatus} resolvedTasks={resolvedTasks} setResolvedTasks={setResolvedTasks}></Status>
        </div>
      </div>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>

  )
}

export default App
