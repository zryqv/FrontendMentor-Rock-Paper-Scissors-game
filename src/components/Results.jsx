import { useEffect } from "react";

function Results({
  housePick,
  userPick,
  setOver,
  setUserPick,
  setHousePick,
  score,
  setScore,
}) {
  const isWinner = userPick - housePick === -1 || userPick - housePick === 2;
  const isDraw = userPick - housePick === 0;
  useEffect(() => {
    if (isWinner) {
      setScore(score + 1);
      localStorage.setItem("score", score);
    } else if (!isDraw) {
      setScore(score - 1);
      localStorage.setItem("score", score);
    } else {
    }
  }, []);
  return (
    <>
      <div className="flex justify-center items-center flex-col w-full  h-[30%]  ">
        <div className="font-bold text-5xl sm:text-3xl uppercase tracking-widest my-3 sm:my-1">
          {isWinner ? "You win" : isDraw ? "DRAW" : "you lose"}
        </div>
        <button
          onClick={() => {
            setHousePick(null);
            setUserPick(null);
            setOver(false);
          }}
          className="text-[#3B4363] w-52 sm:w-36 bg-white rounded-lg text-md px-3 py-3 sm:py-2 uppercase tracking-wider hover:bg-[#3B4363] hover:text-white"
        >
          play again
        </button>
      </div>
    </>
  );
}
export default Results;
