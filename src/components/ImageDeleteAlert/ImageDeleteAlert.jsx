import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const ImageDeleteAlert = ({deleteAlert, setDeleteAlert, deleteImage, deleteId}) => {
    
    // include delete alert dialog functions and variables below
    const closeDeleteAlert = () => {
        setDeleteAlert(false);
      };


    return (
        // include delete alert dialog code block below
                <div>
                    <Dialog 
                        open={deleteAlert}
                        onClose={closeDeleteAlert}
                    >
                        <DialogTitle>
                            {"Just a sec!"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Are you sure you want to delete this post?
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button variant="outlined" onClick={(event) => deleteImage(deleteId)}>Delete Post</Button>
                            <Button variant="contained" onClick={closeDeleteAlert} autoFocus>Keep Post</Button>
                        </DialogActions>
                    </Dialog>
                </div>
            )
}

export default ImageDeleteAlert;