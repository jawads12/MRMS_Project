const ContactCard = ({ rectangle4Id }) => {
  return (
    <div className="absolute top-[213px] left-[1162px] w-[381px] h-[381px] text-left text-xl text-white font-poppins">
      <div className="absolute top-[0px] left-[7px] w-[374px] h-[67px]">
        <h3 className="m-0 absolute top-[0px] left-[5px] text-[inherit] font-medium font-inherit inline-block w-[182px] h-[35px]">
          CONTACT NO.
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
          ALTERNATE CONTACT NO.
        </h3>
        <input
          className="bg-maroon-400 absolute top-[40px] left-[0px] box-border w-[374px] h-[26px] opacity-[0.7] border-[1px] border-solid border-white"
          type="text"
          maxLength
          minLength
          id="acontno"
        />
      </div>
      <div className="absolute top-[217px] left-[7px] w-[374px] h-[61px]">
        <h3 className="m-0 absolute top-[0px] left-[5px] text-[inherit] font-medium font-inherit inline-block w-[182px] h-[35px]">
          EMAIL
        </h3>
        <input
          className="bg-maroon-400 absolute top-[35px] left-[0px] box-border w-[374px] h-[26px] opacity-[0.7] border-[1px] border-solid border-white"
          type="text"
          maxLength
          minLength
          id="email"
        />
      </div>
      <div className="absolute top-[320px] left-[7px] w-[374px] flex flex-col py-0 pr-0 pl-[3px] box-border items-start justify-start">
        <h3 className="m-0 relative text-[inherit] font-medium font-inherit inline-block w-[182px] h-[35px] shrink-0">
          PASSWORD
        </h3>
        <input
          className="bg-maroon-400 relative box-border w-[374px] h-[26px] opacity-[0.7] border-[1px] border-solid border-white"
          type="text"
          maxLength
          minLength
          id="pass"
        />
      </div>
    </div>
  );
};

export default ContactCard;
