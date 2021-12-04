import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navigation/Navbar';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import CategoryDetail from './components/Category/CategoryDetail';
import RecipeDetail from './components/Recipe/RecipeDetail';


function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route  exact path='/category/:id' element={<CategoryDetail />} />
          <Route  exact path='/recipe/:id' element={<RecipeDetail />} />
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
