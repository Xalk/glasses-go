import React, { useState, useEffect } from 'react';
import { GlassesService } from '../services/glasses.service';
import { Grid, Box, Button } from '@mui/material';
import ProductCard from '../components/ProductCard';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';

function Products() {
  const [premadeGlasses, setPremadeGlasses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchPremadeGlasses = async () => {
    try {
      const { data } = await GlassesService.searchPremadeGlasses(searchTerm);
      setPremadeGlasses(data);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchPremadeGlasses();
    }, 500);

    return () => {
      clearTimeout(delayDebounceFn);
    };
  }, [searchTerm]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Box sx={{ marginTop: '50px', padding: '0 20px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Toolbar
          sx={{
            borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
            backgroundColor: '#fafafa',
            borderRadius: '5px',
            width: '600px',
            textAlign: 'center',
          }}
        >
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item>
              <SearchIcon color="inherit" sx={{ display: 'block' }} />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Search by name"
                InputProps={{
                  disableUnderline: true,
                  sx: { fontSize: 'default' },
                }}
                variant="standard"
                value={searchTerm}
                onChange={handleInputChange}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </Box>
      <Grid
        container
        spacing={3}
        direction={'row'}
        mt={'30px'}
        justifyContent="center"
      >
        {premadeGlasses?.map((g) => {
          return (
            <Grid item key={g.id}>
              <ProductCard {...g} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Products;
