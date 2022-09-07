import logo from "./images/logo.svg";
import NewGame from "./components/NewGame";
import Deciding from "./components/Deciding";
import Results from "./components/Results";
import { useState } from "react";

function App() {
  const [score, setScore] = useState(() => +localStorage.getItem("score") || 0);
  const [userPick, setUserPick] = useState(null);
  const [housePick, setHousePick] = useState(null);
  // const [over, setOver] = useState(false);
  return (
    <>
      <div
        className=" h-screen w-screen text-white"
        style={{
          background:
            "radial-gradient(at top, hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
        }}
      >
        <div className="h-[25%] flex justify-center items-center ">
          <div className="w-[18rem] sm:w-[26rem] mx-auto border-[#606E85] rounded-[0.3rem] border-2 flex justify-between items-center px-[0.7rem] py-2">
            <div className="w-[5rem] sm:w-[7rem]">
              <img src={logo} alt="" />
            </div>
            <div className="flex flex-col justify-center items-center bg-white px-2 py-1 rounded-md sm:w-[5rem] sm:h-[5rem] w-[4rem] h-[4rem]">
              <div className="text-[#2A46C0] uppercase text-[0.5rem] sm:text-[0.6rem] tracking-widest -mb-[0.3rem]">
                Score
              </div>
              <div className="text-[#3B4363] text-3xl sm:text-5xl font-bold">
                {score}
              </div>
            </div>
          </div>
        </div>
        <div className="h-[65%] w-full flex   items-start flex-col pt-20 py-10">
          {userPick ? (
            <Deciding
              setUserPick={setUserPick}
              score={score}
              setScore={setScore}
              userPick={userPick}
              housePick={housePick}
              setHousePick={setHousePick}
            />
          ) : (
            <div className="w-[15rem] sm:w-[20rem] mx-auto">
              <NewGame setUserPick={setUserPick} />
            </div>
          )}
          {/* 
          {over && (
            <Results
              setScore={setScore}
              score={score}
              setHousePick={setHousePick}
              setUserPick={setUserPick}
              housePick={housePick}
              userPick={userPick}
              setOver={setOver}
            />
          )} */}
        </div>
        <div className="h-[10%] flex justify-center sm:justify-end items-center">
          <button className="sm:mr-4 uppercase tracking-widest border-[#606E85] rounded-[0.3rem] border-[1px] px-4 py-1 text-[0.7rem] hover:bg-white hover:bg-opacity-10">
            rules
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
