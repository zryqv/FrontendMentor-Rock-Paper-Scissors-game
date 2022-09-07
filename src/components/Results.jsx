import paper from '../images/icon-paper.svg';
import scissors from '../images/icon-scissors.svg';
import rock from '../images/icon-rock.svg';
import triangle from '../images/bg-triangle.svg';
import GameOption from './GameOption';
import { useEffect } from 'react';

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
      localStorage.setItem('score', score);
    } else if (!isDraw) {
      setScore(score - 1);
      localStorage.setItem('score', score);
    }
  }, []);
  return (
    <>
      <div className='flex justify-center items-center flex-col w-full  h-[30%] py-20'>
        <div className='font-bold text-3xl uppercase tracking-widest my-3'>
          {isWinner ? 'You win' : isDraw ? 'DRAW' : 'you lose'}
        </div>
        <button
          onClick={() => {
            setHousePick(null);
            setUserPick(null);
            setOver(false);
          }}
          className='text-[#3B4363] w-32 bg-white rounded-lg text-xs px-3 py-1 uppercase tracking-wider'
        >
          play again
        </button>
      </div>
    </>
  );
}
export default Results;
