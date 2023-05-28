import React, { useState } from 'react';
import { Box } from '@mui/material/';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FirstStep from './FirstStep';
import { useEffect } from 'react';
import { GlassesService } from '../../services/glasses.service';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';
import FourthStep from './FourthStep';
import { useNavigate } from 'react-router-dom';
import OrderComplete from '../OrderComplete';

const steps = [
  'Select a frame shape',
  'Select frame material and color',
  'Select lens and color',
  'Make an order',
];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const [frames, setFrames] = useState([]);

  const fetchGlasses = async () => {
    try {
      const { data } = await GlassesService.getAll();
      setFrames(data);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchGlasses();
  }, []);

  return (
    <Box sx={{ width: '75%', margin: '50px auto' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <OrderComplete />
      ) : (
        <>
          {activeStep === 0 && <FirstStep frames={frames} />}
          {activeStep === 1 && <SecondStep />}
          {activeStep === 2 && <ThirdStep />}
          {activeStep === 3 && <FourthStep handleNext={handleNext} />}
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />

            {activeStep === steps.length - 1 ? (
              ''
            ) : (
              <Button onClick={handleNext}>Next</Button>
            )}
          </Box>
        </>
      )}
    </Box>
  );
}
