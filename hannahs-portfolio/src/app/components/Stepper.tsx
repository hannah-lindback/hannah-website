import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';

interface StepData {
  time: string;
  title: string;
  description: string;
}

interface StaticStepperProps {
  steps: StepData[];
}

export default function StaticStepper({ steps }: StaticStepperProps) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel>{step.time}</StepLabel>
            <StepContent>
              <Typography variant="h6" sx={{ textAlign: 'left', mb: 1 }}>
                {step.title}
              </Typography>
              <Typography>{step.description}</Typography>
              <Box sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                  disabled={index === steps.length - 1}
                >
                  {index === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
                <Button
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 }}
                  disabled={index === 0}
                >
                  Back
                </Button>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3, mt: 2 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}