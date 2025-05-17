import React from 'react'

const Kelvin = ({kelvin,temKelvin}) => {
  return (
    <div className='mb-4'>
        <label className='block text-white mb-2' htmlFor="text">Temperature in Kelvin</label>
        <input
        value={kelvin}
        onChange={(e)=>temKelvin(e.target.value)}
         type="number" name='kelvin' id='kelvin' placeholder='274.15k'
         className='border-1 text-white border-gray-200 rounded focus:outline-none p-2 placeholder-gray' />
    </div>
  )
}

export default Kelvin