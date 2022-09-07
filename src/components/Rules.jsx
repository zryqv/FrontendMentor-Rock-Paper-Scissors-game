import close from "../images/icon-close.svg";
import rules from "../images/image-rules.svg";

function Rules({ setShowRules }) {
  return (
    <>
      <div
        className="w-screen h-screen bg-black bg-opacity-50 fixed z-40 items-center justify-center  hidden sm:flex"
        onClick={() => setShowRules(false)}
      >
        <div
          className="z-50 rounded-lg bg-white h-fit w-[35%] shadow-lg shadow-black px-6 py-6  justify-start items-center flex-col flex"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-4 w-full">
            <div className="text-[#3B4363] text-xl leading-8 uppercase tracking-wide font-bold">
              Rules
            </div>
            <div className="cursor-pointer" onClick={() => setShowRules(false)}>
              <img src={close} width={13} alt="" />
            </div>
          </div>
          <img src={rules} alt="" className="my-6" width={270} />
        </div>
      </div>
      <div className="w-screen h-screen fixed bg-white z-50 sm:hidden flex justify-evenly items-center flex-col">
        <div className="text-[#3B4363] text-2xl leading-8 uppercase tracking-wide font-bold">
          rules
        </div>
        <img src={rules} alt="" className="my-6" width={270} />
        <div className="cursor-pointer" onClick={() => setShowRules(false)}>
          <img src={close} width={20} alt="" />
        </div>
      </div>
    </>
  );
}
export default Rules;
