import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useLatestProductsQuery } from "../generated/graphql";
import Image from 'next/image';

const LatestProducts = /* GraphQL */ `
query LatestProducts{
    products(first: 50, channel: "default-channel") {
        edges {
            node {
                id
                name
                seoDescription
                thumbnail {
                    url
                }
            }
        }
    }
}`

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


export function ProductList() {
    const { data, loading, error } = useLatestProductsQuery();

    if (loading) return (<div>Loading...</div>)

    if (error) return (<div>ERROR! {error.message}</div>)

    if (data) {
        const latestProducts = data.products?.edges || [];

        return (
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {latestProducts.map(({ node: { name, thumbnail, seoDescription } }) =>
                        <Grid item xs={2} sm={4} md={4} key={name}>
                            <Item>
                                <Typography variant="h5" gutterBottom component="div">{name}</Typography>
                                <Image
                                    src={thumbnail?.url}
                                    alt={name}
                                    width={164}
                                    height={164}
                                    layout="responsive"
                                    loading="lazy"
                                />
                                <Typography variant="body2" gutterBottom>{seoDescription}</Typography>
                            </Item>
                        </Grid>
                    )}
                </Grid>
            </Box>
        )
    }
}
