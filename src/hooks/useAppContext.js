import { useContext } from 'react';
import AppContext from '../context';

const useAppContext = () => {
  return useContext(AppContext);
};

export default useAppContext;
