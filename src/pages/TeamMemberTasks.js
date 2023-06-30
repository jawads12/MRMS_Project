import { useState } from "react";
import ConfirmLogoutPopup from "../components/ConfirmLogoutPopup";
import PortalPopup from "../components/PortalPopup";
import ConfirmTaskCompletion from "../components/ConfirmTaskCompletion";
import { useNavigate } from "react-router-dom";

const TeamMemberTasks = () => {
  const [isConfirmLogoutPopupOpen, setConfirmLogoutPopupOpen] = useState(false);
  const [isConfirmTaskCompletionPopupOpen, setConfirmTaskCompletionPopupOpen] =
    useState(false);
  const navigate = useNavigate();
  const student_id = localStorage.getItem("student_id");


  const openConfirmLogoutPopup = () => {
    setConfirmLogoutPopupOpen(true);
  };

  const closeConfirmLogoutPopup = () => {
    setConfirmLogoutPopupOpen(false);
  };

  const onLogout1Click = () => {
    const anchor = document.querySelector("[data-scroll-to='rectangle2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const onEditProfileClick = () => {
    navigate(`/team-member-profile-update/${student_id}`);
  };

  const onEditProfile1Click = () => {
    const anchor = document.querySelector("[data-scroll-to='rectangle2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const onRequestsClick = () => {
    const anchor = document.querySelector("[data-scroll-to='rectangle2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const onProfileClick = () => {
    navigate("/team-member-profile");
  };

  const onAnnouncementsClick = () => {
    navigate("/team-member-announce-page");
  };

  const onRequests1Click = () => {
    const anchor = document.querySelector("[data-scroll-to='rectangle2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const openConfirmTaskCompletionPopup = () => {
    setConfirmTaskCompletionPopupOpen(true);
  };

  const closeConfirmTaskCompletionPopup = () => {
    setConfirmTaskCompletionPopupOpen(false);
  };

  return (
    <>
      <div className="relative bg-white w-full h-[950px] overflow-hidden text-center text-lgi text-white font-poppins">
        <div className="absolute top-[0px] left-[0px] bg-gray-400 w-[442px] h-[950px]" />
        <b className="absolute top-[84px] left-[73px] text-13xl inline-block w-[310px] h-[62px]">
          D A S H B O A R D
        </b>
        <div className="absolute top-[157.5px] left-[42.5px] box-border w-[354px] h-px border-t-[1px] border-solid border-white" />
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[819px] left-[1px] flex flex-col items-start justify-start"
          id="member_logout_btn"
          onClick={openConfirmLogoutPopup}
        >
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-[442px] h-[78px] flex flex-col items-center justify-center hover:bg-firebrick-200 hover:cursor-pointer"
            onClick={onLogout1Click}
          >
            <div className="relative text-xl font-semibold font-inter text-white text-center flex items-center justify-center w-[154px] h-11 shrink-0 hover:text-white">
              Logout
            </div>
          </button>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[739px] left-[1px] flex flex-col items-start justify-start"
          id="member_edit_profile_btn"
          onClick={onEditProfileClick}
        >
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-[442px] h-20 flex flex-col items-center justify-center hover:bg-firebrick-200 hover:cursor-pointer"
            onClick={onEditProfile1Click}
          >
            <div className="relative text-xl font-semibold font-inter text-white text-center flex items-center justify-center w-[154px] h-11 shrink-0 hover:text-white">
              Edit Profile
            </div>
          </button>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-firebrick-600 absolute top-[327px] left-[1px] flex flex-col items-start justify-start"
          id="member_task_btn"
        >
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-[442px] h-[77px] flex flex-col items-center justify-center hover:bg-firebrick-200 hover:cursor-pointer"
            onClick={onRequestsClick}
          >
            <div className="relative text-xl font-semibold font-inter text-white text-center hover:text-white">
              Tasks
            </div>
          </button>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[250px] left-[0px] w-[442px] h-[77px] hover:bg-firebrick-200 hover:cursor-pointer"
          id="member_profile_btn"
          onClick={onProfileClick}
        >
          <div className="absolute h-[57.14%] w-[34.84%] top-[21.43%] left-[32.58%] text-xl font-semibold font-inter text-white text-center flex items-center justify-center hover:text-white">
            Profile
          </div>
        </button>
        <label
          className="absolute top-[94px] left-[443px] text-17xl font-black text-black inline-block w-[1253px] h-[49px]"
          id="dept"
        >
          Tasks
        </label>
        <div className="absolute top-[157.5px] left-[541.5px] box-border w-[1067px] h-px border-t-[1px] border-solid border-black" />
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[404px] left-[1px] flex flex-col items-start justify-start"
          id="member_announcement_btn"
          onClick={onAnnouncementsClick}
        >
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-[442px] h-[77px] flex flex-col items-center justify-center hover:bg-firebrick-200 hover:cursor-pointer"
            onClick={onRequests1Click}
          >
            <div className="relative text-xl font-semibold font-inter text-white text-center hover:text-white">
              Announcements
            </div>
          </button>
        </button>
        <div className="absolute h-[4.21%] w-[7.55%] top-[22.95%] right-[11.08%] bottom-[72.84%] left-[81.37%] bg-crimson-200 box-border overflow-hidden border-[1px] border-solid border-white">
          <b className="absolute top-[12px] left-[calc(50%_-_78px)] leading-[100%] flex items-center justify-center w-[142px] h-[15px]">
            Deadline
          </b>
        </div>
        <div className="absolute h-[4.21%] w-[15.15%] top-[22.95%] right-[54.54%] bottom-[72.84%] left-[30.31%] bg-crimson-200 box-border overflow-hidden border-[1px] border-solid border-white">
          <b className="absolute top-[12px] left-[3px] leading-[100%] flex items-center justify-center w-[254px] h-[15px]">
            Assigned Component
          </b>
        </div>
        <div className="absolute h-[4.21%] w-[27.54%] top-[22.95%] right-[18.63%] bottom-[72.84%] left-[53.83%] bg-crimson-200 box-border overflow-hidden border-[1px] border-solid border-white">
          <b className="absolute top-[12px] left-[3px] leading-[100%] flex items-center justify-center w-[464px] h-[15px]">
            Assigned Task
          </b>
        </div>
        <div className="absolute h-[4.21%] w-[8.37%] top-[22.95%] right-[46.17%] bottom-[72.84%] left-[45.46%] bg-crimson-200 box-border overflow-hidden border-[1px] border-solid border-white">
          <b className="absolute top-[12px] left-[3px] leading-[100%] flex items-center justify-center w-[139px] h-[15px]">
            Quantity
          </b>
        </div>
        <div className="absolute h-[7.58%] w-[7.55%] top-[26.84%] right-[11.08%] bottom-[65.58%] left-[81.37%] bg-lightgray-100 box-border overflow-hidden text-mid text-black border-[1px] border-solid border-white">
          <div className="absolute top-[0px] left-[calc(50%_-_59px)] leading-[100%] flex items-center justify-center w-[123px] h-[72px]">
            24 June 2023
          </div>
        </div>
        <div className="absolute h-[4.21%] w-[7.55%] top-[22.95%] right-[3.54%] bottom-[72.84%] left-[88.92%] bg-crimson-200 box-border overflow-hidden border-[1px] border-solid border-white">
          <b className="absolute top-[12px] left-[calc(50%_-_64px)] leading-[100%] flex items-center justify-center w-32 h-[15px]">
            Action
          </b>
        </div>
        <div className="absolute h-[7.58%] w-[7.55%] top-[26.84%] right-[3.54%] bottom-[65.58%] left-[88.92%] bg-lightgray-100 box-border overflow-hidden border-[1px] border-solid border-white">
          <img
            className="absolute top-[21px] left-[53px] w-[26px] h-[26px] object-cover cursor-pointer"
            alt=""
            src="/green-tick@2x.png"
            onClick={openConfirmTaskCompletionPopup}
          />
        </div>
        <div className="absolute h-[7.58%] w-[15.15%] top-[26.84%] right-[54.54%] bottom-[65.58%] left-[30.31%] bg-lightgray-100 box-border overflow-hidden text-mid text-black border-[1px] border-solid border-white">
          <div className="absolute top-[0px] left-[0px] leading-[100%] flex items-center justify-center w-[257px] h-[72px]">
            BMP180
          </div>
        </div>
        <div className="absolute h-[7.58%] w-[27.54%] top-[26.84%] right-[18.63%] bottom-[65.58%] left-[53.83%] bg-lightgray-100 box-border overflow-hidden text-mini text-black border-[1px] border-solid border-white">
          <div className="absolute top-[0px] left-[9px] leading-[100%] flex items-center justify-center w-[455px] h-[72px]">
            Complete the coding for sensor ASAP and upload the code in github.
          </div>
        </div>
        <div className="absolute h-[7.58%] w-[8.37%] top-[26.84%] right-[46.17%] bottom-[65.58%] left-[45.46%] bg-lightgray-100 box-border overflow-hidden text-mid text-black border-[1px] border-solid border-white">
          <div className="absolute top-[0px] left-[3px] leading-[100%] flex items-center justify-center w-[139px] h-[72px]">
            5
          </div>
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
      {isConfirmTaskCompletionPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeConfirmTaskCompletionPopup}
        >
          <ConfirmTaskCompletion onClose={closeConfirmTaskCompletionPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default TeamMemberTasks;
