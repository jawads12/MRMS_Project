import { useMemo } from "react";

const ContainerCard = ({
  teamMemberName,
  teamMemberFullName,
  teamLeaderName,
  propTop,
  propLeft,
}) => {
  const component5Style = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div
      className="absolute top-[5075px] left-[942px] w-[489.27px] flex flex-col items-center justify-center text-left text-13xl text-black font-inter"
      style={component5Style}
    >
      <div className="self-stretch relative h-[671px] hover:cursor-pointer">
        <div className="absolute h-[95.08%] w-[93.81%] top-[4.92%] right-[11.7%] bottom-[0%] left-[-5.52%] rounded-19xl bg-white shadow-[0px_4px_100px_5px_rgba(0,_0,_0,_0.25)] hover:bg-maroon-100 hover:cursor-pointer" />
        <img
          className="absolute h-[80.62%] w-[83.24%] top-[0%] right-[0%] bottom-[19.38%] left-[16.76%] rounded-8xl max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src={teamMemberName}
        />
        <b className="absolute h-[3.43%] w-[71.74%] top-[83.76%] left-[0.61%] inline-block hover:text-white">
          {teamMemberFullName}
        </b>
        <div className="absolute h-[3.43%] w-[71.74%] top-[90.31%] left-[1.84%] text-5xl font-light inline-block hover:text-white">
          {teamLeaderName}
        </div>
        <div className="absolute top-[114px] left-[3px] w-[60px] h-[60px] flex flex-col items-center justify-end">
          <div className="relative rounded-[50%] bg-white w-[60px] h-[60px]" />
          <img
            className="relative w-[35px] h-[38px] object-cover mt-[-49px]"
            alt=""
            src="/fb-logo-1@2x.png"
          />
        </div>
        <div className="absolute top-[302px] left-[3px] w-[60px] h-[60px] flex flex-col items-center justify-end">
          <div className="relative rounded-[50%] bg-white w-[60px] h-[60px]" />
          <img
            className="relative w-10 h-10 object-cover mt-[-50px]"
            alt=""
            src="/insta-logo-1@2x.png"
          />
        </div>
        <div className="absolute top-[208px] left-[-1px] w-[60px] h-[60px] flex flex-col items-center justify-end">
          <div className="relative rounded-[50%] bg-white w-[60px] h-[60px]" />
          <img
            className="relative w-10 h-10 object-cover mt-[-49px]"
            alt=""
            src="/twitter-logo-1@2x.png"
          />
        </div>
        <div className="absolute top-[396px] left-[1px] w-[60px] h-[60px] flex flex-col items-center justify-end">
          <div className="relative rounded-[50%] bg-white w-[60px] h-[60px]" />
          <img
            className="relative w-10 h-10 object-cover mt-[-52px]"
            alt=""
            src="/linkedin-logo-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default ContainerCard;
