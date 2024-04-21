/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useMemo } from 'react';
import { Table, Text, Loader } from '@mantine/core';
import wineData from '../../data/wineData.json';
import { calculateMean, calculateMedian, calculateMode } from '../../utils/calculation';

const GammaStatistics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [classStatistics, setClassStatistics] = useState({});

  const memoizedStatistics = useMemo(() => {
    const calculateGamma = (arr) => {
      return arr.map(item => (item.Ash * item.Hue) / item.Magnesium);
    };

    const calculateClassStatistics = () => {
      const stats = {};
      const gammaData = calculateGamma(wineData);

      // Get unique classes
      const uniqueClasses = [...new Set(wineData.map(item => item.Alcohol))];

      uniqueClasses.forEach(alcoholClass => {
        const classData = gammaData.filter((item, index) => wineData[index].Alcohol === alcoholClass);
        stats[`Class ${alcoholClass}`] = {
          mean: calculateMean(classData),
          median: calculateMedian(classData),
          mode: calculateMode(classData),
        };
      });

      return stats;
    };

    return calculateClassStatistics();
  });

  useEffect(() => {
    // Simulating loading state with a timeout
    setTimeout(() => {
      setClassStatistics(memoizedStatistics);
      setIsLoading(false);
    }, 1000);
  }, [memoizedStatistics]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Table style={{ borderCollapse: 'collapse', marginTop: 20 }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #dee2e6', padding: '10px' }}>Measure</th>
          {Object.keys(classStatistics).map(classLabel => (
            <th key={classLabel} style={{ border: '1px solid #dee2e6', padding: '10px' }}>{classLabel}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ border: '1px solid #dee2e6', padding: '10px' }}>Gamma Mean</td>
          {Object.values(classStatistics).map((stats, index) => (
            <td key={index} style={{ border: '1px solid #dee2e6', padding: '10px' }}><Text>{stats.mean}</Text></td>
          ))}
        </tr>
        <tr>
          <td style={{ border: '1px solid #dee2e6', padding: '10px' }}>Gamma Median</td>
          {Object.values(classStatistics).map((stats, index) => (
            <td key={index} style={{ border: '1px solid #dee2e6', padding: '10px' }}><Text>{stats.median}</Text></td>
          ))}
        </tr>
        <tr>
          <td style={{ border: '1px solid #dee2e6', padding: '10px' }}>Gamma Mode</td>
          {Object.values(classStatistics).map((stats, index) => (
            <td key={index} style={{ border: '1px solid #dee2e6', padding: '10px' }}><Text>{stats.mode.join(', ')}</Text></td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
};

export default GammaStatistics;
