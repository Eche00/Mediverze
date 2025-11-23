import React from "react";
import Hero from "../homecomponents/Hero";
import Date from "../homecomponents/Date";
import PageOutlines from "../homecomponents/PageOutlines";
import { Circle } from "@mui/icons-material";

function Home() {
  return <div >
     <div className="w-[90%] mx-auto">
          <Hero/>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-[#0b1a3742] my-2">
  <Circle fontSize="small"/>
  <Circle fontSize="small"/>
  <hr className="bg-[#0B1A37] w-[50px] h-[20px] rounded-full border-none " />
</div>
          <Date/>

 <div className="w-[90%] mx-auto">
          <PageOutlines/>
          </div>

  </div>;
}

export default Home;
