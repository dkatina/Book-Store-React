import NavBar from './components/NavBar'
import Register from './forms/Register'
import Login from './forms/Login';
import FindBook from './forms/FindBook';
import Book from './components/Book';

function App() {
  return (
    <div className="App">
      <NavBar>
        <Register/>
        <Login/>
        <FindBook/>
        <Book/>
      </NavBar>
    </div>
  );
}

export default App;
