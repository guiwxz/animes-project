import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Grid } from '../Grid';
import { IconButton, ModalContainer, ModalContent } from './index.style';

interface ModalDialogProps {
  open: boolean;
  title: string;
  onClose: React.Dispatch<any>;
}

const ModalDialog: React.FC<ModalDialogProps> = (props) => {

  return (
    <ModalContainer open={props.open}>
      <ModalContent>
        <Grid container style={{ display: 'flex', alignItems: 'center' }}>
          <Grid item xs={11}>
            <h3>{props.title || 'Modal'}</h3>
          </Grid>
          <Grid item xs={1} style={{ display: 'flex', justifyContent: 'center' }}>
            <IconButton onClick={props.onClose}>
              <FaTimes size="20px" />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12}>
            {props.children}
          </Grid>
        </Grid>
      </ModalContent>
    </ModalContainer>
  )
}

export default ModalDialog;