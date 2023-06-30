import { useEffect, useState } from "react";
import ConfirmLogoutPopup from "../components/ConfirmLogoutPopup";
import PortalPopup from "../components/PortalPopup";
import PendingMemberInfo from "../components/PendingMemberInfo";
import ConfirmDeleteRequestPopup from "../components/ConfirmDeleteRequestPopup";
import { useNavigate } from "react-router-dom";

const RequestPage = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isConfirmLogoutPopupOpen, setConfirmLogoutPopupOpen] = useState(false);
  const [isPendingMemberInfoPopupOpen, setPendingMemberInfoPopupOpen] =
    useState(false);
  const [isConfirmDeleteRequestPopupOpen, setConfirmDeleteRequestPopupOpen] =
    useState(false);
  const navigate = useNavigate();
  const [selectedData, setSelectedData] = useState(null)


  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("http://localhost:5498/Requests")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setFilteredData(data);
      })
      .catch((error) => console.error(error));
  };

 

  if (!data) {
    return "loading.........";
  }


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
    navigate(`/team-leader-profile-update/:studentId`);
  };

  const onEditProfileClick = () => {
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
    navigate("/announcement-page-competition");
    const anchor = document.querySelector("[data-scroll-to='rectangle2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const onRequestsContainer3Click = () => {
    navigate("/view-assigned-task-page");
  };

  const onRequests3Click = () => {
    const anchor = document.querySelector("[data-scroll-to='rectangle2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const onComponents1Click = () => {
    navigate("/team-lead-profile");
  };

  const openPendingMemberInfoPopup = () => {
    setPendingMemberInfoPopupOpen(true);
  };

  const closePendingMemberInfoPopup = () => {
    setPendingMemberInfoPopupOpen(false);
  };

  const openConfirmDeleteRequestPopup = () => {
    setConfirmDeleteRequestPopupOpen(true);
  };

  const closeConfirmDeleteRequestPopup = () => {
    setConfirmDeleteRequestPopupOpen(false);
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    setSearchTerm(searchTerm);

    // const filtered = data.
    // setData(filtered);
  };

  return (
    <>
      <div className="relative bg-white w-full h-[950px] overflow-hidden text-left text-13xl text-black font-poppins">
        <div className="absolute top-[0px] left-[0px] bg-gray-400 w-[442px] h-[950px]" />
        <b className="absolute top-[64px] left-[65px] inline-block text-white text-center w-[310px] h-[62px]">
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
        <div className="absolute top-[591px] left-[1px] bg-firebrick-600 flex flex-col items-start justify-start cursor-pointer">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-[442px] h-[77px] flex flex-col items-center justify-center hover:bg-firebrick-200 hover:cursor-pointer"
            onClick={onRequestsClick}
          >
            <div className="relative text-xl font-semibold font-inter text-white text-center flex items-center justify-center w-[154px] h-11 shrink-0 hover:text-white">
              Requests
            </div>
          </button>
        </div>
        <div className="absolute top-[591px] left-[1px] bg-firebrick-600 flex flex-col items-start justify-start cursor-pointer">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-[442px] h-[77px] flex flex-col items-center justify-center hover:bg-firebrick-200 hover:cursor-pointer"
            onClick={onRequests1Click}
          >
            <div className="relative text-xl font-semibold font-inter text-white text-center flex items-center justify-center w-[154px] h-11 shrink-0 hover:text-white">
              Requests
            </div>
          </button>
        </div>
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
        <div
          className="absolute top-[508px] left-[1px] flex flex-col items-start justify-start cursor-pointer"
          onClick={onRequestsContainer3Click}
        >
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-[442px] h-[77px] flex flex-col items-center justify-center hover:bg-firebrick-200 hover:cursor-pointer"
            onClick={onRequests3Click}
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
        <div className="absolute top-[149.5px] left-[503.77px] box-border w-[1145px] h-px border-t-[1px] border-solid border-dimgray-400" />
        <label
          className="absolute top-[76px] left-[748.27px] text-21xl font-archivo-black inline-block w-[690px] h-[61px]"
          id="studentname"
        >
          Pending Membership Requests
        </label>

        {/* <div className="absolute top-[181px] left-[506px] shadow-[0px_4px_50px_rgba(0,_0,_0,_0.25)] w-[1139px] h-[142px] overflow-hidden text-5xl">
          <img
            className="absolute h-[74.31%] w-[9.26%] top-[12.68%] right-[88.89%] bottom-[13.02%] left-[1.84%] max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/person-icon-1@2x.png"
          />
          <div className="absolute h-[27.46%] w-[75.86%] top-[22.54%] left-[13.61%] font-semibold inline-block">
            Mayeesha Musarrat
          </div>
          <div className="absolute h-[18.31%] w-[34.42%] top-[57.04%] left-[13.61%] text-2xl inline-block">
            6/6/2023, 2:50 pm
          </div>
          <button
            className="cursor-pointer [border:none] py-3 px-[9px] bg-darkslategray-100 absolute h-[30.28%] w-[12.55%] top-[34.51%] right-[31.34%] bottom-[35.21%] left-[56.1%] flex flex-col box-border items-end justify-end"
            id="view_detail_button"
            onClick={openPendingMemberInfoPopup}
          >
            <b className="relative text-mini leading-[100%] inline-block font-poppins text-white text-left w-28 h-[17px] shrink-0">
              View Details
            </b>
          </button>
          <button
            className="cursor-pointer [border:none] p-3.5 bg-green absolute w-[11.59%] top-[calc(50%_-_20px)] right-[17.47%] left-[70.94%] flex flex-row box-border items-start justify-start"
            id="acceptbtn"
          >
            <b className="relative text-mini leading-[100%] inline-block font-poppins text-white text-center w-[99px] shrink-0">
              Accept
            </b>
          </button>
          <button
            className="cursor-pointer [border:none] py-0 px-[13px] bg-crimson-100 absolute h-[30.28%] w-[12.55%] top-[34.51%] right-[2.55%] bottom-[35.21%] left-[84.9%] flex flex-col box-border items-end justify-center"
            id="decline_button"
            onClick={openConfirmDeleteRequestPopup}
          >
            <b className="relative text-mini leading-[100%] flex font-poppins text-white text-center items-center justify-center w-28 h-[17px] shrink-0">
              Decline
            </b>
          </button>
        </div> */}
{/* 
 <table>
 
  <tr>
    <td className="absolute top-[181px] left-[506px] shadow-[0px_4px_50px_rgba(0,_0,_0,_0.25)] w-[1139px] h-[142px] overflow-hidden text-5xl">
      
      <div className="absolute h-[27.46%] w-[75.86%] top-[22.54%] left-[13.61%] font-semibold inline-block">
        Mayeesha Musarrat
      </div>
      <div className="absolute h-[18.31%] w-[34.42%] top-[57.04%] left-[13.61%] text-2xl inline-block">
        6/6/2023, 2:50 pm
      </div>
      <td className="absolute h-[30.28%] w-[12.55%] top-[34.51%] right-[31.34%] bottom-[35.21%] left-[56.1%]">
        <button
          className="cursor-pointer [border:none] py-3 px-[9px] bg-darkslategray-100 absolute flex flex-col box-border items-end justify-end h-full w-full"
          id="view_detail_button"
          onClick={openPendingMemberInfoPopup}
        >
          <b className="relative text-mini leading-[100%] inline-block font-poppins text-white text-left w-28 h-[17px] shrink-0">
            View Details
          </b>
        </button>
      </td>
      <td className="absolute w-[11.59%] top-[calc(50%_-_20px)] right-[17.47%] left-[70.94%]">
        <button
          className="cursor-pointer [border:none] p-5 bg-green absolute flex flex-row box-border items-start justify-start h-full w-full"
          id="acceptbtn"
        >
          <b className="relative text-mini leading-[100%] inline-block font-poppins text-white text-left w-28 h-[17px] shrink-0">
            Accept
          </b>
        </button>
      </td>
      <td className="absolute h-[30.28%] w-[12.55%] top-[34.51%] right-[2.55%] bottom-[35.21%] left-[84.9%]">
        <button
          className="cursor-pointer [border:none] py-0 px-[13px] bg-crimson-100 absolute flex flex-col box-border items-end justify-center h-full w-full"
          id="decline_button"
          onClick={openConfirmDeleteRequestPopup}
        >
          <b className="relative text-mini leading-[100%] flex font-poppins text-white text-center items-center justify-center w-28 h-[17px] shrink-0">
            Decline
          </b>
        </button>
      </td>
    </td>

  </tr>

</table>  */}
<table className="absolute top-[261px] left-[488px] w-[1132.54px] h-[41px] text-lg text-black">
  <thead className="bg-red-500 text-white">
    <tr>
      <th>MIST ID.</th>
      <th>SUB_TEAM</th>
      <th>SKILLS</th>
      <th>View Details</th>
    </tr>
  </thead>
  <tbody>
    {data.filter((component) =>
      component.TEAM_NAME.toLowerCase().includes(searchTerm) || component.DETAILS.toLowerCase().includes(searchTerm)
    ).map((component, index) => (
      <tr key={component.ID}>
        <td>{component.MIST_ID}</td>
        <td>{component.TEAM_NAME}</td>
        <td>{`${component.DETAILS}`}</td>
        <td> 
          <button id="view_detail_button"
          onClick={()=>{

            openPendingMemberInfoPopup()
            setSelectedData(component);

          }
          } className="flex items-center bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2 transition-colors duration-300">
            <img src="logo.png" alt="Edit" className="w-6 h-6 mr-2" /> {/* Replace "edit-logo.png" with your edit logo file path */}
          View Details
          </button>
          
        </td>
        {/* <td> 
          <button id="edit_button"
              className="flex items-center bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2 transition-colors duration-300">
            <img src="logo.png" alt="Edit" className="w-6 h-6 mr-2" /> 
         Accept
          </button>
          
        </td>
        <td> 
          <button id="decline_button"
          onClick={openConfirmDeleteRequestPopup} className="flex items-center bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2 transition-colors duration-300">
            <img src="logo.png" alt="Edit" className="w-6 h-6 mr-2" /> 
          Decline
          </button>
          
        </td> */}
        
      </tr> 
    ))}
  </tbody>
</table>
    

      




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
      {isPendingMemberInfoPopupOpen && selectedData &&(
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closePendingMemberInfoPopup}
        >
          <PendingMemberInfo selectedData={selectedData} onClose={closePendingMemberInfoPopup} />
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

export default RequestPage;
