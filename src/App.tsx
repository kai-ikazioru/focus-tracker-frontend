import React from 'react';
import { Box } from '@chakra-ui/react';
import StyleButton, { ButtonTypes } from './components/atoms/Button';

function App() {
  return (
    <Box>
      <StyleButton 
        text='Click ME!!'
        buttonType={ButtonTypes.sub}
      />
    </Box>
  );
}

export default App;
