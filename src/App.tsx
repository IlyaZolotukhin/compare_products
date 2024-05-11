import React, {useState} from 'react';
import {ProductCard} from './components/ProductCard';
import {ComparisonTable} from './components/ComparisonTable';
import {Header} from './components/Header';

const App = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const handleClosePopup = () => {
        setIsPopupOpen(false)
    }
    return (
            <div className="app">
                <Header />
                <ProductCard handleClosePopup={handleClosePopup}/>
                <ComparisonTable isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen}/>
            </div>
    );
}

export default App;
