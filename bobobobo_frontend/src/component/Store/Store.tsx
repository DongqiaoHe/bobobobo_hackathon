import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Header from '../Header'
import MainFeaturedPost from './MainFeaturedPost'
import FeaturedPost from './FeaturedPost'
import Footer from './Footer'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'
import { useEffect } from 'react'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

const mainFeaturedPost = {
  title: 'Biodegradable Cleaning Agent',
  description:
    'Only $5! Free from harmful chemicals and environmentally friendly, suitable for household cleaning.',
  image: 'https://source.unsplash.com/random?forest',
  imageText: 'main image description',
  linkText: 'Continue reading…',
}

const featuredPosts = [
  {
    title: 'Solar-Powered Flashlight',
    price: '$25 AUD',
    description:
      'A flashlight that charges using solar energy, providing up to 6 hours of continuous use when fully charged.',
    image: 'https://source.unsplash.com/random?recycle',
    imageLabel: 'Image Text',
  },
  {
    title: 'Bamboo Cutlery Set',
    price: '$15 AUD',
    description:
      'Renewable and biodegradable cutlery made from bamboo, including forks, spoons, and chopsticks.',
    image: 'https://source.unsplash.com/random?water',
    imageLabel: 'Image Text',
  },
  {
    title: 'Reusable Shopping Bag',
    price: '$10 AUD',
    description:
      'Made from recyclable materials, designed to reduce the use of single-use plastic bags.',
    image: 'https://source.unsplash.com/random?recycle',
    imageLabel: 'Image Text',
  },
  {
    title: 'Solar-Powered Portable Charger',
    price: '$60 AUD',
    description:
      'Charges mobile devices using solar energy, perfect for outdoor use.',
    image: 'https://source.unsplash.com/random?water',
    imageLabel: 'Image Text',
  },
  {
    title: 'Water-Saving Shower Head',
    price: '$40 AUD',
    description:
      'Designed to conserve water, it can save up to 50% of water compared to traditional showerheads.',
    image: 'https://source.unsplash.com/random?recycle',
    imageLabel: 'Image Text',
  },
  {
    title: 'LED Energy-Saving Bulb',
    price: '$8 AUD',
    description:
      'Consumes up to 80% less power than traditional incandescent bulbs and has a longer lifespan.',
    image: 'https://source.unsplash.com/random?water',
    imageLabel: 'Image Text',
  },
  {
    title: 'Organic Cotton T-Shirt',
    price: '$30 AUD',
    description:
      'Made from organic cotton grown without the use of chemical pesticides and synthetic fertilizers.',
    image: 'https://source.unsplash.com/random?recycle',
    imageLabel: 'Image Text',
  },
  {
    title: 'Manual Coffee Grinder',
    price: '$35 AUD',
    description:
      'Requires no electricity, grinding coffee beans through manual rotation.',
    image: 'https://source.unsplash.com/random?water',
    imageLabel: 'Image Text',
  },
]

// const posts = [post1. post2];

const defaultTheme = createTheme()

export default function Store() {
  const navigate = useNavigate()
  const onClickAvatar = () => {
    navigate('/profile')
  }
  const url = window.location.href

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />

      <Header
        title={'Our Store'}
        left={
          <Button href="/landing" variant="text">
            Dashboard
          </Button>
        }
        right={
          <Avatar
            alt="Profile"
            src="/static/images/avatar/1.jpg"
            onClick={onClickAvatar}
          />
        }
      />

      <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}>
        <Container maxWidth="lg">
          <main>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={4}>
              {featuredPosts.map((post) => (
                <FeaturedPost key={post.title} post={post} />
              ))}
            </Grid>
          </main>
        </Container>
        <Footer
          title="Sorry, this feature is still under development :)"
          description="Please waiting!"
        />
      </Box>
    </ThemeProvider>
  )
}
