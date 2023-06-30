import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddFundingPopup = ({ onClose }) => {
  const navigate = useNavigate();
  const [err, setError] = useState("");

  const [Source, setSource] = useState("");
  const [Amount, setAmount] = useState("");
  const [Rover, setRover] = useState("");
  const [Date, setDate] = useState("");
  const [rovers,setRovers] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!Source||!Amount||!Rover||!Date){
      window.alert("Enter all the information!");
      return 
    }
    const addFund = {
      Source,
      Amount,
      Rover,
      Date
    };
    
    fetch("http://localhost:5498/addFund",{
      method: "POST",
      headers: {
        "Content-type" : "application/json",
      },
      body: JSON.stringify(addFund),
    })
    .then((result)=> {
      if (result.status===200)
      {
        console.log("component inputted");
      }
    });

    onClose();

  };

  useEffect(() => {
    listAllRover();
  }, [])

  const listAllRover =()=>{
    fetch("http://localhost:5498/list/rovers")
    .then(res=>res.json())
    .then(data=>setRovers(data))
  }



  //console.log(comp);
  return (
    <form method="post">
    <div className="relative bg-white shadow-[0px_4px_100px_rgba(0,_0,_0,_0.25)] w-[477px] h-[454px] overflow-hidden max-w-full max-h-full text-left text-mini text-dimgray-600 font-poppins">
      <label
        className="absolute top-[23px] left-[18px] text-base font-archivo-black inline-block w-[312px] h-5"
        id="studentname"
      >
        Add Funding Details
      </label>
      <label
        className="absolute top-[92px] left-[30px] font-medium inline-block w-[147px] h-5"
        id="studentname"
      >
        Fund Source
      </label>
      <div className="absolute top-[59.5px] left-[-29.5px] box-border w-[794px] h-px border-t-[1px] border-solid border-dimgray-800" />
      <img
        className="absolute top-[20px] left-[440px] w-5 h-5 object-cover cursor-pointer"
        alt=""
        src="/daco-1569718-1@2x.png"
        onClick={onClose}
      />
      <input
        className="bg-whitesmoke-200 absolute top-[120px] left-[30px] rounded box-border w-[420px] h-[30px] border-[1px] border-solid border-darkslategray-400"
        type="text"
        maxLength
        minLength
        required
        id="Source"
        value={Source}
        onChange={(e) => setSource(e.target.value)}
      />
      <label
        className="absolute top-[192px] left-[30px] font-medium inline-block w-[147px] h-5"
        id="studentname"
      >
        Amount
      </label>
      <label
        className="absolute top-[192px] left-[239px] font-medium inline-block w-[147px] h-5"
        id="studentname"
      >
        Rover
      </label>
      <label
        className="absolute top-[281px] left-[33px] font-medium inline-block w-[147px] h-5"
        id="studentname"
      >
        Date
      </label>
      <input
        className="bg-whitesmoke-200 absolute top-[217px] left-[30px] rounded box-border w-[193px] h-[30px] border-[1px] border-solid border-darkslategray-400"
        type="text"
        maxLength
        minLength
        required
        id="Amount"
        value={Amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        className="bg-whitesmoke-200 absolute top-[217px] left-[239px] rounded box-border w-[211px] h-[30px] border-[1px] border-solid border-darkslategray-400"
        type="text"
        maxLength
        minLength
        required
        id="Rover"
        value={Rover}
        onChange={(e) => setRover(e.target.value)}
      />
      <select
        className="bg-whitesmoke-200 absolute top-[217px] left-[239px] rounded box-border w-[211px] h-[30px] border-[1px] border-solid border-darkslategray-400"
        required
        id="Rover"
        // value={Rover}
        onChange={(e) => setRover(e.target.value)}
      >
        {
          rovers.map(rover=><option key={rover.ROVER_ID} value={rover.ROVER_NAME}>{rover.ROVER_NAME}</option>)
        }
      </select>
      <input
        className="bg-whitesmoke-200 absolute top-[308px] left-[31px] rounded box-border w-48 h-[30px] border-[1px] border-solid border-darkslategray-400"
        type="date"
        maxLength
        minLength
        required
        id="Date"
        value={Date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button
        className="cursor-pointer [border:none] py-3.5 px-4 bg-limegreen absolute top-[382px] right-[153px] rounded w-[170px] h-[33px] overflow-hidden flex flex-row box-border items-center justify-between"
        onClick={handleSubmit}
      >
        <b className="relative text-mini leading-[100%] flex font-poppins text-white text-center items-center justify-center w-[135px] h-6 shrink-0">
          Save
        </b>
      </button>
    </div>
    </form>
  );
};

export default AddFundingPopup;
