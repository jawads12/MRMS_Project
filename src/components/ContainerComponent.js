import { useState } from "react";
import PendingMemberInfo from "./PendingMemberInfo";
import PortalPopup from "./PortalPopup";
import ConfirmDeleteRequestPopup from "./ConfirmDeleteRequestPopup";

const ContainerComponent = () => {
  const [isPendingMemberInfoPopupOpen, setPendingMemberInfoPopupOpen] =
    useState(false);
  const [isConfirmDeleteRequestPopupOpen, setConfirmDeleteRequestPopupOpen] =
    useState(false);
  const [isPendingMemberInfoPopup1Open, setPendingMemberInfoPopup1Open] =
    useState(false);

  const openPendingMemberInfoPopup = () => {
    setPendingMemberInfoPopupOpen(true);
  };

  const closePendingMemberInfoPopup = () => {
    setPendingMemberInfoPopupOpen(false);
  };

  const openPendingMemberInfoPopup1 = () => {
    setPendingMemberInfoPopup1Open(true);
  };

  const closePendingMemberInfoPopup1 = () => {
    setPendingMemberInfoPopup1Open(false);
  };

  const openConfirmDeleteRequestPopup = () => {
    setConfirmDeleteRequestPopupOpen(true);
  };

  const closeConfirmDeleteRequestPopup = () => {
    setConfirmDeleteRequestPopupOpen(false);
  };

  return (
    <>
      <div className="absolute top-[208.13px] left-[500px] w-[1147.27px] h-[117.24px] text-left text-5xl text-black font-poppins">
        <div className="absolute top-[0px] left-[0px] w-[1147.27px] h-[117.24px]">
          <div className="absolute h-[978.16%] w-[10.05%] top-[98.3%] right-[89.95%] bottom-[-976.46%] left-[0%] rounded-170xl bg-white shadow-[0px_4px_50px_rgba(0,_0,_0,_0.25)] [transform:_rotate(-89.78deg)] [transform-origin:0_0]" />
          <img
            className="absolute h-[90%] w-[9.2%] top-[5.01%] right-[90.34%] bottom-[4.99%] left-[0.46%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/person-icon-1@2x.png"
          />
        </div>
        <div className="absolute h-[33.26%] w-[38.53%] top-[22.07%] left-[11.18%] font-semibold inline-block">
          Mayeesha Musarrat
        </div>
        <button
          className="cursor-pointer [border:none] py-3 px-[9px] bg-darkslategray-100 absolute h-[36.68%] w-[12.46%] top-[33.15%] right-[31.14%] bottom-[30.17%] left-[56.39%] flex flex-col box-border items-end justify-end"
          id="view_detail_button"
          onClick={openPendingMemberInfoPopup}
        >
          <b className="relative text-mini leading-[100%] inline-block font-poppins text-white text-left w-28 h-[17px] shrink-0">
            View Details
          </b>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[38.87px] left-[806px] w-[303px] h-[43px]"
          id="viewDetails"
          onClick={openPendingMemberInfoPopup1}
        >
          <button
            className="cursor-pointer [border:none] p-0 bg-green absolute h-full w-[47.19%] top-[0%] right-[52.81%] bottom-[0%] left-[0%]"
            id="accept_button"
          />
          <b className="absolute w-[36.96%] top-[32.56%] left-[5.61%] text-mini leading-[100%] inline-block font-poppins text-white text-center">
            Accept
          </b>
          <button
            className="cursor-pointer [border:none] py-0 px-[13px] bg-crimson-100 absolute h-full w-[47.19%] top-[0%] right-[0%] bottom-[0%] left-[52.81%] flex flex-col box-border items-end justify-center"
            id="decline_button"
            onClick={openConfirmDeleteRequestPopup}
          >
            <b className="relative text-mini leading-[100%] flex font-poppins text-white text-center items-center justify-center w-28 h-[17px] shrink-0">
              Decline
            </b>
          </button>
        </button>
      </div>
      {isPendingMemberInfoPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePendingMemberInfoPopup}
        >
          <PendingMemberInfo onClose={closePendingMemberInfoPopup} />
        </PortalPopup>
      )}
      {isPendingMemberInfoPopup1Open && (
        <PortalPopup
          overlayColor="rgba(255, 255, 255, 0.3)"
          placement="Centered"
          onOutsideClick={closePendingMemberInfoPopup1}
        >
          <PendingMemberInfo onClose={closePendingMemberInfoPopup1} />
        </PortalPopup>
      )}
      {isConfirmDeleteRequestPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeConfirmDeleteRequestPopup}
        >
          <ConfirmDeleteRequestPopup onClose={closeConfirmDeleteRequestPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default ContainerComponent;
