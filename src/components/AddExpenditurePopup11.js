import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddExpenditurePopup11 = ({ onClose }) => {
  const handleUpdate=(e)=>{
    e.preventDefault();

    const updatedData = {
      type: e.target.admin_expense_type_field.value,
      description: e.target.admin_expense_descrip_field.value,
      date: e.target.admin_expense_date_field.value,
      amount: e.target.admin_expense_amount_field.value,
    }
    console.log(updatedData);


    fetch(`http://localhost:5498/admin/add-expenditure`,{
     method: "POST", // or 'PUT'
     headers: {
      "Content-type" : "application/json",
    },
     body: JSON.stringify({updatedData})
   })
   .then(result => {
     console.log(result);
     if(result.status==200) {
       console.log("Updated Succesfully")
     }
     else {
       console.log("Error Occured", result);
     }
   });
    onClose();

  }
  return (
    <form onSubmit={handleUpdate}>
    <div className="relative bg-white shadow-[0px_4px_100px_rgba(0,_0,_0,_0.25)] w-[477px] h-[469px] overflow-hidden max-w-full max-h-full text-left text-mini text-dimgray-600 font-poppins">
      <label
        className="absolute top-[23px] left-[18px] text-base font-archivo-black inline-block w-[372px] h-5"
        id="studentname"
      >
        Add Administrative Expenditure Details
      </label>
      <label
        className="absolute top-[109px] left-[33px] font-medium inline-block w-[147px] h-5"
        id="studentname"
      >
        Type
      </label>
      <div className="absolute top-[59.5px] left-[-29.5px] box-border w-[794px] h-px border-t-[1px] border-solid border-dimgray-800" />
      <img
        className="absolute top-[20px] left-[440px] w-5 h-5 object-cover cursor-pointer"
        alt=""
        src="/daco-1569718-1@2x.png"
        onClick={onClose}
      />
      <input
        className="bg-whitesmoke absolute top-[140px] left-[30px] rounded box-border w-[422px] h-[30px] border-[1px] border-solid border-darkslategray-400"
        type="text"
        maxLength
        minLength
        required
        id="admin_expense_type_field"
      />
      <label
        className="absolute top-[186px] left-[33px] font-medium inline-block w-[147px] h-5"
        id="studentname"
      >
        Description
      </label>
      <label
        className="absolute top-[264px] left-[33px] font-medium inline-block w-[147px] h-5"
        id="studentname"
      >
        Date
      </label>
      <input
        className="bg-whitesmoke absolute top-[217px] left-[31px] rounded box-border w-[421px] h-[30px] border-[1px] border-solid border-darkslategray-400"
        type="text"
        maxLength
        minLength
        required
        id="admin_expense_descrip_field"
      />
      <input
        className="bg-whitesmoke absolute top-[296px] left-[30px] rounded box-border w-[190px] h-[30px] border-[1px] border-solid border-darkslategray-400"
        type="date"
        maxLength
        minLength
        required
        id="admin_expense_date_field"
      />
      <label
        className="absolute top-[264px] left-[263px] font-medium inline-block w-[147px] h-5"
        id="studentname"
      >
        Amount
      </label>
      <input
        className="bg-whitesmoke absolute top-[296px] left-[260px] rounded box-border w-[190px] h-[30px] border-[1px] border-solid border-darkslategray-400"
        type="text"
        maxLength
        minLength
        required
        id="admin_expense_amount_field"
      />
      <button
        className="cursor-pointer [border:none] py-3.5 px-4 bg-limegreen absolute top-[397px] right-[153px] rounded w-[170px] h-[33px] overflow-hidden flex flex-row box-border items-center justify-between"
        id="saveBtn"
      >
        <b className="relative text-mini leading-[100%] flex font-poppins text-white text-center items-center justify-center w-[135px] h-6 shrink-0">
          Save
        </b>
      </button>
    </div>
    </form>
  );
};

export default AddExpenditurePopup11;
