import React from 'react';
import Image from 'next/image';

const Author = ({ author }) => {
    return (
        <div className='text-center mt-20 mb-8 p-12 relative rounded-lg bg-yellow-300 bg-opacity-20'>
            <div className='absolute left-0 right-2 -top-10'>
                <Image
                    src={author.photo.url}
                    unoptimized
                    alt={author.name}
                    height="100px"
                    width="100px"
                    className='align-middle rounded-full'
                />
            </div>
            <h3 className='text-black my-4 text-xl font-bold'>{author.name}</h3>
            <p className='text-black text-lg'>{author.bio}</p>
        </div>
    )
}

export default Author