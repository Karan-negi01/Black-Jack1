import React from 'react';
import { Line } from 'react-chartjs-2';

import 'chart.js/auto';



const Dashboard = () => {

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
        datasets: [
          {
            label: 'Blue Line',
            data: [0, 120, 100, 80, 50, 30, 100, 120, 180, 200],
            fill: true,
            backgroundColor: 'rgba(173, 216, 230, 0.3)',
            borderColor: 'blue',
            tension: 0.2,
            borderWidth: 2,
            pointRadius: 0,
          },
          {
            label: 'Green Line',
            data: [100, 110, 95, 75, 55, 30, 90, 120, 150],
            fill: false,
            borderColor: 'green',
            tension: 0.1,
            borderWidth: 2,
            pointRadius: 0,
          },
        ],
      };
    
      const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 300,
            ticks: {
              stepSize: 100,
            },
          },
          x: {
            grid: {
              display: false,
            },
          },
        },
      };


    return (
        <div>
          <div className="dashboard-content-container">

            <div className="dashboard-boxes">

                <div className="box1">
                    <p className='box-number'>0 (48.2%)</p>
                    <p className='box-text'>Total Restaurants</p>
                </div>
                <div className="box2">
                    <p className='box-number'>0</p>
                    <p className='box-text'>Total Screens</p>
                </div>
                <div className="box3">
                    <p className='box-number'>0</p>
                    <p className='box-text'>Active Screens</p>
                </div>
                <div className="box4">
                    <p className='box-number'>0</p>
                    <p className='box-text'>Total Menus</p>
                </div>
            </div>
            <div className="chart-container">
                <div className="chart-header">
                    <div className="chart-heading">
                        <h2>Usage</h2>
                        <p>January - September 2024</p>
                    </div>
                    <div className="toggle-buttons">
                        <button>Day</button>
                        <button className="active">Month</button>
                        <button>Year</button>
                    </div>
                </div>
                <Line data={data} options={options} height={420} />
            </div>
          </div>
        </div>
    )
}

export default Dashboard
