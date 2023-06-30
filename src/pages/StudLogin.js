import { useEffect, useState } from "react";
import ConfirmLogoutPopup from "../components/ConfirmLogoutPopup";
import PortalPopup from "../components/PortalPopup";
import JoinTheTeamPopup from "../components/JoinTheTeamPopup";
import LevelContainer from "../components/LevelContainer";
import { useNavigate } from "react-router-dom";

const StudLogin = () => {
  const [isConfirmLogoutPopupOpen, setConfirmLogoutPopupOpen] = useState(false);
  const [isJoinTheTeamPopupOpen, setJoinTheTeamPopupOpen] = useState(false);
  const navigate = useNavigate();

  const onFrameButtonClick = () => {
    navigate("/edit-profile");
  };

  const openConfirmLogoutPopup = () => {
    setConfirmLogoutPopupOpen(true);
  };

  const closeConfirmLogoutPopup = () => {
    setConfirmLogoutPopupOpen(false);
  };

  const openJoinTheTeamPopup = () => {
    setJoinTheTeamPopupOpen(true);
  };

  const closeJoinTheTeamPopup = () => {
    setJoinTheTeamPopupOpen(false);
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
      <div className="relative bg-gray-300 w-full h-[1065px] overflow-hidden text-left text-base text-white font-poppins">
        <div className="absolute top-[0px] left-[-24px] bg-lightgray-200 w-[1724px] h-[1065px] overflow-hidden opacity-[0.8]">
          <img
            className="absolute top-[0px] left-[24px] w-[1882px] h-[1073px] object-cover opacity-[0.8]"
            alt=""
            src="/rectangle-7@2x.png"
          />
          <div className="absolute top-[50px] left-[132px] bg-white shadow-[9px_9px_4px_rgba(0,_0,_0,_0.25)] w-[1449px] h-[870px] opacity-[0.7]" />
          <div className="absolute top-[47px] left-[132px] bg-maroon-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1449px] h-[209px]" />
          <div className="absolute top-[163px] left-[185px] w-[323.5px] h-[569px] text-left text-base text-dimgray-200 font-poppins">
      <img
        className="absolute top-[0px] left-[0px] w-[330.95px] h-[577px]"
        alt=""
        src="/rectangle-5.svg"
      />
      <img
        className="absolute top-[0px] left-[0.55px] w-[322.95px] h-[352px] object-cover"
        alt=""
        id="genphoto"
        src="/rectangle-4@2x.png"
      />
      <label
        className="absolute top-[441px] left-[49px] font-light inline-block w-36 h-[23px]"
        id="level"
      >
        Level: {studentData?.LEVEL_NO}
      </label>
      <label
        className="absolute top-[418px] left-[49px] font-light inline-block w-36 h-[23px]"
        id="dept"
      >
        <p className="m-0">Department:  {studentData?.DEPARTMENT}</p>
      </label>
      <label
        className="absolute top-[464px] left-[49px] font-light inline-block w-[264px] h-[23px]"
        id="email"
      >
        <p className="m-0">Email:  {studentData?.EMAIL}</p>
      </label>
      <label
        className="absolute top-[487px] left-[49px] font-light inline-block w-[189px] h-[23px]"
        id="phone"
      >
        Phone:  {studentData?.["Phone 1"]}
      </label>
      <label
        className="absolute top-[510px] left-[49px] font-light inline-block w-36 h-[23px]"
        id="dept"
      >
      </label>
      <b className="absolute top-[383px] left-[49.05px] inline-block w-[127.86px] h-7">
        ABOUT
      </b>
    </div>
          <div className="absolute top-[163px] left-[541px] w-[308px] h-[74px] flex flex-col items-start justify-start text-21xl font-archivo-black">
            <label
              className="relative inline-block w-[308px] h-[61px] shrink-0 [text-shadow:2px_2px_4px_rgba(0,_0,_0,_0.25)]"
              id="studentname"
            >
              {studentData?.NAME.FIRST_NAME}
            </label>
           
          </div>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[200px] left-[1302px] w-[119px] h-[37px] flex flex-row items-center justify-end"
            id="editprofile"
            onClick={onFrameButtonClick}
          >
            <div className="relative rounded-3xs bg-maroon-100 box-border w-[107px] h-[37px] border-[1px] border-solid border-white" />
            <div className="relative text-base font-poppins text-white text-left inline-block w-[106px] h-8 shrink-0 ml-[-94px]">
              Edit Profile
            </div>
          </button>
          <div
            className="absolute top-[200px] left-[1445px] w-[131px] h-[37px] cursor-pointer"
            onClick={openConfirmLogoutPopup}
          >
            <div className="absolute top-[0px] left-[0px] rounded-3xs bg-maroon-100 box-border w-[107px] h-[37px] border-[1px] border-solid border-white" />
            <div className="absolute top-[3px] left-[25px] inline-block w-[106px] h-8">
              Logout
            </div>
          </div>
          <button
            className="cursor-pointer py-0 px-[9px] bg-maroon-100 absolute top-[201px] left-[1145px] rounded-3xs box-border w-[139px] h-[37px] flex flex-col items-start justify-end border-[1px] border-solid border-white"
            id="jointheteam"
            onClick={openJoinTheTeamPopup}
          >
            <div className="relative text-base font-poppins text-white text-left inline-block w-[119.86px] h-8 shrink-0">
              Join the Team
            </div>
          </button>
          <div className="absolute top-[250px] left-[1253px] bg-maroon-300 w-[328px] h-[670px]" />
          <b className="absolute top-[282px] left-[1268px] text-xl inline-block w-[231px] h-[39px]">
            Headlines
          </b>
          <a className="[text-decoration:underline] absolute top-[328px] left-[1270px] font-medium text-[inherit] inline-block w-[294px] h-[52px]">
            MIST Mongol Barota: The champion in URC 2021 Virtual Round!
          </a>
          <a className="[text-decoration:underline] absolute top-[397px] left-[1268px] font-medium text-[inherit] inline-block w-[286px] h-12">
            Recruitment for new members: Join our legacy!
          </a>
          <a className="[text-decoration:underline] absolute top-[470px] left-[1270px] font-medium text-[inherit] inline-block w-[281px] h-[77px]">
            MIST Mongol Barota scored 92.56 in the SAR: A new milestone reached
          </a>
          <a
            className="[text-decoration:none] absolute top-[296px] left-[587px] rounded-sm bg-gray-200 box-border w-[262px] h-[230px] flex flex-col items-center justify-start gap-[11px] opacity-[0.9] text-lgi text-dimgray-100 border-[2px] border-solid border-dimgray-300"
            href="https://www.w3schools.com/python/python_intro.asp"
            target="_blank"
            id="pythonlink"
          >
            <img
              className="relative rounded-sm w-[262px] h-[149px] object-cover"
              alt=""
              src="/rectangle-10@2x.png"
            />
            <div className="relative [text-decoration:underline] font-medium whitespace-pre-wrap inline-block w-[226px] h-14 shrink-0">
              <p className="m-0">Intro to Python: A</p>
              <p className="m-0">Complete Guide</p>
            </div>
          </a>
          <a
            className="[text-decoration:none] absolute top-[566px] left-[587px] rounded-sm bg-gray-200 box-border w-[262px] h-[230px] flex flex-col items-center justify-start gap-[11px] opacity-[0.9] text-lgi text-dimgray-100 border-[2px] border-solid border-dimgray-300"
            href="https://www.tutorialspoint.com/unix/shell_scripting.htm"
            target="_blank"
            id="shelllink"
          >
            <img
              className="relative rounded-sm w-[262px] h-[149px] object-cover"
              alt=""
              src="/rectangle-101@2x.png"
            />
            <div className="relative [text-decoration:underline] font-medium inline-block w-[226px] h-14 shrink-0">
              Shell Scripting Tutorial: What is Shell Scripting?
            </div>
          </a>
          <a
            className="[text-decoration:none] absolute top-[296px] left-[916px] rounded-sm bg-gray-200 box-border w-[262px] h-[230px] flex flex-col items-center justify-start gap-[11px] opacity-[0.9] text-xl text-dimgray-100 border-[2px] border-solid border-dimgray-300"
            href="https://docs.arduino.cc/learn/starting-guide/getting-started-arduino"
            target="_blank"
            id="arduinolink"
          >
            <img
              className="relative rounded-sm w-[262px] h-[149px] object-cover"
              alt=""
              src="/rectangle-102@2x.png"
            />
            <div className="relative [text-decoration:underline] font-medium inline-block w-[226px] h-[58px] shrink-0">
              <p className="m-0">Hands on Arduino:</p>
              <p className="m-0">Get Started Now</p>
            </div>
          </a>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[796px] left-[1047px] text-2xl [text-decoration:underline] font-poppins text-dimgray-100 text-left inline-block w-[180px] h-[31px]"
            id="moretutorials"
          >
            More Tutorials
          </button>
          <input
            className="font-poppins text-base bg-maroon-100 absolute top-[72px] left-[1114px] rounded-xl box-border w-[307px] h-[37px] flex flex-col py-0 px-4 items-start justify-center border-[1px] border-solid border-white"
            type="text"
            placeholder={`Search here..
`}
            maxLength
            minLength
            id="search"
          />
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[859px] left-[1355px] text-lg [text-decoration:underline] font-medium font-poppins text-white text-left inline-block w-36 h-[34px]"
            id="button"
          >
            More updates
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
      {isJoinTheTeamPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeJoinTheTeamPopup}
        >
          <JoinTheTeamPopup onClose={closeJoinTheTeamPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default StudLogin;
