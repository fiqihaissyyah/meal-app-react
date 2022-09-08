import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Default from './layout/Default';
import Category from './pages/category/Category';
import Result from './pages/result/Result';

function App() {
  return (
    <BrowserRouter>
      <Routes>
		<Route element={<Default/>}>
			<Route path='/' element={<Category/>}/>
      <Route path='/result/:category' element={<Result/>}/>
		</Route>
	  </Routes>
    </BrowserRouter>
  );
}

export default App;
