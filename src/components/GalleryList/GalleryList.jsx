import GalleryItem from '../GalleryItem/GalleryItem.jsx';
import Grid from '@mui/material/Grid';

function GalleryList({pictureList, likePicture}) {
    return     pictureList.map(picture => {
                return <Grid item xs={12} sm={8} md={6} key={picture.id}>
                            <GalleryItem 
                                picture={picture}
                                likePicture={likePicture}
                            />
                            
                        </Grid>
            })
}

export default GalleryList;