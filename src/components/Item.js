import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import Link from "next/link";

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
                    <CardMedia
                        component="img"
                        image={image}
                        alt={name}
                        height="250px"
                        style={{
                            objectFit: 'fill',
                            width: '100%',
                            borderTopLeftRadius: '20px',
                            borderTopRightRadius: '20px'
                        }}
                    />
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