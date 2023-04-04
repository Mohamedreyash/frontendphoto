import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import PostView from './Postview';
import Postpage from "./Postpage";
import Header from './Header';
function App() {
  return (
   <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header/>}/>
          <Route path='/Postview' element={<PostView/>}/>
          <Route path='/Postpage' element={<Postpage/>}/>
        </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
