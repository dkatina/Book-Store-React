import NavBar from './components/NavBar'
import RegistrationForm from './components/RegisterForm';

function App() {
  return (
    <div className="App">
      <NavBar>
        <RegistrationForm/>
      </NavBar>
    </div>
  );
}

export default App;
