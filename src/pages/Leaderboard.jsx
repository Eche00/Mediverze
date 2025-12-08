import React from "react";
import Hero from "../leaderboardcomponent/Hero";
import Students from "../leaderboardcomponent/Students";


function Leaderboard() {
  return (
    <main>
      {/* <h1 className="text-3xl font-bold mb-4">Leaderboard</h1> */}
      <Hero />
      <div className="w-[90%] mx-auto mt-32 sm:mt-58">
        <Students />
      </div>
    </main>
  );
}

export default Leaderboard;
