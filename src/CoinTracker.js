import React from 'react';
import reactDom from 'react-dom';

const coinTrackerStyle = {
    width: '50%',
    height: '50%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    border: '2px solid black'
};

export default function CoinTracker({coins}) {
    return (
        <div style={coinTrackerStyle} id='coinTrackerDiv'>
            <h1>Coins: {coins}</h1>
        </div>
    );
}