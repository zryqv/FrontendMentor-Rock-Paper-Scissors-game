import paper from '../images/icon-paper.svg';
import scissors from '../images/icon-scissors.svg';
import rock from '../images/icon-rock.svg';
import triangle from '../images/bg-triangle.svg';
import GameOption from './GameOption';
import { useEffect, useState } from 'react';
function Deciding({ userPick, housePick, setHousePick, setOver }) {
  let houseIcon = null,
    houseColor = null;
  const icon = userPick === 1 ? scissors : userPick === 2 ? paper : rock;
  const color =
    userPick === 1
      ? 'bg-gradient-to-b from-[#EC9E0E] to-[#ECA922]'
      : userPick === 2
      ? 'bg-gradient-to-b from-[#4865F4] to-[#5671F5]'
      : 'bg-gradient-to-b from-[#DC2E4E] to-[#DD405D]';
  useEffect(() => {
    const timer = setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 3) + 1;
      setHousePick(randomNumber);
      setOver(true);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  if (housePick) {
    houseIcon = housePick === 1 ? scissors : housePick === 2 ? paper : rock;
    houseColor =
      housePick === 1
        ? 'bg-gradient-to-b from-[#EC9E0E] to-[#ECA922]'
        : housePick === 2
        ? 'bg-gradient-to-b from-[#4865F4] to-[#5671F5]'
        : 'bg-gradient-to-b from-[#DC2E4E] to-[#DD405D]';
  }
  return (
    <>
      <div className='flex justify-evenly items-end w-full  h-[30%]'>
        <div className='flex justify-center items-center flex-col '>
          <GameOption color={color} icon={icon} />
          <div className='text-[0.6rem] py-2 tracking-widest uppercase'>
            You picked
          </div>
        </div>
        <div className='flex justify-center items-center flex-col'>
          {housePick ? (
            <GameOption color={houseColor} icon={houseIcon} />
          ) : (
            <div className='bg-black opacity-20 rounded-full w-[4rem] h-[4rem] mb-[0.4rem]'></div>
          )}
          <div className='text-[0.6rem] py-2 tracking-widest uppercase'>
            The House Picked
          </div>
        </div>
      </div>
    </>
  );
}
export default Deciding;
