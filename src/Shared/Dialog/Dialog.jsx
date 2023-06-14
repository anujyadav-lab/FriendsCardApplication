import { CardHeader, IconButton } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';


function SimpleDialog(props) {
  const { onClose , open,children } = props;

  // const handleClose = () => {
  //   onClose();
  // };

  const onDismissed = () =>{
    onClose();
  }



  return (
    <Dialog  open={open}>
          <CardHeader
          
          action={
            <IconButton aria-label="settings" onClick={()=>{onDismissed()} }>
              <HighlightOffIcon />
            </IconButton>
          }
         
        />
      <DialogTitle style={{alignSelf:'center',color:'#54a5debd',fontFamily:'Pacifico'}}>User Details</DialogTitle>
      {children}
    </Dialog>
  );
}

export default SimpleDialog;


 
