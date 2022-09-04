import {useState} from 'react'; // needed for conditional rendering
import axios from 'axios';
import './GalleryItem.css';
import ImageDeleteAlert from '../ImageDeleteAlert/ImageDeleteAlert.jsx';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import {CardActionArea} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';


function GalleryItem({picture, likePicture, fetchPictures}) {

    const [showImage, setShowImage] = useState(true);
    // include delete alert dialog constants below

    const deleteImage = (inputId) => {
        console.log('in deleteImage');
        console.log('inputId', inputId);
        axios({
            method: 'DELETE',
            url: `/gallery/${inputId}`
        }).then(response => {
            fetchPictures();
        }).catch(error => {
            console.log(error);
            alert('Something went wrong in deleteImages');
        });
    } // end deleteImage

    return  <Card elevation={10} className="image-div">
                <CardActionArea>
                {
                    showImage ? (
                        <CardMedia
                        component="img" 
                        height="250"
                        image={picture.path} 
                        alt={picture.description}
                        onClick={() => setShowImage(!showImage)}
                        />
                    ) : (
                       
                        <Typography 
                            className="text-div"
                            fontSize={25} 
                            onClick={() => setShowImage(!showImage)}
                        >
                                {picture.description}
                        </Typography>
                        
                    )
                }
                </CardActionArea>
                <CardActions>
                    <IconButton  onClick={(event) => likePicture(picture.id)}>
                        <FavoriteIcon sx={{color: "red"}} />
                    </IconButton>
                    {/* non breaking space below to prevent line break between picture.likes and "likes" */}
                    <span>{picture.likes}{'\u00A0'}likes</span>
                    <Box sx={{ width: '100%' }}></Box>
                    <IconButton onClick={(event) => deleteImage(picture.id)}>
                        <DeleteIcon/>
                    </IconButton>
                </CardActions>
            </Card>
            
}

export default GalleryItem;