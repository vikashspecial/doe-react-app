import Todo from './components/Todo';
import './style.css';

function App() {

  return (
    <div className='app-container'>
      <header>
        <h3>DoE Task Tracker</h3>
      </header>
      <div className='content-container'>
        <Todo />
      </div>
      <footer>
        Copyright &copy; NYC DoE 
      </footer>
    </div>
  );

}

export default App;
