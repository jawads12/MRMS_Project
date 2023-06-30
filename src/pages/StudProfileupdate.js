import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const StudProfileupdate = () => {
  const [student,setStudent] = useState(null)
  const [FIRST_NAME,setFIRST_NAME] = useState("")
  const [LAST_NAME,setLAST_NAME] = useState("")
  const [LEVEL,setLEVEL] = useState("")
  const [EMAIL,setEMAIL] = useState("")
  const [Password,setPasssword] = useState("")
  const [Curr_password,setCurr_password] = useState("")
  const [Phone1,setPhone1] = useState("")
  const [Phone2,setPhone2] = useState("")
  const storedVariable = localStorage.getItem('student_id');
  const navigate = useNavigate();
  useEffect(()=>{
    fetch(`http://localhost:5498/students/${storedVariable}`)
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


    const handleSubmit = (e)=>{
        e.preventDefault();
      console.log(e.target);
        const email = e.target.pass.value;
        const password = e.target.pass.value;
        const curr_password=e.target.curr_pass.value;
        const fname = e.target.fname.value;
        const lname = e.target.lname.value;
     
        const levell = e.target.level.value;
        const phone1 = e.target.phone1.value;
        const phone2 = e.target.phone2.value;
       
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
            navigate("/")
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
      <div className="relative bg-white w-full overflow-hidden flex flex-col items-center justify-center text-left text-xl text-white font-poppins">
        <div className="relative [background:linear-gradient(rgba(114,_0,_0,_0.9),_rgba(114,_0,_0,_0.9)),_#fff] w-[1700px] h-[797px] overflow-hidden shrink-0">
          <div className="absolute top-[0px] left-[0px] bg-maroon-100 w-[1745px] h-[186px]" />
          <form  onSubmit={handleSubmit}>
          <div className="absolute top-[186px] left-[122px] bg-maroon-200 w-[495px] h-[611px]" />
          <b className="absolute top-[80px] left-[241px] text-[50px] inline-block w-[289px] h-[106px] [text-shadow:4px_4px_4px_rgba(0,_0,_0,_0.25)]">
            Edit Profile
          </b>
          <img
            className="absolute top-[235px] left-[228px] w-[282px] h-[306px] object-cover"
            alt=""
            id="userimage"
            src="/rectangle-3@2x.png"
          />
          <div className="absolute top-[213px] left-[1162px] w-[381px] h-[381px]">
            <div className="absolute top-[0px] left-[7px] w-[374px] h-[67px]">
              <h3 className="m-0 absolute top-[0px] left-[5px] text-[inherit] font-medium font-inherit inline-block w-[182px] h-[35px]">
                CONTACT NO.
              </h3>
              <input
                className="bg-maroon-400 absolute top-[41px] left-[0px] box-border w-[374px] h-[26px] opacity-[0.7] border-[1px] border-solid border-white"
                type="text"
                id="phone1"
                value={Phone1}
                onChange={(e)=>setPhone1(e.target.value)}
              />
            </div>
            <div className="absolute top-[109px] left-[7px] w-[374px] h-[66px]">
              <h3 className="m-0 absolute top-[0px] left-[5px] text-[inherit] font-medium font-inherit inline-block w-[304px] h-[35px]">
                ALTERNATE CONTACT NO.
              </h3>
              <input
                className="bg-maroon-400 absolute top-[40px] left-[0px] box-border w-[374px] h-[26px] opacity-[0.7] border-[1px] border-solid border-white"
                type="text"
                id="phone2"
                value={Phone2}
                onChange={(e)=>setPhone2(e.target.value)}
              />
            </div>
            <div className="absolute top-[217px] left-[7px] w-[374px] h-[61px]">
              <h3 className="m-0 absolute top-[0px] left-[5px] text-[inherit] font-medium font-inherit inline-block w-[182px] h-[35px]">
                EMAIL
              </h3>
              <input
                className="bg-maroon-400 absolute top-[35px] left-[0px] box-border w-[374px] h-[26px] opacity-[0.7] border-[1px] border-solid border-white"
                type="text"
                id="email"
                value={EMAIL}
                name="email"
                onChange={(e)=>setEMAIL(e.target.value)}
              />
            </div>
            <div className="absolute top-[320px] left-[7px] w-[374px] flex flex-col py-0 pr-0 pl-[3px] box-border items-start justify-start">
              <h3 className="m-0 relative text-[inherit] font-medium font-inherit inline-block w-[182px] h-[35px] shrink-0">
                PASSWORD
              </h3>
              <input
                className="bg-maroon-400 relative box-border w-[374px] h-[26px] opacity-[0.7] border-[1px] border-solid border-white"
                type="password"
                id="pass"
              />
            </div>
          </div>
          <div className="absolute top-[231px] left-[670px] w-[381px] h-[381px]">
            <div className="absolute top-[0px] left-[7px] w-[374px] h-[67px]">
              <h3 className="m-0 absolute top-[0px] left-[5px] text-[inherit] font-medium font-inherit inline-block w-[182px] h-[35px]">
                First Name
              </h3>
              <input
                className="bg-maroon-400 absolute top-[41px] left-[0px] box-border w-[374px] h-[26px] opacity-[0.7] border-[1px] border-solid border-white"
                type="text"
                id="fname"
                value={FIRST_NAME}
                onChange={(e)=>setFIRST_NAME(e.target.value)}
              />
            </div>
            <div className="absolute top-[109px] left-[7px] w-[374px] h-[66px]">
              <h3 className="m-0 absolute top-[0px] left-[5px] text-[inherit] font-medium font-inherit inline-block w-[304px] h-[35px]">
                Last Name
              </h3>
              <input
                className="bg-maroon-400 absolute top-[40px] left-[0px] box-border w-[374px] h-[26px] opacity-[0.7] border-[1px] border-solid border-white"
                type="text"
                id="lname"
                value={LAST_NAME}
                onChange={(e)=>setLAST_NAME(e.target.value)}
              />
            </div>
            <div className="absolute top-[217px] left-[0px] w-[374px] h-[61px]">
              <h3 className="m-0 absolute top-[0px] left-[5px] text-[inherit] font-medium font-inherit inline-block w-[182px] h-[35px]">
                Level
              </h3>
              <input
                className="bg-maroon-400 absolute top-[35px] left-[0px] box-border w-[374px] h-[26px] opacity-[0.7] border-[1px] border-solid border-white"
                type="text"
                id="level"
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
              id="curr_pass"
               
              onChange={(e)=>setCurr_password(e.target.value)}
            />
          </div>
          
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[672px] left-[1353px] w-[232px] h-[63px] flex flex-col items-center justify-start"
            id="savechanges"
            type="submit"
           
          >
            <div className="relative bg-maroon-400 box-border w-[225px] h-[54px] opacity-[0.7] border-[1px] border-solid border-white" />
            <div className="relative text-[23px] font-medium font-poppins text-white text-center inline-block w-[232px] h-[55px] shrink-0 mt-[-46px]">
              SAVE CHANGES
            </div>
          </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default StudProfileupdate;
