import React from 'react';
import UseFetch from './UseFetch';
import './FetchData.css'

const FetchYogaData = () => {
    const [ydata] = UseFetch('https://api.npoint.io/4459a9a10e43812e1152');
    console.log(ydata);
    return (

        <>
            <ul className='list_Data_main'>
                {ydata && ydata.map((e)=>(
                    <>
                        <li className='list_data'>
                            <h3>{e.name}</h3>
                            <p><strong>Benefits: </strong>{e.benefits}</p>
                            <p><strong>Time Duration: </strong>{e.time_duration}</p>
                        
                        </li>
                    </>
                    ))
            
                }

            </ul>
        </>

    )
  
}
export default FetchYogaData