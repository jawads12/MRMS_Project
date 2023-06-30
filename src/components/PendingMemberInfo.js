import { useNavigate } from "react-router-dom";

const PendingMemberInfo = ({ onClose,selectedData }) => {
  const navigate = useNavigate();
  console.log(selectedData);

  const onDaco15697181IconClick = () => {
    
    navigate("/request-page");
  };

  
  const handleDelete = ()=>{
    
   
   // console.log(id);
    fetch(`http://localhost:5498/accept-request/${selectedData.MIST_ID, selectedData.DEPARTMENT}`,{
      method: "POST", // or 'PUT'
    })
    .then(result => {
      console.log(result);
      if(result.status==200) {
        console.log("Component Deleted Succesfully")
      }
      else {
        console.log("Error Occured", result);
      }
    });

};


const handleUpdate = (status)=>{
    
   
  // console.log(id);
   fetch(`http://localhost:5498/update-request/${selectedData.MIST_ID}`,{
     method: "POST", // or 'PUT'
     headers: {
      "Content-type" : "application/json",
    },
     body: JSON.stringify({status})
   })
   .then(result => {
     console.log(result);
     if(result.status==200) {
       console.log("Request Accepted Succesfully")
     }
     else {
       console.log("Error Occured", result);
     }
   });
  onClose()
};

  return (
    <div className="relative bg-white w-[798px] h-[535px] overflow-hidden max-w-full max-h-full text-left text-xl text-dimgray-200 font-poppins">
      <img
        className="absolute top-[27px] left-[750px] w-5 h-5 object-cover cursor-pointer"
        alt=""
        src="/daco-1569718-1@2x.png"
        onClick={onDaco15697181IconClick}
      />
      <label
        className="absolute top-[30px] left-[30px] text-3xl font-archivo-black text-darkslategray-300 inline-block w-[400px] h-[19px]"
        id="studentname"
      >
        Pending Request
      </label>
      <div className="absolute top-[73.5px] left-[-0.5px] box-border w-[818px] h-px border-t-[1px] border-solid border-dimgray-800" />
      <div className="absolute top-[119px] left-[31px] w-[289px] h-[313px]">
        <img
          className="absolute top-[29px] left-[28px] w-60 h-[262px] object-cover"
          alt=""
          id="genphoto"
          src="/rectangle-41@2x.png"
        />
      </div>
      <label
        className="absolute top-[133px] left-[335px] inline-block w-[265px] h-[23px]"
        id="Name"
      >
        <b>{`Name: `}</b>
        <b>{selectedData.NAME}</b>
      </label>
      <label
        className="absolute top-[169px] left-[335px] inline-block w-[265px] h-[23px]"
        id="ID"
      >
        <b>{`MIST_ID: `}</b>
        <span>{selectedData.MIST_ID}</span>
      </label>
      <label
        className="absolute top-[204px] left-[335px] inline-block w-[265px] h-[23px]"
        id="Dept"
      >
        <b>{`Department: `}</b>
        <span>{selectedData.DEPARTMENT}</span>
      </label>
      <label
        className="absolute top-[240px] left-[335px] inline-block w-[425px] h-[23px]"
        id="Req_sent"
      >
        <b>{`Request Sent: `}</b>
        <span>{selectedData.REQUEST_TIME}</span>
      </label>
      <label
        className="absolute top-[276px] left-[335px] inline-block w-[315px] h-[23px]"
        id="email"
      >
        <b>{`Email: `}</b>
        <span>{selectedData.EMAIL}</span>
      </label>
      <div className="absolute top-[309px] left-[335px] w-[385px] h-[140px]">
        <label
          className="absolute top-[0px] left-[0px] font-bold inline-block w-[315px] h-[23px]"
          id="Description"
        >
          Description:
        </label>
        <label
          className="absolute top-[39px] left-[0px] inline-block w-[385px] h-[101px]"
          id="inputted_description"
        >
          {selectedData.DETAILS}
        </label>

      </div>
      <button
      onClick={()=>handleUpdate("ACCEPT")}
  className="cursor-pointer [border:none] p-0 bg-blue-600 absolute top-[452px] left-[231px] w-[129px] h-10 overflow-hidden"
  id="accept_btn"
>
  <b className="absolute top-[1px] left-[0px] text-xl flex font-poppins text-white text-center items-center justify-center w-[129px] h-[38px]">
    Accept

  </b>
</button>

      <button
        onClick={()=>handleUpdate("REJECT")}
        className="cursor-pointer [border:none] p-0 bg-firebrick-600 absolute top-[452px] left-[429px] w-[129px] h-10 overflow-hidden"
        id="decline_btn"
      >
        <b className="absolute top-[1px] left-[0px] text-xl flex font-poppins text-white text-center items-center justify-center w-[129px] h-[38px]">
          Decline
        </b>
      </button>
    </div>
  );
};

export default PendingMemberInfo;
