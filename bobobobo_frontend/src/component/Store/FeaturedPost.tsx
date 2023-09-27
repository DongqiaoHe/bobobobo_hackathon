import * as React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { Button } from '@mui/material'

interface FeaturedPostProps {
  post: {
    price: string
    description: string
    image: string
    imageLabel: string
    title: string
  }
}

export default function FeaturedPost(props: FeaturedPostProps) {
  const { post } = props

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card>
        <CardActionArea component="a" href="#">
          <CardMedia
            component="img"
            image={post.image}
            alt={post.imageLabel}
            sx={{ height: 200, objectFit: 'cover' }}
          />
          <CardContent>
            <Typography
              component="h2"
              variant="h6"
              gutterBottom
              sx={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}>
              {post.title}
            </Typography>
            <Typography variant="h6" color="black">
              {post.price}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                height: "2.5rem",
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}>
              {post.description}
            </Typography>
            <Button variant="text" style={{
              marginTop: 18
            }} color="success">
              See more
            </Button>
            
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}
