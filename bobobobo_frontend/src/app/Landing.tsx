import * as React from 'react'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles'
import Blog from '../component/blog/Blog'
import { useNavigate } from 'react-router-dom'
import Header from '../component/Header'
import Avatar from '@mui/material/Avatar'


export default function LandingPage() {
  const navigate = useNavigate()
  const onClickQuiz = () => {
    navigate('/quiz')
  }
  const onClickBlog = () => {
    navigate('/blog')
  }
  const onClickCarbon = () => {
    navigate('/carbon')
  }
  const onClickAvatar = () => {
    navigate('/profile')
  }
  const onClickStore = () => {
    navigate('/store')
  }
  const theme = useTheme();
  return (
    <>
      <Header
        title={'Welcome to GreenLife: Your Sustainable Journey Starts Here'}
        right={
          <Avatar
            alt="Profile"
            onClick={onClickAvatar}
          />
        }
      />
      <CssBaseline />
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom>
            Protect Our Planet, Secure Our Future.
          </Typography>
          <Container maxWidth="md">
            <Typography variant="h6" color="text.secondary" paragraph>
              Calculate your carbon footprint to see your impact on the planet,
              share your insights through eco-blogs, and challenge your
              eco-knowledge with engaging quizzes. Join our community of
              eco-warriors and take meaningful steps toward a brighter, more
              sustainable future.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center">
              <Button
                variant="contained"
                style={{
                  borderRadius: 15,
                  backgroundColor: theme.palette.success.main,
                  padding: '18px 30px',
                  fontSize: '20px',
                  textTransform: 'none',
                }}
                fullWidth
                onClick={onClickCarbon}>
                Calculate Carbon Footprint
              </Button>
              <Button
                variant="contained"
                fullWidth
                style={{
                  borderRadius:  15,
                  backgroundColor: theme.palette.success.main,
                  padding: '18px 30px',
                  fontSize: '20px',
                  textTransform: 'none',
                }}
                onClick={onClickBlog}>
                Share Eco-Blog
              </Button>
              <Button
                variant="contained"
                fullWidth
                style={{
                  borderRadius: 15,
                  backgroundColor: theme.palette.success.main,
                  padding: '18px 30px',
                  fontSize: '20px',
                  textTransform: 'none',
                }}
                onClick={onClickQuiz}>
                Challenge your eco-knowledge
              </Button>
              <Button
                variant="contained"
                fullWidth
                style={{
                  borderRadius: 15,
                  backgroundColor: theme.palette.success.main,
                  padding: '18px 30px',
                  fontSize: '20px',
                  textTransform: 'none',
                }}
                onClick={onClickStore}>
                Eco-friendly Store
              </Button>
            </Stack>
          </Container>
          <Container maxWidth="lg">
            <Blog />
          </Container>
        </Box>
      </main>
    </>
  )
}
