const FundContainer = () => {
  return (
    <div className="absolute h-[17.26%] w-[18.1%] top-[18.21%] right-[50%] bottom-[64.53%] left-[31.9%] text-left text-9xl text-white font-poppins">
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xl bg-firebrick-400 shadow-[0px_4px_50px_rgba(0,_0,_0,_0.25)] hover:bg-midnightblue hover:cursor-pointer" />
      <b className="absolute top-[31.79px] left-[76.52px] inline-block w-[194.44px] h-[46.01px]">
        Total fund:
      </b>
      <label
        className="absolute top-[91.34px] left-[84.47px] font-bold inline-block w-[194.44px] h-[53.23px]"
        id="totalfundirdc"
      >
        1200001 tk
      </label>
    </div>
  );
};

export default FundContainer;
