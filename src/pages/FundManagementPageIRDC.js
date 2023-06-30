import { useState } from "react";
import ConfirmLogoutPopup from "../components/ConfirmLogoutPopup";
import PortalPopup from "../components/PortalPopup";
import AddFundingPopup from "../components/AddFundingPopup";
import AddExpenditurePopup11 from "../components/AddExpenditurePopup11";
import { useNavigate } from "react-router-dom";
import FundContainer from "../components/FundContainer";

const FundManagementPageIRDC = () => {
  const [isConfirmLogoutPopupOpen, setConfirmLogoutPopupOpen] = useState(false);
  const [isAddFundingPopupOpen, setAddFundingPopupOpen] = useState(false);
  const [isAddExpenditurePopup1Open, setAddExpenditurePopup1Open] =
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

  const onRequests2Click = () => {
    const anchor = document.querySelector("[data-scroll-to='rectangle2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const openAddFundingPopup = () => {
    setAddFundingPopupOpen(true);
  };

  const closeAddFundingPopup = () => {
    setAddFundingPopupOpen(false);
  };

  const openAddExpenditurePopup1 = () => {
    setAddExpenditurePopup1Open(true);
  };

  const closeAddExpenditurePopup1 = () => {
    setAddExpenditurePopup1Open(false);
  };

  return (
    <>
      <div className="relative bg-white w-full h-[950px] overflow-hidden text-center text-9xl text-white font-poppins">
        <div className="absolute top-[0px] left-[0px] bg-gray-400 w-[442px] h-[950px]" />
        <b className="absolute top-[64px] left-[65px] text-13xl inline-block w-[310px] h-[62px]">
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
        <div className="absolute top-[355px] left-[1px] bg-firebrick-600 flex flex-col items-start justify-start">
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
          className="absolute top-[32px] left-[713px] text-21xl font-archivo-black text-black inline-block w-[711px] h-[106px]"
          id="studentname"
        >
          <p className="m-0">Funding Details for URC</p>
          <p className="m-0"> (University Rover Challenge)</p>
        </label>
        <div className="absolute top-[137.5px] left-[496.5px] box-border w-[1145px] h-px border-t-[1px] border-solid border-dimgray-400" />
        <div className="absolute top-[662px] left-[1px] flex flex-col items-start justify-start cursor-pointer">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-[442px] h-[77px] flex flex-col items-center justify-center hover:bg-firebrick-200 hover:cursor-pointer"
            onClick={onRequests2Click}
          >
            <div className="relative text-xl font-semibold font-inter text-white text-center hover:text-white">
            Announcements
            </div>
          </button>
        </div>
        <FundContainer />
        <div className="absolute h-[17.26%] w-[19.58%] top-[18.53%] right-[25.65%] bottom-[64.21%] left-[54.78%] text-left">
          <div className="absolute h-full w-[92.37%] top-[0%] right-[7.63%] bottom-[0%] left-[0%] rounded-3xl bg-firebrick-400 shadow-[0px_4px_50px_rgba(0,_0,_0,_0.25)] hover:bg-midnightblue hover:cursor-pointer" />
          <b className="absolute top-[32.97px] left-[38.97px] inline-block w-[293.03px] h-[44.25px]">
            Available fund:
          </b>
          <label
            className="absolute top-[82.43px] left-[79.18px] font-bold inline-block w-[186.91px] h-[51.2px]"
            id="avfundurc"
          >
            1200000 tk
          </label>
        </div>
        <div className="absolute h-[17.26%] w-[17.87%] top-[18.21%] right-[5.19%] bottom-[64.53%] left-[76.95%] text-left">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xl bg-firebrick-400 shadow-[0px_4px_50px_rgba(0,_0,_0,_0.25)] hover:bg-midnightblue hover:cursor-pointer" />
          <b className="absolute top-[24.3px] left-[30.21px] inline-block w-[252.06px] h-[44.25px]">
            Total Spendings:
          </b>
          <label
            className="absolute top-[85.04px] left-[62.83px] font-bold inline-block w-[177.37px] h-[51.2px]"
            id="totalspendurc"
          >
            00000001 tk
          </label>
        </div>
        <div className="absolute h-[4.21%] w-[64.15%] top-[41.47%] right-[4.89%] bottom-[54.32%] left-[30.96%] text-5xl">
          <div className="absolute h-full w-[15.26%] top-[0%] right-[84.74%] bottom-[0%] left-[0%] bg-crimson-200 box-border overflow-hidden border-[1px] border-solid border-white">
            <b className="absolute top-[12px] left-[-38px] leading-[100%] flex items-center justify-center w-[242px] h-[15px]">
              Dep. ID
            </b>
          </div>
          <div className="absolute h-full w-[28.13%] top-[0%] right-[56.62%] bottom-[0%] left-[15.26%] bg-crimson-200 box-border overflow-hidden border-[1px] border-solid border-white">
            <b className="absolute top-[12px] left-[32px] leading-[100%] flex items-center justify-center w-[242px] h-[15px]">
              Depositor
            </b>
          </div>
          <div className="absolute h-full w-[17%] top-[0%] right-[39.61%] bottom-[0%] left-[43.38%] bg-crimson-200 box-border overflow-hidden border-[1px] border-solid border-white">
            <b className="absolute top-[12px] left-[28px] leading-[100%] flex items-center justify-center w-[129px] h-[15px]">
              Amount
            </b>
          </div>
          <div className="absolute h-full w-[25.18%] top-[0%] right-[0%] bottom-[0%] left-[74.82%] bg-crimson-200 box-border overflow-hidden border-[1px] border-solid border-white">
            <b className="absolute top-[10px] left-[6.59px] leading-[100%] inline-block w-[242px] h-[15px]">
              MIST_ID
            </b>
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-crimson-200 box-border overflow-hidden border-[1px] border-solid border-white">
              <b className="absolute top-[10px] left-[6.59px] leading-[100%] inline-block w-[242px] h-[15px]">
                MIST_ID
              </b>
            </div>
            <div className="absolute h-full w-full top-[0%] right-[-0.16%] bottom-[0%] left-[0.16%] bg-crimson-200 box-border overflow-hidden border-[1px] border-solid border-white">
              <b className="absolute top-[12px] left-[15.55px] leading-[100%] flex items-center justify-center w-[242px] h-[15px]">
                Competition
              </b>
            </div>
          </div>
          <div className="absolute h-full w-[14.43%] top-[0%] right-[25.18%] bottom-[0%] left-[60.39%] bg-crimson-200 box-border overflow-hidden border-[1px] border-solid border-white">
            <b className="absolute top-[12px] left-[34px] leading-[100%] flex items-center justify-center w-[89px] h-[15px]">
              Date
            </b>
          </div>
        </div>
        <div className="absolute h-[4.21%] w-[64.15%] top-[46%] right-[4.89%] bottom-[49.79%] left-[30.96%] text-5xl text-black">
          <div className="absolute h-full w-[15.26%] top-[0%] right-[84.74%] bottom-[0%] left-[0%] bg-lightgray-100 box-border overflow-hidden border-[1px] border-solid border-white">
            <div className="absolute top-[12px] left-[30px] leading-[100%] flex items-center justify-center w-[106px] h-[15px]">
              D-1
            </div>
          </div>
          <div className="absolute h-full w-[28.13%] top-[0%] right-[56.62%] bottom-[0%] left-[15.26%] bg-lightgray-100 box-border overflow-hidden border-[1px] border-solid border-white">
            <div className="absolute top-[12px] left-[32px] leading-[100%] flex items-center justify-center w-[242px] h-[15px]">
              MIST Rover Fund
            </div>
          </div>
          <div className="absolute h-full w-[17%] top-[0%] right-[39.61%] bottom-[0%] left-[43.38%] bg-lightgray-100 box-border overflow-hidden border-[1px] border-solid border-white" />
          <div className="absolute h-full w-[14.43%] top-[0%] right-[25.18%] bottom-[0%] left-[60.39%] bg-lightgray-100 box-border overflow-hidden border-[1px] border-solid border-white" />
          <div className="absolute top-[13px] left-[473px] leading-[100%] flex items-center justify-center w-[183px] h-[15px]">
            10 000
          </div>
          <div className="absolute top-[14px] left-[661px] leading-[100%] flex items-center justify-center w-[150px] h-[15px]">
            18/03/22
          </div>
          <div className="absolute h-full w-[25.18%] top-[0%] right-[0%] bottom-[0%] left-[74.82%] bg-lightgray-100 box-border overflow-hidden border-[1px] border-solid border-white">
            <div className="absolute top-[12px] left-[16px] leading-[100%] flex items-center justify-center w-[242px] h-[15px]">
              Rover 03
            </div>
          </div>
        </div>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[829px] left-[784px] w-[259px] h-[58px] flex flex-row items-center justify-center"
          id="addfundbuttonurc"
          onClick={openAddFundingPopup}
        >
          <button className="cursor-pointer [border:none] py-3.5 px-4 bg-limegreen rounded w-[234px] h-[51px] overflow-hidden shrink-0 flex flex-row box-border items-center justify-between">
            <b className="relative text-xl leading-[100%] font-poppins text-white text-center">
              Add Fund
            </b>
          </button>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[829px] left-[1043px] w-[221px] h-[58px] flex flex-row items-center justify-center"
          id="addexpbuttonurc"
          onClick={openAddExpenditurePopup1}
        >
          <button className="cursor-pointer [border:none] py-3.5 px-4 bg-limegreen rounded w-[237px] h-[51px] overflow-hidden shrink-0 flex flex-row box-border items-center justify-between">
            <b className="relative text-xl leading-[100%] font-poppins text-white text-center">
              Add Expenditure
            </b>
          </button>
        </button>
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
      {isAddFundingPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAddFundingPopup}
        >
          <AddFundingPopup onClose={closeAddFundingPopup} />
        </PortalPopup>
      )}
      {isAddExpenditurePopup1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAddExpenditurePopup1}
        >
          <AddExpenditurePopup11 onClose={closeAddExpenditurePopup1} />
        </PortalPopup>
      )}
    </>
  );
};

export default FundManagementPageIRDC;
