import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sale from './components/Sale';
import Catalog from './components/Catalog';
import Coupon from './components/Coupon';
import ListSale from './components/List-Sale';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';


function App() {

  const [title, setTitle] = useState("Garden");
  useEffect(() => {
    document.title = "Garden";
  }, [title]);

  return (
    <div className="App font-montserrat">
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
