
import Template from './pages/Template.jsx';
import Tv from './pages/Tv.jsx';
import Popular from './pages/Popular.jsx'
import {HashRouter, Routes, Route} from 'react-router-dom';

function App() {
  

  return (
    <>
      <HashRouter>
        <Routes>
              <Route path='/' element={<Template/>}/>
              <Route path='/tv' element={<Tv/>}/>
              <Route path='/popular' element={<Popular/>}/>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
