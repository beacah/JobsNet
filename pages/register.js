import { CadidateForm } from "../pages/components/form-cadidate/form";
import Link from "next/link";

function Register() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-expand-sm  navbar-light naveCustom">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/register">
                <a className="nav-link">Cadastro</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <CadidateForm></CadidateForm>
      </div>
    </>
  );
}

export default Register;
