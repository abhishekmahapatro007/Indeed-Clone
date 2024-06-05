import logo from './logo.svg';
import './App.css';
// import Header from './components/Header';
import Home from './pages/Home'; 
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CreatePost from './pages/CreatePost';
import { routhPath } from './routes/route';
import Allposts from './pages/Allposts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path= {routhPath.home} element = {<Home/>} />
        <Route path= {routhPath.create} element = {<CreatePost/>} />
        <Route path= {routhPath.posts} element = {<Allposts />} />
      </Routes>
    </Router>
  );
}

export default App;
