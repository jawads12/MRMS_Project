const AddExpenditurePopup1 = ({ onClose }) => {
  const handleUpdate=(e)=>{
    e.preventDefault();

    const updatedData = {
      modelName: e.target.comp_model_field.value,
      quantity: e.target.quantity_field.value,
      functionality:e.target.functionality_field.value,
      price: e.target.price_per_item_field.value,
    }
    console.log(updatedData);


    fetch(`http://localhost:5498/component/add-expenditure/`,{
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
    <form  onSubmit={handleUpdate} className="relative bg-white shadow-[0px_4px_100px_rgba(0,_0,_0,_0.25)] w-[477px] h-[469px] overflow-hidden max-w-full max-h-full text-left text-mini text-dimgray-600 font-poppins">
      <label
        className="absolute top-[23px] left-[18px] text-base font-archivo-black inline-block w-[352px] h-5"
        id="studentname"
      >
        Add Component Expenditure Details
      </label>
      <label
        className="absolute top-[106px] left-[30px] font-medium inline-block w-[147px] h-5"
        id="studentname"
      >
        Component Model
      </label>
      <label
        className="absolute top-[184px] left-[30px] font-medium inline-block w-[147px] h-5"
        id="studentname"
      >
        Quantity
      </label>
      <div className="absolute top-[59.5px] left-[-29.5px] box-border w-[794px] h-px border-t-[1px] border-solid border-dimgray-800" />
      <img
        className="absolute top-[20px] left-[440px] w-5 h-5 object-cover cursor-pointer"
        alt=""
        src="/daco-1569718-1@2x.png"
        onClick={onClose}
      />
      <input
        className="bg-whitesmoke absolute top-[135px] left-[30px] rounded box-border w-[420px] h-[30px] border-[1px] border-solid border-darkslategray-400"
        type="text"
        maxLength
        minLength
        required
        id="comp_model_field"
      />
      <input
        className="bg-whitesmoke absolute top-[217px] left-[241px] rounded box-border w-[211px] h-[30px] border-[1px] border-solid border-darkslategray-400"
        type="number"
        required
        id="price_per_item_field"
      />
      <label
        className="absolute top-[273px] left-[33px] font-medium inline-block w-[147px] h-5"
        id="studentname"
      >
        Functionality
      </label>
      <label
        className="absolute top-[181px] left-[251px] font-medium inline-block w-[147px] h-5"
        id="studentname"
      >
        Price per item
      </label>
      <input
        className="bg-whitesmoke absolute top-[304px] left-[30px] rounded box-border w-[421px] h-[30px] border-[1px] border-solid border-darkslategray-400"
        type="text"
        maxLength
        minLength
        required
        id="functionality_field"
      />
      <input
        className="bg-whitesmoke absolute top-[217px] left-[30px] rounded box-border w-48 h-[30px] border-[1px] border-solid border-darkslategray-400"
        type="number"
        required
        id="quantity_field"
      />
      <button
        className="cursor-pointer [border:none] py-3.5 px-4 bg-limegreen absolute top-[390px] right-[153px] rounded w-[170px] h-[33px] overflow-hidden flex flex-row box-border items-center justify-between"
        id="saveBtn"
      >
        <b className="relative text-mini leading-[100%] flex font-poppins text-white text-center items-center justify-center w-[135px] h-6 shrink-0">
          Save
        </b>
      </button>
    </form>
  );
};

export default AddExpenditurePopup1;
