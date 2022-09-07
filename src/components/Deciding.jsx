import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";
import rock from "../images/icon-rock.svg";
import GameOption from "./GameOption";
import { useEffect, useState } from "react";
import Results from "./Results";
function Deciding({
  userPick,
  housePick,
  setHousePick,
  setScore,
  score,
  setUserPick,
}) {
  const [over, setOver] = useState(false);
  const [winner, setWinner] = useState(null);
  let houseIcon = null,
    houseColor = null;

  const icon = userPick === 1 ? scissors : userPick === 2 ? paper : rock;
  const color =
    userPick === 1
      ? "bg-gradient-to-b from-[#EC9E0E] to-[#ECA922]"
      : userPick === 2
      ? "bg-gradient-to-b from-[#4865F4] to-[#5671F5]"
      : "bg-gradient-to-b from-[#DC2E4E] to-[#DD405D]";
  useEffect(() => {
    const timer = setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 3) + 1;
      setHousePick(randomNumber);
      setOver(true);
      setWinner(userPick - randomNumber);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  console.log("winner>", winner);
  if (housePick) {
    houseIcon = housePick === 1 ? scissors : housePick === 2 ? paper : rock;
    houseColor =
      housePick === 1
        ? "bg-gradient-to-b from-[#EC9E0E] to-[#ECA922]"
        : housePick === 2
        ? "bg-gradient-to-b from-[#4865F4] to-[#5671F5]"
        : "bg-gradient-to-b from-[#DC2E4E] to-[#DD405D]";
  }
  return (
    <>
      <div className="flex justify-center items-end w-full  h-[30%]">
        <div className="flex justify-center items-center flex-col mx-8 relative ">
          {(winner === -1 || winner === 2) && (
            <div
              style={{
                background:
                  "radial-gradient(circle , rgba(139,139,139,0) 0% 30%, rgba(255,255,255,0.1) 30% 40%, rgba(255,255,255,0.05) 40% 60%, rgba(255,255,255,0.02) 60% 100%)",
              }}
              className="rounded-full w-60 h-60 flex justify-center items-center absolute -top-[4.2rem] animate-pulse"
            ></div>
          )}
          <GameOption color={color} icon={icon} />

          <div className="text-[0.9rem] py-2 tracking-widest uppercase">
            You picked
          </div>
        </div>

        {over && (
          <div className="hidden sm:block mx-8 my-auto">
            <Results
              setWinner={setWinner}
              setScore={setScore}
              score={score}
              setHousePick={setHousePick}
              setUserPick={setUserPick}
              housePick={housePick}
              userPick={userPick}
              setOver={setOver}
            />
          </div>
        )}

        <div className="flex justify-center items-center flex-col mx-8 relative ">
          {(winner === 1 || winner === -2) && (
            <div
              style={{
                background:
                  "radial-gradient(circle , rgba(139,139,139,0) 0% 30%, rgba(255,255,255,0.1) 30% 40%, rgba(255,255,255,0.05) 40% 60%, rgba(255,255,255,0.02) 60% 100%)",
              }}
              className="rounded-full w-60 h-60 flex justify-center items-center absolute -top-[4.2rem] animate-pulse"
            ></div>
          )}
          {housePick ? (
            <GameOption color={houseColor} icon={houseIcon} />
          ) : (
            <div className="bg-black opacity-20 rounded-full w-[6rem] h-[6rem] mb-[0.4rem]"></div>
          )}
          <div className="text-[0.9rem] py-2 tracking-widest uppercase">
            The House Picked
          </div>
        </div>
      </div>
      <div className="sm:hidden flex justify-center items-center w-full">
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
        )}
      </div>
    </>
  );
}
export default Deciding;
