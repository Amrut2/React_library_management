import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartInstanceRef.current) {
      // Destroy the previous chart instance before creating a new one
      chartInstanceRef.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    const newChartInstance = new Chart(ctx, {
      type: 'pie',
      data: data,
    });

    // Save the chart instance in the ref for future destruction
    chartInstanceRef.current = newChartInstance;
  }, [data]);

  return <canvas ref={chartRef} />;
};

export default PieChart;
