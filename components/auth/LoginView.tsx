import SendIcon from '@mui/icons-material/Send';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import * as React from 'react';

export function LoginView(){
    return(
        <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
            <div>
                <TextField
                required
                id="outlined-required"
                label="Username"
                variant="outlined"
                defaultValue="customer@example.com"
                />
            </div>
            <div>
                <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                />
            </div>

            <Button color="secondary" variant="contained" endIcon={<SendIcon />}
            onClick={() => {
                alert('clicked');
            }}
            >
                Login
            </Button>
        </Box>
    )
}