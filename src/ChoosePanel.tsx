import React from 'react';
import Select from "./components/Select";

const ChoosePanel = () => {
    return (
        <div className='w-[50%] h-[750px] bg-orange-400 flex flex-col justify-center items-center'>
            <div className='h-[30%] w-[30%] flex items-center flex-col'>
                <h1 className='text-3xl text-blue-700 mb-4'>Выбери героя</h1>
                <Select/>
            </div>
        </div>
    );
};

export default ChoosePanel;