import { ReactComponent as Rock } from '../images/icon-rock.svg';
function GameOption({ color, icon, ...props }) {
  return (
    <div className='cursor-pointer hover:animate-bounce' {...props}>
      <div
        className={`flex justify-center items-center rounded-full w-[5rem] h-[5rem] ${color} relative `}
      >
        <div className='bg-white rounded-full  w-[4rem] h-[4rem] flex justify-center items-center border-t-[3.7px]'>
          <img src={icon} className='w-[1.3rem] ' alt='' />
        </div>
        <div
          className={`rounded-full w-[5rem] h-[5rem]  absolute border-b-[3.9px] bg-opacity-0 border-opacity-20 border-black  `}
        ></div>
      </div>
    </div>
  );
}
export default GameOption;
