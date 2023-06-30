import { useState, useMemo } from "react";
import TeamMemberList from "./TeamMemberList";
import PortalPopup from "./PortalPopup";

const ElectricalContainer = ({ image51, electrical, propLeft, propLeft1 }) => {
  const [isTeamMemberListPopupOpen, setTeamMemberListPopupOpen] =
    useState(false);
  const electricalButtonStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const electricalStyle = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  const openTeamMemberListPopup = () => {
    setTeamMemberListPopupOpen(true);
  };

  const closeTeamMemberListPopup = () => {
    setTeamMemberListPopupOpen(false);
  };

  return (
    <>
      <div
        className="absolute top-[202px] left-[569px] w-[272px] h-[247px] cursor-pointer text-left text-13xl text-white font-poppins hover:bg-white hover:cursor-pointer"
        onClick={openTeamMemberListPopup}
        style={electricalButtonStyle}
      >
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xl bg-firebrick-400 shadow-[0px_4px_50px_rgba(0,_0,_0,_0.25)] hover:bg-midnightblue hover:cursor-pointer" />
        <img
          className="absolute top-[21px] left-[64px] w-[153px] h-[148px] object-cover"
          alt=""
          src={image51}
        />
        <b
          className="absolute top-[172px] left-[61px] inline-block w-[246px] h-[53px]"
          style={electricalStyle}
        >
          {electrical}
        </b>
      </div>
      {isTeamMemberListPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTeamMemberListPopup}
        >
          <TeamMemberList department={electrical} onClose={closeTeamMemberListPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default ElectricalContainer;
