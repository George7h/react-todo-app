import './App.css';
import TodoApp from './components/TodoApp';
import Navbar from './components/Navbar';
import Modal from './components/Modal';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Modal />
      <TodoApp />
    </div>
  );
}

export default App;