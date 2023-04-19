import React from 'react'

const Grid = ({photos}) => {
  return (
    <>
        <h1>My Photo Gallery</h1>
        <div classname = "grid">
            {photos.map(({ photo, _id}) => (
                <div key={_id} className='grid__item'>
                    <img
                        src={`http://localhost:5000/uploads/${photo}`}
                        alt="grid_image"
                    />
                </div>
            ))}
        </div>
    </>
  );
            };
            
    

export default Grid