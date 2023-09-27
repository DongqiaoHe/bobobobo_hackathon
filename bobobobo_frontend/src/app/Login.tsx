import * as React from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import {login} from "../utils/userApi";
import {StatusCodes} from "http-status-codes";
import { useNavigate } from 'react-router-dom'
import {useState} from "react";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}>
      {'Copyright © '}
      <Link
        color="inherit"
        href="https://eng.unimelb.edu.au/students/coursework/progress-your-career/engineering-and-it-hackathon-festival">
        2023 Engineering and IT Hackathon Festival
      </Link>{' '}
      {'.'}
    </Typography>
  )
}

export default function Login() {
  const navigate = useNavigate();
    const [warning, setWarning] = useState({
        shown: false,
        message: '',
    });
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault()
      const data = new FormData(event.currentTarget);
      const username = data.get('username');
      const password = data.get('password');
      const loginResponse = await login(
username !== null ? username.toString() : '',
password !== null ? password.toString() : '',
      );
      if (loginResponse.status === StatusCodes.OK) {
        const token = loginResponse.data.token;
        localStorage.setItem('token', token);
        navigate('/profile');
      }
    } catch (error: any) {
      if (error.response) {
        if (error.response.status >= StatusCodes.INTERNAL_SERVER_ERROR) {
          setWarning({
            ...warning,
            shown: true,
            message: '',
          });
      }
      if (error.response.status === StatusCodes.UNAUTHORIZED) {
        setWarning({
          ...warning,
          shown: true,
          message: '',
        });
        }
      } else {
        setWarning({
          ...warning,
          shown: true,
          message: 'Oops! Something went wrong.',
        });
      }
    }
}

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random?forest)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  )
}
