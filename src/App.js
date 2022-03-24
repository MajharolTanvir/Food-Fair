import './App.css';
import Meals from './component/Meals/Meals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';

function App() {

  return (
    <div className="App">
      <Header />
      <Meals />
    </div>
  );
}

export default App;
