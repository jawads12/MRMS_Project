import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const TeamMemberList = ({ onClose, department }) => {
  const navigate = useNavigate();

  const onDaco15697181IconClick = () => {
    navigate("/view-member-page");
    onClose(); // Close the popup window
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(`http://localhost:5498/team-members?department=${department}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  };
  if(!data){
    return "loading........."
  }

  return (
    <div className="relative bg-white shadow-[0px_4px_100px_rgba(0,_0,_0,_0.25)] w-[1423px] h-[545px] overflow-hidden max-w-full max-h-full text-center text-5xl text-darkslategray-300 font-poppins">
      <label
        className="absolute top-[24px] left-[30px] font-archivo-black text-left inline-block w-[400px] h-[19px]"
        id="studentname"
      >
        Team Members
      </label>
      <div className="absolute top-[59.5px] left-[-33.5px] box-border w-[1489px] h-px border-t-[1px] border-solid border-dimgray-800" />
      <table className="absolute top-[140px] left-[30px] w-[1340px] h-10 text-3xl text-black">
        <thead className="bg-red-500 text-white">
          <tr>
            <th>Ser.</th>
            <th>Name</th>
            <th>Department</th>
            <th>Email</th>
            <th>Contact No.</th>
            <th>MIST_ID</th>
          </tr>
        </thead>
        <tbody>
          {data.map((teamMember, index) => (
            <tr key={teamMember.MIST_ID}>
              <td>{index + 1}</td>
              <td>{`${teamMember.NAME.FIRST_NAME} ${teamMember.NAME.LAST_NAME}`}</td>
              <td>{teamMember.DEPARTMENT}</td>
              <td>{teamMember.EMAIL}</td>
              <td>01711846745</td>
              <td>{teamMember.MIST_ID}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <img
        className="absolute top-[20px] left-[1370px] w-5 h-5 object-cover cursor-pointer"
        alt=""
        src="/daco-1569718-1@2x.png"
        onClick={onDaco15697181IconClick}
      />
    </div>
  );
};

export default TeamMemberList;
