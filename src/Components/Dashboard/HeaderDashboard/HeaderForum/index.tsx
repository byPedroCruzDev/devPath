import { Header } from "./style";
import { Link, useNavigate } from "react-router-dom";
import { BsBoxArrowRight } from "react-icons/bs";
import { setLocale } from "yup";

const HeaderDashboardForum = () => {
  const navigate = useNavigate();
  const clearApplications = () => {
    localStorage.clear();
  };

  return (
    <>
      <Header>
        <div className="containerHeader">
          <h1>DevPath</h1>
          <div>
            <Link className="backpage" to={"/dashboard/selectTask"}>
              Voltar
            </Link>
            <Link to="/">
              <BsBoxArrowRight onClick={clearApplications} />
            </Link>
          </div>
        </div>
      </Header>
    </>
  );
};

export default HeaderDashboardForum;
