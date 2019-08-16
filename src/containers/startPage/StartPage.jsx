import React from 'react';

import './startPage.css';

const reasons = [
    {src:'./images/1.png', alt:'fire',description: 'Illegal waste incineration'},
    {src:'./images/2.png', alt:'car',description: 'Exhaust gases'},
    {src:'./images/3.png', alt:'factory',description: 'Industry'}
];

const effects = [
    {src:'./images/4.png', alt:'human',description: 'Diseases'},
    {src:'./images/5.png', alt:'thunder',description: 'Climate change'},
    {src:'./images/6.png', alt:'polar bear',description: 'Melting of glaciers'}
];

const preventions = [
    {src:'./images/7.png', alt:'windmill',description: 'Renewable energy sources'},
    {src:'./images/8.png', alt:'plant',description: 'Planting trees'},
    {src:'./images/9.png', alt:'electric car',description: 'Electric cars'},
    {src:'./images/10.png', alt:'recycle',description: 'Recycle'}
];

const StartPage = () => {

    const divBoxMethod= (name) =>{
    const divBox=name.map((item,i) => (
        <div key={i}>
            <img src={item.src} alt={item.alt}></img>
            <h3>{item.description}</h3>
        </div>
    ));
    return divBox;
};
return ( <div className="mainDiv">
        <div className='startPage'><p>Reasons of pollution</p>
        {divBoxMethod(reasons)}</div>
        <div className='startPage'><p>Effects of pollution</p>
        {divBoxMethod(effects)}</div>
        <div className='startPage'><p>Prevention</p>
        {divBoxMethod(preventions)}</div>
    </div> );
};
export default StartPage;