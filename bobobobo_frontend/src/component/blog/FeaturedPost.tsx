import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, ThemeProvider, createTheme } from '@mui/material';
import { CommentRounded, ThumbUpAltRounded } from '@mui/icons-material';

interface FeaturedPostProps {
    post: {
        date: string;
        description: string;
        image: string;
        imageLabel: string;
        title: string;
    };
}

export default function FeaturedPost(props: FeaturedPostProps) {
    const { post } = props;
    const theme = createTheme({
        palette: {
          mode: 'light',
          primary: {
            main: '#fff',
          },
        },
      })
      const [thumbUp, setThumbUp] = React.useState<number>(Math.floor((Math.random() * 100)));

    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component="a">
                <Card sx={{ display: 'flex', height: '230px' }}>
                    <CardContent sx={{ flex: 1 }}>
                        <Typography component="h2" variant="h5">
                            {post.title}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            {post.date}
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                            {post.description}
                        </Typography>
                        <Button variant="contained" color="success">
                            Continue reading...
                        </Button>
                    </CardContent>
                    <CardMedia
                        component="img"
                        sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                        image={post.image}
                        alt={post.imageLabel}
                    />
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
                </Card>
            </CardActionArea>
        </Grid>
    );
}