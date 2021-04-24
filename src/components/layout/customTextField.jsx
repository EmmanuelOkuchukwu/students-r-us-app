import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function CustomTextField() {
    return (
        <div>
            <TextField 
                type={type} 
                id={id} 
                variant={variant} 
                label={label} 
            />
        </div>
    )
}
