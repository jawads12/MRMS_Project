import { useEffect, useState } from "react";
import ConfirmDeletionPopup from "../components/ConfirmDeletionPopup";
import PortalPopup from "../components/PortalPopup";
import ConfirmSavechangesPopup from "../components/ConfirmSavechangesPopup";
import { useNavigate, useParams } from "react-router-dom";

const TeamLeaderProfileUpdate = () => {
  const {studentId} = useParams();
  const [isConfirmDeletionPopupOpen, setConfirmDeletionPopupOpen] =
    useState(false);
  const [isConfirmSavechangesPopupOpen, setConfirmSavechangesPopupOpen] =
    useState(false);
  const navigate = useNavigate();
  const [student,setStudent] = useState(null)
  const [FIRST_NAME,setFIRST_NAME] = useState("")
  const [LAST_NAME,setLAST_NAME] = useState("")
  const [LEVEL,setLEVEL] = useState("")
  const [EMAIL,setEMAIL] = useState("")
  const [Password,setPasssword] = useState("")
  const [Curr_password,setCurr_password] = useState("")
  const [Phone1,setPhone1] = useState("")
  const [Phone2,setPhone2] = useState("")


  useEffect(()=>{
    fetch(`http://localhost:5498/students/${studentId}`)
    .then(res=>res.json())
    .then(data=>{
      setStudent(data);
      setFIRST_NAME(data.NAME.FIRST_NAME);
      setLAST_NAME(data.NAME.LAST_NAME);
      setLEVEL(data.LEVEL_NO);
      setEMAIL(data.EMAIL);
      setPhone1(data["Phone 1"]);
      setPhone2(data["Phone 2"]);
      


    })
  },[])

  const openConfirmDeletionPopup = () => {
    setConfirmDeletionPopupOpen(true);
  };

  const closeConfirmDeletionPopup = () => {
    setConfirmDeletionPopupOpen(false);
  };

  const openConfirmSavechangesPopup = () => {
    setConfirmSavechangesPopupOpen(true);
  };

  const closeConfirmSavechangesPopup = () => {
    setConfirmSavechangesPopupOpen(false);
  };

  const onImage171Click = () => {
    navigate("/team-lead-profile");
  };

  if(!student) {
    return "Loading...."
  }


  //save changes
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(e)
    const email = EMAIL;
    const password = Password;
    const curr_password=Curr_password;
    const fname = FIRST_NAME;
    const lname = LAST_NAME;
 
    const levell = LEVEL;
    const phone1 = Phone1;
    const phone2 = Phone2;
   
    const student = {
      
      fname, lname, levell , phone1, phone2, 
      email,
      password, curr_password

      //student_id,fname, lname, dept, levell , phone1, phone2, email, password
    }
    




    const storedVariable = localStorage.getItem('student_id');
    fetch(`http://localhost:5498/update_profile/${storedVariable}`,{
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    })
    .then(result => {
      console.log(result);
      if(result.status==200) {
        console.log("Data Sent Succesfully")
      }
      else {
        console.log("Error Occured", result);
      }
    });

};


const handledelete = ()=>{
    const storedVariable = localStorage.getItem('student_id');
    fetch(`http://localhost:5498/delete-profile/${storedVariable}`,{
      method: "DELETE", // or 'PUT'
    })
    .then(result => {
      console.log(result);
      if(result.status==200) {
        console.log("Data Sent Succesfully")
      }
      else {
        console.log("Error Occured", result);
      }
    });

};




  return (
    <>
      <div className="relative bg-white w-full overflow-hidden flex flex-col items-center justify-center text-left text-xl text-white font-poppins">
        <div className="relative [background:linear-gradient(rgba(114,_0,_0,_0.9),_rgba(114,_0,_0,_0.9)),_#fff] w-[1700px] h-[797px] overflow-hidden shrink-0">
          <div className="absolute top-[0px] left-[0px] bg-maroon-200 w-[1745px] h-[186px] opacity-[0.8]" />
          
          <div className="absolute top-[0px] left-[122px] bg-maroon-200 w-[495px] h-[797px]" />
          <b className="absolute top-[80px] left-[241px] text-31xl inline-block w-[289px] h-[106px] [text-shadow:4px_4px_4px_rgba(0,_0,_0,_0.25)]">
            Edit Profile
          </b>
          <img
            className="absolute top-[199px] left-[228px] w-[282px] h-[342px] object-cover"
            alt=""
            id="userimage"
            src="/rectangle-3@2x.png"
          />
          <div className="absolute top-[213px] left-[1162px] w-[381px] h-[381px] flex flex-col items-start justify-end gap-[42px]">
            <div className="relative w-[374px] h-[67px]">
              <h3 className="m-0 absolute top-[0px] left-[5px] text-[inherit] font-medium font-inherit inline-block w-[182px] h-[35px]">
                CONTACT NO.
              </h3>
              <input
                className="bg-maroon-400 absolute top-[41px] left-[0px] box-border w-[374px] h-[26px] opacity-[0.7] border-[1px] border-solid border-white"
                type="text"
                maxLength
                minLength
                id="ContNo"
                value={Phone1}
                onChange={(e)=>setPhone1(e.target.value)}
              />
            </div>
            <div className="relative w-[374px] h-[66px]">
              <h3 className="m-0 absolute top-[0px] left-[5px] text-[inherit] font-medium font-inherit inline-block w-[304px] h-[35px]">
                ALTERNATE CONTACT NO.
              </h3>
              <input
                className="bg-maroon-400 absolute top-[40px] left-[0px] box-border w-[374px] h-[26px] opacity-[0.7] border-[1px] border-solid border-white"
                type="text"
                maxLength
                minLength
                id="acontno"
                //value={student?.["Phone 2"]}
                value={Phone2}
                onChange={(e)=>setPhone2(e.target.value)}
              />
            </div>
            <div className="relative w-[374px] h-[61px]">
              <h3 className="m-0 absolute top-[0px] left-[5px] text-[inherit] font-medium font-inherit inline-block w-[182px] h-[35px]">
                EMAIL
              </h3>
              <input
                className="bg-maroon-400 absolute top-[35px] left-[0px] box-border w-[374px] h-[26px] opacity-[0.7] border-[1px] border-solid border-white"
                type="text"
                maxLength
                minLength
                id="email"
                value={EMAIL}
                onChange={(e)=>setEMAIL(e.target.value)}
              />
            </div>
            <div className="w-[374px] flex flex-col py-0 pr-0 pl-[3px] box-border items-start justify-start">
              <h3 className="m-0 relative text-[inherit] font-medium font-inherit inline-block w-[182px] h-[35px] shrink-0">
                PASSWORD
              </h3>
              <input
                className="bg-maroon-400 relative box-border w-[374px] h-[26px] opacity-[0.7] border-[1px] border-solid border-white"
                type="text"
                maxLength
                minLength
                id="pass"
              />
            </div>
          </div>
          <div className="absolute top-[231px] left-[670px] w-[381px] h-[381px] flex flex-col pt-0 px-0 pb-[103px] box-border items-start justify-end gap-[42px]">
            <div className="relative w-[374px] h-[67px]">
              <h3 className="m-0 absolute top-[0px] left-[5px] text-[inherit] font-medium font-inherit inline-block w-[182px] h-[35px]">
                First Name
              </h3>
              <input
                className="bg-maroon-400 absolute top-[41px] left-[0px] box-border w-[374px] h-[26px] opacity-[0.7] border-[1px] border-solid border-white"
                type="text"
                maxLength
                minLength
                id="updateFirstName"
                value={FIRST_NAME}
                onChange={(e)=>setFIRST_NAME(e.target.value)}
              />
            </div>
            <div className="relative w-[374px] h-[66px]">
              <h3 className="m-0 absolute top-[0px] left-[5px] text-[inherit] font-medium font-inherit inline-block w-[304px] h-[35px]">
                Last Name
              </h3>
              <input
                className="bg-maroon-400 absolute top-[40px] left-[0px] box-border w-[374px] h-[26px] opacity-[0.7] border-[1px] border-solid border-white"
                type="text"
                maxLength
                minLength
                value={LAST_NAME}
                onChange={(e)=>setLAST_NAME(e.target.value)}
                id="updateLastName"
              />
            </div>
            <div className="relative w-[374px] h-[61px]">
              <h3 className="m-0 absolute top-[0px] left-[5px] text-[inherit] font-medium font-inherit inline-block w-[182px] h-[35px]">
                Level
              </h3>
              <input
                className="bg-maroon-400 absolute top-[35px] left-[0px] box-border w-[374px] h-[26px] opacity-[0.7] border-[1px] border-solid border-white"
                type="text"
                maxLength
                minLength
                id="updateLevel"
                value={LEVEL}
               
                onChange={(e)=>setLEVEL(e.target.value)}
              />
            </div>
          </div>
          <div className="absolute top-[663px] left-[766px] w-[374px] flex flex-col py-0 pr-0 pl-[3px] box-border items-start justify-start">
            <h4 className="m-0 relative text-[inherit] font-medium font-inherit inline-block w-[182px] h-[35px] shrink-0">
          Current Password
            </h4>
            <input
              className="bg-maroon-400 relative box-border w-[374px] h-[26px] opacity-[0.7] border-[1px] border-solid border-white"
              type="password"
              maxLength
              minLength
              required
              id="currentPass"
             
               
              onChange={(e)=>setCurr_password(e.target.value)}
              
            />
          </div>
          {/* <div className="absolute top-[581px] left-[286px] text-lg [text-decoration:underline] inline-block w-[210px] h-7">
            Upload New Photo
          </div>*/}
          {/* <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[704px] left-[307px] text-lg [text-decoration:underline] font-poppins text-white text-left inline-block w-[124px] h-7"
            id="deleteprofile"
            onClick={openConfirmDeletionPopup}
          > 
            Delete Profile
          </button> */}
          <img
            className="absolute top-[225px] left-[1104.5px] w-px h-[383.5px] opacity-[0.7]"
            alt=""
            src="/line-1.svg"
          />
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[672px] left-[1353px] w-[232px] h-[63px] flex flex-col items-center justify-start"
            id="savechanges"
            onClick={handleSubmit}
          >
            <div className="relative bg-maroon-400 box-border w-[225px] h-[54px] opacity-[0.7] border-[1px] border-solid border-white" />
            <div className="relative text-4xl font-medium font-poppins text-white text-center inline-block w-[232px] h-[55px] shrink-0 mt-[-46px]">
              SAVE CHANGES
              
            </div>
          </button>
          <div className="absolute top-[214px] left-[242px] w-64 h-64">
            
            <img
              className="absolute top-[0px] left-[0px] w-[310px] h-[311px] object-cover"
              alt=""
              src="/membericon@2x.png"
            />
          </div>
          <img
            className="absolute top-[726px] left-[36px] w-[52px] h-[37px] object-cover cursor-pointer"
            alt=""
            src="/image-17-1@2x.png"
            onClick={onImage171Click}
          />
        </div>
      </div>
      {isConfirmDeletionPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeConfirmDeletionPopup}
        >
          <ConfirmDeletionPopup onClose={closeConfirmDeletionPopup} />
        </PortalPopup>
      )}
      {isConfirmSavechangesPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeConfirmSavechangesPopup}
        >
          <ConfirmSavechangesPopup onClose={closeConfirmSavechangesPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default TeamLeaderProfileUpdate;
