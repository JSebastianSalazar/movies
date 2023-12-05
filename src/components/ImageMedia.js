import React from 'react';
import {CardMedia} from "@mui/material";


const  ImageMedia = ({image, name}) =>  {

    return (
        <CardMedia
            data-testid="card-media"
            component="img"
            image={image}
            alt={name}
            height="280px"
            style={{
                objectFit: 'fill',
                width: '100%',
                borderRadius: '15px',
            }}
        />
    )
}

export  default ImageMedia