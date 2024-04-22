import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter,Routes,Route } from 'react-router-dom';
import Nav from './components/Nav';
import CreatePrice from './components/CreatePrice';
import PriceList from './components/PriceList';
import EditPrice from './components/EditPrice';

function App() {
  return (
    <div class="container">
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<CreatePrice />} />
          <Route path="/create-Price" element={<CreatePrice />} />
          <Route path="/Price-list" element={<PriceList />} />
          <Route path="/edit-Price/:id" element={<EditPrice />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;

