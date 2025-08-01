import Nav from './components/Nav';
import './App.css';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<h1>Products Page</h1>} />
        <Route path="/add" element={<h1>Add Products Page</h1>} />
        <Route path="/update" element={<h1>Update Products Page</h1>} />
        <Route path="/logout" element={<h1>Logout Page</h1>} />
        <Route path="/profile" element={<h1>Profile Page</h1>} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>

      
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
