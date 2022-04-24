import "./styles.css";
import  Home from './Home'
import { Routes, Route,BrowserRouter } from "react-router-dom"
import Filter from './components/Filter'
export default function App() {
  return (
    <div className="App">
      <Home/>
      <BrowserRouter>
      <Routes>
      <Route  path='/Filter/:Country' element={< Filter />}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}
