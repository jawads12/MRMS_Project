import { useMemo } from "react";

const UpdateNameCard = ({
  rectangle4Id,
  rectangle4Id1,
  rectangle4Id2,
  propLeft,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div className="absolute top-[231px] left-[670px] w-[381px] h-[381px] text-left text-xl text-white font-poppins">
      <div className="absolute top-[0px] left-[7px] w-[374px] h-[67px]">
        <h3 className="m-0 absolute top-[0px] left-[5px] text-[inherit] font-medium font-inherit inline-block w-[182px] h-[35px]">
          First Name
        </h3>
        <input
          className="bg-maroon-400 absolute top-[41px] left-[0px] box-border w-[374px] h-[26px] opacity-[0.7] border-[1px] border-solid border-white"
          type="text"
          maxLength
          minLength
          id={rectangle4Id}
        />
      </div>
      <div className="absolute top-[109px] left-[7px] w-[374px] h-[66px]">
        <h3 className="m-0 absolute top-[0px] left-[5px] text-[inherit] font-medium font-inherit inline-block w-[304px] h-[35px]">
          Last Name
        </h3>
        <input
          className="bg-maroon-400 absolute top-[40px] left-[0px] box-border w-[374px] h-[26px] opacity-[0.7] border-[1px] border-solid border-white"
          type="text"
          maxLength
          minLength
          id={rectangle4Id1}
        />
      </div>
      <div
        className="absolute top-[217px] left-[7px] w-[374px] h-[61px]"
        style={frameDivStyle}
      >
        <h3 className="m-0 absolute top-[0px] left-[5px] text-[inherit] font-medium font-inherit inline-block w-[182px] h-[35px]">
          Level
        </h3>
        <input
          className="bg-maroon-400 absolute top-[35px] left-[0px] box-border w-[374px] h-[26px] opacity-[0.7] border-[1px] border-solid border-white"
          type="text"
          maxLength
          minLength
          id={rectangle4Id2}
        />
      </div>
    </div>
  );
};

export default UpdateNameCard;
