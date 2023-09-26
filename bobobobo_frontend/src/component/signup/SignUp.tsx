import * as React from 'react';
import { StatusCodes } from 'http-status-codes';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {signup} from '../../utils/userApi';
import {useState} from "react";

export default function SignUp() {
    const [warning, setWarning] = useState({
        shown: false,
        message: '',
    });
    const [success, setSucces] = useState({
        shown: false,
        message: '',
    });
    const [loading, setLoading] = useState({
        shown: false,
        message: '',
    });
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault();
            const data = new FormData(event.currentTarget);
            const username = data.get('username');
            const Password = data.get('Password');
            const signupResponse = await signup(
                username !== null ? username.toString() : '',
                Password !== null ? Password.toString() : '',
            );
            if (signupResponse.status === StatusCodes.OK) {
                setSucces({
                    shown: true,
                    message: 'Your account is created.',
                });
            }
        } catch (error: any) {
            if (error.response) {
                setLoading({
                    shown: false,
                    message: '',
                });
                if (error.response.status === StatusCodes.METHOD_NOT_ALLOWED) {
                    setWarning({
                        shown: true,
                        message: '',
                    });
                }
            } else {
                setWarning({
                    shown: true,
                    message: 'Oops! Something went wrong.',
                });
            }
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary" />}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="/" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}