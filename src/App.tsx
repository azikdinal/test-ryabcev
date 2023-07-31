import React from 'react';
import Header from "./components/Header";
import ChoosePanel from "./ChoosePanel";
import HeroPanel from "./HeroPanel";

function App() {
    return (
        <div className="w-full h-full">
            <Header/>
            <div className='w-[100%] h-[100%] flex flex-row'>
                <ChoosePanel/>
                <HeroPanel/>
            </div>
        </div>
    );
}

export default App;
