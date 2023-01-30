import React from 'react';

const photos = [
  { id: 1, src: 'photo1.jpg' },
  { id: 2, src: 'photo2.jpg' },
  // ... add more photos here
  { id: 20, src: 'photo20.jpg' }
];


export const Affichage: React.FC<{}> = () => {
return (
<>
<div className="flex flex-wrap">
      {photos.map(photo => (
        <div key={photo.id} className="w-1/5 p-2">
          <img src={photo.src} alt="" className="w-full h-64 object-cover"/>
        </div>
      ))}
    </div>testestest
</>
  )
}