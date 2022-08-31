import {useState} from 'react'; // needed for conditional rendering

function GalleryItem({picture}) {

    const [showImage, setShowImage] = useState(true);

    return  <div onClick={() => setShowImage(!showImage)}>
                {
                    showImage ? (
                        <img id="image" 
                        src={picture.path} 
                        alt={picture.description}
                        />
                    ) : (
                        <span>{picture.description}</span>
                    )
                }
            </div>
}

export default GalleryItem;