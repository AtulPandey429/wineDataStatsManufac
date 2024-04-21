import React from 'react'
import FlavanoidsStatistics from './../components/FlavanoidsStatistics/FlavanoidsStatistics';
import GammaStatistics from './../components/GammaStatistics/GammaStatics';
import { Center } from '@mantine/core';

const WineDataStats = () => {
  return (
    <Center style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <h2>wineDataStats</h2>
        <div style={{ width: '60%' }}>
            <h2>FlavanoidsStatistics</h2>
            <div>
                <FlavanoidsStatistics/>
            </div>
        </div>
        <div style={{ width: '60%',marginBottom:'20px' }}>
            <h2>GammaStatistics</h2>
            <div>
                <GammaStatistics/>
            </div>
        </div>

    </Center>
  )
}

export default WineDataStats;