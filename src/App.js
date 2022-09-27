import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
import Login from './pages/Login/Login';
import Routers from './routers/Routers';
import { Route, Routes } from 'react-router-dom';
import NoteFoundPage from './pages/NotFoundPage/NoteFoundPage';
function App() {
  return (
    <div>
      <Routers />
    </div>
  );
}

export default App;
