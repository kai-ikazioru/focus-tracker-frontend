import React from 'react';
import { Box } from '@chakra-ui/react';
import {StyleButton, ButtonTypes, ButtonIcon } from './components/atoms/Button';
import Header from './components/features/Header';
import Sidebar from './components/features/SideBar';

function App() {
  return (
    <>
    <Header />
    <Sidebar />
    <Box>
    </Box>
    </>
  );
}

export default App;
