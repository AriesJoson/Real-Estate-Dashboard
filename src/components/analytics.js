import React from 'react'
import '../css/analytics.css'
import LineChartComponent from './chart'

function Analytics() {
  return (
    <div className='analytics-container'>
       <div className='analytics-box'>
            <div className='grid-item analytics'>
                <div className='analytics-header'>Total Revenue</div>
                <LineChartComponent />
            </div>
            <div className='analytics-box2'>
                <div className='grid-item property1'>
                    <i className='bx bx-building-house' ></i>
                    <div className='total-property'>
                        <p>10</p>
                        <p className='property-text'>All Properties</p>
                    </div>
                </div>
                <div className='grid-item property2'>
                    <div className='properties-box'>
                        <div className='occupied-box'>
                            <p>10</p>
                            <p className='property-text'>Properties Occupied</p>
                        </div>
                        <div className='occupied-icon'><i className='bx bx-home'></i></div>
                    </div>
                    <div className='properties-box'>
                        <div className='available-box'>
                            <p>10</p>
                            <p className='property-text'>Properties Available</p>
                        </div>
                        <div className='available-icon'><i className='bx bx-home'></i></div>
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Analytics