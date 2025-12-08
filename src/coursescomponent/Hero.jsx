import { faBook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { circleburst, dotgrid } from '../utils/svg'
import { useLocation } from 'react-router'

function Hero() {
  const location = useLocation()
  return (
    <div>

      <main className=' bg-[#6357F9] w-full sm:h-[200px] h-[150px]  fixed top-0 rounded-b-[30px] flex flex-col items-baseline justify-end overflow-hidden'>
        <div className=' absolute -top-1/2 -mt-12 left-0 '>
          {dotgrid}
        </div>
        <div className=' absolute -bottom-1/2 -mt-16 -right-1/3 '>
          {circleburst}
        </div>
        {/* info section  */}
        <section className=" flex flex-col gap-[4px] p-6 z-50">
          <h1 className=" text-white sm:text-4xl text-2xl font-[300] flex items-center gap-1"><FontAwesomeIcon icon={faBook} size="sm" /> Courses
            <p className=" text-gray-200 text-[16px] sm:text-[24px] mt-1 flex items-center ">{"> "}
              {location.pathname.replace('/courses/', '').toLocaleUpperCase() || "ALL COURSES"}
            </p>
          </h1>
          <p className=" text-gray-200 text-[14px] sm:text-[18px] mt-1">Stay on track with a clear view of your courses.</p>

        </section>
      </main>
    </div>
  )
}

export default Hero