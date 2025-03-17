import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Dashboard from './screen/Dashboard/Dashboard';
import GuideAdd from './screen/GuideAdd/GuideAdd';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path='/guideadd' element={<GuideAdd/>}/>
        </Routes>
    </Router>
  )
}

export default App
