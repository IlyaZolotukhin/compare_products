import React from 'react';
import {ProductCard} from './components/ProductCard';
import {PopupWindow} from './components/PopupWindow';
import {ComparisonTable} from './components/ComparisonTable';
import {Header} from './components/Header';

const App = () => {
    return (
            <div className="app">
                <Header />
                <ProductCard />
                {/*<PopupWindow/>*/}
                <ComparisonTable/>
            </div>
    );
}

export default App;
