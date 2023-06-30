import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AssignTaskPopup = ({ onClose }) => {


    const id = localStorage.getItem('student_id');
    const navigate = useNavigate();
  const [err, setError] = useState("");

    const [studentID, setstudentID] = useState("");
    const [task_field, settask_field] = useState("");
    const [quantity, setquantity] = useState("");
    const [assign_Component, setassign_Component] = useState("");
    const [assign_deadline, setassign_deadline] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const addComponent = {
        studentID,
        task_field,
        quantity,
        assign_Component,
        assign_deadline,id
      };
      
      fetch("http://localhost:5498/assign-task",{
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
    <form onSubmit={handleSubmit}>
    <div className="relative bg-white shadow-[0px_4px_100px_rgba(0,_0,_0,_0.25)] w-[477px] h-[579px] overflow-hidden max-w-full max-h-full text-left text-mini text-dimgray-600 font-poppins">
      <label
        className="absolute top-[23px] left-[18px] text-base font-archivo-black inline-block w-[312px] h-5"
        id="studentname"
      >
        Assign Task
      </label>
      <label
        className="absolute top-[95px] left-[33px] font-medium inline-block w-[147px] h-5"
        id="studentname"
      >
        Student ID
      </label>
      <div className="absolute top-[59.5px] left-[-29.5px] box-border w-[794px] h-px border-t-[1px] border-solid border-dimgray-800" />
      <img
        className="absolute top-[20px] left-[440px] w-5 h-5 object-cover cursor-pointer"
        alt=""
        src="/daco-1569718-1@2x.png"
        onClick={onClose}
      />
      <input
        className="bg-whitesmoke absolute top-[126px] left-[30px] rounded box-border w-[422px] h-[30px] border-[1px] border-solid border-darkslategray-400"
        type="text"
        maxLength
        minLength
        required
        id="studentID"
        value={studentID}
        onChange={(e) => setstudentID(e.target.value)}
        
      />
      <button
        className="cursor-pointer [border:none] py-3.5 px-4 bg-limegreen absolute top-[497px] right-[157px] rounded w-[170px] h-[33px] overflow-hidden flex flex-row box-border items-center justify-between"
        onClick={handleSubmit}
      >
        <b className="relative text-mini leading-[100%] flex font-poppins text-white text-center items-center justify-center w-[135px] h-6 shrink-0">
          Save
        </b>
      </button>
      <label
        className="absolute top-[170px] left-[33px] font-medium inline-block w-[147px] h-5"
        id="studentname"
      >
        Assign Task
      </label>
      <input
        className="bg-whitesmoke absolute top-[202px] left-[30px] rounded box-border w-[420px] h-[78px] border-[1px] border-solid border-darkslategray-400"
        type="text"
        maxLength
        minLength
        required
        id="task_field"
        value={task_field}
        onChange={(e) => settask_field(e.target.value)}
        
        
      />
      <label
        className="absolute top-[382px] left-[32px] font-medium inline-block w-[147px] h-5"
        id="studentname"
      >
        Quantity
      </label>
      <input
        className="bg-whitesmoke absolute top-[414px] left-[29px] rounded box-border w-[201px] h-[30px] border-[1px] border-solid border-darkslategray-400"
        type="text"
        maxLength
        minLength
        required
        id="quantity"
        value={quantity}
        onChange={(e) => setquantity(e.target.value)}
        
      />
      <label
        className="absolute top-[385px] left-[250px] font-medium inline-block w-[147px] h-5"
        id="studentname"
      >
        Deadline
      </label>
      <input
        className="bg-whitesmoke absolute top-[414px] left-[250px] rounded box-border w-[202px] h-[30px] border-[1px] border-solid border-darkslategray-400"
        type="date"
        maxLength
        minLength
        required
        id="assign_deadline"
        value={assign_deadline}
        onChange={(e) => setassign_deadline(e.target.value)}
      />
      <label
        className="absolute top-[299px] left-[35px] font-medium inline-block w-[147px] h-5"
        id="studentname"
      >
        Assign Component
      </label>
      <input
        className="bg-whitesmoke absolute top-[331px] left-[32px] rounded box-border w-[418px] h-[30px] border-[1px] border-solid border-darkslategray-400"
        type="text"
        maxLength
        minLength
        required
        id="assign_Component"
        value={assign_Component}
        onChange={(e) => setassign_Component(e.target.value)}
      />
    </div>
    </form>
  );

};

export default AssignTaskPopup;
