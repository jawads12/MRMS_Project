import { useState } from "react";
import ConfirmLogoutPopup from "../components/ConfirmLogoutPopup";
import PortalPopup from "../components/PortalPopup";
import AssignTaskPopup from "../components/AssignTaskPopup";
import AddFundingPopup from "../components/AddFundingPopup";
import EditTaskPopup from "../components/EditTaskPopup";
import { useNavigate } from "react-router-dom";

const AssignTasks = () => {
  const [isConfirmLogoutPopupOpen, setConfirmLogoutPopupOpen] = useState(false);
  const [isAssignTaskPopupOpen, setAssignTaskPopupOpen] = useState(false);
  const [isAddFundingPopupOpen, setAddFundingPopupOpen] = useState(false);
  const [isEditTaskPopupOpen, setEditTaskPopupOpen] = useState(false);
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
    navigate(`/team-leader-profile-update/${studentId}`);
  };

  const onEditProfileClick = () => {
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

  const onRequests1Click = () => {
    const anchor = document.querySelector("[data-scroll-to='rectangle2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const onComponents1Click = () => {
    navigate("/team-lead-profile");
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

  const openAssignTaskPopup = () => {
    setAssignTaskPopupOpen(true);
  };

  const closeAssignTaskPopup = () => {
    setAssignTaskPopupOpen(false);
  };

  const openAddFundingPopup = () => {
    setAddFundingPopupOpen(true);
  };

  const closeAddFundingPopup = () => {
    setAddFundingPopupOpen(false);
  };

  const openEditTaskPopup = () => {
    setEditTaskPopupOpen(true);
  };

  const closeEditTaskPopup = () => {
    setEditTaskPopupOpen(false);
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
        <div className="absolute top-[508px] left-[1px] bg-firebrick-600 flex flex-col items-start justify-start">
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
          Assign Tasks
        </label>
        <div className="absolute top-[137.5px] left-[496.5px] box-border w-[1145px] h-px border-t-[1px] border-solid border-dimgray-400" />
        <div
          className="absolute top-[662px] left-[1px] flex flex-col items-start justify-start cursor-pointer"
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
        <div className="absolute top-[242px] left-[493px] h-10 flex flex-row items-center justify-start text-lgi">
          <div className="relative bg-crimson-200 box-border w-32 h-10 overflow-hidden shrink-0 border-[1px] border-solid border-white">
            <b className="absolute top-[12px] left-[calc(50%_-_78px)] leading-[100%] flex items-center justify-center w-[158px] h-[15px]">
              Task ID
            </b>
          </div>
          <div className="bg-crimson-200 box-border w-[239px] h-10 overflow-hidden shrink-0 flex flex-col py-3 px-[3px] items-start justify-start border-[1px] border-solid border-white">
            <b className="relative leading-[100%] flex items-center justify-center w-[213px] h-[15px] shrink-0">
              Member Name
            </b>
          </div>
          <div className="bg-crimson-200 box-border w-[257px] h-10 overflow-hidden shrink-0 flex flex-col py-3 px-[3px] items-start justify-start border-[1px] border-solid border-white">
            <b className="relative leading-[100%] flex items-center justify-center w-60 h-[15px] shrink-0">
              Assigned Component
            </b>
          </div>
          <div className="bg-crimson-200 box-border w-[142px] h-10 overflow-hidden shrink-0 flex flex-col py-3 px-0 items-end justify-start border-[1px] border-solid border-white">
            <b className="relative leading-[100%] flex items-center justify-center w-[139px] h-[15px] shrink-0">
              Quantity
            </b>
          </div>
          <div className="bg-crimson-200 box-border w-[243px] h-10 overflow-hidden shrink-0 flex flex-col py-3 px-0 items-end justify-start border-[1px] border-solid border-white">
            <b className="relative leading-[100%] flex items-center justify-center w-60 h-[15px] shrink-0">
              Assigned Task
            </b>
          </div>
          <div className="relative bg-crimson-200 box-border w-32 h-10 overflow-hidden shrink-0 border-[1px] border-solid border-white">
            <b className="absolute top-[12px] left-[calc(50%_-_78px)] leading-[100%] flex items-center justify-center w-[142px] h-[15px]">
              Deadline
            </b>
          </div>
        </div>
        <div className="absolute top-[282px] left-[493px] h-[72px] flex flex-row items-center justify-start text-mid text-black">
          <div className="bg-lightgray-100 box-border w-32 overflow-hidden shrink-0 flex flex-col items-center justify-center border-[1px] border-solid border-white">
            <div className="relative leading-[100%] flex items-center justify-center w-32 h-[72px] shrink-0">
              1
            </div>
          </div>
          <div className="bg-lightgray-100 box-border w-[239px] overflow-hidden shrink-0 flex flex-col items-center justify-center border-[1px] border-solid border-white">
            <div className="relative leading-[100%] flex items-center justify-center w-[239px] h-[72px] shrink-0">
              Mayeesha Musarrat
            </div>
          </div>
          <div className="bg-lightgray-100 box-border w-[257px] overflow-hidden shrink-0 flex flex-col items-center justify-center border-[1px] border-solid border-white">
            <div className="relative leading-[100%] flex items-center justify-center w-[257px] h-[72px] shrink-0">
              BMP180
            </div>
          </div>
          <div className="bg-lightgray-100 box-border w-[142px] overflow-hidden shrink-0 flex flex-col items-end justify-center border-[1px] border-solid border-white">
            <div className="relative leading-[100%] flex items-center justify-center w-[139px] h-[72px] shrink-0">
              5
            </div>
          </div>
          <div className="bg-lightgray-100 box-border w-[243px] overflow-hidden shrink-0 flex flex-col items-end justify-center text-mini border-[1px] border-solid border-white">
            <div className="relative leading-[100%] flex items-center justify-center w-60 h-[72px] shrink-0">
              Complete the coding for sensor ASAP and upload the code in github.
            </div>
          </div>
          <div className="bg-lightgray-100 box-border w-32 overflow-hidden shrink-0 flex flex-col items-end justify-center border-[1px] border-solid border-white">
            <div className="relative leading-[100%] flex items-center justify-center w-[123px] h-[72px] shrink-0">
              24 June 2023
            </div>
          </div>
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[819px] left-[810px] w-[259px] h-[58px] flex flex-row items-center justify-center"
          id="assign_task_btn"
          onClick={openAssignTaskPopup}
        >
          <button className="cursor-pointer [border:none] py-3.5 px-4 bg-limegreen rounded w-[234px] h-[51px] overflow-hidden shrink-0 flex flex-row box-border items-center justify-between">
            <b className="relative text-xl leading-[100%] font-poppins text-white text-center">
              Assign Task
            </b>
          </button>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[819px] left-[1069px] w-[259px] h-[58px] flex flex-row items-center justify-center"
          id="addfundbuttonurc"
          onClick={openAddFundingPopup}
        >
          <button className="cursor-pointer [border:none] py-3.5 px-4 bg-firebrick-600 rounded w-[234px] h-[51px] overflow-hidden shrink-0 flex flex-row box-border items-center justify-between">
            <b className="relative text-xl leading-[100%] font-poppins text-white text-center">
              Edit Task
            </b>
          </button>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[819px] left-[1069px] w-[259px] h-[58px] flex flex-row items-center justify-center"
          id="edit_task_btn"
          onClick={openEditTaskPopup}
        >
          <button className="cursor-pointer [border:none] py-3.5 px-4 bg-firebrick-600 rounded w-[234px] h-[51px] overflow-hidden shrink-0 flex flex-row box-border items-center justify-between">
            <b className="relative text-xl leading-[100%] font-poppins text-white text-center">
              Edit Task
            </b>
          </button>
        </button>
        <input
          className="font-poppins text-base bg-[transparent] absolute top-[171px] left-[901px] rounded-xl box-border w-[413px] h-[37px] flex flex-col py-0 px-4 items-start justify-center border-[1px] border-solid border-black"
          type="search"
          placeholder={`Search here..
`}
          maxLength
          minLength
          id="fiter_task"
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
      {isAssignTaskPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAssignTaskPopup}
        >
          <AssignTaskPopup onClose={closeAssignTaskPopup} />
        </PortalPopup>
      )}
      {isAddFundingPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAddFundingPopup}
        >
          <AddFundingPopup onClose={closeAddFundingPopup} />
        </PortalPopup>
      )}
      {isEditTaskPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeEditTaskPopup}
        >
          <EditTaskPopup onClose={closeEditTaskPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default AssignTasks;
