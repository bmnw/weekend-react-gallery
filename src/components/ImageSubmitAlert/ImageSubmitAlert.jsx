import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const ImageSubmitAlert = ({open, setOpen}) => {

      const handleClose = () => {
        setOpen(false);
      };

    return (    
                <div>
                    <Dialog 
                        open={open}
                        onClose={handleClose}
                    >
                        <DialogTitle>
                            {"Oops! The image description is too long!"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Please shorten the description to 100 characters or less.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Okay</Button>
                        </DialogActions>
                    </Dialog>
                </div>
            )
}

export default ImageSubmitAlert;