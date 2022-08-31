import GalleryItem from '../GalleryItem/GalleryItem.jsx';

function GalleryList({pictureList, likePicture}) {
    return     pictureList.map(picture => {
                return <div key={picture.id}>
                            <GalleryItem 
                                picture={picture}
                            />
                            <button id="like-submit" onClick={(event) => likePicture(picture.id)}>👍</button> 
                            {picture.likes} people like this picture!
                        </div>
            })
}

export default GalleryList;