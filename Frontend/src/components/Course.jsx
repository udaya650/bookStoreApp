import React from 'react'; 

import Cards from './Cards';

import {Link} from 'react-router-dom'

import list from '../../public/list.json';

function Course() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white'> 
        <div className='mt-20 items-center justify-center text-center'>
            <h1 className='text-2xl font-bold md:text-4xl'>We're delighted to here you <span className='text-pink-500'> Here! :)</span></h1> 
            <p className='mt-8'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro, assumenda? Repellendus, iste corrupti? 
                Tempore iqudantium repellendus accusamus accusantium sed architecto adio, nidi expedita quos quidem nesciunt
                 debitis dolore non aspernatur proesentium assumenda sint quibusdom, perspiciatis, explicabo sequi fugiat amet
                 animi eos out. Nobis quiquam reiciendis sunt quis sed magnam consequatur!
            </p>
            <Link to='/'>
              <button className='bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 mt-6' >Back</button>
            </Link>
        </div>
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 '>
            {
                list.map(item => 
                    <Cards item={item} key={item.id} />
                )
            }
        </div>
      </div>
    </>
  )
}

export default Course
