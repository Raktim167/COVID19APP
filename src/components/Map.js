import axios from 'axios';
import React, {  useEffect, useState } from 'react'

import ReactDatamaps from 'react-datamaps-india'

   



export default function Map () {
    const [loading, setLoading] = useState(false);
    const [totalStateWiseCount, setTotalStateWiseCount] = useState([]);

    const loadData = async () => {
        setLoading(true);
        const resp = await axios.get("https://data.covid19india.org/data.json")
        const totalStateCount = resp.data.statewise.slice(1);   
        setTotalStateWiseCount(totalStateCount);
        setLoading(false);
     };
 useEffect(()=>{loadData()},[])
     
let STATES = {
    'Andaman & Nicobar Island': {
     value:totalStateWiseCount[0]?.confirmed,
      confirmed:totalStateWiseCount[0]?.confirmed,
      active:totalStateWiseCount[0]?.active,
      recovered:totalStateWiseCount[0]?.recovered,
      deaths:totalStateWiseCount[0]?.deaths
    },
    'Andhra Pradesh': {
        value:totalStateWiseCount[1]?.confirmed,
        confirmed:totalStateWiseCount[1]?.confirmed,
        active:totalStateWiseCount[1]?.active,
        recovered:totalStateWiseCount[1]?.recovered,
        deaths:totalStateWiseCount[1]?.deaths
    },
    'Arunanchal Pradesh': {
        value:totalStateWiseCount[2]?.confirmed,
        confirmed:totalStateWiseCount[2]?.confirmed,
        active:totalStateWiseCount[2]?.active,
        recovered:totalStateWiseCount[2]?.recovered,
        deaths:totalStateWiseCount[2]?.deaths
    },
    Assam: {
        value:totalStateWiseCount[3]?.confirmed,
        confirmed:totalStateWiseCount[3]?.confirmed,
        active:totalStateWiseCount[3]?.active,
        recovered:totalStateWiseCount[3]?.recovered,
        deaths:totalStateWiseCount[3]?.deaths
    },
    Bihar: {
        value:totalStateWiseCount[4]?.confirmed,
        confirmed:totalStateWiseCount[4]?.confirmed,
        active:totalStateWiseCount[4]?.active,
        recovered:totalStateWiseCount[4]?.recovered,
        deaths:totalStateWiseCount[4]?.deaths
    },
    Chandigarh: {
        value:totalStateWiseCount[5]?.confirmed,
        confirmed:totalStateWiseCount[5]?.confirmed,
        active:totalStateWiseCount[5]?.active,
        recovered:totalStateWiseCount[5]?.recovered,
        deaths:totalStateWiseCount[5]?.deaths
    },
    Chhattisgarh: {
        value:totalStateWiseCount[6]?.confirmed,
        confirmed:totalStateWiseCount[6]?.confirmed,
        active:totalStateWiseCount[6]?.active,
        recovered:totalStateWiseCount[6]?.recovered,
        deaths:totalStateWiseCount[6]?.deaths
    },
    'Dadara & Nagar Haveli': {
        value:totalStateWiseCount[7]?.confirmed,
        confirmed:totalStateWiseCount[7]?.confirmed,
        active:totalStateWiseCount[7]?.active,
        recovered:totalStateWiseCount[7]?.recovered,
        deaths:totalStateWiseCount[7]?.deaths
    },
    'Daman & Diu': {
        value:totalStateWiseCount[7]?.confirmed,
        confirmed:totalStateWiseCount[7]?.confirmed,
        active:totalStateWiseCount[7]?.active,
        recovered:totalStateWiseCount[7]?.recovered,
        deaths:totalStateWiseCount[7]?.deaths
    },
    Delhi: {
        value:totalStateWiseCount[8]?.confirmed,
        confirmed:totalStateWiseCount[8]?.confirmed,
        active:totalStateWiseCount[8]?.active,
        recovered:totalStateWiseCount[8]?.recovered,
        deaths:totalStateWiseCount[8]?.deaths
    },
    Goa: {
        value:totalStateWiseCount[9]?.confirmed,
        confirmed:totalStateWiseCount[9]?.confirmed,
        active:totalStateWiseCount[9]?.active,
        recovered:totalStateWiseCount[9]?.recovered,
        deaths:totalStateWiseCount[9]?.deaths
    },
    Gujarat: {
        value:totalStateWiseCount[10]?.confirmed,
        confirmed:totalStateWiseCount[10]?.confirmed,
        active:totalStateWiseCount[10]?.active,
        recovered:totalStateWiseCount[10]?.recovered,
        deaths:totalStateWiseCount[10]?.deaths
    },
    Haryana: {
        value:totalStateWiseCount[11]?.confirmed,
        confirmed:totalStateWiseCount[11]?.confirmed,
        active:totalStateWiseCount[11]?.active,
        recovered:totalStateWiseCount[11]?.recovered,
        deaths:totalStateWiseCount[11]?.deaths
    },
    'Himachal Pradesh': {
        value:totalStateWiseCount[12]?.confirmed,
        confirmed:totalStateWiseCount[12]?.confirmed,
        active:totalStateWiseCount[12]?.active,
        recovered:totalStateWiseCount[12]?.recovered,
        deaths:totalStateWiseCount[12]?.deaths
    },
    'Jammu & Kashmir': {
        value:totalStateWiseCount[13]?.confirmed,
        confirmed:totalStateWiseCount[13]?.confirmed,
        active:totalStateWiseCount[13]?.active,
        recovered:totalStateWiseCount[13]?.recovered,
        deaths:totalStateWiseCount[13]?.deaths
    },
    Jharkhand: {
        value:totalStateWiseCount[14]?.confirmed,
        confirmed:totalStateWiseCount[14]?.confirmed,
        active:totalStateWiseCount[14]?.active,
        recovered:totalStateWiseCount[14]?.recovered,
        deaths:totalStateWiseCount[14]?.deaths
    },
    Karnataka: {
        value:totalStateWiseCount[15]?.confirmed,
        confirmed:totalStateWiseCount[15]?.confirmed,
        active:totalStateWiseCount[15]?.active,
        recovered:totalStateWiseCount[15]?.recovered,
        deaths:totalStateWiseCount[15]?.deaths
    },
    Kerala: {
        value:totalStateWiseCount[16]?.confirmed,
        confirmed:totalStateWiseCount[16]?.confirmed,
        active:totalStateWiseCount[16]?.active,
        recovered:totalStateWiseCount[16]?.recovered,
        deaths:totalStateWiseCount[16]?.deaths
    },
    Lakshadweep: {
        value:totalStateWiseCount[18]?.confirmed,
        confirmed:totalStateWiseCount[18]?.confirmed,
        active:totalStateWiseCount[18]?.active,
        recovered:totalStateWiseCount[18]?.recovered,
        deaths:totalStateWiseCount[18]?.deaths
    },
    'Madhya Pradesh': {
        value:totalStateWiseCount[19]?.confirmed,
        confirmed:totalStateWiseCount[19]?.confirmed,
        active:totalStateWiseCount[19]?.active,
        recovered:totalStateWiseCount[19]?.recovered,
        deaths:totalStateWiseCount[19]?.deaths
    },
    Maharashtra: {
        value:totalStateWiseCount[20]?.confirmed,
        confirmed:totalStateWiseCount[20]?.confirmed,
        active:totalStateWiseCount[20]?.active,
        recovered:totalStateWiseCount[20]?.recovered,
        deaths:totalStateWiseCount[20]?.deaths
    },
    Manipur: {
        value:totalStateWiseCount[21]?.confirmed,
        confirmed:totalStateWiseCount[21]?.confirmed,
        active:totalStateWiseCount[21]?.active,
        recovered:totalStateWiseCount[21]?.recovered,
        deaths:totalStateWiseCount[21]?.deaths
    },
    Meghalaya: {
        value:totalStateWiseCount[22]?.confirmed,
        confirmed:totalStateWiseCount[22]?.confirmed,
        active:totalStateWiseCount[22]?.active,
        recovered:totalStateWiseCount[22]?.recovered,
        deaths:totalStateWiseCount[22]?.deaths
    },
    Mizoram: {
        value:totalStateWiseCount[23]?.confirmed,
        confirmed:totalStateWiseCount[23]?.confirmed,
        active:totalStateWiseCount[23]?.active,
        recovered:totalStateWiseCount[23]?.recovered,
        deaths:totalStateWiseCount[23]?.deaths
    },
    Nagaland: {
        value:totalStateWiseCount[24]?.confirmed,
        confirmed:totalStateWiseCount[24]?.confirmed,
        active:totalStateWiseCount[24]?.active,
        recovered:totalStateWiseCount[24]?.recovered,
        deaths:totalStateWiseCount[24]?.deaths
    },
    Odisha: {
        value:totalStateWiseCount[25]?.confirmed,
        confirmed:totalStateWiseCount[25]?.confirmed,
        active:totalStateWiseCount[25]?.active,
        recovered:totalStateWiseCount[25]?.recovered,
        deaths:totalStateWiseCount[25]?.deaths
    },
    Puducherry: {
        value:totalStateWiseCount[26]?.confirmed,
        confirmed:totalStateWiseCount[26]?.confirmed,
        active:totalStateWiseCount[26]?.active,
        recovered:totalStateWiseCount[26]?.recovered,
        deaths:totalStateWiseCount[26]?.deaths
    },
    Punjab: {
        value:totalStateWiseCount[27]?.confirmed,
        confirmed:totalStateWiseCount[27]?.confirmed,
        active:totalStateWiseCount[27]?.active,
        recovered:totalStateWiseCount[27]?.recovered,
        deaths:totalStateWiseCount[27]?.deaths
    },
    Rajasthan: {
        value:totalStateWiseCount[28]?.confirmed,
        confirmed:totalStateWiseCount[28]?.confirmed,
        active:totalStateWiseCount[28]?.active,
        recovered:totalStateWiseCount[28]?.recovered,
        deaths:totalStateWiseCount[28]?.deaths
    },
    Sikkim: {
        value:totalStateWiseCount[29]?.confirmed,
        confirmed:totalStateWiseCount[29]?.confirmed,
        active:totalStateWiseCount[29]?.active,
        recovered:totalStateWiseCount[29]?.recovered,
        deaths:totalStateWiseCount[29]?.deaths
    },
    'Tamil Nadu': {
        value:totalStateWiseCount[31]?.confirmed,
        confirmed:totalStateWiseCount[31]?.confirmed,
        active:totalStateWiseCount[31]?.active,
        recovered:totalStateWiseCount[31]?.recovered,
        deaths:totalStateWiseCount[31]?.deaths
    },
    Telangana: {
        value:totalStateWiseCount[32]?.confirmed,
        confirmed:totalStateWiseCount[32]?.confirmed,
        active:totalStateWiseCount[32]?.active,
        recovered:totalStateWiseCount[32]?.recovered,
        deaths:totalStateWiseCount[32]?.deaths
    },
    Tripura: {
        value:totalStateWiseCount[33]?.confirmed,
        confirmed:totalStateWiseCount[33]?.confirmed,
        active:totalStateWiseCount[33]?.active,
        recovered:totalStateWiseCount[33]?.recovered,
        deaths:totalStateWiseCount[33]?.deaths
    },
    'Uttar Pradesh': {
        value:totalStateWiseCount[34]?.confirmed,
        confirmed:totalStateWiseCount[34]?.confirmed,
        active:totalStateWiseCount[34]?.active,
        recovered:totalStateWiseCount[34]?.recovered,
        deaths:totalStateWiseCount[34]?.deaths
    },
    Uttarakhand: {
        value:totalStateWiseCount[35]?.confirmed,
        confirmed:totalStateWiseCount[35]?.confirmed,
        active:totalStateWiseCount[35]?.active,
        recovered:totalStateWiseCount[35]?.recovered,
        deaths:totalStateWiseCount[35]?.deaths
    },
    'West Bengal': {
        value:totalStateWiseCount[36]?.confirmed,
        confirmed:totalStateWiseCount[36]?.confirmed,
        active:totalStateWiseCount[36]?.active,
        recovered:totalStateWiseCount[36]?.recovered,
        deaths:totalStateWiseCount[36]?.deaths
    },
  }
   
  console.log(totalStateWiseCount)
    return (
      <div className="container">
        <div
       
        >
          <ReactDatamaps
            regionData={STATES}
            mapLayout={{
              title: 'Total active cases',
              width: '',
              legendTitle: 'Legend',
              startColor: '#FFDAB9',
              endColor: '#FF6347',
              hoverTitle: 'Count',
              noDataColor: '#f5f5f5',
              borderColor: '#8D8D8D',
              hoverBorderColor: 'pink',
              hoverColor: 'green',
            }}
            hoverComponent={({ value }) => {
              return (
                <>
                  <p>{value.name}</p>
                  <p>Active:{value.active}</p>
                  <p>Confirmed:{value.confirmed}</p>
                  <p>Recovered:{value.recovered}</p>
                  <p>death:{value.deaths}</p>
                </>
              )
            }}
          />
        </div>
        {/* <div className="editor">
          <h2>Edit Here</h2>
          <table>
            <tr>
              <th>State</th>
              <th>Count</th>
            </tr>
            {Object.entries(this.state).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>
                  <input
                    name={key}
                    value={value.value}
                    onChange={this.onCountChange}
                  />
                </td>
              </tr>
            ))}
          </table>
        </div> */}
        {/* <style>{`
          .container {
            display: flex;
          }
          th {
            text-align: left;
          }
          table,
          th,
          td {
            border: 1px solid black;
            border-collapse: collapse;
          }
          th,
          td {
            padding: 10px 20px;
          }
          @media (max-width: 1000px) {
            .container {
              flex-direction: column;
            }
          }
          .editor {
            flex: 1;
            height: 100vh;
            overflow: scroll;
          }
        `}</style> */}
      </div>
    )
  
}