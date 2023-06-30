const ConfirmTaskCompletion = ({ onClose }) => {
  return (
    <div className="relative bg-white shadow-[0px_4px_100px_rgba(0,_0,_0,_0.25)] w-[477px] h-[215px] overflow-hidden max-w-full max-h-full text-center text-5xl text-black font-poppins">
      <img
        className="absolute top-[20px] left-[440px] w-5 h-5 object-cover cursor-pointer"
        alt=""
        src="/daco-1569718-1@2x.png"
        onClick={onClose}
      />
      <button
        className="cursor-pointer [border:none] py-3.5 px-4 bg-limegreen absolute top-[131px] right-[153px] rounded w-[170px] h-[33px] overflow-hidden flex flex-row box-border items-center justify-between"
        onClick={onClose}
      >
        <b className="relative text-mini leading-[100%] flex font-poppins text-white text-center items-center justify-center w-[135px] h-6 shrink-0">
          Confirm
        </b>
      </button>
      <label
        className="absolute top-[60px] left-[44px] inline-block w-[390px] h-[110px]"
        id="dept"
      >
        Confirm task completion?
      </label>
    </div>
  );
};

export default ConfirmTaskCompletion;
