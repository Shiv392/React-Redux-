import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { lazy } from 'react';

const Counter=lazy(()=> import('./components/Counter/Counter'));
const Todoapp=lazy(()=> import('./components/Todoapp/index'));
const Home = lazy(()=> import('./components/index'));

function App() {
  return (
   <Provider store={store}>
   <BrowserRouter>
   <Routes>
   <Route path='/' element={<Home />}>
   <Route path='/' element={<Counter />}></Route>
   <Route path ='/todoapp' element={<Todoapp />}></Route>
   </Route>
   </Routes>
   </BrowserRouter>
   </Provider>
  )
}

export default App
