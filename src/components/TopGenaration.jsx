import React from 'react';

const TopGenaration = async() => {
    const res = await fetch('https://pixgen-sable.vercel.app/data.json');
    const photos = await res.json();
    console.log(photos,'photos');
    return (
        <div>
            
        </div>
    );
};

export default TopGenaration;