import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import SignIn from './components/Signup';
import Login from '../src/components/Login';
import NextPage from './components/NextPage';

function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path='/' element={<Navbar />} />
          <Route path='/Signup' element={<SignIn></SignIn>} />
          <Route path='/Login' element={<Login></Login>} />
          <Route path='/next' element={<NextPage></NextPage>} />
        </Routes>
    </div>
  );
}

export default App;
