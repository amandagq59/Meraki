import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export const Grafica = ({datos}) => {

    let dataFinal = datos.map(ele=>{
        return {
            name: ele.dt_txt.split(" ")[0],
            temp: ele.main.temp,
            hum: ele.main.humidity
        }
    })
    
  return (
  
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        width={500}
        height={400}
        datos={dataFinal}
        margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
        }}
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="temp" stroke="#8884d8" fill="#8884d8" />
        <Area type="monotone" dataKey="hum" stroke="#c2402fff" fill="#d45c53ff" />
      </AreaChart>
    </ResponsiveContainer>
  )
}
