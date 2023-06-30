import { useEffect, useState } from "react";
import ConfirmLogoutPopup from "../components/ConfirmLogoutPopup";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import CompetitionPopup from "../components/CompetitionPopup";

const AnnouncementPageCompetition = () => {
  const [Comp_Name, setComp_Name] = useState("");
  const [Rover_Name, setRover_Name] = useState("");
  const [startdate, setstartdate] = useState("");
  const [enddate, setenddate] = useState("");
  const [version, setversion] = useState("");
  const [isConfirmLogoutPopupOpen, setConfirmLogoutPopupOpen] = useState(false);
  const navigate = useNavigate();
  const [rovers, setRovers] = useState([])

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
    navigate("/view-component-page");
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
    navigate("/view-assigned-task-page1");
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

  const onRequests2Click = () => {
    const anchor = document.querySelector("[data-scroll-to='rectangle2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  useEffect(() => {
    listAllRover();
  }, [])

  const listAllRover =()=>{
    fetch("http://localhost:5498/list/rovers")
    .then(res=>res.json())
    .then(data=>setRovers(data))
  }
  

  
  const handleSubmit = (e) => {
    e.preventDefault();

    const addCompetition = {
      Comp_Name,
      Rover_Name,
      startdate,
      enddate,
      version
    };
    
    fetch("http://localhost:5498/addCompetition",{
      method: "POST",
      headers: {
        "Content-type" : "application/json",
      },
      body: JSON.stringify(addCompetition),
    })
    .then((result)=> {
      if (result.status===200)
      {
        console.log("component inputted");
      }
    });

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
          className="absolute top-[280px] left-[1px] flex flex-col items-start justify-start cursor-pointer"
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
          className="absolute top-[84px] left-[497px] font-archivo-black text-black inline-block w-[1144px] h-[43px]"
          id="studentname"
        >
          Announcements
        </label>
        <div className="absolute top-[137.5px] left-[496.5px] box-border w-[1145px] h-px border-t-[1px] border-solid border-dimgray-400" />
        <div className="absolute top-[662px] left-[1px] bg-firebrick-600 flex flex-col items-start justify-start cursor-pointer">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-[442px] h-[77px] flex flex-col items-center justify-center hover:bg-firebrick-200 hover:cursor-pointer"
            onClick={onRequests2Click}
          >
            <div className="relative text-xl font-semibold font-inter text-white text-center hover:text-white">
              Announcements
            </div>
          </button>
        </div>
        <form>
        <div className="absolute top-[235px] left-[553px] bg-white shadow-[0px_4px_100px_rgba(0,_0,_0,_0.25)] w-[1028px] h-[560px] overflow-hidden max-w-full max-h-full text-left text-lg text-dimgray-600 font-poppins">
      <button
      onClick={handleSubmit}
        className="cursor-pointer [border:none] py-3.5 px-4 bg-limegreen absolute top-[455px] right-[413px] rounded w-[170px] h-[33px] overflow-hidden flex flex-row box-border items-center justify-between"
        id="AnnounceCompetition"
      >
        <b className="relative text-mid leading-[100%] flex font-poppins text-white text-center items-center justify-center w-[152px] h-6 shrink-0">
          Announce
        </b>
      </button>
      <label
        className="absolute top-[283px] left-[629px] font-medium inline-block w-[260px] h-5"
        id="studentname"
      >
        Rover Version
      </label>
      <input
        className="bg-whitesmoke-200 absolute top-[320px] left-[625px] rounded box-border w-[368px] h-[41px] border-[1px] border-solid border-darkslategray-400"
        type="text"
        maxLength
        minLength
        required
        id="version"
        //value={model}
        onChange={(e) => setversion(e.target.value)}
      />
      <label
        className="absolute top-[167px] left-[629px] font-medium inline-block w-[260px] h-5"
        id="studentname"
      >
        Rover Name
      </label>
      <input
        className="bg-whitesmoke-200 absolute top-[204px] left-[625px] rounded box-border w-[368px] h-[41px] border-[1px] border-solid border-darkslategray-400"
        type="text"
        maxLength
        minLength
        required
        id="Rover_Name"
        //value={Rover_Name}
        onChange={(e) => setRover_Name(e.target.value)}
      />
      {/* <select
        className="bg-whitesmoke-200 absolute top-[204px] left-[625px] rounded box-border w-[368px] h-[41px] border-[1px] border-solid border-darkslategray-400"
        required
        id="Rover_Name"
        //value={Rover_Name}
        onChange={(e) => setRover_Name(e.target.value)}
      >
        {
          rovers.map(rover=><option key={rover.ROVER_ID} value={rover.ROVER_NAME}>{rover.ROVER_NAME}</option>)
        }
      </select> */}
      <label
        className="absolute top-[283px] left-[335px] font-medium inline-block w-[260px] h-5"
        id="studentname"
      >
        End Date
      </label>
      <input
        className="bg-whitesmoke-200 absolute top-[323px] left-[335px] rounded box-border w-[257px] h-[41px] border-[1px] border-solid border-darkslategray-400"
        type="date"
        maxLength
        minLength
        required
        id="enddate"
        //value={enddate}
        onChange={(e) => setenddate(e.target.value)}
        
      />
      <label
        className="absolute top-[283px] left-[47px] font-medium inline-block w-[260px] h-5"
        id="studentname"
      >
        Start Date
      </label>
      <input
        className="bg-whitesmoke-200 absolute top-[323px] left-[47px] rounded box-border w-[257px] h-[41px] border-[1px] border-solid border-darkslategray-400"
        type="date"
        maxLength
        minLength
        required
        id="startdate"
        //value={startdate}
        onChange={(e) => setstartdate(e.target.value)}
      />
      <label
        className="absolute top-[171px] left-[47px] font-medium inline-block w-[260px] h-5"
        id="studentname"
      >
        Competition Name
      </label>
      <input
        className="bg-whitesmoke-200 absolute top-[208px] left-[47px] rounded box-border w-[545px] h-[41px] border-[1px] border-solid border-darkslategray-400"
        type="text"
        maxLength
        minLength
        required
        id="Comp_Name"
       // value={Comp_Name}
        onChange={(e) => setComp_Name(e.target.value)}
      />
      <div className="absolute top-[70px] left-[251px] w-[517px] h-[39px] text-center text-xl text-white">
        <div className="absolute top-[0px] left-[263px] bg-crimson-300 w-[254px] h-[39px] overflow-hidden opacity-[0.6]" />
        <div className="absolute top-[0px] left-[0px] bg-crimson-300 w-[263px] h-[39px] overflow-hidden" />
        <div className="absolute top-[0px] left-[0px] font-semibold flex items-center justify-center w-[263px] h-[37px]">
          Competition
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[263px] text-xl font-semibold font-poppins text-white text-center flex items-center justify-center w-[254px] h-[38px]"
          id="componentsbutton"
          onClick={()=>navigate('/announcement-page-others')}
        >
          Others
        </button>
      </div>
    </div>

        </form>
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

export default AnnouncementPageCompetition;
