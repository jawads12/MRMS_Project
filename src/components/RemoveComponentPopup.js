import { useState } from "react";
import PortalPopup from "./PortalPopup";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";


const RemoveComponentPopup = ({ onClose, component }) => 
{
  console.log("component", component)
  const [isEditComponentPopup1Open, setEditComponentPopup1Open] =
    useState(false);

  const openEditComponentPopup1 = () => {
    setEditComponentPopup1Open(true);
  };

  const closeEditComponentPopup1 = () => {
    setEditComponentPopup1Open(false);
  };

  const navigate = useNavigate();
  const [err, setError] = useState("");

  const [Id, setId] = useState(component.COMP_ID);
  const [model, setModel] = useState(component.COMPONENT_MODEL);
  const [quantity, setQuantity] = useState(component.QUANTITY);
  const [price, setPrice] = useState(component.PRICE);
  const [funcStat, setFuncStat] = useState(component.FUNCTIONALITY);
  const [status, setStatus] = useState("");

  const onDaco15697181IconClick = useCallback(() => {
    navigate("/");
    onClose();
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const editComponentComponent = {
      Id,
      model,
      quantity,
      price,
      funcStat,
      status
    };
    
    fetch("http://localhost:5498/editComponent",{
      method: "POST",
      headers: {
        "Content-type" : "application/json",
      },
      body: JSON.stringify(editComponentComponent),
    })
    .then((result)=> {
      if (result.status===200)
      {
        console.log("component inputted");
      }
    });

  };



  
  const handleDelete = ()=>{
    fetch(`http://localhost:5498/delete-component/${Id}`,{
      method: "DELETE", // or 'PUT'
    })
    .then(result => {
      console.log(result);
      if(result.status==200) {
        console.log("Request Deleted Succesfully")
      }
      else {
        console.log("Error Occured", result);
      }
    });

};

  return (
    <>
      <div
        className="relative bg-white shadow-[0px_4px_100px_rgba(0,_0,_0,_0.25)] w-[477px] h-[466px] overflow-hidden cursor-pointer max-w-full max-h-full text-left text-mini text-dimgray-600 font-poppins"
        onClick={openEditComponentPopup1}
      >
        <label
          className="absolute top-[20px] left-[18px] text-base font-archivo-black inline-block w-[342px] h-5"
          id="studentname"
        >
          Edit Component
        </label>
        <label
          className="absolute top-[98px] left-[30px] font-medium inline-block w-[147px] h-5"
          id="studentname"
        >
          Component Name
        </label>
        <div className="absolute top-[59.5px] left-[-29.5px] box-border w-[794px] h-px border-t-[1px] border-solid border-dimgray-800" />
        <img
          className="absolute top-[20px] left-[440px] w-5 h-5 object-cover cursor-pointer"
          alt=""
          src="/daco-1569718-1@2x.png"
          onClick={onClose}
        />
        <input
          className="bg-whitesmoke-200 absolute top-[125px] left-[30px] rounded box-border w-[420px] h-[30px] border-[1px] border-solid border-darkslategray-400"
          type="text"
          required
          id="model"
          value={model}
          onChange={(e) => {setModel(e.target.value)
          console.log("onchange");
          }
          }
        />
        <label
          className="absolute top-[181px] left-[29px] font-medium inline-block w-[147px] h-5"
          id="studentname"
        >
          Quantity
        </label>
        <input
          className="bg-whitesmoke-200 absolute top-[208px] left-[29px] rounded box-border w-[191px] h-[30px] border-[1px] border-solid border-darkslategray-400"
          type="text"
          
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button
          className="cursor-pointer [border:none] py-3.5 px-4 bg-limegreen absolute top-[390px] right-[257px] rounded w-[170px] h-[33px] overflow-hidden flex flex-row box-border items-center justify-between"
          value={'save'}
          onChange={(e) => setStatus(e.target.value)}
          onClick={handleSubmit}
        >
          <b className="relative text-mini leading-[100%] flex font-poppins text-white text-center items-center justify-center w-[135px] h-6 shrink-0">
            Save Changes
          </b>
        </button>
        <button
          className="cursor-pointer [border:none] py-3.5 px-4 bg-firebrick-300 absolute top-[390px] right-[57px] rounded w-[170px] h-[33px] overflow-hidden flex flex-row box-border items-center justify-between"
          value={'delete'}
          onChange={(e) => setStatus(e.target.value)}
          onClick={handleDelete}
        >
          <b className="relative text-mini leading-[100%] flex font-poppins text-white text-center items-center justify-center w-[135px] h-6 shrink-0">
            Delete
          </b>
        </button>
        <label
          className="absolute top-[183px] left-[239px] font-medium inline-block w-[147px] h-5"
          id="studentname"
        >
          Price per item
        </label>
        <input
          className="bg-whitesmoke-200 absolute top-[208px] left-[239px] rounded box-border w-[211px] h-[30px] border-[1px] border-solid border-darkslategray-400"
          type="text"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <label
          className="absolute top-[285px] left-[28px] font-medium inline-block w-[271px] h-5"
          id="studentname"
        >
          Functionality of the component
        </label>
        <input
          className="bg-whitesmoke-200 absolute top-[310px] left-[28px] rounded box-border w-[421px] h-[30px] border-[1px] border-solid border-darkslategray-400"
          type="text"
          
          id="funcStat"
          value={funcStat}
          onChange={(e) => setFuncStat(e.target.value)}
        />
      </div>
      {/* rs
       */}
    </>
  );
};

export default RemoveComponentPopup;