import { Link } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import MenuItem from "antd/lib/menu/MenuItem";

const services = [
  {
    link: "/services/business-analysis-services",
    label: "Business Analysis",
  },
  {
    link: "/services/ui-ux-design",
    label: "UI/UX Desing",
  },
  {
    link: "/services/web-frontend-and-backend-development",
    label: "Frontend & Backend Development",
  },
  {
    link: "/services/quality-assurance",
    label: "QA and Testing",
  },
  {
    link: "/services/it-staff-augmentation",
    label: "IT Staff Augmentation",
  },
];
const expertise = [
  {
    link: "",
    label: (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "50px",
          padding: "20px",
        }}
      >
        <div>
          <ul style={{ display: "grid", gap: "20px", fontSize: "16px" }}>
            <li style={{ fontSize: "14px", color: "gray", cursor: "auto" }}>
              EXPERTISE
            </li>
            <Link to="/solutions/enterprise-software-development" style={{color:"#000"}}>
              <li>Enterprise Apps</li>
            </Link>
            <Link to="/solutions/startups-development" style={{color:"#000"}}>
              <li>Startups Apps</li>
            </Link>
            <Link to="/solutions/internet-of-things-software-development" style={{color:"#000"}}>
              <li>Internet of Things</li>
            </Link>
            <Link to="/solutions/mobile-app-development" style={{color:"#000"}}>
              <li>Mobile Apps</li>
            </Link>
            <Link to="/solutions/saas-development" style={{color:"#000"}}>
              <li>SaaS Development</li>
            </Link>
          </ul>
        </div>
        <div>
          <ul style={{ display: "grid", gap: "20px", fontSize: "16px" }}>
            <li style={{ fontSize: "14px", color: "gray", cursor: "auto" }}>
              INDUSTRIES
            </li>
            <Link to="/industries/advertising-and-marketing-automation-development" style={{color:"#000"}}>
              <li>AdTech & Marketing</li>
            </Link>
            <Link to="/industries/elearning-software-development" style={{color:"#000"}}>
              <li>EdTech & eLearning</li>
            </Link>
            <Link to="/industries/ecommerce-development" style={{color:"#000"}}>
              <li>eCommerce</li>
            </Link>
            <Link to="/industries/logistics-software-development" style={{color:"#000"}}>
              <li>Logistics & Transportation</li>
            </Link>
            <Link to="/industries/blockchain" style={{color:"#000"}}>
              <li>Blockchain</li>
            </Link>
          </ul>
        </div>
      </div>
    ),
  },
];
const clients = [
  {
    link: "/portfolio",
    label: "Case Studies",
  },
  {
    link: "/testimonials",
    label: "Testimonials",
  },
];
const about = [
  {
    link: "/about#team",
    label: "Team",
  },
  {
    link: "/engagement-models",
    label: "Engagement Models",
  },
  {
    link: "/agile-development-process",
    label: "Development Process",
  },
  {
    link: "/software-development-lifecycle",
    label: "Development Life Cycle",
  },
  {
    link: "/contacts",
    label: "Contacts",
  },
  {
    link: "/careers",
    label: "Careers",
  },
];
const insights = [
  {
    link: "/blog",
    label: "Blog",
  },
  {
    link: "/all-whitepapers",
    label: "Whitepapers",
  },
];

export const data = [
  {
    menu: (
      <Menu style={{ padding: "20px 0", marginTop: "10px" }}>
        {services.map((a) => (
          <MenuItem style={{ fontSize: "16px", padding: "10px 20px" }}>
            <Link to={a.link} style={{color:"#000"}}>{a.label}</Link>
          </MenuItem>
        ))}
      </Menu>
    ),
    title: "SERVICES",
    link: "/services",
    icon: <DownOutlined />,
  },
  {
    menu: <Menu items={[...expertise]} style={{ marginTop: "10px" }} />,
    title: "EXPERTISE & INDUSTRIES",
    link: "/app-development-company",
    icon: <DownOutlined />,
  },
  {
    menu: (
      <Menu style={{ padding: "20px 0", marginTop: "10px" }}>
        {clients.map((a) => (
          <MenuItem style={{ fontSize: "16px", padding: "10px 20px" }}>
            <Link to={a.link} style={{color:"#000"}}>{a.label}</Link>
          </MenuItem>
        ))}
      </Menu>
    ),
    title: "CLIENTS",
    link: "/portfolio",
    icon: <DownOutlined />,
  },
  {
    menu: (
      <Menu style={{ padding: "20px 0", marginTop: "10px" }}>
        {about.map((a) => (
          <MenuItem style={{ fontSize: "16px", padding: "10px 20px" }}>
            <Link to={a.link} style={{color:"#000"}}>{a.label}</Link>
          </MenuItem>
        ))}
      </Menu>
    ),
    title: "ABOUT US",
    link: "/about",
    icon: <DownOutlined />,
  },
  { menu: "", title: "CONTACTS", link: "/contacts" },
  {
    menu: (
      <Menu style={{ padding: "20px 0", marginTop: "10px" }}>
        {insights.map((a) => (
          <MenuItem style={{ fontSize: "16px", padding: "10px 20px" }}>
            <Link to={a.link} style={{color:"#000"}}>{a.label}</Link>
          </MenuItem>
        ))}
      </Menu>
    ),
    title: "INSIGHTS",
    link: "/insights",
    icon: <DownOutlined />,
  },
];


