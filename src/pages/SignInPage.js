import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bcrypt from "bcryptjs";


const SignInPage = () => {
  const navigate = useNavigate();
  const [err, setError] = useState("");
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");

  const variableToSet = studentId;

  // Set the variable in local storage
  localStorage.setItem('id', variableToSet);

  const onRegButtonClick = () => {
    navigate("/registration-page");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const login = {
      student_id: studentId,
      password: password
    };

    fetch("http://localhost:5498/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    })
      .then((response) => {
        localStorage.setItem('student_id', studentId);
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Login failed");
        }
      }).then((data) => {
        console.log(data);
        if(data.userMatched && data.userData.TEAM_LEAD=='1' && data.userData.SUB_TEAM){
          navigate("/team-lead-profile");
         }
         else if(data.userMatched && data.userData.TEAM_LEAD=='0' && data.userData.SUB_TEAM && data.userData.APPROVAL_STATUS=='1'){
           console.log("else if");
            navigate("/team-member-profile");
          
         }
        else if(data.userMatched && data.userData.APPROVAL_STATUS=='0'){
         
          navigate("/stud-login");
        }
        else{
          alert("Login Failed");
        }

      
      })
      .catch((error) => {
        console.log("Error occurred:", error);
        setError("Error occurred during login");
      });
  };

  return (
    <div className="relative bg-white w-full h-[932px] overflow-hidden text-center text-7xl text-white font-poppins">
      <img
        className="absolute top-[0px] left-[0px] w-[1700px] h-[1192px] object-cover opacity-[0.85]"
        alt=""
        src="/rover-reg@2x.png"
      />
      <div className="absolute top-[116px] left-[617px] bg-maroon-100 shadow-[2px_2px_4px_rgba(0,_0,_0,_0.4)] w-[523px] h-[700px] opacity-[0.65]" />
      <button
        className="cursor-pointer [border:none] py-[1.904762625694275px] px-0 bg-firebrick-300 absolute top-[566px] left-[813px] w-[120px] h-10 flex flex-col box-border items-start justify-start"
        autoFocus
        id="enterbutton"
        onClick={handleSubmit} 
      >
        <div className="relative text-5xl font-semibold font-poppins text-white text-center inline-block w-[116.47px] h-[35.24px] shrink-0">
          SIGN IN
        </div>
      </button>
      <button
        className="cursor-pointer [border:none] py-0 pr-0 pl-0.5 bg-[transparent] absolute top-[708px] left-[811px] w-[125px] h-[37px] flex flex-col box-border items-start justify-start"
        autoFocus
        id="regbutton"
        onClick={onRegButtonClick}
      >
        <div className="relative bg-firebrick-300 w-[120px] h-[34px]" />
        <div className="relative text-lg font-semibold font-poppins text-white text-center inline-block w-[125px] h-[34px] shrink-0 mt-[-31px]">
          REGISTER
        </div>
      </button>
      <div className="absolute top-[664px] left-[617px] text-base font-medium inline-block w-[523px] h-[35px]">
        Don’t have an account?
      </div>
      <div className="absolute top-[424px] left-[737px] font-semibold inline-block w-[268.89px] h-[62.85px]">
        PASSWORD
      </div>
      <input
        className="bg-white absolute top-[477px] left-[686px] box-border w-[388px] h-[46px] opacity-[0.3] border-[1px] border-solid border-white"
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id="password"
        name="password"
      />
      <div className="absolute top-[289px] left-[741px] font-semibold inline-block w-[268.89px] h-[62.85px]">
        MIST ID
      </div>
      <input
        className="bg-white absolute top-[339.37px] left-[686px] box-border w-[388px] h-[46px] opacity-[0.3] border-[1px] border-solid border-white"
        type="text"
        required
        value={studentId}
    	  onChange={(e) => setStudentId(e.target.value)}
        id="id"
        name="id"
      />
      <div className="absolute top-[185px] left-[639px] w-[478px] flex flex-col items-center justify-end text-21xl">
        <b className="relative inline-block w-[294px] h-[61px] shrink-0">
          SIGN IN
        </b>
        <div className="self-stretch relative box-border h-0.5 border-t-[2px] border-solid border-white" />
      </div>
    </div>
  );
};

export default SignInPage;
