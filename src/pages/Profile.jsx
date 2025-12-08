import { Logout } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import LocationOn from "@mui/icons-material/LocationOn";
import Profilebottom from "./Profilebottom";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";

function Profile() {
  const [user, setUser] = useState(false);
  const [about, setAbout] = useState(true);
  const [setting, setSetting] = useState(false);
  const navigate = useNavigate();

  // handle setting toggle
  const settingToggle = (e) => {
    if (e.target.id === "about") {
      setAbout(true);
      setSetting(false);
    } else if (e.target.id === "setting") {
      setAbout(false);
      setSetting(true);
    }
  };

  // logout func
  const handleLogOut = async (e) => {
    e.preventDefault();
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.log(error.code);
    }
  };

  return (
    <div className=" w-full sm:h-[100vh] h-full overflow-scroll sm:pb-0 pb-[100px]">
      {/* container  */}
      <main className="  flex xl:flex-row flex-col gap-[20px]  w-full sm:p-[20px]  ">
        {/* subcontainer  */}
        <section className=" flex flex-col items-center  justify-center gap-[20px]  d  sm:shadow-2xl   sm:rounded-2xl sm:p-10 p-5 xl:w-fit w-full h-fit">
          {/* avatar */}
          <div className="py-[20px] border-b-2 border-gray-300 sm:shadow-b-2xl flex lg:flex-row flex-col sm:items-start  items-center gap-[10px] justify-center    w-full">
            {" "}
            <img
              src="/avatar.webp"
              alt="avatar"
              className="w-[150px] h-[150px] rounded-[20px] object-cover border-[5px] border-gray-400"
            />
            {/* follos  */}
            {user && (
              <div className="flex flex-row  items-baseline justify-between w-full">
                <p className=" flex flex-col items-center text-gray-400   px-[10px] py-[8px] rounded-[10px] text-[16px] font-[400]">
                  <span className=" font-extrabold text-gray-700 ">
                    100
                  </span>
                  Following
                </p>
                <p className=" flex flex-col items-center text-gray-400   px-[10px] py-[8px] rounded-[10px] text-[16px] font-[400]">
                  <span className=" font-extrabold text-gray-700 ">
                    100
                  </span>
                  Followers
                </p>
              </div>
            )}
          </div>

          {/* user info  */}
          <div className="sm:hidden flex sm:flex-row  items-baseline justify-between w-full">
            <h1 className=" text-start  text-black font-bold font-serif  text-[20px]">
              @John_Doe
              <br />
              <span className="  text-[#6357F9]  rounded-[10px] text-sm font-extrabold">
                Call of duty
              </span>
            </h1>
            <p className=" flex items-baseline text-[#6357F9]  bg-[#6357F9]/20 px-[10px] py-[8px] rounded-[10px] text-sm font-extrabold">
              <LocationOn fontSize="small" /> Nigeria
            </p>
          </div>

        </section>

        {/* subcontainer 2  */}
        <section className=" flex-1  sm:shadow-2xl   sm:rounded-2xl sm:p-10 p-5 ">
          {/* username/location  */}
          <div className="sm:flex hidden sm:flex-row  items-baseline justify-between">
            <h1 className=" text-start  text-black font-bold font-serif  text-[20px]">
              @John_Doe <br />
              <span className="  text-[#6357F9]  rounded-[10px] text-sm font-extrabold">
                Call of duty
              </span>
            </h1>
            <p className=" flex items-baseline text-[#6357F9]  bg-[#6357F9]/20 px-[10px] py-[8px] rounded-[10px] text-sm font-extrabold">
              <LocationOn fontSize="small" /> Nigeria
            </p>
          </div>
          {/* bio  */}
          <p className="hidden sm:block bg-[#0B1A37]  border-2 border-gray-300  text-white  p-[20px] rounded-xl my-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Recusandae eligendi eaque eius quo distinctio, at commodi.
          </p>
          {/* bottom navigation section  */}
          <div className="pt-[10px] sm:mt-20 border-b-2 border-gray-300 sm:shadow-b-2xl    w-full flex items-center sm:justify-start justify-between gap-[20px]">
            <button
              className={`w-[120px] text-center font-bold   text-[16px] m-0 leading-1 py-5 ${about
                ? "border-b-3 text-[#6357F9] border-[#6357F9] "
                : " text-black"
                }  transition-all duration-200 cursor-pointer`}
              onClick={settingToggle}
              id="about">
              About
            </button>
            <button
              className={`w-[120px] text-center font-bold   text-[16px] m-0 leading-1 py-5 ${setting
                ? "border-b-3 text-[#6357F9] border-[#6357F9] "
                : " text-black"
                }  transition-all duration-200 cursor-pointer`}
              onClick={settingToggle}
              id="setting">
              Settings
            </button>
          </div>
          {/* bottom section  */}
          <div className=" my-5 w-full">
            <Profilebottom about={about} />
          </div>
          {/* log out  */}

          <div className="w-full">
            {" "}
            <button
              onClick={handleLogOut}
              className="flex-1  bg-red-500 cursor-pointer sm:w-[120px] w-full py-[8px] rounded-[10px] transition-all duration-300 flex items-center justify-center gap-[10px]">
              Logout <Logout fontSize="" />
            </button>
          </div>
        </section>

      </main>
    </div>
  );
}

export default Profile;
