import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Box } from '@mui/material/';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Alert } from '@mui/material';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { orderSchema } from '../../validations/order.validation';
import useAppContext from '../../hooks/useAppContext';
import { GlassesService } from '../../services/glasses.service';

const OrderForm = ({ handleNext, isPremade, setisOrderComplete }) => {
  const {
    selectedGlasses,
    setDesignedGlasses,
    designedGlasses,
    setSelectedGlasses,
    selectedPremadeGlassesId,
    setSelectedPremadeGlassesId,
  } = useAppContext();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(orderSchema),
  });

  const onSubmit = async (formData) => {
    const baseData = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      phone: formData.phone,
      city: formData.city,
      street: formData.street,
    };

    if (isPremade) {
      let obj = {
        ...baseData,
        glasses: selectedPremadeGlassesId,
      };

      setisOrderComplete(true);

      await GlassesService.createPremadeOrder(obj);
      setSelectedPremadeGlassesId(null);
    } else {
      const { frameMaterial, frameMaterialColor, lens, lensColor } =
        designedGlasses;

      let obj = {
        ...baseData,
        frame: selectedGlasses?.id,
        material: frameMaterial?.id,
        material_color: frameMaterialColor?.id,
        lens: lens?.id,
        lens_color: lensColor?.id,
      };
      console.log(selectedGlasses);
      console.log(obj);

      handleNext();

      await GlassesService.createCustomOrder(obj);

      setSelectedGlasses(null);
      setDesignedGlasses(null);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Fill all fields
        </Typography>
        <Box
          component="form"
          noValidate
          sx={{ mt: 1 }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="city"
            label="city"
            autoComplete="city"
            autoFocus
            {...register('city', { required: 'This field is required' })}
            error={Boolean(errors.city)}
            helperText={errors.city ? errors.city.message : ' '}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="street"
            label="street"
            autoComplete="street"
            autoFocus
            {...register('street', { required: 'This field is required' })}
            error={Boolean(errors.street)}
            helperText={errors.street ? errors.street.message : ' '}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="phone"
            label="phone"
            autoComplete="phone"
            autoFocus
            {...register('phone', { required: 'This field is required' })}
            error={Boolean(errors.phone)}
            helperText={errors.phone ? errors.phone.message : ' '}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="firstName"
            label="firstName"
            autoComplete="firstName"
            autoFocus
            {...register('firstName', { required: 'This field is required' })}
            error={Boolean(errors.firstName)}
            helperText={errors.firstName ? errors.firstName.message : ' '}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lastName"
            label="lastName"
            autoComplete="lastName"
            autoFocus
            {...register('lastName', { required: 'This field is required' })}
            error={Boolean(errors.lastName)}
            helperText={errors.lastName ? errors.lastName.message : ' '}
          />
          {/* {error && (
            <Alert severity="error">{error.response?.data.message}</Alert>
          )} */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2, color: 'white' }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default OrderForm;
