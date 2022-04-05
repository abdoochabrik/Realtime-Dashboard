import React from 'react'
import {Bar} from 'react-chartjs-2'
import {Chart as ChartJs} from 'chart.js/auto'
export default function RightCurve() {
    const labels = [
        'Paris',
        'Madrid',
        'Munich',
        'Québéc',
        'London',
        'Washignton',
      ];
    
      const data = {
        labels: labels,
        datasets: [{
          label: 'flights details',
          backgroundColor: '#26106A',
          borderColor: '#26106A',
          data: [10, 30, 5, 2, 40, 25],
        }]
      };
    
      const config = {
        type: 'line',
        data: data,
        options: {}
      };
  return (
       <Bar data={data} options={config} />    
  )
}
