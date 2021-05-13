import React from 'react';

const slotDivStyle = {
    width: '100%',
    height: '100%',
    border: '2px solid black'
};
const slotH1Style = {
    textAlign: 'center'
};

export default function Slot({value}) {
    return (
        <div style={slotDivStyle}>
            <h3 style={slotH1Style}>{value}</h3>
        </div>
    );
}