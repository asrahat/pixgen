import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaDownload, FaHeart } from 'react-icons/fa';

const PhotoCard = ({photo}) => {
    return (
        <Card className='border rounded-xl'>
            <div className='relative w-full aspect-square'>
                <Image
                src={photo.imageUrl}
                alt='image'
                fill
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className='object-cover rounded-md'
                ></Image>
                <Chip size='sm' className='absolute right-2 top-2'>{photo.category}</Chip>
            </div>
            <div>
                <h2 className='text-xl font-semibold'>{photo.title}</h2>
            </div>

            <div className='flex gap-3'>
                <div className='flex gap-2 items-center'>
                    <p><FaHeart className='text-red-500'/></p>
                    <p className='text-red-500'>{photo.likes}</p>
                </div>
                <Separator orientation='vertical'></Separator>
                  <div className='flex gap-2 items-center'>
                    <p><FaDownload className='text-green-500'/></p>
                    <p  className='text-green-500'>{photo.downloads}</p>
                </div>
            </div>
            <Link href={`/all-photos/${photo.id}`}>
            <Button variant='outline' className={'w-full'}>View</Button>
            </Link>
        </Card>
    );
};

export default PhotoCard;