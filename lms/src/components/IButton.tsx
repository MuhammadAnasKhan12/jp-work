import * as React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';



type Ibutton = {
    startIcon: any;
    label1: string;
    Click: () => void;
    variants: "text" | "outlined" | "contained";
}
function IButton(props: Ibutton) {
  
    return (
    <>
            <Button onClick={props.Click} variant={props.variants} startIcon={props.startIcon}>{props.label1}</Button>
      
    </>
  );
}
export default IButton;
