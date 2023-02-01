import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Error404 from './components/404';

function App() {
  return (
    <>
    
      <Routes>  
      <Route path="/signin" element={<SignIn/>}/>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/404" element={<Error404/>}/>
    </Routes>

    </>
  );
}

export default App;
