import  {Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Details from '../Shared/Details/Details'

export default function App(){
  return(
    <div className="App">

      <Routes>
  <Route path="/" element = {<Home />}/>
  <Route path="/home" element = {<Home />}/>
  <Route path="/details" element = {<Details/>}
    />

      </Routes>
    </div>
  )
}



