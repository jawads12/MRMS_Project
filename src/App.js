import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import StudLogin from "./pages/StudLogin";
import RegistrationPage from "./pages/RegistrationPage";
import SignInPage from "./pages/SignInPage";
import { useEffect } from "react";
import StudProfileupdate from "./pages/StudProfileupdate";
import TeamLeadProfile from "./pages/TeamLeadProfile";
import RequestPage from "./pages/RequestPage";
import ViewMemberPage from "./pages/ViewMemberPage";
import FundManagementPage1 from "./pages/FundManagementPage1";
import ViewComponentPage from "./pages/ViewComponentPage";
import FundManagementPageURC from "./pages/FundManagementPageURC";
import FundManagementPageARC from "./pages/FundManagementPageARC";
import FundManagementPageERC from "./pages/FundManagementPageERC";
import FundManagementPageIRDC from "./pages/FundManagementPageIRDC";
import AssignTasks from "./pages/AssignTasks";
import AnnouncementPageCompetition from "./pages/AnnouncementPageCompetition";
import AnnouncementPageOthers from "./pages/AnnouncementPageOthers";
import TeamLeaderProfileUpdate from "./pages/TeamLeaderProfileUpdate";
import TeamMemberProfileUpdate from "./pages/TeamMemberProfileUpdate";
import TeamMemberAnnouncements from "./pages/TeamMemberAnnouncements";
import TeamMemberTasks from "./pages/TeamMemberTasks";
import TeamMemberProfile from "./pages/TeamMemberProfile";
import AddExpenditurePopup1 from "./components/AddExpenditurePopup1";
import AddExpenditurePopup11 from "./components/AddExpenditurePopup11";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/stud-login":
        title = "";
        metaDescription = "";
        break;
      case "/registration-page":
        title = "";
        metaDescription = "";
        break;
      case "/signin-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/stud-login" element={<StudLogin />} />
      <Route path="/registration-page" element={<RegistrationPage />} />
      <Route path="/signin-page" element={<SignInPage />} />
      <Route path="/edit-profile" element={<StudProfileupdate />} />
      <Route path="/team-lead-profile" element={<TeamLeadProfile />} />
      <Route path="/request-page" element={<RequestPage />} />
      <Route path="/view-member-page" element={<ViewMemberPage />} />
      
      <Route path="/fund-management-page" element={<FundManagementPageURC  />} />
      <Route path="/view-component-page" element={<ViewComponentPage />} />
      <Route
        path="/fund-management-page-urc/:comp"
        element={<FundManagementPageURC />}
      />
      <Route
        path="/fund-management-page-arc/:comp"
        element={<FundManagementPageARC />}
      />
      <Route
        path="/fund-management-page-erc"
        element={<FundManagementPageERC />}
      />
      <Route
        path="/fund-management-page-irdc"
        element={<FundManagementPageIRDC />}
      />
      <Route path="/assign-tasks" element={<AssignTasks />} />
      <Route
        path="/announcement-page-competition"
        element={<AnnouncementPageCompetition />}
      />
      <Route
        path="/announcement-page-others"
        element={<AnnouncementPageOthers />}
      />
      <Route
        path="/team-leader-profile-update/:studentId"
        element={<TeamLeaderProfileUpdate />}
      />
       <Route
        path="/team-member-profile-update/:studentId"
        element={<TeamLeaderProfileUpdate />}
      />
      <Route
        path="/team-member-announce-page"
        element={<TeamMemberAnnouncements />}
      />
      <Route path="/team-member-view-assigned-task-page" element={<TeamMemberTasks />} />

      <Route path="/team-member-profile" element={<TeamMemberProfile />} />
      <Route exact path="/add-expenditure-component-popup" component={<AddExpenditurePopup1  />} />
       <Route exact path="/add-expenditure-administration-popup" component={<AddExpenditurePopup11 />} />

    </Routes>
  );
}
export default App;
