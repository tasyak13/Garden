import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sale from './components/Sale';
import Catalog from './components/Catalog';
import Coupon from './components/Coupon';
import ListSale from './components/List-Sale';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <Sale />
        <Catalog />
        <Coupon />
        <ListSale />
        <Footer />
    </div>
  );
}

export default App;
