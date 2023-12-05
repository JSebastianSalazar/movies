import { Card, CardContent, Typography } from '@mui/material';

const SearchResult = ({ item, onClick }) => {
    return (
        <Card className="max-w-sm mx-auto m-4 cursor-pointer" onClick={onClick}>
            <CardContent>
                <Typography variant="h6">{item.title}</Typography>
                <Typography color="textSecondary">{item.description}</Typography>
            </CardContent>
        </Card>
    );
};

export default SearchResult;
