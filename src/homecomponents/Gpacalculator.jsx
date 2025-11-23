import React from 'react'

function Gpacalculator() {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-xl text-center space-y-6">
        <h1 className="text-3xl font-bold">Calculate Your GPA Easily</h1>
        <p className="text-gray-600 text-base">
          Stay on top of your academic performance. Use our GPA calculator to track your grades and plan better.
        </p>

        <button className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition-all">
          Start Calculating
        </button>
      </div>
    </div>
  )
}

export default Gpacalculator
