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
        // const formData = new FormData();
        // formData.append("path", imagePath);
        // formData.append("description", imageDescription);
        // console.log(formData);
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
           {/* update image path TextField to allow for choosing file to upload */}
                <form action="/gallery" encType="multipart/form-data" method="post" >
                    <TextField 
                        style={{margin: 10}}
                        size="small"
                        // label="Image Link"
                        type="file"
                        name="uploaded_file"
                        required
                        id="image-path"
                        helperText="Select image from files."
                        value={imagePath}
                        onChange={(event) => setImagePath(event.target.value)}
                    />
                    <TextField 
                        size="small"
                        label="Image Description"
                        style={{width: 400, margin: 10}}
                        required
                        type="text"
                        name="description"
                        id="image-description"
                        helperText="Enter image description here."
                        value={imageDescription}
                        onChange={(event) => setImageDescription(event.target.value)}
                    
                    />
                    <Button style={{margin: 10}} variant="contained" color="secondary" type="submit" >Add Image</Button>
                </form>
                <ImageSubmitAlert 
                    open={open}
                    setOpen={setOpen}
                />
            </div>
    )
}

export default GalleryForm;