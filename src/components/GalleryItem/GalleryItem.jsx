import {useState} from 'react'; // needed for conditional rendering
import './GalleryItem.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import {CardActionArea} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';


function GalleryItem({picture, likePicture}) {

    const [showImage, setShowImage] = useState(true);

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
                <CardActions disableSpacing>
                    <IconButton  onClick={(event) => likePicture(picture.id)}>
                        <FavoriteIcon sx={{color: "red"}} />
                    </IconButton>
                    {picture.likes} likes!
                    <IconButton>
                        <DeleteIcon/>
                    </IconButton>
                </CardActions>
            </Card>
            
}

export default GalleryItem;