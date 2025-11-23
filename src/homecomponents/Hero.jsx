import { faRocket } from '@fortawesome/free-solid-svg-icons'
import { faRankingStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { circleburst } from '../utils/svg'

function Hero() {
  return (
    <div className='relative'>
        <div className=' absolute -top-1/2 -mt-12 -left-1/2 sm:-left-16'>
            {circleburst}
        </div>
        <div className=' absolute -bottom-1/2 -mt-12 -right-1/2 sm:-right-18'>
            {circleburst}
        </div>
        {/* Container  */}
        <main className=' bg-[#6357F9] w-full h-fit mt-[100px] relative rounded-[30px] flex flex-col gap-4 '>
                      <img src="/pad.webp" alt="" className="md:w-[200px] md:h-[180px] w-[100px] h-[100px] object-cover rounded-[30px] absolute bottom-1/2 left-1/2 sm:left-24 -translate-x-1/2 mb-20 sm:mb-10 border-2 border-[#DEEAFD]"  />

   {/* info section  */}
      <section className=" flex flex-col gap-[4px] pt-14">
        <h1 className=" text-center text-white sm:text-4xl text-2xl font-[300]">Eze Eche</h1>
        <p className=" text-center text-gray-200 text-[10px] sm:text-[18px] m-0">300 LEVEL</p>

        </section>
        
{/* CTA options  */}
<section className=' w-[90%] mx-auto rounded-[30px] flex items-center gap-4'>
    <div className='flex flex-1 items-center justify-start gap-2 bg-white rounded-[16px] p-2'>
        <span className='text-white bg-teal-700 rounded-[10px] w-[35px] h-[35px] flex items-center justify-center'><FontAwesomeIcon icon={faRocket} size="md" /></span>
        <p className='text-center text-gray-500 text-[10px] sm:text-[18px] font-[300]'>Academic <br /> success</p>
    </div>
  
    <div className='flex flex-1 items-center justify-start gap-2 bg-white rounded-[16px] p-2'>
        <span className='text-white bg-[#6357F9] rounded-[10px] w-[35px] h-[35px] flex items-center justify-center'><FontAwesomeIcon icon={faRankingStar} size="md" /></span>
        <p className='text-center text-gray-500 text-[10px] sm:text-[18px] font-[300]'>Tracking <br /> growth</p>
    </div>
  
</section>
{/* user grade details  */}
<section className='bg-[#0B1A37] w-full rounded-[30px] flex items-center gap-1 p-3'>
    <div className='flex flex-1 flex-col items-center justify-center bg-[#112242] rounded-[16px] p-2'>
        <p className='text-center text-white text-[14px] sm:text-[18px] font-[300]'>3.7</p>
        <p className='text-center text-gray-300 text-[8px] sm:text-[18px] font-[300]'>GPA</p>
    </div>
    <div className='flex flex-1 flex-col items-center justify-center bg-[#112242] rounded-[16px] p-2'>
        <p className='text-center text-white text-[14px] sm:text-[18px] font-[300]'>1'st</p>
        <p className='text-center text-gray-300 text-[8px] sm:text-[18px] font-[300]'>Class</p>
    </div>
    <div className='flex flex-1 flex-col items-center justify-center bg-[#112242] rounded-[16px] p-2'>
        <p className='text-center text-white text-[14px] sm:text-[18px] font-[300]'>2</p>
        <p className='text-center text-gray-300 text-[8px] sm:text-[18px] font-[300]'>Quizes</p>
    </div>
</section>
        </main>
    </div>
  )
}

export default Hero