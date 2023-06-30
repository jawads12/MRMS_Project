const JoinTheTeamPopup = ({ onClose }) => {


  
  const handleSubmit = (e)=>{
    e.preventDefault();
  console.log(e.target);
    const sub_team = e.target.sub_team.value;
    const details=e.target.details.value;
 
   
    const request = {
      
      sub_team, details

      //student_id,fname, lname, dept, levell , phone1, phone2, email, password
    }
    




    const storedVariable = localStorage.getItem('student_id');
    fetch(`http://localhost:5498/joinRequest/${storedVariable}`,{
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
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

    onClose();
};




  return (
    
    <div className="relative bg-white shadow-[0px_4px_100px_rgba(0,_0,_0,_0.25)] w-[477px] h-[501px] overflow-hidden max-w-full max-h-full text-left text-mini text-dimgray-600 font-poppins">
     <form onSubmit={handleSubmit}>
      <label
        className="absolute top-[20px] left-[18px] text-base font-archivo-black inline-block w-[342px] h-5"
        id="studentname"
      >
        Join a Team
      </label>
      <label
        className="absolute top-[98px] left-[31px] font-medium inline-block w-[290px] h-5"
        id="studentname"
      >
        Which team do you want to join in?
      </label>
      <label
        className="absolute top-[200px] left-[30px] font-medium inline-block w-[439px] h-5"
        id="studentname"
      >
        Describe what skillset you have to be a team member.
      </label>
      <div className="absolute top-[59.5px] left-[-29.5px] box-border w-[794px] h-px border-t-[1px] border-solid border-dimgray-800" />
      <img
        className="absolute top-[20px] left-[440px] w-5 h-5 object-cover cursor-pointer"
        alt=""
        src="/daco-1569718-1@2x.png"
        onClick={onClose}
      />
      <select
  className="bg-whitesmoke absolute top-[125px] left-[31px] rounded box-border w-[420px] h-[30px] border-[1px] border-solid border-darkslategray-400"
  id="sub_team"
  name="sub_team"
  required
>
  <option value="">Select an option</option>
  <option value="Electrical">Electrical</option>
  <option value="Mechanical">Mechanical</option>
  <option value="Software">Software</option>
  <option value="Communication">Communication</option>
  <option value="Management">Management</option>
</select>

      <input
        className="bg-whitesmoke absolute top-[230px] left-[30px] rounded shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[420px] h-[150px] border-[1px] border-solid border-darkslategray-400"
        type="text"
        maxLength
        minLength
        required
        id="details"
        name="details"
      />
      <button
        className="cursor-pointer [border:none] py-3.5 px-4 bg-limegreen absolute top-[430px] right-[153px] rounded w-[170px] h-[33px] overflow-hidden flex flex-row box-border items-center justify-between"
        type="submit"
      >
        <b className="relative text-mini leading-[100%] flex font-poppins text-white text-center items-center justify-center w-[135px] h-6 shrink-0">
          Send Request
        </b>
      </button>
      </form>
    </div>

  );
};

export default JoinTheTeamPopup;
