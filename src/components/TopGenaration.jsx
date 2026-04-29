import React from 'react';
import PhotoCard from './PhotoCard';

const TopGenaration = async() => {
    const res = await fetch('https://pixgen-4wpv.vercel.app/data.json');
    const photos = await res.json();
    const topPhotos = photos.slice(0,9)
    // console.log(topPhotos,'photos');
    return (
        <div className='space-y-5 mt-16'>
            <h2 className='text-4xl font-bold text-center'>Top Genarations</h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    topPhotos.map(photo=><PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                }
            </div>
        </div>
    );
};

export default TopGenaration;