import React, {MouseEventHandler, useState} from 'react';
import {ProductCard} from './components/ProductCard';
import {ComparisonTable} from './components/ComparisonTable';
import {Header} from './components/Header';

const App = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const handleClosePopup = () => {
        setIsPopupOpen(false)
    }

    const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setIsPopupOpen(false);
        }
    };

    return (
        <div onClick={closeModal} className="app">
            <Header handleClosePopup={handleClosePopup} />
            <ProductCard handleClosePopup={handleClosePopup}/>
            <ComparisonTable isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen}/>
        </div>
    );
}

export default App;
