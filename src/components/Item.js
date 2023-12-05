import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import Link from "next/link";
import ImageMedia from "@/components/ImageMedia";

export const Item = ({author, id, name, image}) => {
    return (
        <Grid item xs={12} sm={6} md={6} lg={6} xl={4}
              justifyContent="center"
              alignItems="center">
            <Card
                variant="soft"
                elevation={4}
                size="lg"
                sx={{
                    borderRadius: '15px',
                    transition: 'transform 0.2s',
                    '&:hover': {
                        transform: 'scale(1.1)',
                    }
                }}>
                <CardContent color='primary'>
                    <ImageMedia image={image} name={name}/>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {author}
                        </Typography>
                    </CardContent>
                </CardContent>
                <CardActions>
                    <Link href={`/items/${id}`} passHref shallow>
                        <Button variant='contained' size="small" color="primary">
                            Details
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    )
}