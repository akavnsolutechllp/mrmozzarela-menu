import React from 'react'
import MainContent from './Components/MainContent'

const App = () => {
  return (
    <div className='h-auto w-full flex flex-col justify-center items-center p-4 xl:p-2'>
      <div className='h-auto w-full md:w-[80%] xl:w-[30%] lg:w-[80%] 2xl:w-[30%] flex flex-col justify-start items-center gap-4 border bg-rose-600 p-2 rounded-xl'>
      <h1 className='text-5xl md:text-6xl xl:text-4xl 2xl:text-6xl font-crostan text-white mt-4'>Menu</h1>
      <div className='h-2 bg-white w-full xl:w-[100%]'></div>
      <MainContent/>
      </div>
    </div>
  )
}

export default App