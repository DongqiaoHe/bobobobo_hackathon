import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Footer from './Footer';
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import {useNavigate} from "react-router-dom";
import {Button} from "@mui/material";
import {useEffect} from "react";
import {getMoment} from "../../utils/blogApi";

const mainFeaturedPost = {
    title: 'Renewable Energy',
    description:
        "Shifting from fossil fuels to renewable energy sources like solar, wind, and hydropower is a fundamental part of environmental sustainability. This reduces greenhouse gas emissions and lessens reliance on finite resources.",
    image: 'https://source.unsplash.com/random?forest',
    imageText: 'main image description',
    linkText: 'Continue reading…',
};

const featuredPosts = [
    {
        title: 'Waste Reduction and Recycling',
        date: 'Sep 12',
        description:
            'Sustainability encourages waste reduction and efficient recycling programs to divert materials from landfills and reduce pollution.',
        image: 'https://source.unsplash.com/random?recycle',
        imageLabel: 'Image Text',
    },
    {
        title: 'Efficient Water Management',
        date: 'Sep 20',
        description:
            'Sustainable water management involves conserving water resources and ensuring access to clean and safe drinking water for all.',
        image: 'https://source.unsplash.com/random?water',
        imageLabel: 'Image Text',
    },
];

const defaultTheme = createTheme();

export default function Blog() {
    const navigate = useNavigate();
    const onClickAvatar = () => {
        navigate('/profile');
    }
    const url = window.location.href;

    const token = localStorage.getItem('token');
    let posts: any[] = []
    const response = getMoment(token !== null ? token : "")
    console.log(response)

    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline />
            {url.includes('blog') ? <Header
                title={"Eco-Blog"}
                left={
                    <Button href="/landing" variant="contained" color="success">
                        Dashboard
                    </Button>
                }
                right={
                    <Avatar alt="Profile" src="/static/images/avatar/1.jpg" onClick={onClickAvatar} />}
            /> : null}
            <Box
                sx={{
                    pt: 8,
                    pb: 6,
                }}
            >
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
                title="Share your post :)"
                description="Share to your friends and family!"
            />
            </Box>
        </ThemeProvider>
    );
}