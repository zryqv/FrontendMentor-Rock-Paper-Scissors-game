import GameOption from './components/GameOption';
import { ReactComponent as Rock } from './images/icon-rock.svg';
import { ReactComponent as Paper } from './images/icon-paper.svg';
import { ReactComponent as Scissors } from './images/icon-scissors.svg';
import { ReactComponent as Triangle } from './images/bg-triangle.svg';
import paper from './images/icon-paper.svg';
import scissors from './images/icon-scissors.svg';
import rock from './images/icon-rock.svg';
import triangle from './images/bg-triangle.svg';
import logo from './images/logo.svg';
import NewGame from './components/NewGame';
import Deciding from './components/Deciding';
import Results from './components/Results';
import { useState } from 'react';

function App() {
  const [score, setScore] = useState(() => localStorage.getItem('score') || 0);
  const [userPick, setUserPick] = useState(null);
  const [housePick, setHousePick] = useState(null);
  const [over, setOver] = useState(false);
  return (
    <>
      <div
        className=' h-screen w-screen text-white'
        style={{
          background:
            'radial-gradient(at top, hsl(214, 47%, 23%), hsl(237, 49%, 15%))',
        }}
      >
        <div className='h-[25%] flex justify-center items-center '>
          <div className='w-[12rem] sm:w-[18rem] mx-auto border-[#606E85] rounded-[0.3rem] border-2 flex justify-between items-center px-[0.7rem] py-2'>
            <div className='w-[3rem]'>
              <img src={logo} alt='' />
            </div>
            <div className='flex flex-col justify-center items-center bg-white px-2 py-1 rounded-md w-[3rem] h-[3rem]'>
              <div className='text-[#2A46C0] uppercase text-[0.4rem] tracking-widest -mb-[0.3rem]'>
                Score
              </div>
              <div className='text-[#3B4363] text-3xl font-bold'>{score}</div>
            </div>
          </div>
        </div>
        <div className='h-[65%] w-full flex   items-start flex-col pt-20 py-10'>
          {userPick ? (
            <Deciding
              setOver={setOver}
              userPick={userPick}
              housePick={housePick}
              setHousePick={setHousePick}
            />
          ) : (
            <div className='w-[9rem] mx-auto'>
              <NewGame setUserPick={setUserPick} />
            </div>
          )}

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
        <div className='h-[10%] flex justify-center sm:justify-end items-center'>
          <button className='uppercase tracking-widest border-[#606E85] rounded-[0.3rem] border-[1px] px-4 py-1 text-[0.5rem] hover:bg-white hover:bg-opacity-10'>
            rules
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
