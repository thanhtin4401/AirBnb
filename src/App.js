import 'antd/dist/antd.css';
import './App.css';
import Routers from './routers/Routers';
import SpinnerLoading from './components/spinnerLoading/SpinnerLoading';

function App() {
  return (
    <div>
      <SpinnerLoading />
      <Routers />
    </div>
  );
}

export default App;
