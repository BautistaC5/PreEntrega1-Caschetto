
import "./App.css";
import NavBar from "./components/NavBar.jsx";
import CartWidget from "./components/CartWidget";
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from "./components/ItemListContainer";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Bienvenido a la tienda"/>
    </div>

  );
};

export default App;