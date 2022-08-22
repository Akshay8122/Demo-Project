import React from 'react'
import cartoon from "../../src/cartoon2.jpeg";

function Home() {
    return (
        <div>

            <div>
                <h2 className='text-gray-700 ml-72 text-4xl font-bold'>Good to see you</h2>


                <div className='flex space-x-16  mt-10 ml-72'>

                    <div className='flex border border-gray-600 bg-slate-400 my-auto p-1 rounded-md pr-40'>

                        <div className=''>
                            <img src={cartoon} alt="" className='w-24 h-24' />
                        </div>

                        <div className='ml-10 mt-5 text-white'>
                            <h2 className='text-2xl font-bold'>hello</h2>
                        </div>

                    </div>


                    <div className='flex border border-gray-600 my-auto p-1 bg-slate-400 rounded-md pr-40'>
                        <div className=''>
                            <img src={cartoon} alt="" className='w-24 h-24' />
                        </div>

                        <div className='ml-10 mt-5 text-white'>
                            <h2 className='text-2xl font-bold'>hello</h2>
                        </div>

                    </div>


                    <div className='flex border border-gray-600 my-auto p-1 bg-slate-400 rounded-md pr-40'>
                        <div className=''>
                            <img src={cartoon} alt="" className='w-24 h-24' />
                        </div>

                        <div className='ml-10 mt-5 text-white'>
                            <h2 className='text-2xl font-bold'>hello</h2>
                        </div>

                    </div>



                    <div className='flex border border-gray-600 my-auto p-1 bg-slate-400 rounded-md pr-40'>
                        <div className=''>
                            <img src={cartoon} alt="" className='w-24 h-24' />
                        </div>

                        <div className='ml-10 mt-5 text-white'>
                            <h2 className='text-2xl font-bold'>hello</h2>
                        </div>

                    </div>


                </div >

            </div>
        </div >
    )
}

export default Home;