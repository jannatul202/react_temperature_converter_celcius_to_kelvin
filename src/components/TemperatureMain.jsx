import React, { useState } from 'react'
import Kelvin from './Kelvin'
import Celsius from './celsius'

const TemperatureMain = () => {

  const[temperature , setTemperature]=useState({
    celsius :"",
    kelvin: "",
  });


  // celcius converter
  const temCelsius =(value)=>{
    const celsius = parseFloat(value) || 0;
    const kelvin = celsius + 273.15;
    setTemperature({
      celsius :value,
      kelvin : kelvin.toFixed(2),
    });
  }


  
  // kelvin converter
  const temKelvin =(value)=>{
    const kelvin =  parseFloat(value) || 0;
    const celsius =  kelvin - 273.15;
    setTemperature({
      kelvin : value,
      celsius :celsius.toFixed(2),
    });
  }


  return (
    <div className='text-center bg-gray-800 p-4 rounded'>
        <h2 className='text-blue-700 text-3xl font-semibold mb-3'>Temperature Converter</h2>

        <div>
          <Celsius celsius={temperature.celsius} temCelsius={temCelsius}/>
          <Kelvin kelvin={temperature.kelvin} temKelvin={temKelvin}/>
        </div>
    </div>
  )
}

export default TemperatureMain