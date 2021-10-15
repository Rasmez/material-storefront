import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import type { NextPage } from 'next';
import * as React from 'react';
import { ProductList } from '../components/ProductList';

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <ProductList />
      </Container>
    </React.Fragment>
  )
}

export default Home
