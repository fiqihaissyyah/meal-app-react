import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Default from './layout/Default';
import Category from './pages/category/Category';
import Detail from './pages/detail/Detail';
import Home from './pages/home/Home';
import Result from './pages/result/Result';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route element={<Default/>}>
          <Route path='/foods' element={<Category/>}/>
          <Route path='/result/:category' element={<Result/>}/>
          <Route path='/detail/:id' element={<Detail/>}/>
        </Route>
	  </Routes>
    </BrowserRouter>
  );
}

export default App;
