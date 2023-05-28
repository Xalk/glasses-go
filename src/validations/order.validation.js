import * as yup from 'yup';

export const orderSchema = yup.object().shape({
  city: yup.string().required('City is required'),
  street: yup.string().required('Street is required'),
  phone: yup.string().required('Phone is required'),
  firstName: yup
    .string()
    .required('First name is required')
    .min(2, 'First name must be at least 2 characters'),
  lastName: yup
    .string()
    .required('Last name is required')
    .min(2, 'Last name must be at least 2 characters'),
});
