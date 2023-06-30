import { useState } from "react";
import RemoveComponentPopup from "../components/RemoveComponentPopup";
import PortalPopup from "../components/PortalPopup";
import AddComponentPopup from "../components/AddComponentPopup";
import { useNavigate } from "react-router-dom";

const ViewComponentPage1 = () => {
  const [isEditComponentPopupOpen, setEditComponentPopupOpen] = useState(false);
  const [isAddComponentPopupOpen, setAddComponentPopupOpen] = useState(false);
  const navigate = useNavigate();

  const onComponentsContainerClick = () => {
    navigate("/view-component-page2");
  };

  const onComponentsClick = () => {
    const anchor = document.querySelector("[data-scroll-to='rectangle2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const openEditComponentPopup = () => {
    setEditComponentPopupOpen(true);
  };

  const closeEditComponentPopup = () => {
    setEditComponentPopupOpen(false);
  };

  const openAddComponentPopup = () => {
    setAddComponentPopupOpen(true);
  };

  const closeAddComponentPopup = () => {
    setAddComponentPopupOpen(false);
  };

  return (
    <>
      <div className="relative bg-white w-full h-[950px] overflow-hidden text-center text-13xl text-white font-poppins">
        <div className="absolute top-[0px] left-[0px] bg-gray-400 w-[442px] h-[950px]" />
        <b className="absolute top-[64px] left-[65px] inline-block w-[310px] h-[62px]">
          D A S H B O A R D
        </b>
        <div className="absolute top-[137.5px] left-[34.5px] box-border w-[354px] h-px border-t-[1px] border-solid border-white" />
        <div
          className="absolute top-[432px] left-[1px] bg-firebrick-600 flex flex-col items-start justify-start cursor-pointer"
          onClick={onComponentsContainerClick}
        >
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] w-[442px] h-[76px] flex flex-col items-center justify-center hover:bg-firebrick-200 hover:cursor-pointer"
            onClick={onComponentsClick}
          >
            <div className="relative text-xl font-semibold font-inter text-white text-center flex items-center justify-center w-[154px] h-11 shrink-0 hover:text-white">
              Components
            </div>
          </button>
        </div>
        <label
          className="absolute top-[79px] left-[439px] font-archivo-black text-black inline-block w-[1253px] h-[61px]"
          id="studentname"
        >{`Component Inventory `}</label>
        <div className="absolute top-[137.5px] left-[482.5px] box-border w-[1145px] h-px border-t-[1px] border-solid border-dimgray-400" />
        <div className="absolute top-[261px] left-[488px] w-[1132.54px] h-[41px] text-lg">
          <div className="absolute h-full w-[10.03%] top-[0%] right-[0%] bottom-[0%] left-[89.97%] bg-crimson-200 box-border overflow-hidden flex flex-col py-3 px-0 items-center justify-end border-[1px] border-solid border-white">
            <b className="relative leading-[100%] inline-block w-[104px] h-4 shrink-0">
              Action
            </b>
          </div>
          <div className="absolute h-full w-[25.32%] top-[0%] right-[10.05%] bottom-[0%] left-[64.63%] bg-crimson-200 box-border overflow-hidden flex flex-col py-3 px-0 items-center justify-end border-[1px] border-solid border-white">
            <b className="relative leading-[100%] inline-block w-[245px] h-4 shrink-0">
              Functionality Status
            </b>
          </div>
          <div className="absolute h-full w-[15.4%] top-[0%] right-[35.33%] bottom-[0%] left-[49.27%] bg-crimson-200 box-border overflow-hidden flex flex-col py-3 px-0 items-center justify-end border-[1px] border-solid border-white">
            <b className="relative leading-[100%] inline-block w-[149px] h-4 shrink-0">
              Quantity
            </b>
          </div>
          <div className="absolute h-full w-[32.66%] top-[0%] right-[50.74%] bottom-[0%] left-[16.6%] bg-crimson-200 box-border overflow-hidden flex flex-col py-3 px-0 items-center justify-end border-[1px] border-solid border-white">
            <b className="relative leading-[100%] inline-block w-[364px] h-4 shrink-0">
              Model
            </b>
          </div>
          <div className="absolute h-full w-[16.69%] top-[0%] right-[83.31%] bottom-[0%] left-[0%] bg-crimson-200 box-border overflow-hidden flex flex-col py-3 px-[3px] items-end justify-end border-[1px] border-solid border-white">
            <b className="relative leading-[100%] inline-block w-[186px]">
              Component ID
            </b>
          </div>
        </div>
        <div className="absolute top-[302px] left-[489px] w-[1132px] h-[41px] text-mini text-black">
          <div className="absolute h-full w-[10.07%] top-[0%] right-[0%] bottom-[0%] left-[89.93%] bg-lightgray-100 box-border overflow-hidden border-[1px] border-solid border-white">
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[5px] left-[47px] w-[26px] h-[26px] bg-[url(/public/image1211@3x.png)] bg-cover bg-no-repeat bg-[top]"
              id="edit_button"
              onClick={openEditComponentPopup}
            />
          </div>
          <div className="absolute h-full w-[25.35%] top-[0%] right-[10.07%] bottom-[0%] left-[64.58%] bg-lightgray-100 box-border overflow-hidden border-[1px] border-solid border-white">
            <div
              className="absolute top-[13px] left-[21px] leading-[100%] font-medium inline-block w-[245px] h-4"
              id="func"
            >
              Working
            </div>
          </div>
          <div className="absolute h-full w-[15.37%] top-[0%] right-[35.42%] bottom-[0%] left-[49.2%] bg-lightgray-100 box-border overflow-hidden border-[1px] border-solid border-white">
            <div
              className="absolute top-[13px] left-[12.5px] leading-[100%] inline-block w-[149px] h-4"
              id="quantity"
            >
              1
            </div>
          </div>
          <div className="absolute h-full w-[32.6%] top-[0%] right-[50.8%] bottom-[0%] left-[16.61%] bg-lightgray-100 box-border overflow-hidden border-[1px] border-solid border-white">
            <div
              className="absolute top-[13px] left-[89px] leading-[100%] inline-block w-[191px] h-4"
              id="model"
            >
              BMP180
            </div>
          </div>
          <div className="absolute h-full w-[16.61%] top-[0%] right-[83.39%] bottom-[0%] left-[0%] bg-lightgray-100 box-border overflow-hidden text-gray-500 border-[1px] border-solid border-white">
            <b
              className="absolute top-[13px] left-[0px] leading-[100%] inline-block w-[188px] h-4"
              id="comp_id"
            >
              C1
            </b>
          </div>
        </div>
        <div
          className="absolute top-[836px] left-[955px] w-[221px] h-[58px] flex flex-row items-center justify-center cursor-pointer"
          onClick={openAddComponentPopup}
        >
          <button className="cursor-pointer [border:none] py-3.5 px-4 bg-limegreen rounded w-[168px] h-[51px] overflow-hidden shrink-0 flex flex-row box-border items-center justify-between">
            <b className="relative text-base leading-[100%] font-poppins text-white text-center">
              Add Component
            </b>
          </button>
        </div>
        <input
          className="font-poppins text-base bg-[transparent] absolute top-[185px] left-[883px] rounded-xl box-border w-[413px] h-[37px] border-[1px] border-solid border-black"
          type="text"
          placeholder={`Search here..
`}
          maxLength
          minLength
          id="search"
        />
        <img
          className="absolute top-[189px] left-[845px] w-8 h-[29px] object-cover"
          alt=""
          src="/searchremovebgpreview-1@2x.png"
        />
      </div>
      {isEditComponentPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeEditComponentPopup}
        >
          <RemoveComponentPopup onClose={closeEditComponentPopup} />
        </PortalPopup>
      )}
      {isAddComponentPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeAddComponentPopup}
        >
          <AddComponentPopup onClose={closeAddComponentPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default ViewComponentPage1;
