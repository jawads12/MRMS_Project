import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const onMEETTHETEAMClick = () => {
    const anchor = document.querySelector("[data-scroll-to='rectangle3']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const onCONTACTUSClick = () => {
    const anchor = document.querySelector("[data-scroll-to='rectangle2']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const onHISTORYClick = () => {
    const anchor = document.querySelector("[data-scroll-to='rectangle1']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const onHOMEClick = () => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const onABOUTUSClick = () => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const onABOUTUS1Click = () => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };

  const onHovertrueContainerClick = () => {
    navigate("/registration-page");
  };

  const onAlreadyAMemberClick = () => {
    navigate("/signin-page");
  };

  return (
    <div className="relative bg-white w-full h-[7527px] overflow-hidden text-left text-13xl text-black font-inter">
      <canvas
        className="absolute top-[103px] left-[-10px] bg-maroon-100 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[849px] h-[845px]"
        id="frame"
      />
      <nav
        className="absolute top-[74px] left-[-10px] bg-gainsboro w-[1710px] h-12"
        id="nav_bar"
      />
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[74px] left-[774px] w-[168px] flex flex-col items-center justify-center hover:bg-darkred hover:cursor-pointer"
        onClick={onMEETTHETEAMClick}
      >
        <div className="relative text-sm font-semibold font-inter text-black text-center flex items-center justify-center w-[168px] h-11 shrink-0 hover:text-white">
          MEET THE TEAM
        </div>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[74px] left-[1422px] w-[154px] flex flex-col items-center justify-center hover:bg-firebrick-200 hover:cursor-pointer"
        onClick={onCONTACTUSClick}
      >
        <div className="relative text-sm font-semibold font-inter text-black text-center flex items-center justify-center w-[154px] h-11 shrink-0 hover:text-white">
          CONTACT US
        </div>
      </button>
      <div className="absolute top-[74px] left-[1105px] w-[154px] flex flex-col items-center justify-center">
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] w-[154px] flex flex-col items-center justify-center hover:bg-firebrick-200 hover:cursor-pointer"
          onClick={onHISTORYClick}
        >
          <div className="relative text-sm font-semibold font-inter text-black text-center flex items-center justify-center w-[154px] h-11 shrink-0 hover:text-white">
            HISTORY
          </div>
        </button>
      </div>
      <div className="absolute top-[75px] left-[152px] w-[148px] flex flex-col items-center justify-center">
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[148px] h-11 hover:bg-firebrick-100 hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hover:cursor-pointer"
          onClick={onHOMEClick}
        >
          <div className="absolute h-full w-full top-[0%] left-[0%] text-sm font-semibold font-inter text-black text-center flex items-center justify-center hover:text-white hover:cursor-pointer">
            HOME
          </div>
        </button>
      </div>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[74px] left-[463px] w-[148px] flex flex-col items-center justify-center"
        onClick={onABOUTUSClick}
      >
        <div className="w-[148px] flex flex-col items-center justify-center">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[148px] h-11 hover:bg-firebrick-100 hover:shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hover:cursor-pointer"
            onClick={onABOUTUS1Click}
          >
            <div className="absolute h-full w-full top-[0%] left-[0%] text-sm font-semibold font-inter text-black text-center flex items-center justify-center hover:text-white hover:cursor-pointer">
              ABOUT US
            </div>
          </button>
        </div>
      </button>
      <div className="absolute top-[759px] left-[54px] rounded-[5px] w-[200px] h-[114px] overflow-hidden flex flex-row p-4 box-border items-center justify-center">
        <div
          className="w-[223px] h-[61px] flex flex-row items-center justify-center cursor-pointer"
        >
          <button 
            className="cursor-pointer [border:none] py-3.5 px-4 bg-red-500 rounded w-[251px] overflow-hidden shrink-0 flex flex-row box-border items-center justify-between">
            <b className="relative text-xl leading-[100%] flex font-poppins text-white text-center items-center justify-center w-[200px] shrink-0">
              Sign Up
            </b>
          </button>

        </div>
      </div>
      <b className="absolute top-[549px] left-[54px] text-5xl inline-block font-poppins text-white w-[752px] h-[131px]">{`MMRS Management System is the team management software designed to optimize the managerial activities of MIST Mongol Barota Society. Join our team with a click of a button and embark on a riveting journey of rover crafting. `}</b>
      <div className="absolute top-[12px] left-[589px] w-[521.06px] h-12 text-5xl">
        <img
          className="absolute top-[0px] left-[0px] w-[63.63px] h-[47.89px] object-cover"
          alt=""
          src="/logo@2x.png"
        />
        <div className="absolute top-[13.46px] left-[97px] font-light inline-block w-[424.06px] h-[20.96px]">
          MIST MARS ROVER SOCIETY
        </div>
        <img
          className="absolute top-[10px] left-[77px] w-[7px] h-[38px] object-cover"
          alt=""
          src="/line@2x.png"
        />
      </div>
      <img
        className="absolute top-[789px] left-[0px] w-[1754px] h-[600px] object-cover"
        alt=""
        src="/greylinepng-1@2x.png"
      />
      <b
        className="absolute top-[797px] left-[322px] text-5xl [text-decoration:underline] inline-block font-poppins text-white w-[357px] h-[50px] cursor-pointer"
        onClick={onAlreadyAMemberClick}
      >
        Already a member? Sign in!
      </b>
      <img
        className="absolute top-[122px] left-[835px] w-[865px] h-[834px] object-cover"
        alt=""
        src="/cover_rover@2x.png"
      />
      <div className="absolute top-[-2px] left-[49px] bg-white w-[386px] h-[38px]" />
      <img
        className="absolute top-[1717px] left-[963px] w-[651px] h-[431px] object-cover"
        alt=""
        src="/MMRS_rover_picture@2x.png"
      />
      <img
        className="absolute top-[1217px] left-[86px] w-[752.69px] h-[419.42px] object-cover"
        alt=""
        src="/MMRS_team_picture@2x.png"
      />
      <img
        className="absolute top-[2067px] left-[0px] w-[1754px] h-[600px] object-cover"
        alt=""
        src="/greylinepng-1@2x.png"
      />
      <b className="absolute top-[1016px] left-[0px] text-21xl inline-block font-poppins text-center w-[1700px] h-[82px]">
        About Us
      </b>
      <div className="absolute top-[1717px] left-[86px] text-5xl font-poppins text-gray-100 inline-block w-[845px] h-[490px]">
        <p className="m-0">
          Team Mongol Barota was born in 2013, with a vision of reaching higher
          than ever. Since its inception, this ambitious little team had only
          one objective: To present our institute, as well as our country on a
          global platform with pride. Since then, the team has begun designing
          and fabricating futuristic Mars rovers in order to challenge other
          teams across the globe.
        </p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">
          Over the years, the team has grown and evolved into something
          marvelous. As future engineers, we prioritize collaboration, learning,
          and collective effort all throughout any project, to turn our initial
          vision into concrete reality. Now we go forward with the motto,
          "Nothing is constant, other than change", constantly evolving, to keep
          up with the challenges we face.
        </p>
      </div>
      <div className="absolute top-[1282px] left-[873px] text-5xl font-poppins text-gray-100 inline-block w-[747.01px] h-[289.72px]">
        Mongol Barota is a growing team of ingenious university students from
        Bangladesh who give shape to their vision of outlining, constructing and
        trialing advanced Mars rovers for digging out mysteries and exploring
        outer space. Doing justice to its name ‘Good News’ ,as we translate it
        to English, Team Mongol Barota has been accomplishing praiseworthy
        recognitions over the years and dreams to create bigger and better
        wonders that will travel beyond the zenith.
      </div>
      <b className="absolute top-[2285px] left-[-6px] text-21xl inline-block font-poppins text-center w-[1700px] h-[82px]">
        Meet the Team
      </b>
      <div
        className="absolute top-[963px] left-[690px] bg-white w-[386px] h-[38px]"
        data-scroll-to="rectangle"
      />
      <div
        className="absolute top-[2227px] left-[651px] bg-white w-[386px] h-[38px]"
        data-scroll-to="rectangle3"
      />
      <div className="absolute top-[208px] left-[48px] text-[96px] font-black font-poppins text-white inline-block w-[1329px] h-[186px] [text-shadow:0px_4px_4px_rgba(0,_0,_0,_0.25)]">
        Welcome to the official page of MMRS.
      </div>
      <div className="absolute top-[5762px] left-[1px] w-[1754px] h-[600px] bg-[url(/public/greylinepng-1@2x.png)] bg-cover bg-no-repeat bg-[top] text-center text-21xl font-poppins">
        <b className="absolute top-[220px] left-[0px] inline-block w-[1700px] h-[82px]">
          HISTORY
        </b>
        <div
          className="absolute top-[134px] left-[648px] bg-white w-[449px] h-16"
          data-scroll-to="rectangle1"
        />
      </div>
      <div className="absolute top-[5075px] left-[942px] w-[489.27px] flex flex-col items-center justify-center">
        <div className="self-stretch relative h-[671px] hover:cursor-pointer">
          <div className="absolute h-[95.08%] w-[93.81%] top-[4.92%] right-[11.7%] bottom-[0%] left-[-5.52%] rounded-19xl bg-white shadow-[0px_4px_100px_5px_rgba(0,_0,_0,_0.25)] hover:bg-maroon-100 hover:cursor-pointer" />
          <img
            className="absolute h-[80.62%] w-[83.24%] top-[0%] right-[0%] bottom-[19.38%] left-[16.76%] rounded-8xl max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/arafat-bhai1@2x.png"
          />
          <b className="absolute h-[3.43%] w-[71.74%] top-[83.76%] left-[0.61%] inline-block hover:text-white">
            Hafsah Mehzabin
          </b>
          <div className="absolute h-[3.43%] w-[71.74%] top-[90.31%] left-[1.84%] text-5xl font-light inline-block hover:text-white">
            Science Team Leader
          </div>
          <div className="absolute top-[114px] left-[3px] w-[60px] h-[60px] flex flex-col items-center justify-end">
            <div className="relative rounded-[50%] bg-white w-[60px] h-[60px]" />
            <img
              className="relative w-[35px] h-[38px] object-cover mt-[-49px]"
              alt=""
              src="/fb-logo-1@2x.png"
            />
          </div>
          <div className="absolute top-[302px] left-[3px] w-[60px] h-[60px] flex flex-col items-center justify-end">
            <div className="relative rounded-[50%] bg-white w-[60px] h-[60px]" />
            <img
              className="relative w-10 h-10 object-cover mt-[-50px]"
              alt=""
              src="/insta-logo-1@2x.png"
            />
          </div>
          <div className="absolute top-[208px] left-[-1px] w-[60px] h-[60px] flex flex-col items-center justify-end">
            <div className="relative rounded-[50%] bg-white w-[60px] h-[60px]" />
            <img
              className="relative w-10 h-10 object-cover mt-[-49px]"
              alt=""
              src="/twitter-logo-1@2x.png"
            />
          </div>
          <div className="absolute top-[396px] left-[1px] w-[60px] h-[60px] flex flex-col items-center justify-end">
            <div className="relative rounded-[50%] bg-white w-[60px] h-[60px]" />
            <img
              className="relative w-10 h-10 object-cover mt-[-52px]"
              alt=""
              src="/linkedin-logo-1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[4182px] left-[276px] w-[489.27px] flex flex-col items-center justify-center">
        <div className="self-stretch flex flex-col items-center justify-center">
          <div className="self-stretch relative h-[671px] hover:cursor-pointer">
            <div className="absolute h-[95.08%] w-[93.81%] top-[4.92%] right-[11.7%] bottom-[0%] left-[-5.52%] rounded-19xl bg-white shadow-[0px_4px_100px_5px_rgba(0,_0,_0,_0.25)] hover:bg-maroon-100 hover:cursor-pointer" />
            <img
              className="absolute h-[80.62%] w-[83.24%] top-[0%] right-[0%] bottom-[19.38%] left-[16.76%] rounded-8xl max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/arafat-bhai2@2x.png"
            />
            <b className="absolute h-[3.43%] w-[71.74%] top-[83.76%] left-[0.61%] inline-block hover:text-white">
              Shakil Mosharrof
            </b>
            <div className="absolute h-[3.43%] w-[71.74%] top-[90.31%] left-[1.84%] text-5xl font-light inline-block hover:text-white">
              Software Team Leader
            </div>
            <div className="absolute top-[114px] left-[3px] w-[60px] h-[60px] flex flex-col items-center justify-end">
              <div className="relative rounded-[50%] bg-white w-[60px] h-[60px]" />
              <img
                className="relative w-[35px] h-[38px] object-cover mt-[-49px]"
                alt=""
                src="/fb-logo-1@2x.png"
              />
            </div>
            <div className="absolute top-[302px] left-[3px] w-[60px] h-[60px] flex flex-col items-center justify-end">
              <div className="relative rounded-[50%] bg-white w-[60px] h-[60px]" />
              <img
                className="relative w-10 h-10 object-cover mt-[-50px]"
                alt=""
                src="/insta-logo-1@2x.png"
              />
            </div>
            <div className="absolute top-[208px] left-[-1px] w-[60px] h-[60px] flex flex-col items-center justify-end">
              <div className="relative rounded-[50%] bg-white w-[60px] h-[60px]" />
              <img
                className="relative w-10 h-10 object-cover mt-[-49px]"
                alt=""
                src="/twitter-logo-1@2x.png"
              />
            </div>
            <div className="absolute top-[396px] left-[1px] w-[60px] h-[60px] flex flex-col items-center justify-end">
              <div className="relative rounded-[50%] bg-white w-[60px] h-[60px]" />
              <img
                className="relative w-10 h-10 object-cover mt-[-52px]"
                alt=""
                src="/linkedin-logo-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[4182px] left-[969px] w-[489.27px] flex flex-col items-center justify-center">
        <div className="self-stretch flex flex-col items-center justify-center">
          <div className="self-stretch relative h-[671px] hover:cursor-pointer">
            <div className="absolute h-[95.08%] w-[93.81%] top-[4.92%] right-[11.7%] bottom-[0%] left-[-5.52%] rounded-19xl bg-white shadow-[0px_4px_100px_5px_rgba(0,_0,_0,_0.25)] hover:bg-maroon-100 hover:cursor-pointer" />
            <img
              className="absolute h-[80.62%] w-[83.24%] top-[0%] right-[0%] bottom-[19.38%] left-[16.76%] rounded-8xl max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/arafat-bhai3@2x.png"
            />
            <b className="absolute h-[3.43%] w-[71.74%] top-[83.76%] left-[0.61%] inline-block hover:text-white">
              M N Alam Sowmik
            </b>
            <div className="absolute h-[3.43%] w-[71.74%] top-[90.31%] left-[1.84%] text-5xl font-light inline-block hover:text-white">
              Management Team Leader
            </div>
            <div className="absolute top-[114px] left-[3px] w-[60px] h-[60px] flex flex-col items-center justify-end">
              <div className="relative rounded-[50%] bg-white w-[60px] h-[60px]" />
              <img
                className="relative w-[35px] h-[38px] object-cover mt-[-49px]"
                alt=""
                src="/fb-logo-1@2x.png"
              />
            </div>
            <div className="absolute top-[302px] left-[3px] w-[60px] h-[60px] flex flex-col items-center justify-end">
              <div className="relative rounded-[50%] bg-white w-[60px] h-[60px]" />
              <img
                className="relative w-10 h-10 object-cover mt-[-50px]"
                alt=""
                src="/insta-logo-1@2x.png"
              />
            </div>
            <div className="absolute top-[208px] left-[-1px] w-[60px] h-[60px] flex flex-col items-center justify-end">
              <div className="relative rounded-[50%] bg-white w-[60px] h-[60px]" />
              <img
                className="relative w-10 h-10 object-cover mt-[-49px]"
                alt=""
                src="/twitter-logo-1@2x.png"
              />
            </div>
            <div className="absolute top-[396px] left-[1px] w-[60px] h-[60px] flex flex-col items-center justify-end">
              <div className="relative rounded-[50%] bg-white w-[60px] h-[60px]" />
              <img
                className="relative w-10 h-10 object-cover mt-[-52px]"
                alt=""
                src="/linkedin-logo-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-[2468px] left-[615px] w-[489.27px] flex flex-col items-center justify-center hover:bg-white">
        <div className="self-stretch relative h-[671px] hover:cursor-pointer">
          <div className="absolute h-[95.08%] w-[93.81%] top-[4.92%] right-[11.7%] bottom-[0%] left-[-5.52%] rounded-19xl bg-white shadow-[0px_4px_100px_5px_rgba(0,_0,_0,_0.25)] hover:bg-maroon-100 hover:cursor-pointer" />
          <img
            className="absolute h-[80.62%] w-[83.24%] top-[0%] right-[0%] bottom-[19.38%] left-[16.76%] rounded-8xl max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/arafat-bhai4@2x.png"
          />
          <b className="absolute h-[3.43%] w-[71.74%] top-[83.76%] left-[0.61%] inline-block hover:text-white">
            Rashid Ul Islam
          </b>
          <div className="absolute h-[3.43%] w-[71.74%] top-[90.31%] left-[1.84%] text-5xl font-light inline-block hover:text-white">
            Team Leader
          </div>
          <div className="absolute top-[114px] left-[3px] w-[60px] h-[60px] flex flex-col items-center justify-end">
            <div className="relative rounded-[50%] bg-white w-[60px] h-[60px]" />
            <img
              className="relative w-[35px] h-[38px] object-cover mt-[-49px]"
              alt=""
              src="/fb-logo-1@2x.png"
            />
          </div>
          <div className="absolute top-[302px] left-[3px] w-[60px] h-[60px] flex flex-col items-center justify-end">
            <div className="relative rounded-[50%] bg-white w-[60px] h-[60px]" />
            <img
              className="relative w-10 h-10 object-cover mt-[-50px]"
              alt=""
              src="/insta-logo-1@2x.png"
            />
          </div>
          <div className="absolute top-[208px] left-[-1px] w-[60px] h-[60px] flex flex-col items-center justify-end">
            <div className="relative rounded-[50%] bg-white w-[60px] h-[60px]" />
            <img
              className="relative w-10 h-10 object-cover mt-[-49px]"
              alt=""
              src="/twitter-logo-1@2x.png"
            />
          </div>
          <div className="absolute top-[396px] left-[1px] w-[60px] h-[60px] flex flex-col items-center justify-end">
            <div className="relative rounded-[50%] bg-white w-[60px] h-[60px]" />
            <img
              className="relative w-10 h-10 object-cover mt-[-52px]"
              alt=""
              src="/linkedin-logo-1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[5079px] left-[244px] w-[489.27px] flex flex-col items-center justify-center">
        <div className="self-stretch relative h-[671px] hover:cursor-pointer">
          <div className="absolute h-[95.08%] w-[93.81%] top-[4.92%] right-[11.7%] bottom-[0%] left-[-5.52%] rounded-19xl bg-white shadow-[0px_4px_100px_5px_rgba(0,_0,_0,_0.25)] hover:bg-maroon-100 hover:cursor-pointer" />
          <img
            className="absolute h-[80.62%] w-[83.24%] top-[0%] right-[0%] bottom-[19.38%] left-[16.76%] rounded-8xl max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/arafat-bhai5@2x.png"
          />
          <b className="absolute h-[3.43%] w-[71.74%] top-[83.76%] left-[0.61%] inline-block hover:text-white">
            Ridwanul Islam Antu
          </b>
          <div className="absolute h-[3.43%] w-[71.74%] top-[90.31%] left-[1.84%] text-5xl font-light inline-block hover:text-white">
            Mechanical Team Leader
          </div>
          <div className="absolute top-[114px] left-[3px] w-[60px] h-[60px] flex flex-col items-center justify-end">
            <div className="relative rounded-[50%] bg-white w-[60px] h-[60px]" />
            <img
              className="relative w-[35px] h-[38px] object-cover mt-[-49px]"
              alt=""
              src="/fb-logo-1@2x.png"
            />
          </div>
          <div className="absolute top-[302px] left-[3px] w-[60px] h-[60px] flex flex-col items-center justify-end">
            <div className="relative rounded-[50%] bg-white w-[60px] h-[60px]" />
            <img
              className="relative w-10 h-10 object-cover mt-[-50px]"
              alt=""
              src="/insta-logo-1@2x.png"
            />
          </div>
          <div className="absolute top-[208px] left-[-1px] w-[60px] h-[60px] flex flex-col items-center justify-end">
            <div className="relative rounded-[50%] bg-white w-[60px] h-[60px]" />
            <img
              className="relative w-10 h-10 object-cover mt-[-49px]"
              alt=""
              src="/twitter-logo-1@2x.png"
            />
          </div>
          <div className="absolute top-[396px] left-[1px] w-[60px] h-[60px] flex flex-col items-center justify-end">
            <div className="relative rounded-[50%] bg-white w-[60px] h-[60px]" />
            <img
              className="relative w-10 h-10 object-cover mt-[-52px]"
              alt=""
              src="/linkedin-logo-1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[7112px] left-[1px] w-[1700px] flex flex-col items-start justify-start text-5xl text-[inherit]">
        <div className="self-stretch relative h-[346px]">
          <img
            className="absolute top-[73px] left-[0px] w-[387px] h-[273px] object-cover"
            alt=""
            src="/logo_on_black@2x.png"
          />
          <div className="absolute top-[0px] left-[383px] w-[1273px] h-[331px]">
            <div className="absolute top-[14px] left-[0px] font-semibold flex items-center w-[567px] h-[294px]">
              <span className="[line-break:anywhere] w-full">
                Email:
                <span className="[text-decoration:underline]">{` `}</span>
                <a
                  className="text-[inherit]"
                  href="mailto:mars.rover.mist@gmail.com"
                  target="_blank"
                >
                  <span className="[text-decoration:underline]">
                    mars.rover.mist@gmail.com
                  </span>
                </a>
              </span>
            </div>
            <div className="absolute top-[191px] left-[0px] font-semibold flex items-center w-[567px] h-[66px]">
              <span className="[line-break:anywhere] w-full">
                <p className="m-0">
                  <a
                    className="text-[inherit]"
                    href="mailto:mars.rover.mist@gmail.com"
                    target="_blank"
                  >
                    <span className="[text-decoration:underline]">&nbsp;</span>
                  </a>
                </p>
                <p className="m-0">Contact No: +8801700808277</p>
              </span>
            </div>
            <div className="absolute top-[212px] left-[0px] font-semibold text-white flex items-center w-[661px] h-[118px]">
              <span className="[line-break:anywhere] w-full">
                <p className="m-0">&nbsp;</p>
                <p className="m-0">Team Leader: +8801969844062 </p>
              </span>
            </div>
            <div className="absolute top-[0px] left-[474px] font-semibold text-white flex items-center w-[707px] h-[294px]">
              <span className="[line-break:anywhere] w-full">
                <p className="m-0">&nbsp;</p>
                <p className="m-0">Academic Consultant: +8801710301593 </p>
              </span>
            </div>
            <div className="absolute top-[182px] left-[474px] font-semibold flex items-center w-[753px]">
              <span className="[line-break:anywhere] w-full">
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  {`Facebook Page: `}
                  <a
                    className="text-[inherit]"
                    href="https://www.facebook.com/mongolbarota.mist"
                    target="_blank"
                  >
                    <span className="[text-decoration:underline]">
                      https://www.facebook.com/mongolbarota.mist
                    </span>
                  </a>
                </p>
              </span>
            </div>
            <div className="absolute top-[239px] left-[473px] font-semibold flex items-center w-[800px] h-[92px]">
              <span className="[line-break:anywhere] w-full">
                <p className="m-0">
                  <a
                    className="text-[inherit]"
                    href="https://www.facebook.com/mongolbarota.mist"
                    target="_blank"
                  >
                    <span className="[text-decoration:underline]">&nbsp;</span>
                  </a>
                </p>
                <p className="m-0">
                  {`LinkedIn: `}
                  <a
                    className="text-[inherit]"
                    href="https://www.linkedin.com/company/mist-mongol-barota"
                    target="_blank"
                  >
                    <span className="[text-decoration:underline]">
                      https://www.linkedin.com/company/mist-mongol-barota
                    </span>
                  </a>
                </p>
              </span>
            </div>
          </div>
        </div>
        <div className="self-stretch relative bg-darkslategray h-[378px] mt-[-309px]" />
      </div>
      <img
        className="absolute top-[6136px] left-[0px] w-[1685px] h-[936px] object-cover"
        alt=""
        src="/mmrs_history@2x.png"
      />
      <div
        className="absolute top-[7085px] left-[682px] bg-white w-[386px] h-[38px]"
        data-scroll-to="rectangle2"
      />
      <div className="absolute top-[3300px] left-[259px] w-[489.27px] flex flex-col items-center justify-center">
        <div className="self-stretch relative h-[671px] hover:cursor-pointer">
          <div className="absolute h-[95.08%] w-[93.81%] top-[4.92%] right-[11.7%] bottom-[0%] left-[-5.52%] rounded-19xl bg-white shadow-[0px_4px_100px_5px_rgba(0,_0,_0,_0.25)] hover:bg-maroon-100 hover:cursor-pointer" />
          <img
            className="absolute h-[80.62%] w-[83.24%] top-[0%] right-[0%] bottom-[19.38%] left-[16.76%] rounded-8xl max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/arafat-bhai@2x.png"
          />
          <b className="absolute h-[3.43%] w-[71.74%] top-[83.76%] left-[0.61%] inline-block hover:text-white">
            Jawadur Rahman
          </b>
          <div className="absolute h-[3.43%] w-[71.74%] top-[90.31%] left-[1.84%] text-5xl font-light inline-block hover:text-white">
            Electrical Team Leader
          </div>
          <div className="absolute top-[114px] left-[3px] w-[60px] h-[60px] flex flex-col items-center justify-end">
            <div className="relative rounded-[50%] bg-white w-[60px] h-[60px]" />
            <img
              className="relative w-[35px] h-[38px] object-cover mt-[-49px]"
              alt=""
              src="/fb-logo-1@2x.png"
            />
          </div>
          <div className="absolute top-[302px] left-[3px] w-[60px] h-[60px] flex flex-col items-center justify-end">
            <div className="relative rounded-[50%] bg-white w-[60px] h-[60px]" />
            <img
              className="relative w-10 h-10 object-cover mt-[-50px]"
              alt=""
              src="/insta-logo-1@2x.png"
            />
          </div>
          <div className="absolute top-[208px] left-[-1px] w-[60px] h-[60px] flex flex-col items-center justify-end">
            <div className="relative rounded-[50%] bg-white w-[60px] h-[60px]" />
            <img
              className="relative w-10 h-10 object-cover mt-[-49px]"
              alt=""
              src="/twitter-logo-1@2x.png"
            />
          </div>
          <div className="absolute top-[396px] left-[1px] w-[60px] h-[60px] flex flex-col items-center justify-end">
            <div className="relative rounded-[50%] bg-white w-[60px] h-[60px]" />
            <img
              className="relative w-10 h-10 object-cover mt-[-52px]"
              alt=""
              src="/linkedin-logo-1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-[3300px] left-[975px] w-[489.27px] h-[671px] hover:cursor-pointer">
        <div className="absolute h-[95.08%] w-[93.81%] top-[4.92%] right-[11.7%] bottom-[0%] left-[-5.52%] rounded-19xl bg-white shadow-[0px_4px_100px_5px_rgba(0,_0,_0,_0.25)] hover:bg-maroon-100 hover:cursor-pointer" />
        <img
          className="absolute h-[80.62%] w-[83.24%] top-[0%] right-[0%] bottom-[19.38%] left-[16.76%] rounded-8xl max-w-full overflow-hidden max-h-full object-cover"
          alt=""
          src="/arafat-bhai6@2x.png"
        />
        <b className="absolute h-[3.43%] w-[71.74%] top-[83.76%] left-[0.61%] inline-block hover:text-white">
          Sheikh Easin Arafat
        </b>
        <div className="absolute h-[3.43%] w-[71.74%] top-[90.31%] left-[1.84%] text-5xl font-light inline-block hover:text-white">
          Communication Team Leader
        </div>
        <div className="absolute top-[114px] left-[3px] w-[60px] h-[60px] flex flex-col items-center justify-end">
          <div className="relative rounded-[50%] bg-white w-[60px] h-[60px]" />
          <img
            className="relative w-[35px] h-[38px] object-cover mt-[-49px]"
            alt=""
            src="/fb-logo-1@2x.png"
          />
        </div>
        <div className="absolute top-[302px] left-[3px] w-[60px] h-[60px] flex flex-col items-center justify-end">
          <div className="relative rounded-[50%] bg-white w-[60px] h-[60px]" />
          <img
            className="relative w-10 h-10 object-cover mt-[-50px]"
            alt=""
            src="/insta-logo-1@2x.png"
          />
        </div>
        <div className="absolute top-[208px] left-[-1px] w-[60px] h-[60px] flex flex-col items-center justify-end">
          <div className="relative rounded-[50%] bg-white w-[60px] h-[60px]" />
          <img
            className="relative w-10 h-10 object-cover mt-[-49px]"
            alt=""
            src="/twitter-logo-1@2x.png"
          />
        </div>
        <div className="absolute top-[396px] left-[1px] w-[60px] h-[60px] flex flex-col items-center justify-end">
          <div className="relative rounded-[50%] bg-white w-[60px] h-[60px]" />
          <img
            className="relative w-10 h-10 object-cover mt-[-52px]"
            alt=""
            src="/linkedin-logo-1@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
