import { useState } from "react";
import ConfirmLogoutPopup from "../components/ConfirmLogoutPopup";
import PortalPopup from "../components/PortalPopup";
import TeamMemberList from "../components/TeamMemberList";
import { useNavigate } from "react-router-dom";
import ElectricalContainer from "../components/ElectricalContainer";

const ViewMemberPage = () => {
  const [isConfirmLogoutPopupOpen, setConfirmLogoutPopupOpen] = useState(false);
  const [isTeamMemberListPopup2Open, setTeamMemberListPopup2Open] =
    useState(false);
  const [isTeamMemberListPopup3Open, setTeamMemberListPopup3Open] =
    useState(false);
  const [isTeamMemberListPopup4Open, setTeamMemberListPopup4Open] =
    useState(false);
  const [isTeamMemberListPopup5Open, setTeamMemberListPopup5Open] =
    useState(false);
  const navigate = useNavigate();

  const onViewMembers1Click = () => {
    navigate("/view-member-page");
  };

  const onViewMembersClick = () => {
    const anchor = document.querySelector("[data-scroll-to='rectangle2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const onFundManagementContainerClick = () => {
    navigate("/fund-management-page");
  };

  const onFundManagementClick = () => {
    const anchor = document.querySelector("[data-scroll-to='rectangle2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const onComponentsContainerClick = () => {
    navigate("/view-component-page");
  };

  const onComponentsClick = () => {
    const anchor = document.querySelector("[data-scroll-to='rectangle2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const openConfirmLogoutPopup = () => {
    setConfirmLogoutPopupOpen(true);
  };

  const closeConfirmLogoutPopup = () => {
    setConfirmLogoutPopupOpen(false);
  };

  const onLogoutClick = () => {
    const anchor = document.querySelector("[data-scroll-to='rectangle2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const onEditProfileClick = () => {
    const studentId = localStorage.getItem('student_id');
    if(!studentId) {
      navigate(`/signin-page`);
    } else{
      navigate(`/team-leader-profile-update/${studentId}`);
    }
    const anchor = document.querySelector("[data-scroll-to='rectangle2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const onRequestsContainerClick = () => {
    navigate("/request-page");
  };

  const onRequestsClick = () => {
    const anchor = document.querySelector("[data-scroll-to='rectangle2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const onRequestsContainer1Click = () => {
    navigate("/assign-tasks");
  };

  const onRequests1Click = () => {
    const anchor = document.querySelector("[data-scroll-to='rectangle2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const onComponents1Click = () => {
    navigate("/team-lead-profile");
  };

  const openTeamMemberListPopup2 = () => {
    setTeamMemberListPopup2Open(true);
  };

  const closeTeamMemberListPopup2 = () => {
    setTeamMemberListPopup2Open(false);
  };

  const openTeamMemberListPopup3 = () => {
    setTeamMemberListPopup3Open(true);
  };

  const closeTeamMemberListPopup3 = () => {
    setTeamMemberListPopup3Open(false);
  };

  const openTeamMemberListPopup4 = () => {
    setTeamMemberListPopup4Open(true);
  };

  const closeTeamMemberListPopup4 = () => {
    setTeamMemberListPopup4Open(false);
  };

  const openTeamMemberListPopup5 = () => {
    setTeamMemberListPopup5Open(true);
  };

  const closeTeamMemberListPopup5 = () => {
    setTeamMemberListPopup5Open(false);
  };

  const onRequests2Click = () => {
    navigate("/announcement-page-competition");
    
    const anchor = document.querySelector("[data-scroll-to='rectangle2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="relative bg-white w-full h-[950px] overflow-hidden text-center text-13xl text-white font-poppins">
        <div className="absolute top-[0px] left-[0px] bg-gray-400 w-[442px] h-[950px]" />
        <b className="absolute top-[64px] left-[65px] inline-block w-[310px] h-[62px]">
          D A S H B O A R D
        </b>
        <div className="absolute top-[137.5px] left-[34.5px] box-border w-[354px] h-px border-t-[1px] border-solid border-white" />
        <div
          className="absolute top-[280px] left-[1px] bg-firebrick-600 flex flex-col items-start justify-start cursor-pointer"
          onClick={onViewMembers1Click}
        >
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-[442px] h-[76px] flex flex-col items-center justify-center hover:bg-firebrick-200 hover:cursor-pointer"
            onClick={onViewMembersClick}
          >
            <div className="relative text-xl font-semibold font-inter text-white text-center hover:text-white">
              View Members
            </div>
          </button>
        </div>
        <div
          className="absolute top-[355px] left-[1px] flex flex-col items-start justify-start cursor-pointer"
          onClick={onFundManagementContainerClick}
        >
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-[442px] h-[77px] flex flex-col items-center justify-center hover:bg-firebrick-200 hover:cursor-pointer"
            onClick={onFundManagementClick}
          >
            <div className="relative text-xl font-semibold font-inter text-white text-center hover:text-white">
              Fund Management
            </div>
          </button>
        </div>
        <div
          className="absolute top-[432px] left-[1px] flex flex-col items-start justify-start cursor-pointer"
          onClick={onComponentsContainerClick}
        >
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-[442px] h-[76px] flex flex-col items-center justify-center hover:bg-firebrick-200 hover:cursor-pointer"
            onClick={onComponentsClick}
          >
            <div className="relative text-xl font-semibold font-inter text-white text-center flex items-center justify-center w-[154px] h-11 shrink-0 hover:text-white">
              Components
            </div>
          </button>
        </div>
        <div
          className="absolute top-[819px] left-[1px] flex flex-col items-start justify-start cursor-pointer"
          onClick={openConfirmLogoutPopup}
        >
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-[442px] h-[78px] flex flex-col items-center justify-center hover:bg-firebrick-200 hover:cursor-pointer"
            onClick={onLogoutClick}
          >
            <div className="relative text-xl font-semibold font-inter text-white text-center flex items-center justify-center w-[154px] h-11 shrink-0 hover:text-white">
              Logout
            </div>
          </button>
        </div>
        <div className="absolute top-[739px] left-[1px] flex flex-col items-start justify-start">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-[442px] h-20 flex flex-col items-center justify-center hover:bg-firebrick-200 hover:cursor-pointer"
            onClick={onEditProfileClick}
          >
            <div className="relative text-xl font-semibold font-inter text-white text-center flex items-center justify-center w-[154px] h-11 shrink-0 hover:text-white">
              Edit Profile
            </div>
          </button>
        </div>
        <div
          className="absolute top-[585px] left-[1px] flex flex-col items-start justify-start cursor-pointer"
          onClick={onRequestsContainerClick}
        >
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-[442px] h-[77px] flex flex-col items-center justify-center hover:bg-firebrick-200 hover:cursor-pointer"
            onClick={onRequestsClick}
          >
            <div className="relative text-xl font-semibold font-inter text-white text-center flex items-center justify-center w-[154px] h-11 shrink-0 hover:text-white">
              Requests
            </div>
          </button>
        </div>
        <div
          className="absolute top-[508px] left-[1px] flex flex-col items-start justify-start cursor-pointer"
          onClick={onRequestsContainer1Click}
        >
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-[442px] h-[77px] flex flex-col items-center justify-center hover:bg-firebrick-200 hover:cursor-pointer"
            onClick={onRequests1Click}
          >
            <div className="relative text-xl font-semibold font-inter text-white text-center hover:text-white">
            Tasks
            </div>
          </button>
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[202px] left-[0px] w-[442px] h-[77px] hover:bg-firebrick-200 hover:cursor-pointer"
          onClick={onComponents1Click}
        >
          <div className="absolute h-[57.14%] w-[34.84%] top-[21.43%] left-[32.58%] text-xl font-semibold font-inter text-white text-center flex items-center justify-center hover:text-white">
            Profile
          </div>
        </button>
        <label
          className="absolute top-[66px] left-[805px] font-archivo-black text-black text-left inline-block w-[690px] h-[61px]"
          id="studentname"
        >
          View Active Team Members
        </label>
        <div className="absolute top-[130.5px] left-[501.5px] box-border w-[1145px] h-px border-t-[1px] border-solid border-dimgray-400" />
        <ElectricalContainer
          image51="/image-5-1@2x.png"
          electrical="Electrical"
          propLeft="569px"
          propLeft1="61px"
        />
        <ElectricalContainer
          image51="/image-5-11@2x.png"
          electrical="Mechanical"
          propLeft="938px"
          propLeft1="43px"
        />
        
         <div
          className="absolute top-[538px] left-[569px] w-[272px] h-[247px] cursor-pointer hover:bg-white"
          onClick={openTeamMemberListPopup2}
        >
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xl bg-firebrick-400 shadow-[0px_4px_50px_rgba(0,_0,_0,_0.25)] hover:bg-midnightblue hover:cursor-pointer" />
          <img
            className="absolute top-[35px] left-[64px] w-[153px] h-[148px] object-cover"
            alt=""
            src="/image-5-12@2x.png"
          />
          <b className="absolute top-[183px] left-[0px] inline-block w-[272px] h-[53px]">
            Software
          </b>
        </div> 
        <div
          className="absolute top-[538px] left-[938px] w-[272px] h-[247px] cursor-pointer hover:bg-white"
          onClick={openTeamMemberListPopup3}
        >
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xl bg-firebrick-400 shadow-[0px_4px_50px_rgba(0,_0,_0,_0.25)] hover:bg-dimgray-700 hover:cursor-pointer" />
          <img
            className="absolute top-[15px] left-[81px] w-[116px] h-[156px] object-cover"
            alt=""
            src="/image-5-13@2x.png"
          />
          <b className="absolute top-[178px] left-[0px] inline-block w-[272px] h-[53px]">
            Science
          </b>
        </div>
        <div className="absolute top-[538px] left-[1307px] w-[272px] h-[247px] text-left text-9xl">
          <div
            className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xl bg-firebrick-400 shadow-[0px_4px_50px_rgba(0,_0,_0,_0.25)] cursor-pointer hover:bg-dimgray-700 hover:cursor-pointer"
            onClick={openTeamMemberListPopup4}
          />
          <img
            className="absolute top-[38px] left-[71px] w-[129px] h-[125px] object-cover"
            alt=""
            src="/image-5-14@2x.png"
          />
          <b className="absolute top-[176px] left-[41px] inline-block w-[280px] h-[51px]">
            Management
          </b>
        </div>
        <div className="absolute top-[212px] left-[1275px] w-[272px] h-[247px] text-left text-9xl hover:bg-white">
          <div
            className="absolute h-full w-full top-[-4.05%] right-[-11.76%] bottom-[4.05%] left-[11.76%] rounded-3xl bg-firebrick-400 shadow-[0px_4px_50px_rgba(0,_0,_0,_0.25)] cursor-pointer hover:bg-dimgray-700 hover:cursor-pointer"
            onClick={openTeamMemberListPopup5}
          />
          <b className="absolute top-[165px] left-[52px] inline-block w-[280px] h-[51px]">
            Communication
          </b>
          <img
            className="absolute top-[28px] left-[103px] w-[129px] h-[125px] object-cover"
            alt=""
            src="/image-5-15@2x.png"
          />
        </div>
        <div className="absolute top-[662px] left-[-1px] flex flex-col items-start justify-start cursor-pointer">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-[442px] h-[77px] flex flex-col items-center justify-center hover:bg-firebrick-200 hover:cursor-pointer"
            onClick={onRequests2Click}
          >
            <div className="relative text-xl font-semibold font-inter text-white text-center hover:text-white">
            Announcements
            </div>
          </button>
        </div>
      </div>
      {isConfirmLogoutPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeConfirmLogoutPopup}
        >
          <ConfirmLogoutPopup onClose={closeConfirmLogoutPopup} />
        </PortalPopup>
      )}
      {isTeamMemberListPopup2Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTeamMemberListPopup2}
        >
          <TeamMemberList department="Software" onClose={closeTeamMemberListPopup2} />
        </PortalPopup>
      )}
      {isTeamMemberListPopup3Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTeamMemberListPopup3}
        >
          <TeamMemberList department="Science" onClose={closeTeamMemberListPopup3} />
        </PortalPopup>
      )}
      {isTeamMemberListPopup4Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTeamMemberListPopup4}
        >
          <TeamMemberList department="Management" onClose={closeTeamMemberListPopup4} />
        </PortalPopup>
      )}
      {isTeamMemberListPopup5Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeTeamMemberListPopup5}
        >
          <TeamMemberList department="Communication" onClose={closeTeamMemberListPopup5} />
        </PortalPopup>
      )}
    </>
  );
};

export default ViewMemberPage;
