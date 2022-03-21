import React from 'react'
import JsonData from './data.json'
 function JsonDataDisplay(){
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr>
                    
                    <td>{info.event}</td>
                    <td>{info.price}</td>
                    <td>{info.from}</td>
                    <td>{info.to}</td>
                    
                </tr>
            )
        }
    )
 
    return(
        <div className='padb-30'>
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th>Event</th>
                    <th>Price</th>
                    <th>From</th>
                    <th>To</th>

                    </tr>
                </thead>
                <tbody>
                 
                    
                    {DisplayData}
                    
                </tbody>
            </table>
             
        </div>
    )
 }
 
 export default JsonDataDisplay;
 