import PhotoCard from '@/components/PhotoCard';
import React from 'react';

const AllPhotosPage = async() => {
    const res = await fetch('https://pixgen-4wpv.vercel.app/data.json');
    const photos = await res.json();
    return (
        <div className='space-y-5 mt-16'>
            <h2 className='text-4xl font-bold text-center'>All Photos</h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    photos.map(photo=><PhotoCard key={photo.id} photo={photo}></PhotoCard>)
                }
            </div>
        </div>
    );
};

export default AllPhotosPage;