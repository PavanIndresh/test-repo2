import { useState } from 'react'
import Card from './Card'
import image1 from '../assets/a.jpg';

function Banner1() {
    
  return (
    <div>
        <div className='Banner1'>
            <div className='sidebar'>
                <div className='sid1'>
                    <div className='sid11'>
                        Menu Items
                    </div>
                </div>
                <div className='sid2' style={{ backgroundColor:'#D9D9D9'}}>
                    <div className='sid21'>
                        Dashboard
                    </div>
                </div>
                <div className='sid2'>
                    <div className='sid21'>
                        Users
                    </div>
                </div>
                <div className='sid2'>
                    <div className='sid21'>
                        Vehicles
                    </div>
                </div>
                <div className='sid2'>
                    <div className='sid21'>
                        Settings
                    </div>
                </div>
            </div>
            <div className='mainContainer'>
                <div className='mc1'>
                    <div className='mc11'>
                        This is dashboard
                    </div>
                    <div className='mc12'>
                        <div className='mc123'>
                             <div className='mc1234'>
                                <Card office={image1} desc={'Html Course'}  />
                                {/* <Card title={"This is CSS"} desc={'CSS Course'}/> */}
                            </div>
                            <div className='mc1235'>
                                {/* <Card title={"This is Javascript"} desc={'JavaScript Course'}/>
                                <Card title={"This is React JS"} desc={'React JS Course'}/> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner1
