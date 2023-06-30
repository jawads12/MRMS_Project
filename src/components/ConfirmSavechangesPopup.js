import { useNavigate } from "react-router-dom";

const ConfirmSavechangesPopup = ({ onClose }) => {
  const navigate = useNavigate();

  const onDaco15697181IconClick = () => {
    navigate("/view-member-page");
  };

  const onEngagingButtontrueContainerClick = () => {
    navigate("/student-profile");
  };

  const onEngagingButtontrueContainer1Click = () => {
    navigate("/stud-profileupdate");
  };

  return (
    <div className="relative bg-white shadow-[0px_4px_100px_rgba(0,_0,_0,_0.25)] w-[432px] h-[296px] overflow-hidden max-w-full max-h-full text-center text-13xl text-black font-poppins">
      <label
        className="absolute top-[70px] left-[45px] font-medium inline-block w-[345px]"
        id="studentname"
      >
        Confirm changes?
      </label>
      <img
        className="absolute top-[24px] left-[708px] w-5 h-5 object-cover cursor-pointer"
        alt=""
        src="/daco-1569718-1@2x.png"
        onClick={onDaco15697181IconClick}
      />
      <div
        className="absolute top-[190px] left-[21px] w-[233px] h-[61px] flex flex-row items-center justify-center cursor-pointer"
        onClick={onEngagingButtontrueContainerClick}
      >
        <button className="cursor-pointer [border:none] py-3.5 px-4 bg-limegreen rounded w-[101px] h-[33px] overflow-hidden shrink-0 flex flex-row box-border items-center justify-between">
          <b className="relative text-mini leading-[100%] font-poppins text-white text-left">
            Confirm
          </b>
        </button>
      </div>
      <div
        className="absolute top-[190px] left-[178px] w-[233px] h-[61px] flex flex-row items-center justify-center cursor-pointer"
        onClick={onEngagingButtontrueContainer1Click}
      >
        <button className="cursor-pointer [border:none] py-3.5 px-4 bg-orangered-100 rounded w-[101px] h-[33px] overflow-hidden shrink-0 flex flex-row box-border items-center justify-between">
          <b className="relative text-mini leading-[100%] font-poppins text-white text-left">
            Cancel
          </b>
        </button>
      </div>
    </div>
  );
};

export default ConfirmSavechangesPopup;
