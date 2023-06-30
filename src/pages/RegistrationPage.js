import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
const navigate = useNavigate();

  const handleSubmit = (e)=>{
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const fname = e.target.fname.value;
    const lname = e.target.lname.value;
    const dept = e.target.dept.value;
    const levell = e.target.levell.value;
    const phone1 = e.target.phone1.value;
    const phone2 = e.target.phone2.value;
    const student_id = e.target.studentid.value;
    const student = {
      student_id,
      fname, lname, dept, levell , phone1, phone2, 
      email,
      password

      //student_id,fname, lname, dept, levell , phone1, phone2, email, password
    }
    
    fetch("http://localhost:5498/registration",{
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    })
    .then(result => {
      console.log(result);
      if(result.status==200) {
        console.log("Data Inserted Succesfully");
        navigate("/")
      }
      else {
        console.log("Error Occured", result);
      }
    })




  }
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-center justify-center text-left text-7xl text-white font-poppins">
      <div className="self-stretch relative h-[1011px] bg-[url(/public/frame-35@3x.png)] bg-cover bg-no-repeat bg-[top]">
        <div className="absolute top-[151px] left-[327px] bg-maroon-100 w-[1063px] h-[709px] opacity-[0.85]" />
        <div className="absolute top-[151px] left-[327px] bg-gainsboro w-[529px] h-[709px] opacity-[0.25]" />
        <form onSubmit={handleSubmit}>
        <div className="absolute top-[603px] left-[932px] w-[405.36px] h-[70.14px]">
          <input
            className="bg-white absolute top-[36.2px] left-[0px] shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)] box-border w-[405.36px] h-[33.94px] opacity-[0.3] border-[1px] border-solid border-white"
            type="password"
            required
            id="password"
            style={{fontSize: "22px"}}
            //onChange={(e)=>{console.log(e.target.value)}}
          />
          <div className="absolute top-[0px] left-[6.79px] inline-block w-[239.53px] h-[27.91px]">
            PASSWORD
          </div>
        </div>
        <div className="absolute top-[496px] left-[932px] w-[405.36px] h-[70.14px]">
          <div className="absolute top-[0px] left-[6.79px] inline-block w-[239.53px] h-[27.91px]">
            EMAIL
          </div>
          <input
            className="bg-white absolute top-[36.2px] left-[0px] shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)] box-border w-[405.36px] h-[33.94px] opacity-[0.3] border-[1px] border-solid border-white"
            type="email"
            id="email"
          />
        </div>
        <div className="absolute top-[392.29px] left-[932.01px] w-[405.36px] h-[70.14px]">
          <div className="absolute top-[-0.29px] left-[6.99px] inline-block w-[343px] h-7">
            ALTERNATE CONTACT NO.
          </div>
          <input
            className="bg-white absolute top-[36.2px] left-[0px] shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)] box-border w-[405.36px] h-[33.94px] opacity-[0.3] border-[1px] border-solid border-white"
            type="text"
            id="phone2"
          />
        </div>
        <div className="absolute top-[285.67px] left-[932.01px] w-[405.36px] h-[70.14px]">
          <div className="absolute top-[0px] left-[6.79px] inline-block w-[239.53px] h-[27.91px]">CONTACT NO. </div>
          <input
            className="bg-white absolute top-[36.2px] left-[0px] shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)] box-border w-[405.36px] h-[33.94px] opacity-[0.3] border-[1px] border-solid border-white"
            type="text"
            id="phone1"
          />
        </div>
        <b className="absolute top-[197.76px] left-[875.55px] text-17xl inline-block w-[537.45px] h-[56.11px] [text-shadow:2px_2px_4px_rgba(0,_0,_0,_0.25)]">
          ADDITIONAL INFORMATION
        </b>
        <div className="absolute top-[608px] left-[374px] w-[403.39px] h-[65.47px]">
          <div className="absolute top-[0px] left-[6.6px] inline-block w-[232.8px] h-[26.05px]">
            DEPARTMENT
          </div>
          <input
            className="bg-white absolute top-[33.79px] left-[0px] shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)] box-border w-[186.62px] h-[31.68px] opacity-[0.3] border-[1px] border-solid border-white"
            type="text"
            id="dept"
          />
          <input
            className="bg-white absolute top-[33.79px] left-[216.78px] shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)] box-border w-[186.62px] h-[31.68px] opacity-[0.3] border-[1px] border-solid border-white"
            type="text"
            id="levell"
          />
          <div className="absolute top-[0px] left-[267.21px] inline-block w-[119.99px] h-[26.19px]">
            LEVEL
          </div>
        </div>
        <div className="absolute top-[473px] left-[381px] w-[461.83px] h-[65.47px]">
          <div className="absolute top-[0px] left-[229.03px] inline-block w-[232.8px] h-[26.05px]">
            LAST NAME
          </div>
          <input
            className="bg-white absolute top-[33.79px] left-[216.78px] shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)] box-border w-[186.62px] h-[31.68px] opacity-[0.3] border-[1px] border-solid border-white"
            type="text"
            id="lname"
          />
          <div className="absolute top-[0px] left-[0px] w-[239.4px] h-[65.47px]">
            <div className="absolute top-[0px] left-[6.6px] inline-block w-[232.8px] h-[26.05px]">
              FIRST NAME
            </div>
            <input
              className="bg-white absolute top-[33.79px] left-[0px] shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)] box-border w-[186.62px] h-[31.68px] opacity-[0.3] border-[1px] border-solid border-white"
              type="text"
              id="fname"
            />
          </div>
        </div>
        <div className="absolute top-[350px] left-[381px] w-[405.36px] h-[70.14px]">
          <div className="absolute top-[0px] left-[6.79px] inline-block w-[239.53px] h-[27.91px]">
            STUDENT ID
          </div>
          <input
            className="bg-white absolute top-[36.2px] left-[0px] shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)] box-border w-[405.36px] h-[33.94px] opacity-[0.3] border-[1px] border-solid border-white"
            type="text"
            required
            id="studentid"
          />
        </div>
        <b className="absolute top-[198px] left-[374px] text-17xl inline-block w-[457.79px] h-[56.11px] [text-shadow:2px_2px_4px_rgba(0,_0,_0,_0.25)]">
          GENERAL INFORMATION
        </b>
        <button
  className="cursor-pointer [border:none] py-[5px] px-2 bg-red-500 absolute top-[754px] left-[1034px] shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)] w-[153px] h-11 flex flex-col box-border items-end justify-start"
  id="regbutton"
>
  <div className="relative text-5xl font-medium font-poppins text-white text-left inline-block w-[124px] h-[30px] shrink-0">
    REGISTER
  </div>
</button>

        </form>
        <div className="absolute top-[267.5px] left-[349.5px] box-border w-[1018px] h-px border-t-[1px] border-solid border-white" />
      </div>
    </div>
  );
};

export default RegistrationPage;
