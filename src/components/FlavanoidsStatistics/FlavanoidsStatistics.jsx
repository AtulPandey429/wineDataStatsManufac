import React, { useState, useEffect, useMemo } from 'react';
import { Table, Text } from '@mantine/core';
import wineData from '../../data/wineData.json';
import { calculateMean, calculateMedian, calculateMode } from '../../utils/calculation.js';

const FlavanoidsStatistics = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [classStatistics, setClassStatistics] = useState({});

  useEffect(() => {
    const calculateClassStatistics = () => {
      const stats = {};
      const flavanoidsData = wineData.map(item => item.Flavanoids);

      // Get unique classes
      const uniqueClasses = [...new Set(wineData.map(item => item.Alcohol))];

      uniqueClasses.forEach(alcoholClass => {
        const classData = flavanoidsData.filter((item, index) => wineData[index].Alcohol === alcoholClass);
        stats[`Class ${alcoholClass}`] = {
          mean: calculateMean(classData),
          median: calculateMedian(classData),
          mode: calculateMode(classData),
        };

        // Round off mean, median, and mode to 3 decimal places
        stats[`Class ${alcoholClass}`].mean = parseFloat(stats[`Class ${alcoholClass}`].mean.toFixed(3));
        stats[`Class ${alcoholClass}`].median = parseFloat(stats[`Class ${alcoholClass}`].median.toFixed(3));
        stats[`Class ${alcoholClass}`].mode = stats[`Class ${alcoholClass}`].mode.map(mode => parseFloat(mode).toFixed(3));
      });

      return stats;
    };

    // Simulating loading state with a timeout
    setTimeout(() => {
      setClassStatistics(calculateClassStatistics());
      setIsLoading(false);
    }, 1000);
  }, []);

  const memoizedStatistics = useMemo(() => classStatistics, [classStatistics]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Table style={{ borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ border: '1px solid #dee2e6', padding: '8px' }}>Measure</th>
          {Object.keys(memoizedStatistics).map(classLabel => (
            <th key={classLabel} style={{ border: '1px solid #dee2e6', padding: '8px' }}>{classLabel}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ border: '1px solid #dee2e6', padding: '8px' }}>Flavanoids Mean</td>
          {Object.values(memoizedStatistics).map((stats, index) => (
            <td key={index} style={{ border: '1px solid #dee2e6', padding: '8px' }}><Text>{stats.mean}</Text></td>
          ))}
        </tr>
        <tr>
          <td style={{ border: '1px solid #dee2e6', padding: '8px' }}>Flavanoids Median</td>
          {Object.values(memoizedStatistics).map((stats, index) => (
            <td key={index} style={{ border: '1px solid #dee2e6', padding: '8px' }}><Text>{stats.median}</Text></td>
          ))}
        </tr>
        <tr>
          <td style={{ border: '1px solid #dee2e6', padding: '8px' }}>Flavanoids Mode</td>
          {Object.values(memoizedStatistics).map((stats, index) => (
            <td key={index} style={{ border: '1px solid #dee2e6', padding: '8px' }}><Text>{stats.mode.join(', ')}</Text></td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
};

export default FlavanoidsStatistics;
