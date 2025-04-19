import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Counter from './components/Counter/Counter';
import TodoContainer from './components/Todoapp';

function App() {


  return (
    <Provider store={store}>
      <>
     <Counter />
     <TodoContainer />
      </>
    </Provider>
  )
}

export default App
