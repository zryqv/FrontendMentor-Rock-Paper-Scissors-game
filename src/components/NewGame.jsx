import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";
import rock from "../images/icon-rock.svg";
import triangle from "../images/bg-triangle.svg";
import GameOption from "./GameOption";

function NewGame({ setUserPick }) {
  return (
    <>
      <div className="relative">
        <img src={triangle} className="" alt="triangle" />
        <div className="absolute -top-[2.5rem] -left-[1.5rem]">
          <GameOption
            onClick={() => setUserPick(2)}
            color="bg-gradient-to-b from-[#4865F4] to-[#5671F5]"
            icon={paper}
          />
        </div>
        <div className="absolute -top-[2.5rem] -right-[1.5rem]">
          <GameOption
            onClick={() => setUserPick(1)}
            color="bg-gradient-to-b from-[#EC9E0E] to-[#ECA922]"
            icon={scissors}
          />
        </div>
        <div className="absolute -bottom-[2rem] left-[4.5rem] sm:left-[6.3rem]">
          <GameOption
            onClick={() => setUserPick(3)}
            color="bg-gradient-to-b from-[#DC2E4E] to-[#DD405D]"
            icon={rock}
          />
        </div>
      </div>
    </>
  );
}
export default NewGame;
