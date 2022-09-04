import { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import MUI dialogue requirements
import ImageSubmitAlert from '../ImageSubmitAlert/ImageSubmitAlert.jsx';




const GalleryForm = ({fetchPictures}) => {

    const [imagePath, setImagePath] = useState('');
    const [imageDescription, setImageDescription] = useState('');
    // insert MUI dialogue variables below
   
    const [open, setOpen] = useState(false);

    const addImage = (event) => {
        event.preventDefault();
        console.log('in addImage');
        console.log('addImage', imagePath, imageDescription);
        if(imageDescription.length > 100){
            // insert MUI dialogue code block below
            console.log('in conditional');
            setOpen(true);
            return
        }
        axios({
            method: 'POST',
            url: '/gallery',
            data: {
                path: imagePath,
                description: imageDescription
            }
        }).then(response => {
            setImagePath('');
            setImageDescription('');
            fetchPictures();
        }).catch(error => {
            console.log(error);
            alert('Something went wrong in addImage');
        });
    } // end addImage

    return ( <div>
           
                <form onSubmit={addImage}>
                    <TextField 
                        style={{margin: 10}}
                        size="small"
                        label="Image Link"
                        required
                        id="image-path"
                        helperText="Enter image link here."
                        value={imagePath}
                        onChange={(event) => setImagePath(event.target.value)}
                    />
                    <TextField 
                        size="small"
                        label="Image Description"
                        style={{width: 400, margin: 10}}
                        required
                        id="image-description"
                        helperText="Enter image description here."
                        value={imageDescription}
                        onChange={(event) => setImageDescription(event.target.value)}
                    
                    />
                    <Button style={{margin: 10}} variant="contained" color="secondary" type="submit" onClick={addImage}>Add Image</Button>
                </form>
                <ImageSubmitAlert 
                    open={open}
                    setOpen={setOpen}
                />
            </div>
    )
}

export default GalleryForm;