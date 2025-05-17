import React from 'react'

const Celsius = ({celsius,temCelsius}) => {
  return (
    <div className='mb-4'>
        <label className='block text-white mb-2 ' htmlFor="text">Temperature in Celsius</label>
        <input
        value={celsius}
        onChange={(e)=>temCelsius(e.target.value)}
         type="number" name='celsius' id='celsius' placeholder='0°C'
        className='border-1 text-white border-gray-200 rounded focus:outline-none p-2 placeholder-gray' />
    </div>
  )
}

export default Celsius