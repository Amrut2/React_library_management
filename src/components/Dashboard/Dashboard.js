import React from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import './Dashboard.css';
import { Pie } from 'react-chartjs-2';
import PieChart from './PieChart.js';

const Dashboard = () => {
  // Sample pie chart data
  const pieChartData = {
    labels: ['Sci-fi', 'Novels', 'Technical', 'History', 'General', 'Others'],
    datasets: [
      {
        data: [30, 30, 20, 10, 5, 5],
        backgroundColor: [
          'pink',
          '#17a2b8',
          '#ffc107',
          'rgb(87, 185, 96)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
      },
    ],
  };

  // Sample table data
  const tableData = [
    { name: 'Tanmay Sant', points: 1900 },
    { name: 'Biswajit Mishra', points: 1891 },
    { name: 'Ankur Sharma', points: 1700 },
    { name: 'Preeti Pathak', points: 1500 },
    { name: 'Milan Banerjee', points: 1200 },
    { name: 'Milan Banerjee', points: 1200 },
    { name: 'Milan Banerjee', points: 1200 },
    { name: 'Milan Banerjee', points: 1200 },
  ];

  return (
   
    <div className="DASHBOARD">
      <Navbar />
      <Sidebar pageWrapId="page-wrap" outerContainerId="outer-container" />
      <div className="container1" style={{ paddingTop: '30px', maxHeight: 'calc(100vh - 80px)', overflowY: 'scroll', scrollbarWidth: 'none', position: 'relative' }}>
        {/* Top row with three cards */}

        <div className="row">
          <div className="col-md-4">
            <div className="card" style={{ borderRadius: '30px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', border: 'none'}}>
              <div className="card-body">
                <h5 className="card-title" style={{ marginBottom: '0' }}>Total Points
                </h5>
                <div className='circle3' style={{ float: 'right', margin: '10px' }}><h3>200</h3></div>
                <h5 style={{ clear: 'both' }}>Points scored by subscriptions
                </h5>
              </div>
            </div>
          </div>


          <div className="col-md-4">
            <div className="card" style={{ borderRadius: '30px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', border: 'none'}}>
              <div className="card-body">
                <h5 className="card-title" style={{ marginBottom: '0' }}>Books Subscribed
                </h5>
                <div className='circle3' style={{ float: 'right', margin: '10px' }}><h3>2</h3></div>
                <h5 style={{ clear: 'both' }}>Number of books read.
                </h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card" style={{ borderRadius: '30px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', border: 'none'}}>
              <div className="card-body">
                <h5 className="card-title" style={{ marginBottom: '0' }}>Active Subscriptions
                </h5>
                <div className='circle3' style={{ float: 'right', margin: '10px' }}><h3>1</h3></div>
                <h5 style={{ clear: 'both' }}>No. of books currently reading.
                </h5>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {/* Table and Pie Chart */}
        <div className="row">
          <div className="col-md-6">
            <div className="card" style={{ borderRadius: '30px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', border: 'none'}}>
              <div className="card-body">
                <h5 className="card-title">Table: Top Subscribers by Points</h5>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead className="thead-light">
                      <tr>
                        <th>Name</th>
                        <th>Points</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.map((item, index) => (
                        <tr key={index}>
                          <td>{item.name}</td>
                          <td>{item.points}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card" style={{ borderRadius: '30px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', border: 'none'}}>
              <div className="card-body">
                <h5 className="card-title">Trend Chart</h5>
                <div className="d-flex justify-content-center align-items-center">
                  <PieChart data={pieChartData} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
