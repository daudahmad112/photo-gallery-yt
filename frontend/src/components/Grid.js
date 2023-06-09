import React from 'react'

const Grid = ({photos}) => {
  return (
    <>
        <h1>My Photo Gallery</h1>
        <div className = "grid">
            {photos.map(({ photo, _id}) => (
                <div key={_id} className='grid__item'>
                    <img
                        src={`https://photogallery-hgt4.onrender.com/uploads/${photo}`}
                        alt="grid_image"
                    />
                </div>
            ))}
        </div>
    </>
  );
            };
            
    

export default Grid
