import { useNavigate } from "react-router-dom";

const ConfirmLogoutPopup = ({ onClose }) => {
  const navigate = useNavigate();

  const onDaco15697181IconClick = () => {
    navigate("/view-member-page");
  };

  const onEngagingButtontrueContainerClick = () => {
    navigate("/");
  };

  return (
    <div className="relative bg-white shadow-[0px_4px_100px_rgba(0,_0,_0,_0.25)] w-[363px] h-[218px] overflow-hidden max-w-full max-h-full text-center text-13xl text-black font-poppins">
      <img
        className="absolute top-[24px] left-[708px] w-5 h-5 object-cover cursor-pointer"
        alt=""
        src="/daco-1569718-1@2x.png"
        onClick={onDaco15697181IconClick}
      />
      <div className="absolute top-[56px] left-[24px] w-[326px] h-[121px]">
        <label
          className="absolute top-[0px] left-[0.8px] font-medium inline-block w-[312.52px] h-[48.88px]"
          id="studentname"
        >
          Confirm logout?
        </label>
        <div
          className="absolute top-[72.12px] left-[0px] w-[186.71px] h-[48.88px] flex flex-row items-center justify-center cursor-pointer"
          onClick={onEngagingButtontrueContainerClick}
        >
          <button className="cursor-pointer [border:none] py-3.5 px-4 bg-limegreen rounded w-[101px] h-[33px] overflow-hidden shrink-0 flex flex-row box-border items-center justify-between">
            <b className="relative text-mini leading-[100%] font-poppins text-white text-left">
              Confirm
            </b>
          </button>
        </div>
        <div
          className="absolute top-[72px] left-[126px] w-[200px] h-[49px] flex flex-row items-center justify-center cursor-pointer"
          onClick={onClose}
        >
          <button className="cursor-pointer [border:none] py-3.5 px-4 bg-orangered-100 rounded w-[101px] h-[33px] overflow-hidden shrink-0 flex flex-row box-border items-center justify-between">
            <b className="relative text-mini leading-[100%] font-poppins text-white text-left">
              Cancel
            </b>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmLogoutPopup;
