import { Circle } from "@mui/icons-material";
import { Link, useNavigate } from "react-router";

function Welcome({ setHome }) {
  const navigate = useNavigate()

  const getStarted = () => {
    setHome(false)
    navigate('/signup')
  }
  return (
    <div
      className="fixed top-0 left-0 w-full overflow-y-scroll bg-[#6357F9] min-h-[100vh] z-50"
    >
      {/* container  */}
      <main className="flex flex-col items-center justify-between h-[100vh] md:w-[80%] w-[90%] mx-auto overflow-y-scroll py-4">
        {/* image section */}
        <section className="flex flex-col gap-4">
          {/* top images  */}
          <div className="flex items-center justify-center gap-4">
            <div className="bg-[#0B1A37] md:w-[400px] md:h-[400px] w-full h-[160px] flex items-center justify-center rounded-tl-[100%] relative rounded-tr-[10px] rounded-bl-[10px] rounded-br-[10px]">
              <img src="https://www.freeiconspng.com/thumbs/clock-png/clock-png-31.png" alt="" className="md:w-[180px] md:h-[180px] w-[80px] h-[80px] object-cover absolute bottom-5 md:right-5 right-10" />

            </div>
            <img src="https://www.gettingsmart.com/wp-content/uploads/2017/01/Girl-with-Headphones-Using-Laptop-Listening-to-Podcast-Feature-Image.jpg" alt="" className="md:w-[400px] md:h-[400px] w-full sm:max-w-full max-w-[180px] h-[160px] object-cover rounded-tl-[100%] rounded-tr-[100%] rounded-br-[100%]   " />
          </div>
          {/* bottom images  */}
          <div className="flex items-center justify-center gap-4 md:hidden">

            <img src="https://arteasy.com.ng/wp-content/uploads/2024/07/VNEED-1.jpg" alt="" className="md:w-[400px] md:h-[400px] w-full sm:max-w-full max-w-[160px] h-[160px] object-cover rounded-[100%]   " />
            <img src="https://www.21kschool.com/et/wp-content/uploads/sites/38/2022/09/5-Benefits-of-Personalized-Learning.png" alt="" className="md:w-[400px] md:h-[400px] w-full sm:max-w-full max-w-[180px] h-[160px] object-cover rounded-[20px]   " />
          </div>
        </section>
        {/* info section  */}
        <section className=" flex flex-col gap-4 md:mt-0 mt-4">
          <h1 className=" text-center text-white sm:text-4xl text-3xl font-[300]">Welcome to Mediverze!</h1>
          <p className=" text-center text-gray-200 text-[15px] sm:text-[18px]">Sharpen your mind, challenge yourself, and climb the leaderboard.
            Your journey to brilliance starts now!</p>

          <div className="flex items-center justify-center gap-2 text-[#0b1a3742] mt-2">
            <Circle fontSize="small" />
            <Circle fontSize="small" />
            <hr className="bg-[#0B1A37] w-[50px] h-[20px] rounded-full border-none " />
          </div>
        </section>
        {/* CTA section  */}
        <section className="w-full flex">
          <Link to="/signup" className="w-full text-[24px] font-[300] text-center  bg-white text-[#0B1A37] py-[16px] px-[32px] rounded-[20px] cursor-pointer" onClick={getStarted}>Get started</Link>

        </section>
      </main>
    </div>
  );
}
// #0B1A37
export default Welcome;
