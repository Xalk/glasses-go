import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import HorizontalLinearStepper from './components/Stepper';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import AppContext from './context';
import Products from './pages/Products';
import Home from './pages/Home';
import Order from './pages/Order';

function App() {
  const [selectedGlasses, setSelectedGlasses] = useState(null);
  const [designedGlasses, setDesignedGlasses] = useState(null);
  const [selectedPremadeGlassesId, setSelectedPremadeGlassesId] =
    useState(null);

  return (
    <AppContext.Provider
      value={{
        selectedGlasses,
        setSelectedGlasses,
        designedGlasses,
        setDesignedGlasses,
        selectedPremadeGlassesId,
        setSelectedPremadeGlassesId,
      }}
    >
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/design" element={<HorizontalLinearStepper />} />
            <Route path="/products" element={<Products />} />
            <Route path="/order" element={<Order />} />
          </Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
