import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const AddComponentPopup = ({ onClose }) => {
  const navigate = useNavigate();
  const [err, setError] = useState("");

  const [model, setModel] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [funcStat, setFuncStat] = useState("");

  const onDaco15697181IconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const addComponent = {
      model,
      quantity,
      price,
      funcStat
    };
    
    fetch("http://localhost:5498/addComponent",{
      method: "POST",
      headers: {
        "Content-type" : "application/json",
      },
      body: JSON.stringify(addComponent),
    })
    .then((result)=> {
      if (result.status===200)
      {
        console.log("component inputted");
      }
    });

  };
 
  return (
    <div className="relative bg-white shadow-[0px_4px_100px_rgba(0,_0,_0,_0.25)] w-[477px] h-[466px] overflow-hidden max-w-full max-h-full text-left text-mini text-dimgray-600 font-poppins">
     <form method="post">
      <label
        className="absolute top-[23px] left-[18px] text-base font-archivo-black inline-block w-[312px] h-5"
        id="studentname"
      >
        Add Component Details
      </label>
      <label
        className="absolute top-[102px] left-[29px] font-medium inline-block w-[147px] h-5"
        id="studentname"
      >
        Component Model
      </label>
      <div className="absolute top-[59.5px] left-[-29.5px] box-border w-[794px] h-px border-t-[1px] border-solid border-dimgray-800" />
      <img
        className="absolute top-[20px] left-[440px] w-5 h-5 object-cover cursor-pointer"
        alt=""
        src="/daco-1569718-1@2x.png"
        onClick={onClose}
      />
      <input
        className="bg-whitesmoke-200 absolute top-[129px] left-[30px] rounded box-border w-[420px] h-[30px] border-[1px] border-solid border-darkslategray-400"
        type="text"
        
        required
        id="model"
        value={model}
        onChange={(e) => setModel(e.target.value)}

      />
      <label
        className="absolute top-[194px] left-[30px] font-medium inline-block w-[147px] h-5"
        id="studentname"
      >
        Quantity
      </label>
      <label
        className="absolute top-[194px] left-[239px] font-medium inline-block w-[147px] h-5"
        id="studentname"
      >
        Price per item
      </label>
      <input
        className="bg-whitesmoke-200 absolute top-[219px] left-[30px] rounded box-border w-[193px] h-[30px] border-[1px] border-solid border-darkslategray-400"
        type="text"
       
        required
        id="quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <label
        className="absolute top-[284px] left-[28px] font-medium inline-block w-[271px] h-5"
        id="studentname"
      >
        Functionality of the component
      </label>
      <input
        className="bg-whitesmoke-200 absolute top-[309px] left-[28px] rounded box-border w-[421px] h-[30px] border-[1px] border-solid border-darkslategray-400"
        type="text"
        
        required
        id="funcStat"
        value={funcStat}
        onChange={(e) => setFuncStat(e.target.value)}
      />
      <input
        className="bg-whitesmoke-200 absolute top-[219px] left-[239px] rounded box-border w-[211px] h-[30px] border-[1px] border-solid border-darkslategray-400"
        type="text"
        
        required
        id="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
       </form>
      <button
        className="cursor-pointer [border:none] py-3.5 px-4 bg-limegreen absolute top-[381px] right-[157px] rounded w-[170px] h-[33px] overflow-hidden flex flex-row box-border items-center justify-between"
        onClick={handleSubmit}>
        <b className="relative text-mini leading-[100%] flex font-poppins text-white text-center items-center justify-center w-[135px] h-6 shrink-0">
          Save
        </b>
      </button>
     
    </div>
  );
};

export default AddComponentPopup;