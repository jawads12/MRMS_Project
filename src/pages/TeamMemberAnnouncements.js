import { useEffect, useState } from "react";
import ConfirmLogoutPopup from "../components/ConfirmLogoutPopup";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";

const TeamMemberAnnouncements = () => {
  const [isConfirmLogoutPopupOpen, setConfirmLogoutPopupOpen] = useState(false);
  const navigate = useNavigate();
  const [announcements, setAnnouncements] = useState(null);
  const student_id = localStorage.getItem("student_id");

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

  const onEditProfileContainerClick = () => {
    navigate(`/team-member-profile-update/${student_id}`);
  };

  const onEditProfileClick = () => {
    const anchor = document.querySelector("[data-scroll-to='rectangle2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const onTasksContainerClick = () => {
    navigate("/view-assigned-task-page");
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

  const onRequests1Click = () => {
    navigate("/team-member-view-assigned-task-page");
    const anchor = document.querySelector("[data-scroll-to='rectangle2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  useEffect(() => {
    listAllAnnouncement();
  }, [])

  const listAllAnnouncement =()=>{
    fetch("http://localhost:5498/list/announcements")
    .then(res=>res.json())
    .then(data=>setAnnouncements(data))
  }
  if(!announcements){
    return "loading..."
  }


  return (
    <>
      <div className="relative bg-white w-full h-[950px] overflow-hidden text-center text-13xl text-black font-poppins">
        <div className="absolute top-[0px] left-[0px] bg-gray-400 w-[442px] h-[950px]" />
        <b className="absolute top-[84px] left-[73px] inline-block text-white w-[310px] h-[62px]">
          D A S H B O A R D
        </b>
        <div className="absolute top-[157.5px] left-[42.5px] box-border w-[354px] h-px border-t-[1px] border-solid border-white" />
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
        <div
          className="absolute top-[739px] left-[1px] flex flex-col items-start justify-start cursor-pointer"
          onClick={onEditProfileContainerClick}
        >
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
          className="absolute top-[327px] left-[1px] flex flex-col items-start justify-start cursor-pointer"
          onClick={onTasksContainerClick}
        >
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-[442px] h-[77px] flex flex-col items-center justify-center hover:bg-firebrick-200 hover:cursor-pointer"
            onClick={onRequestsClick}
          >
            <div className="relative text-xl font-semibold font-inter text-white text-center hover:text-white">
              Tasks
            </div>
          </button>
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[250px] left-[0px] w-[442px] h-[77px] hover:bg-firebrick-200 hover:cursor-pointer"
          onClick={onProfileClick}
        >
          <div className="absolute h-[57.14%] w-[34.84%] top-[21.43%] left-[32.58%] text-xl font-semibold font-inter text-white text-center flex items-center justify-center hover:text-white">
            Profile
          </div>
        </button>
        <label
          className="absolute top-[94px] left-[443px] text-17xl font-black inline-block w-[1253px] h-[49px]"
          id="dept"
        >
          Announcements
        </label>
        <div className="absolute top-[157.5px] left-[541.5px] box-border w-[1067px] h-px border-t-[1px] border-solid border-black" />
        <div className="absolute top-[404px] left-[1px] bg-firebrick-600 flex flex-col items-start justify-start cursor-pointer">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-[442px] h-[77px] flex flex-col items-center justify-center hover:bg-firebrick-200 hover:cursor-pointer"
            onClick={onRequests1Click}
          >
            <div className="relative text-xl font-semibold font-inter text-white text-center hover:text-white">
              Announcements
            </div>
          </button>
        </div>
        {
           <div className="absolute top-[208px] left-[518px] shadow-[0px_4px_20px_rgba(0,_0,_0,_0.25)] w-[1104px] h-[189px] overflow-hidden text-left text-base">
            <div className="absolute top-[16px] left-[45px] w-[1044px] h-[173px]">
              <label
                className="absolute top-[24px] left-[0px] text-xl font-bold inline-block w-[765px] h-[49px]"
                id="dept"
              >{announcements[0].DETAILS}</label>
              <div className="absolute top-[33px] left-[800px] text-xl font-semibold inline-block w-[146px] h-[50px]">
                Posted by
              </div>
              <div className="absolute top-[78px] left-[800px] text-xl font-medium inline-block w-[244px] h-[95px]">
                <p className="m-0">Rashid Ul Islam</p>
                <p className="m-0">Team Leader of MMRS</p>
              </div>
              <div className="absolute top-[63px] left-[0px] inline-block w-[704px] h-[41px]">
                Posted on: {new Date(announcements[0].ANNOUNCEMENT_DATE).toLocaleString()}
              </div>
              <div className="absolute top-[124px] left-[175px] inline-block w-64 h-[41px]">
                *Competition start: 27 July 2023
              </div>
              <div className="absolute top-[124px] left-[458px] inline-block w-[307px] h-[31px]">
                *Competition end: 31 July 2023
              </div>
              <div className="absolute top-[-0.5px] left-[778.5px] box-border w-px h-[173px] border-r-[1px] border-solid border-gray-900" />
              <div className="absolute top-[124px] left-[0px] inline-block w-[175px] h-[41px]">
                *Rover: Phoenix 3.0
              </div>
            </div>
          </div>
        }
        
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
    </>
  );
};

export default TeamMemberAnnouncements;
