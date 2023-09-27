import * as React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import { Button, ThemeProvider, createTheme } from '@mui/material'
import { CommentRounded, ThumbUpAltRounded } from '@mui/icons-material'

interface MainFeaturedPostProps {
  post: {
    description: string
    image: string
    imageText: string
    linkText: string
    title: string
  }
}

export default function MainFeaturedPost(props: MainFeaturedPostProps) {
  const { post } = props
  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#fff',
      },
    },
  });
  const [thumbUp, setThumbUp] = React.useState(Math.floor(Math.random() * 100));
  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${post.image})`,
      }}>
      {/* Increase the priority of the hero background image */}
      {
        <img
          style={{ display: 'none' }}
          src={post.image}
          alt={post.imageText}
        />
      }
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}>
            <Typography
              component="h1"
              variant="h3"
              color="inherit"
              gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.description}
            </Typography>
            <Button variant="contained" color="success" href="#">
              {post.linkText}
            </Button>
          </Box>
        </Grid>
      </Grid>
      <div style={{
              position: 'absolute',
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              right: 8,
              bottom: 8,
              height: 80,
              width: 140,
              gap: 8
            }}>
                <ThemeProvider theme={theme}>
                    <Button variant='text' color="primary" style={{
                    height: 40,
                    width: 40,
                }}>
                    <CommentRounded />
                </Button>
                <Button variant='text' color="primary" onClick={() => {
                  setThumbUp(thumbUp+1)
                }} style={{
                    height: 40,
                    width: 40,
                    fontWeight: 'bold',
                    fontSize: 18
                }}>
                    <ThumbUpAltRounded style={{
                      marginRight: 12
                    }} />
                    {thumbUp}
                </Button>
                </ThemeProvider>
            </div>
    </Paper>
  )
}
