import About from "./pages/About/About";
import EngagementModels from "./pages/About/EngagementModels/EngagementModels";
import CaseStudio from "./pages/Clients/CaseStudio/CaseStudio";
import Testimonial from "./pages/Clients/Testimonial/Testimonial";
import EnterpriseApps from "./pages/ExpertiseVsIndustries/Expertise/EnterpriseApps/EnterpriseApps";
import InternetOfThings from "./pages/ExpertiseVsIndustries/Expertise/InternetOfThings/InternetOfThings";
import MobileApps from "./pages/ExpertiseVsIndustries/Expertise/MobileApps/MobileApps";
import SaasDevelopment from "./pages/ExpertiseVsIndustries/Expertise/SaasDevelopment/SaasDevelopment";
import StartupsApps from "./pages/ExpertiseVsIndustries/Expertise/StartupsApps/StartupsApps";
import AddTechLearning from "./pages/ExpertiseVsIndustries/Industries/AddTechLearning/AddTechLearning";
import AddTechMarketing from "./pages/ExpertiseVsIndustries/Industries/AddTechMarketing/AddTechMarketing";
import Blockchain from "./pages/ExpertiseVsIndustries/Industries/Blockchain/Blockchain";
import Commerce from "./pages/ExpertiseVsIndustries/Industries/eCommerce/Commerce";
import LogisticsTrans from "./pages/ExpertiseVsIndustries/Industries/LogisticsTrans/LogisticsTrans";
import Home from "./pages/Home/Home";
import Blog from "./pages/Insights/Blog/Blog";
import WhitePapers from "./pages/Insights/WhitePapers/WhitePapers";
import BusinessAnalysis from "./pages/Services/BusinessAnalysis/BusinessAnalysis";
import FrontendDevelopment from "./pages/Services/FrontendDevelopment/FrontendDevelopment";
import ITStaff from "./pages/Services/ITStaff/ITStaff";
import Services from "./pages/Services/Services";
import TestingServices from "./pages/Services/TestingServices/TestingServices";
import UiUxDesign from "./pages/Services/UiUxDesign/UiUxDesign";

const routes = [
    { path: `/`, element: <Home /> },
    // ~~~~~~~~~~~~~ SERVICES ~~~~~~~~~~~~~
    { path: `/services`, element: <Services /> },
    { path: `/services/business-analysis-services`, element: <BusinessAnalysis /> },
    { path: `/services/ui-ux-design`, element: <UiUxDesign/> },
    { path: `/services/web-frontend-and-backend-development`, element: <FrontendDevelopment/>  },
    { path: `/services/quality-assurance`, element: <TestingServices/> },
    { path: `/services/it-staff-augmentation`, element: <ITStaff/>  },
    // ~~~~~~~~~~~~~ EXPERTISE ~~~~~~~~~~~~~
    { path: `/solutions/enterprise-software-development`, element: <EnterpriseApps/>  },
    { path: `/solutions/startups-development`, element: <StartupsApps/>  },
    { path: `/solutions/internet-of-things-software-development`, element: <InternetOfThings/>  },
    { path: `/solutions/mobile-app-development`, element: <MobileApps/>  },
    { path: `/solutions/saas-development`, element: <SaasDevelopment/>  },
    // ~~~~~~~~~~~~~ INDUSTRES ~~~~~~~~~~~~~
    { path: `/industries/advertising-and-marketing-automation-development`, element: <AddTechMarketing/>},
    { path: `/industries/elearning-software-development`, element: <AddTechLearning/>},
    { path: `/industries/ecommerce-development`, element: <Commerce/>},
    { path: `/industries/logistics-software-development`, element: <LogisticsTrans/>},
    { path: `/industries/blockchain`, element: <Blockchain/>},
    // ~~~~~~~~~~~~~ CLIENTS ~~~~~~~~~~~~~
    { path: `/portfolio`, element: <CaseStudio/>},
    { path: `/testimonials`, element: <Testimonial/>},
    // ~~~~~~~~~~~~~ ABOUTE US ~~~~~~~~~~~~~
    { path: `/about`, element: <About /> },
    { path: `/engagement-models`, element: <EngagementModels/>  },
    { path: `/agile-development-process`, element: "COMPONENT NOMI"  },
    { path: `/software-development-lifecycle`, element: "COMPONENT NOMI"  },
    { path: `/contacts`, element: "COMPONENT NOMI"},
    { path: `/careers`, element: "COMPONENT NOMI" },
    // ~~~~~~~~~~~~~ INSIGHTS ~~~~~~~~~~~~~
    { path: `/blog`, element: <Blog/> },
    { path: `/all-whitepapers`, element: <WhitePapers/> },
];
export default routes;