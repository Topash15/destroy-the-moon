import React from 'react';
import './style.css'

const photos = () => {

    const photos = [
        { title: '', source: ''}
    ]

    return (
        <section className = "photos-container">
            <div className="photo-div">
                {photos.map((photo)=>(
                    <img className="photo-img" src={photo.source} alt={photo.title}/>
                ))}
            </div>
        </section>
    )
}

export default photos;