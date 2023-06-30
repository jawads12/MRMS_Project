import { useEffect, useState } from "react";
import ConfirmLogoutPopup from "../components/ConfirmLogoutPopup";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";

const TeamMemberProfile = () => {
  
  const [isConfirmLogoutPopupOpen, setConfirmLogoutPopupOpen] = useState(false);
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
    navigate("/team-member-view-assigned-task-page");
  };

  const onRequests1Click = () => {
    const anchor = document.querySelector("[data-scroll-to='rectangle2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const onRequests2Click = () => {
    navigate("/team-member-announce-page");
  };

  const onRequests3Click = () => {

    const anchor = document.querySelector("[data-scroll-to='rectangle2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedVariable = localStorage.getItem('student_id');
        
        const response = await fetch('http://localhost:5498/students/'+storedVariable);
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setStudentData(data);
        } else {
          console.error('Error fetching data:', response.status);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  return (
    <>
      <div className="relative bg-white w-full h-[950px] overflow-hidden text-left text-5xl text-black font-poppins">
        <div className="absolute top-[0px] left-[0px] bg-gray-400 w-[442px] h-[950px]" />
        <b className="absolute top-[84px] left-[73px] text-13xl inline-block text-white text-center w-[310px] h-[62px]">
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
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[327px] left-[1px] flex flex-col items-start justify-start"
          id="member_task_btn"
          onClick={onRequestsClick}
        >
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-[442px] h-[77px] flex flex-col items-center justify-center hover:bg-firebrick-200 hover:cursor-pointer"
            onClick={onRequests1Click}
          >
            <div className="relative text-xl font-semibold font-inter text-white text-center hover:text-white">
              Tasks
            </div>
          </button>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-firebrick-600 absolute top-[250px] left-[0px] w-[442px] h-[77px] hover:bg-firebrick-200 hover:cursor-pointer"
          id="member_profile_btn"
        >
          <div className="absolute h-[57.14%] w-[34.84%] top-[21.43%] left-[32.58%] text-xl font-semibold font-inter text-white text-center flex items-center justify-center hover:text-white">
            Profile
          </div>
        </button>
        <label
          className="absolute top-[435px] left-[443px] text-17xl font-black text-center inline-block w-[1253px] h-[49px]"
          id="dept"
        >
           {studentData?.NAME.FIRST_NAME} {studentData?.NAME.LAST_NAME} 
        </label>
        
        <label
          className="absolute top-[514px] left-[443px] font-medium text-center inline-block w-[1253px] h-[42px]"
          id="dept"
        >{`Team member of ${studentData?.SUB_TEAM} subteam `}</label>
        <label
          className="absolute top-[629px] left-[584px] font-medium inline-block w-[699px] h-[42px]"
          id="dept"
        >
          Student ID: {studentData?.MIST_ID}
        </label>
        <label
          className="absolute top-[694px] left-[584px] font-medium inline-block w-[699px] h-[42px]"
          id="dept"
        >
          Email: {studentData?.EMAIL}
        </label>
        <label
          className="absolute top-[759px] left-[584px] font-medium inline-block w-[699px] h-[42px]"
          id="dept"
        >{`Department: ${studentData?.DEPARTMENT} `}</label>
        <label
          className="absolute top-[694px] left-[1064px] font-medium inline-block w-[699px] h-[42px]"
          id="dept"
        >
          Contact Number : {studentData?.["Phone 1"]}
        </label>
        <label
          className="absolute top-[629px] left-[1064px] font-medium inline-block w-[699px] h-[42px]"
          id="dept"
        >
          Level:  {studentData?.LEVEL_NO}
        </label>
        <label
          className="absolute top-[759px] left-[1064px] font-medium inline-block w-[699px] h-[42px]"
          id="dept"
        >
          Alternate Contact Number:  {studentData?.["Phone 2"]}
        </label>
        <div className="absolute top-[498.5px] left-[541.5px] box-border w-[1067px] h-px border-t-[1px] border-solid border-black" />
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[404px] left-[1px] flex flex-col items-start justify-start"
          id="member_announcement_btn"
          onClick={onRequests2Click}
        >
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-[442px] h-[77px] flex flex-col items-center justify-center hover:bg-firebrick-200 hover:cursor-pointer"
            onClick={onRequests3Click}
          >
            <div className="relative text-xl font-semibold font-inter text-white text-center hover:text-white">
              Announcements
            </div>
          </button>
        </button>
        <img
          className="absolute top-[96px] left-[920px] w-[310px] h-[311px] object-cover"
          alt=""
          src="/membericon1@2x.png"
        />
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

export default TeamMemberProfile;
