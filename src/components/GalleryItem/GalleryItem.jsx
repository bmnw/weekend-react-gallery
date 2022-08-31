import {useState} from 'react'; // needed for conditional rendering

function GalleryItem({picture}) {
    return <img id="image" 
                src={picture.path} 
                alt={picture.description}
                />
}

export default GalleryItem;