import React from 'react';
import { MantineProvider } from '@mantine/core';
import WineDataStats from './pages/wineDataStats';


function App() {
  return (
    <MantineProvider>
      <div className="App">
       <WineDataStats/>
      </div>
   </MantineProvider>
  );
}

export default App;
