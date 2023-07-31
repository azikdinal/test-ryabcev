import React from 'react';
import Property from "./components/Property";
import image from "../src/assets/luke_skywalker.png";
import {useSelector} from "react-redux";

const HeroPanel = () => {
    const hero = useSelector((state: any) => state);

    return (
        <div className='w-[50%] h-[750px] bg-sky-500'>
            <div className='flex justify-center mt-4'>
                <img src={image} alt="" className='h-[400px] w-[200px] object-cover rounded-xl'/>
            </div>
            <div className='h-[300px] w-full p-8 flex flex-col flex-wrap'>
                {hero.map((hero: any, index: number) => (
                    <Property key={index} value={hero[1]}>{hero[0]}</Property>
                ))}
            </div>
        </div>
    );
};

export default HeroPanel;
