import { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Axios from 'axios';

const GalleryForm = ({fetchPictures}) => {

    const [imagePath, setImagePath] = useState('');
    const [imageDescription, setImageDescription] = useState('');

    const addImage = (event) => {
        event.preventDefault();
        console.log('in addImage');
        console.log('addImage', imagePath, imageDescription);
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

    return (
            <form onSubmit={addImage}>
                <TextField 
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
                    required
                    id="image-description"
                    helperText="Enter image description here."
                    value={imageDescription}
                    onChange={(event) => setImageDescription(event.target.value)}
                />
                <Button variant="contained" color="secondary" type="submit" onClick={addImage}>Add Image</Button>
            </form>
    )
}

export default GalleryForm;