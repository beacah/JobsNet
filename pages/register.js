import { CadidateForm } from "../pages/components/form-cadidate/form";
import Link from 'next/link'

const Register = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar-expand-sm  navbar-light naveCustom">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link disable" href="/register">
              Cadastrar-se
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <CadidateForm></CadidateForm>
  </div>
);

export default Register;
