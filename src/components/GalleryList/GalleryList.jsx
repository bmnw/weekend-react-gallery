
function GalleryList({pictureList, likePicture}) {
    return     pictureList.map(picture => {
                return <div key={picture.id}>
                            <img id="image" 
                            src={picture.path} 
                            alt={picture.description}/>
                            <button id="like-submit" onClick={(event) => likePicture(picture.id)}>👍</button> 
                            {picture.likes} people like this picture!
                        </div>
            })
}

export default GalleryList;