function GameOption({ color, icon, ...props }) {
  return (
    <div className="cursor-pointer hover:animate-bounce" {...props}>
      <div
        className={`flex justify-center items-center rounded-full w-[7rem] h-[7rem] ${color} relative `}
      >
        <div className="bg-white rounded-full  w-[5rem] h-[5rem] flex justify-center items-center border-t-[5.7px]">
          <img src={icon} className="w-[1.3rem] " alt="" />
        </div>
        <div
          className={`rounded-full w-[7rem] h-[7rem]  absolute border-b-[5.9px] bg-opacity-0 border-opacity-20 border-black  `}
        ></div>
      </div>
    </div>
  );
}
export default GameOption;
