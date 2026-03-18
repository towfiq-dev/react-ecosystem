import { Suspense } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import ResultChart from './components/ResultChart/ResultChart'
import axios from 'axios'
import MarksChart from './components/MarksChart/MarksChart'
const marksPromise = axios.get('marksData.json')
function App() {

  return (
    <div className='grid gap-80'>
    <Navbar></Navbar>
    <ResultChart></ResultChart>
    <Suspense>
      <MarksChart marksPromise={marksPromise}></MarksChart>
    </Suspense>
    </div>
  )
}

export default App
