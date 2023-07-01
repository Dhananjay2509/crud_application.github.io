import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './screens/Home';
import CreateEmployee from './forms/CreateEmployee';
import UpdateEmployee from './forms/UpdateEmployee';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route index Component={Home} />
        <Route path='/create' Component={CreateEmployee}/>
        <Route path='/:id' Component={UpdateEmployee}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
