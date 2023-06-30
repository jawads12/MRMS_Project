const LastNameInputForm = () => {
  return (
    <div className="absolute top-[473px] left-[381px] w-[461.83px] h-[65.47px] text-left text-7xl text-white font-poppins">
      <div className="absolute top-[0px] left-[229.03px] inline-block w-[232.8px] h-[26.05px]">
        LAST NAME
      </div>
      <input
        className="bg-white absolute top-[33.79px] left-[216.78px] shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)] box-border w-[186.62px] h-[31.68px] opacity-[0.3] border-[1px] border-solid border-white"
        type="text"
        maxLength
        minLength
        id="lname"
      />
      <div className="absolute top-[0px] left-[0px] w-[239.4px] h-[65.47px]">
        <div className="absolute top-[0px] left-[6.6px] inline-block w-[232.8px] h-[26.05px]">
          FIRST NAME
        </div>
        <input
          className="bg-white absolute top-[33.79px] left-[0px] shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)] box-border w-[186.62px] h-[31.68px] opacity-[0.3] border-[1px] border-solid border-white"
          type="text"
          maxLength
          minLength
          id="fname"
        />
      </div>
    </div>
  );
};

export default LastNameInputForm;
