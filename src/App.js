import NavBar from './components/NavBar'
import RegisterView from './views/RegisterView';
import LoginView from './views/LoginView';
import HomePageView from './views/HomePageView';
import MyCart from './views/MyCart';
import ReadingListView from './views/ReadingListView';
import { Route, Routes} from 'react-router-dom'
import ViewSingleBook from './views/ViewSingleBook';

function App() {
  return (
    <div className="App">
      <NavBar>
        <Routes>
          
          <Route path='/' element={<HomePageView/>}/>
          <Route path='/edit' element={<RegisterView/>}/>
          <Route path='/register' element={<RegisterView/>}/>
          <Route path='/login' element={<LoginView/>}/>
          <Route path='/cart' element={<MyCart/>}/>
          <Route path='/reading_list' element={<ReadingListView/>}/>
          <Route path='/books/:bookId' element={<ViewSingleBook/>}/>
          
        </Routes>
      </NavBar>
    </div>
  );
}

export default App;
