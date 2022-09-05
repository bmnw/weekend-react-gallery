import GalleryItem from '../GalleryItem/GalleryItem.jsx';
import Grid from '@mui/material/Grid';

function GalleryList({pictureList, likePicture, fetchPictures}) {
    return     pictureList.map(picture => {
                return <Grid item xs={12} sm={6} md={4} key={picture.id}>
                            <GalleryItem 
                                picture={picture}
                                likePicture={likePicture}
                                fetchPictures={fetchPictures}
                            />
                            
                        </Grid>
            })
}

export default GalleryList;