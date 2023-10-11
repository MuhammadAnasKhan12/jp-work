import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { chipClasses } from '@mui/material';

type switchProp = {
    checked : boolean;
    onChange: (newValue: boolean) => void;
    labels: string;
}



function DSwitch(props: switchProp) {
    const { checked, onChange } = props;
    const handleSwitchChange = () => {
        onChange(!checked);
    };

  return (
      <>
      <FormControlLabel onChange={handleSwitchChange} control={<Switch />}  label={props.labels} />
     </>
  );
};
export default DSwitch;
