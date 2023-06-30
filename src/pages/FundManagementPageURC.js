import { useState } from "react";
import ConfirmLogoutPopup from "../components/ConfirmLogoutPopup";
import PortalPopup from "../components/PortalPopup";
import AddFundingPopup from "../components/AddFundingPopup";
import AddExpenditurePopup1 from "../components/AddExpenditurePopup1";
import AddExpenditurePopup11 from "../components/AddExpenditurePopup11";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FundManagementPageIRDC = () => {
  const [comp, setCOMP]=useState([]);
  const [data, setData] = useState([]);
  const [TotalFunddata, setTotalFundData] = useState([]);
  const [TotalAvailableFunddata, setTotalAvailableFundData] = useState([]);
  const [SpendingsData, setSpendingsData] = useState([]);
  const [isConfirmLogoutPopupOpen, setConfirmLogoutPopupOpen] = useState(false);
  const [isAddFundingPopupOpen, setAddFundingPopupOpen] = useState(false);
  const [isAddExpenditurePopup1Open, setAddExpenditurePopup1Open] =
    useState(false);
  const [
    isAddExpenditureComponentPopuPopupOpen,
    setAddExpenditureComponentPopuPopupOpen,
  ] = useState(false);
  const [
    isAddExpenditureAdministrationPopupOpen,
    setAddExpenditureAdministrationPopupOpen,
  ] = useState(false);
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

  const onEditProfileContainerClick = () => {
    navigate("/team-leader-profile-update");
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
    navigate("/add-expenditure-administration-popup1");
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

  const openAddFundingPopup = () => {
    setAddFundingPopupOpen(true);
  };

  const closeAddFundingPopup = () => {
    setAddFundingPopupOpen(false);
  };

  const openAddExpenditureComponentPopuPopup = () => {
    setAddExpenditureComponentPopuPopupOpen(true);
  };

  const closeAddExpenditureComponentPopuPopup = () => {
    setAddExpenditureComponentPopuPopupOpen(false);
  };

  const openAddExpenditureAdministrationPopup = () => {
    setAddExpenditureAdministrationPopupOpen(true);
  };

  const closeAddExpenditureAdministrationPopup = () => {
    setAddExpenditureAdministrationPopupOpen(false);
  };

  const onBackIcon1Click = () => {
    navigate("/fund-management-page");
  };

  

useEffect(() => {
  fetchComp();
  fetchData();
  fetchFundData();
  fetchAvailableFundData();
  fetchSpendingsData();
}, []);

const fetchComp = () => {
  fetch("http://localhost:5498/currentCompetitions")
    .then((response) => response.json())
    .then((data) => {
      setData(data);
      setFilteredData(data);
      console.log(data);
    })
    .catch((error) => console.error(error));
};

const fetchData = () => {
  fetch(`http://localhost:5498/fund-table`)
    .then((response) => response.json())
    .then((data) => {
      setData(data);
      setFilteredData(data);
      console.log(data);
    })
    .catch((error) => console.error(error));
};

const fetchFundData = () => {
  fetch(`http://localhost:5498/fund`)
    .then((response) => response.json())
    .then((data) => {
      setTotalFundData(data);
      //setTotalFData(data);
      console.log(data);
    })
    .catch((error) => console.error(error));
};

const fetchSpendingsData = () => {
  fetch(`http://localhost:5498/fund-spend`)
    .then((response) => response.json())
    .then((data) => {
      setSpendingsData(data);
      //setTotalFData(data);
      console.log(data);
    })
    .catch((error) => console.error(error));
};


const fetchAvailableFundData = () => {
  fetch(`http://localhost:5498/fundAvailable`)
    .then((response) => response.json())
    .then((data) => {
      setTotalAvailableFundData(data);
      //setTotalFData(data);
      console.log(data);
    })
    .catch((error) => console.error(error));
};



if(!data) {
  return "loading....."
}





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
        <div className="absolute top-[173px] left-[541px] w-[307px] h-[164px] text-left">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xl bg-firebrick-400 shadow-[0px_4px_50px_rgba(0,_0,_0,_0.25)] hover:bg-midnightblue hover:cursor-pointer" />
          <b className="absolute top-[31.79px] left-[76.52px] inline-block w-[194.44px] h-[46.01px]">
            Total fund:
          </b>
          <label
            className="absolute top-[91.34px] left-[84.47px] font-bold inline-block w-[194.44px] h-[53.23px]"
            id="totalfundurc"
          >
            {TotalFunddata?.['SUM(AMOUNT)']} tk
          </label>
        </div>
        <div className="absolute top-[176px] left-[929px] w-[332px] h-[164px] text-left">
          <div className="absolute h-full w-[92.37%] top-[0%] right-[7.63%] bottom-[0%] left-[0%] rounded-3xl bg-firebrick-400 shadow-[0px_4px_50px_rgba(0,_0,_0,_0.25)] hover:bg-midnightblue hover:cursor-pointer" />
          <b className="absolute top-[32.97px] left-[38.97px] inline-block w-[293.03px] h-[44.25px]">
            Available fund:
          </b>
          <label
            className="absolute top-[82.43px] left-[79.18px] font-bold inline-block w-[186.91px] h-[51.2px]"
            id="avfundurc"
          >
            {TotalAvailableFunddata?.AVAILABLE_FUND} tk
          </label>
        </div>
        <div className="absolute top-[173px] left-[1305px] w-[303px] h-[164px] text-left">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-3xl bg-firebrick-400 shadow-[0px_4px_50px_rgba(0,_0,_0,_0.25)] hover:bg-midnightblue hover:cursor-pointer" />
          <b className="absolute top-[24.3px] left-[30.21px] inline-block w-[252.06px] h-[44.25px]">
            Total Spendings:
          </b>
          <label
            className="absolute top-[85.04px] left-[62.83px] font-bold inline-block w-[177.37px] h-[51.2px]"
            id="totalspendurc"
          >
            {SpendingsData?.TOTAL_EXPENDITURE} tk
          </label>
        </div>
        
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[828px] left-[681px] w-[259px] h-[58px] flex flex-row items-center justify-center"
          id="addfundbuttonurc"
          onClick={openAddFundingPopup}
        >
          <button className="cursor-pointer [border:none] py-3.5 px-4 bg-limegreen rounded w-[234px] h-16 overflow-hidden shrink-0 flex flex-row box-border items-center justify-between">
            <b className="relative text-xl leading-[100%] font-poppins text-white text-center">
              Add Fund
            </b>
          </button>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[828px] left-[971px] h-[58px] flex flex-row items-center justify-center"
          id="addexpbuttonurc"
          onClick={openAddExpenditureComponentPopuPopup}
        >
          <button className="cursor-pointer [border:none] py-3.5 px-4 bg-limegreen rounded w-[237px] h-[66px] overflow-hidden shrink-0 flex flex-row box-border items-center justify-between">
            <b className="relative text-xl leading-[100%] font-poppins text-white text-center">
              <p className="m-0">Add Component</p>
              <p className="m-0">Expenditure</p>
            </b>
          </button>
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[828px] left-[1257px] h-[58px] flex flex-row items-center justify-center"
          id="addexpbuttonurc"
          onClick={openAddExpenditureAdministrationPopup}
        >
          <button className="cursor-pointer [border:none] py-3.5 px-4 bg-limegreen rounded w-[237px] h-[66px] overflow-hidden shrink-0 flex flex-row box-border items-center justify-between">
            <b className="relative text-xl leading-[100%] font-poppins text-white text-center">
              <p className="m-0">Add Administrative</p>
              <p className="m-0">Expenditure</p>
            </b>
          </button>
        </button>
        <div className="absolute top-[435px] left-[525px] w-[1083px] h-10 text-5xl text-black">
        <table className="absolute h-[4.21%] w-[90%] top-[10%] left-[5%] text-5xl text-lg text-black">  <thead className="bg-red-500">
    <tr>
      <th>Dep ID.</th>
      <th>Name</th>
      <th>Amount</th>
      <th>FUND Date</th>
      
      {/* <th>Edit</th> */}
      
      
    </tr>
  </thead>
  <tbody>
     {data.map((component, index) => (
      <tr key={component.DEPOSIT_ID}>
        <td>{component.DEPOSIT_ID}</td>
        <td>{`${component.DEPOSITOR}`}</td>
        <td>{component.AMOUNT}</td>
        <td>{component.FUND_DATE}</td>
{/*         
        <td> 
          <button id="edit_button"
              onClick={()=>{
                // openEditComponentPopup();
                // setSelectedComponent(component);
              }} className="flex items-center bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2 transition-colors duration-300">
            <img src="logo.png" alt="Edit" className="w-6 h-6 mr-2" /> 
          </button>
          
        </td> */}
        
      </tr> 
    ))}
  </tbody>
</table>

         
        
        
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
      {isAddFundingPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAddFundingPopup}
        >
          <AddFundingPopup onClose={closeAddFundingPopup} />
        </PortalPopup>
      )}
      {isAddExpenditureComponentPopuPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAddExpenditureComponentPopuPopup}
        >
          <AddExpenditurePopup1
            onClose={closeAddExpenditureComponentPopuPopup}
          />
        </PortalPopup>
      )}
      {isAddExpenditureAdministrationPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAddExpenditureAdministrationPopup}
        >
          <AddExpenditurePopup11
            onClose={closeAddExpenditureAdministrationPopup}
          />
        </PortalPopup>
      )}
    </>
  );
};

export default FundManagementPageIRDC;
