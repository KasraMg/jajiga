import React from 'react'

const Gallery = () => {
  return (
    <div className='flex gap-x-3 mb-4 items-center'>
    <div className='w-1/2'>
        <img
            src='https://storage.jajiga.com/public/pictures/large/3148120230111161402.jpg'
            alt=''
            className='w-full rounded-lg !object-contain'
        />
    </div>
    <div className='grid gap-3 grid-cols-2 w-1/2'>
        <div>
            <img
                src='https://storage.jajiga.com/public/pictures/large/3148120230111161402.jpg'
                alt=''
                className='w-full rounded-lg'
            />
        </div>
        <div>
            <img
                src='https://storage.jajiga.com/public/pictures/large/3148120230111161402.jpg'
                alt=''
                className='w-full rounded-lg'
            />
        </div>
        <div>
            <img
                src='https://storage.jajiga.com/public/pictures/large/3148120230111161402.jpg'
                alt=''
                className='w-full rounded-lg'
            />
        </div>
        <div>
            <img
                src='https://storage.jajiga.com/public/pictures/large/3148120230111161402.jpg'
                alt=''
                className='w-full rounded-lg'
            />
        </div>
    </div>
    </div>
  )
}

export default Gallery
