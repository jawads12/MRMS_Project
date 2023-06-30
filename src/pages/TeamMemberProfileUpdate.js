import { useState } from "react";
import ConfirmDeletionPopup from "../components/ConfirmDeletionPopup";
import PortalPopup from "../components/PortalPopup";
import ConfirmSavechangesPopup from "../components/ConfirmSavechangesPopup";
import ContactCard from "../components/ContactCard";
import UpdateNameCard from "../components/UpdateNameCard";
import { useNavigate } from "react-router-dom";

const TeamMemberProfileUpdate = () => {
  const [isConfirmDeletionPopupOpen, setConfirmDeletionPopupOpen] =
    useState(false);
  const [isConfirmSavechangesPopupOpen, setConfirmSavechangesPopupOpen] =
    useState(false);
  const navigate = useNavigate();

  const openConfirmDeletionPopup = () => {
    setConfirmDeletionPopupOpen(true);
  };

  const closeConfirmDeletionPopup = () => {
    setConfirmDeletionPopupOpen(false);
  };

  const openConfirmSavechangesPopup = () => {
    setConfirmSavechangesPopupOpen(true);
  };

  const closeConfirmSavechangesPopup = () => {
    setConfirmSavechangesPopupOpen(false);
  };

  const onImage172Click = () => {
    navigate("/team-member-profile");
  };

  return (
    <>
      <div className="relative bg-white w-full h-[797px] overflow-hidden text-left text-31xl text-white font-poppins">
        <div className="absolute top-[0px] left-[0px] [background:linear-gradient(rgba(114,_0,_0,_0.9),_rgba(114,_0,_0,_0.9)),_#fff] w-[1700px] h-[797px] overflow-hidden">
          <div className="absolute top-[0px] left-[0px] bg-maroon-200 w-[1745px] h-[186px] opacity-[0.8]" />
          <div className="absolute top-[0px] left-[122px] bg-maroon-200 w-[495px] h-[797px]" />
          <b className="absolute top-[80px] left-[241px] inline-block w-[289px] h-[106px] [text-shadow:4px_4px_4px_rgba(0,_0,_0,_0.25)]">
            Edit Profile
          </b>
          <img
            className="absolute top-[199px] left-[228px] w-[282px] h-[342px] object-cover"
            alt=""
            id="userimage"
            src="/rectangle-31@2x.png"
          />
          <ContactCard rectangle4Id="ContNo" />
          <UpdateNameCard
            rectangle4Id="updateFirstName"
            rectangle4Id1="updateLastName"
            rectangle4Id2="updateLevel"
          />
          <div className="absolute top-[663px] left-[766px] w-[374px] flex flex-col py-0 pr-0 pl-[3px] box-border items-start justify-start text-xl">
            <h3 className="m-0 relative text-[inherit] font-medium font-inherit inline-block w-[182px] h-[35px] shrink-0">
              Current Password
            </h3>
            <input
              className="bg-maroon-400 relative box-border w-[374px] h-[26px] opacity-[0.7] border-[1px] border-solid border-white"
              type="text"
              maxLength
              minLength
              required
              id="currentPass"
            />
          </div>
          <div className="absolute top-[581px] left-[286px] text-lg [text-decoration:underline] inline-block w-[210px] h-7">
            Upload New Photo
          </div>
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[704px] left-[307px] text-lg [text-decoration:underline] font-poppins text-white text-left inline-block w-[124px] h-7"
            id="deleteprofile"
            onClick={openConfirmDeletionPopup}
          >
            Delete Profile
          </button>
          <img
            className="absolute top-[225px] left-[1104.5px] w-px h-[383.5px] opacity-[0.7]"
            alt=""
            src="/line-1.svg"
          />
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[672px] left-[1353px] w-[232px] h-[63px] flex flex-col items-center justify-start"
            id="savechanges"
            onClick={openConfirmSavechangesPopup}
          >
            <div className="relative bg-maroon-400 box-border w-[225px] h-[54px] opacity-[0.7] border-[1px] border-solid border-white" />
            <div className="relative text-4xl font-medium font-poppins text-white text-center inline-block w-[232px] h-[55px] shrink-0 mt-[-46px]">
              SAVE CHANGES
            </div>
          </button>
          <div className="absolute top-[214px] left-[242px] w-64 h-64">
            <img
              className="absolute top-[0px] left-[0px] w-[310px] h-[311px] object-cover"
              alt=""
              src="/membericon@2x.png"
            />
          </div>
          <img
            className="absolute top-[726px] left-[29px] w-[52px] h-[37px] object-cover cursor-pointer"
            alt=""
            src="/image-17-1@2x.png"
            onClick={onImage172Click}
          />
        </div>
      </div>
      {isConfirmDeletionPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeConfirmDeletionPopup}
        >
          <ConfirmDeletionPopup onClose={closeConfirmDeletionPopup} />
        </PortalPopup>
      )}
      {isConfirmSavechangesPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeConfirmSavechangesPopup}
        >
          <ConfirmSavechangesPopup onClose={closeConfirmSavechangesPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default TeamMemberProfileUpdate;
