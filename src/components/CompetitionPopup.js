import { Navigate, useNavigate } from "react-router-dom";

const CompetitionPopup = ({ onClose }) => {

  const navigate =   useNavigate();

  return (
    <div className="absolute top-[235px] left-[553px] bg-white shadow-[0px_4px_100px_rgba(0,_0,_0,_0.25)] w-[1028px] h-[560px] overflow-hidden max-w-full max-h-full text-left text-lg text-dimgray-600 font-poppins">
      <button
        className="cursor-pointer [border:none] py-3.5 px-4 bg-limegreen absolute top-[455px] right-[413px] rounded w-[170px] h-[33px] overflow-hidden flex flex-row box-border items-center justify-between"
        id="AnnounceCompetition"
      >
        <b className="relative text-mid leading-[100%] flex font-poppins text-white text-center items-center justify-center w-[152px] h-6 shrink-0">
          Announce
        </b>
      </button>
      <label
        className="absolute top-[283px] left-[629px] font-medium inline-block w-[260px] h-5"
        id="studentname"
      >
        Rover Version
      </label>
      <input
        className="bg-whitesmoke-200 absolute top-[320px] left-[625px] rounded box-border w-[368px] h-[41px] border-[1px] border-solid border-darkslategray-400"
        type="text"
        maxLength
        minLength
        required
        id="rover_version"
      />
      <label
        className="absolute top-[167px] left-[629px] font-medium inline-block w-[260px] h-5"
        id="studentname"
      >
        Rover Name
      </label>
      <input
        className="bg-whitesmoke-200 absolute top-[204px] left-[625px] rounded box-border w-[368px] h-[41px] border-[1px] border-solid border-darkslategray-400"
        type="text"
        maxLength
        minLength
        required
        id="roverName"
      />
      <label
        className="absolute top-[283px] left-[335px] font-medium inline-block w-[260px] h-5"
        id="studentname"
      >
        End Date
      </label>
      <input
        className="bg-whitesmoke-200 absolute top-[323px] left-[335px] rounded box-border w-[257px] h-[41px] border-[1px] border-solid border-darkslategray-400"
        type="text"
        maxLength
        minLength
        required
        id="comp_end_date"
      />
      <label
        className="absolute top-[283px] left-[47px] font-medium inline-block w-[260px] h-5"
        id="studentname"
      >
        Start Date
      </label>
      <input
        className="bg-whitesmoke-200 absolute top-[323px] left-[47px] rounded box-border w-[257px] h-[41px] border-[1px] border-solid border-darkslategray-400"
        type="text"
        maxLength
        minLength
        required
        id="comp_start_date"
      />
      <label
        className="absolute top-[171px] left-[47px] font-medium inline-block w-[260px] h-5"
        id="studentname"
      >
        Competition Name
      </label>
      <input
        className="bg-whitesmoke-200 absolute top-[208px] left-[47px] rounded box-border w-[545px] h-[41px] border-[1px] border-solid border-darkslategray-400"
        type="text"
        maxLength
        minLength
        required
        id="competition_name"
      />
      <div className="absolute top-[70px] left-[251px] w-[517px] h-[39px] text-center text-xl text-white">
        <div className="absolute top-[0px] left-[263px] bg-crimson-300 w-[254px] h-[39px] overflow-hidden opacity-[0.6]" />
        <div className="absolute top-[0px] left-[0px] bg-crimson-300 w-[263px] h-[39px] overflow-hidden" />
        <div className="absolute top-[0px] left-[0px] font-semibold flex items-center justify-center w-[263px] h-[37px]">
          Competition
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[263px] text-xl font-semibold font-poppins text-white text-center flex items-center justify-center w-[254px] h-[38px]"
          id="componentsbutton"
          onClick={()=>navigate('/announcement-page-others')}
        >
          Others
        </button>
      </div>
    </div>
  );
};

export default CompetitionPopup;
