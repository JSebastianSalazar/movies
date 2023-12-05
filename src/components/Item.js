import {Button, Card, CardActions, CardContent, CardMedia, Grid, Paper, styled, Typography} from "@mui/material";
import Link from "next/link";

export const Item = ({author, id, name, image}) => {
    return (
        <Grid item xs={12} sm={6} md={6} lg={6} xl={4}
              justifyContent="center"
              alignItems="center">
            <Card
                  variant="soft"
                  elevation={10}
                  color="primary"
                  size="lg"
                  sx={{
                      backgroundColor: '#969696',
                    transition: 'transform 0.2s',
                    '&:hover': {
                        transform: 'scale(1.1)',
                    }}}>
                <CardContent color='primary'>
                    <CardMedia
                        component="img"
                        height="140"
                        image={image}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {author}
                        </Typography>
                    </CardContent>
                </CardContent>
                <CardActions>
                    <Link href={`/items/${id}`} passHref shallow>
                        <Button  variant='contained' size="small" color="primary">
                            Details
                        </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    )
}