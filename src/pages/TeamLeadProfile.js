import { useEffect, useState } from "react";
import ConfirmLogoutPopup from "../components/ConfirmLogoutPopup";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";

const TeamLeadProfile = () => {
  const [isConfirmLogoutPopupOpen, setConfirmLogoutPopupOpen] = useState(false);
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

  const onEditProfileContainerClick = () => {
    const studentId = localStorage.getItem('student_id');
    if(!studentId) {
      navigate(`/signin-page`);
    } else{
      navigate(`/team-leader-profile-update/${studentId}`);
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

  const onRequestsContainer2Click = () => {
    navigate("/announcement-page-competition");
  };

  const onRequests2Click = () => {
    
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
        <b className="absolute top-[64px] left-[65px] text-13xl inline-block text-white text-center w-[310px] h-[62px]">
          D A S H B O A R D
        </b>
        <div className="absolute top-[137.5px] left-[34.5px] box-border w-[354px] h-px border-t-[1px] border-solid border-white" />
        <div
          className="absolute top-[279px] left-[1px] flex flex-col items-start justify-start cursor-pointer"
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
          className="absolute top-[591px] left-[1px] flex flex-col items-start justify-start cursor-pointer"
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
        <button className="cursor-pointer [border:none] p-0 bg-firebrick-600 absolute top-[202px] left-[0px] w-[442px] h-[77px] hover:bg-firebrick-200 hover:cursor-pointer">
          <div className="absolute h-[57.14%] w-[34.84%] top-[21.43%] left-[32.58%] text-xl font-semibold font-inter text-white text-center flex items-center justify-center hover:text-white">
            Profile
          </div>
        </button>
        <div
          className="absolute top-[668px] left-[1px] flex flex-col items-start justify-start cursor-pointer"
          onClick={onRequestsContainer2Click}
        >
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-[442px] h-[77px] flex flex-col items-center justify-center hover:bg-firebrick-200 hover:cursor-pointer"
            onClick={onRequests2Click}
          >
            <div className="relative text-xl font-semibold font-inter text-white text-center hover:text-white">
              Announcements
            </div>
          </button>
        </div>
        <label
          className="absolute top-[433px] left-[442px] text-17xl font-black text-center inline-block w-[1253px] h-[49px]"
          id="dept"
        >
          Name : {studentData?.NAME.FIRST_NAME} {studentData?.NAME.LAST_NAME} 
        </label>
        <label
          className="absolute top-[512px] left-[442px] font-medium text-center inline-block w-[1253px] h-[42px]"
          id="dept"
        >{`Team leader of ${studentData?.SUB_TEAM} `}</label>
        <div className="absolute top-[496.5px] left-[540.5px] box-border w-[1067px] h-px border-t-[1px] border-solid border-black" />
        <label
          className="absolute top-[647px] left-[593px] font-medium inline-block w-[699px] h-[42px]"
          id="dept"
        >
          MIST ID : {studentData?.MIST_ID}
        </label>
        <label
          className="absolute top-[712px] left-[593px] font-medium inline-block w-[699px] h-[42px]"
          id="dept"
        >
          Email : {studentData?.EMAIL}
        </label>
        <label
          className="absolute top-[777px] left-[593px] font-medium inline-block w-[699px] h-[42px]"
          id="dept"
        >{`Department: ${studentData?.DEPARTMENT} `}</label>
        <label
          className="absolute top-[712px] left-[1073px] font-medium inline-block w-[699px] h-[42px]"
          id="dept"
        >
         Phone : {studentData?.["Phone 1"]}
        </label>
        <label
          className="absolute top-[647px] left-[1073px] font-medium inline-block w-[699px] h-[42px]"
          id="dept"
        >
          Level : {studentData?.LEVEL_NO}
        </label>
        <label
          className="absolute top-[777px] left-[1073px] font-medium inline-block w-[699px] h-[42px]"
          id="dept"
        >
         Phone : {studentData?.["Phone 2"]}
        </label>
        <img
          className="absolute top-[95px] left-[890px] w-[368px] h-[341px] object-cover"
          alt=""
          src="/team-lead-icon@2x.png"
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

export default TeamLeadProfile;
