import {useState} from 'react'; // needed for conditional rendering
import './GalleryItem.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';


function GalleryItem({picture, likePicture}) {

    const [showImage, setShowImage] = useState(true);

    return  <Card elevation={10} className="image-div">
                
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
                            fontSize={25} 
                            onClick={() => setShowImage(!showImage)}
                        >
                                {picture.description}
                        </Typography>
                        
                    )
                }
                <CardContent>
                    <IconButton onClick={(event) => likePicture(picture.id)}>
                        <FavoriteIcon sx={{color: "red"}} />
                    </IconButton>
                    {/* <Button variant="contained" id="like-submit" onClick={(event) => likePicture(picture.id)}>👍</Button>  */}
                            {picture.likes} people like this picture!
                </CardContent>
            </Card>
            
}

export default GalleryItem;