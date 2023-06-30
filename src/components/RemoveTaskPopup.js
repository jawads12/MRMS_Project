import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RemoveTaskPopup = ({ onClose }) => {
  const navigate =   useNavigate();
  
  


  
  const [InputData, setInputData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedVariable = localStorage.getItem('student_id');

    const addAnounce = {
      InputData,
      student_id:storedVariable
    };
    
    fetch("http://localhost:5498/insertAnnounce",{
      method: "POST",
      headers: {
        "Content-type" : "application/json",
      },
      body: JSON.stringify(addAnounce),
    })
    .then((result)=> {
      if (result.status===200)
      {
        console.log("component inputted");
      }
    });

  };



  return (
    <form>
    <div className="absolute top-[235px] left-[553px] bg-white shadow-[0px_4px_100px_rgba(0,_0,_0,_0.25)] w-[1028px] h-[560px] overflow-hidden max-w-full max-h-full text-left text-lg text-dimgray-600 font-poppins">
      
      <button
     // onClick={handleSubmit}
        className="cursor-pointer [border:none] py-3.5 px-4 bg-limegreen absolute top-[455px] right-[413px] rounded w-[170px] h-[33px] overflow-hidden flex flex-row box-border items-center justify-between"
        id="announceOthers"
        onClick={handleSubmit}
      >
        <b className="relative text-mid leading-[100%] flex font-poppins text-white text-center items-center justify-center w-[152px] h-6 shrink-0">
          Announce
        </b>
      </button>
      
      <label
        className="absolute top-[180px] left-[50px] font-medium inline-block w-[900px] h-5"
        id="studentname"
      >
        Announce to the team
      </label>
      <input
       
       
        className="bg-whitesmoke-200 absolute top-[230px] left-[50px] rounded box-border w-[913px] h-[170px] border-[1px] border-solid border-darkslategray-400"
        type="text"
        maxLength
        minLength
        required
        id="InputData"
        value={InputData}
        onChange={(e) => setInputData(e.target.value)}

        
      />
    
      <div className="absolute top-[70px] left-[251px] w-[517px] h-[39px] text-center text-xl text-white">
        <div className="absolute top-[0px] left-[263px] bg-crimson-300 w-[254px] h-[39px] overflow-hidden" />
        <div className="absolute top-[0px] left-[0px] bg-crimson-300 w-[263px] h-[39px] overflow-hidden opacity-[0.6]" />
        <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] text-xl font-semibold font-poppins text-white text-center flex items-center justify-center w-[254px] h-[38px]"
        onClick={()=>navigate('/announcement-page-competition')}
        >
          Competition
        </button>
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[0px] left-[263px] text-xl font-semibold font-poppins text-white text-center flex items-center justify-center w-[254px] h-[38px]"
          id="componentsbutton"
        >
          Others
        </button>
      </div>
    </div>
    </form>
  );
};

export default RemoveTaskPopup;
