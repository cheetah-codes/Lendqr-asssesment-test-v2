import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import Useravatar from "../../assets/lendsqr-avatar.png";
import Logo from "../../assets/lendsqr.png";
import "./nav.scss";
import { faBell } from "@fortawesome/free-solid-svg-icons/faBell";

const MainNavbar = () => {
  const allowedProps = { attribute: "form-control" };
  const navigate = useNavigate();
  return (
    <>
      {/* <img
        onClick={() => {
          window.location.reload();
          navigate("/");
        }} alt="" src="" >
        <span></span>
      </img> */}
      <div className="nav-container">
        <div className="set1-container">
          {" "}
          <img
            src={Logo}
            alt="logo"
            onClick={() => navigate(0)}
            aria-placeholder="Search anything"
          />
        </div>

        <div className="set2-container">
          <div className="search"></div>
          <div className="input-wrapper">
            <input
              className="search-input"
              type="text"
              placeholder="Search for anything"
              {...allowedProps}
              spellCheck="false"
            />
          </div>
          <button>
            <FontAwesomeIcon
              icon={faSearch}
              size="xl"
              style={{ marginRight: "15px" }}
            />
          </button>
        </div>

        <div className="user-section">
          <span>Docs</span>
          <FontAwesomeIcon icon={faBell} />
          <img src={Useravatar} alt="" />
          <p>Adedeji</p>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </div>
    </>
  );
};

export default MainNavbar;

{
  /* <div className="search">
  <div className="form-control">
    <input type="text" placeholder="Search for anything" />
  </div>
  <button className="search-btn">
    <Image src={SearchIcon} alt="search" quality={100} />
  </button>
</div>; */
}
