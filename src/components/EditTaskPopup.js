const EditTaskPopup = ({ onClose }) => {
  return (
    <div className="relative bg-white shadow-[0px_4px_100px_rgba(0,_0,_0,_0.25)] w-[477px] h-[579px] overflow-hidden max-w-full max-h-full text-left text-mini text-dimgray-600 font-poppins">
      <label
        className="absolute top-[23px] left-[18px] text-base font-archivo-black inline-block w-[312px] h-5"
        id="studentname"
      >
        Edit Task
      </label>
      <label
        className="absolute top-[95px] left-[33px] font-medium inline-block w-[147px] h-5"
        id="studentname"
      >
        Task ID
      </label>
      <div className="absolute top-[59.5px] left-[-29.5px] box-border w-[794px] h-px border-t-[1px] border-solid border-dimgray-800" />
      <img
        className="absolute top-[20px] left-[440px] w-5 h-5 object-cover cursor-pointer"
        alt=""
        src="/daco-1569718-1@2x.png"
        onClick={onClose}
      />
      <input
        className="bg-whitesmoke-200 absolute top-[126px] left-[30px] rounded box-border w-[422px] h-[30px] border-[1px] border-solid border-darkslategray-400"
        type="text"
        maxLength
        minLength
        required
        id="task_id"
      />
      <button
        className="cursor-pointer [border:none] py-3.5 px-4 bg-limegreen absolute top-[502px] right-[246px] rounded w-[170px] h-[33px] overflow-hidden flex flex-row box-border items-center justify-between"
        id="updateTaskBtn"
        onClick={onClose}
      >
        <b className="relative text-mini leading-[100%] flex font-poppins text-white text-center items-center justify-center w-[135px] h-6 shrink-0">
          Update Task
        </b>
      </button>
      <button
        className="cursor-pointer [border:none] py-3.5 px-4 bg-firebrick-600 absolute top-[500px] right-[56px] rounded w-[170px] h-[33px] overflow-hidden flex flex-row box-border items-center justify-between"
        id="remove_task_btn"
        onClick={onClose}
      >
        <b className="relative text-mini leading-[100%] flex font-poppins text-white text-center items-center justify-center w-[135px] h-6 shrink-0">
          Remove Task
        </b>
      </button>
      <label
        className="absolute top-[170px] left-[33px] font-medium inline-block w-[147px] h-5"
        id="studentname"
      >
        Updated Task
      </label>
      <input
        className="bg-whitesmoke-200 absolute top-[202px] left-[30px] rounded box-border w-[420px] h-[78px] border-[1px] border-solid border-darkslategray-400"
        type="text"
        maxLength
        minLength
        required
        id="updateTask"
      />
      <label
        className="absolute top-[382px] left-[32px] font-medium inline-block w-[147px] h-5"
        id="studentname"
      >
        Quantity
      </label>
      <input
        className="bg-whitesmoke-200 absolute top-[414px] left-[29px] rounded box-border w-[201px] h-[30px] border-[1px] border-solid border-darkslategray-400"
        type="text"
        maxLength
        minLength
        required
        id="updateQuantity"
      />
      <label
        className="absolute top-[385px] left-[250px] font-medium inline-block w-[147px] h-5"
        id="studentname"
      >
        Updated deadline
      </label>
      <input
        className="bg-whitesmoke absolute top-[414px] left-[250px] rounded box-border w-[202px] h-[30px] border-[1px] border-solid border-darkslategray-400"
        type="date"
        maxLength
        minLength
        required
        id="assign_deadline"
      />
      <label
        className="absolute top-[299px] left-[35px] font-medium inline-block w-[201px] h-5"
        id="studentname"
      >
        Updated Component
      </label>
      <input
        className="bg-whitesmoke-200 absolute top-[331px] left-[32px] rounded box-border w-[418px] h-[30px] border-[1px] border-solid border-darkslategray-400"
        type="text"
        maxLength
        minLength
        required
        id="updateComponent"
      />
    </div>
  );
};

export default EditTaskPopup;
