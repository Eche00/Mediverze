import React from 'react'
import { Link } from 'react-router';

function All() {
  const courses = [
    { level: "200l", code: "ana225", time: 15 },
    { level: "200l", code: "phy205", time: 18 },
    { level: "300l", code: "bch301", time: 22 },
    { level: "400l", code: "bch301", time: 22 },
  ];

  return (
    <div className='min-h-[100vh] sm:mb-0 mb-20'>
      <main className='flex flex-col gap-4 my-5'>
        {/* courses  */}
        <h2 className=" text-start text-black sm:text-4xl text-2xl font-[300]">Courses</h2>
        <section className="sm:grid sm:grid-cols-2 flex flex-col gap-4 sm:mb-5">

          {courses.map((course, index) => (
            <Link
              key={index}
              to={`/courses/${course.level}/${course.code}`}
              className="flex items-center justify-between gap-4 py-2 px-4 bg-white rounded-[20px]"
            >
              <p className="px-[20px] text-gray-500 text-[18px] sm:text-[24px] font-[300]">
                {course.level.toUpperCase()}
              </p>

              <hr className="sm:h-10 h-14 w-[1px] bg-gray-200 border-none rounded-full" />

              <div className="flex items-center flex-1">
                <h2 className="flex-1 text-black text-[14px] sm:text-[18px] font-[300]">
                  Course
                  <br />
                  <span className="text-gray-700 text-[10px] sm:text-[14px]">
                    {course.code.toUpperCase()}
                  </span>
                </h2>

                <p className="text-black text-[10px] sm:text-[14px] text-center border-4 border-l-gray-200 border-[#6357F9] rounded-full flex items-center justify-center w-[50px] h-[50px] leading-[80%]">
                  {course.time}
                  <br /> min
                </p>
              </div>
            </Link>
          ))}

        </section>
      </main>

    </div>
  )
}

export default All