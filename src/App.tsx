import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import LayoutContainer from './components/pages/LayoutContainer';
import Quiz from './components/pages/Quiz';
import Create from './components/pages/Create';
import Config from './components/pages/Config';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/*ログイン後*/}
        <Route element={<LayoutContainer />} >
          <Route path='/' element={<Home/>} />
          <Route path='/quiz' element={<Quiz/>} />
          <Route path='/create' element={<Create/>} />
          <Route path='/config' element={<Config/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
