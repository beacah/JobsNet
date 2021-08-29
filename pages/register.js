import Link from "next/link";
import styles from "./components/form-cadidate/styles.module.css";

export default function register() {
  const registerCadidate = async (event) => {
    event.preventDefault();

    console.log(event.target.document.value);

    const bodyForm = JSON.stringify({
      name: event.target.name.value,
      // fullName: "",
      intendedPosition: event.target.intendedPosition.value,
      bDay: event.target.bDay.value,
      // maritalStatus: event.target.maritalStatus.value,~
      gender: event.target.gender.value,
      address: {
        addr: event.target.addr.value,
        // neighborhood: event.target.neighborhood.value,
        zipCode: event.target.zipCode.value,
        // number: event.target.number.value,
        city: event.target.city.value,
        state: event.target.state.value,
        // country: event.target.country.value,
      },
      // cellPhone: event.target.cellPhone.value,
      phone: event.target.phone.value,
      document: event.target.document.value,
      email: event.target.email.value,
    });

    console.log(bodyForm);

    const res = await fetch("https://jobs-net-api.herokuapp.com/cadidate", {
      // mode: "no-cors",
      body: bodyForm,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      method: "POST",
    });

    const result = await res.json();
    // result.user => 'Ada Lovelace'
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-expand-sm  navbar-light naveCustom">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link href="/">
                <a className={`${styles.home2} nav-link`}>Home</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <div className={`${styles.containerForm}`}>
          <form className="form" onSubmit={registerCadidate}>
            <p className={styles.titulo1}>Ficha de cadastro:</p>
            <div className="row">
              <div className="col-3">
                <label htmlFor="name">Nome<font color="#ff0000">*</font>:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Digite o seu nome"
                  id="name"
                  name="name"
                  required
                ></input>
              </div>
              <div className="col-3">
                <label htmlFor="email">E-mail<font color="#ff0000">*</font>:</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Digite o seu e-mail"
                  name="email"
                  required
                ></input>
              </div>
              <div className="col-3">
                <label f="telefone">Telefone:</label>
                <input
                  type="telefone"
                  className="form-control"
                  id="phone"
                  placeholder="Digite o seu telefone"
                  name="phone"
                ></input>
              </div>
              <div className="col-3">
                <label f="telefone">Data de nascimento<font color="#ff0000">*</font>:</label>
                <input
                  type="date"
                  className="form-control"
                  id="bDay"
                  placeholder="DD/MM/AAAA"
                  name="bDay"
                  required
                ></input>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <label f="sexo">Gênero<font color="#ff0000">*</font>:</label>
                <input
                  type="sexo"
                  className="form-control"
                  id="gender"
                  placeholder="Digite seu gênero"
                  name="gender"
                  required
                ></input>
              </div>
              <div className="col-3">
                <label f="cpf">CPF<font color="#ff0000">*</font>:</label>
                <input
                  type="cpf"
                  className="form-control"
                  id="document"
                  placeholder="Digite o seu CPF"
                  name="document"
                  required
                ></input>
              </div>
              <div className="col-3">
                <label htmlFor="inputAddress">Cargo desejado<font color="#ff0000">*</font>:</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Digite seu cargo dos sonhos"
                  name="intendedPosition"
                  required
                ></input>
              </div>
              <div className="col-3">
                <label htmlFor="inputAddress2">Escolaridade:</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  placeholder="Digite seu nivel de escolaridade"
                ></input>
              </div>
            </div>
            <div className="row">
              <div className="col-8">
                <label htmlFor="inputAddress">Endereço<font color="#ff0000">*</font>:</label>
                <input
                  type="text"
                  className="form-control"
                  id="addr"
                  placeholder="Rua dos Bobos, nº 0"
                  name="addr"
                  required
                ></input>
              </div>
              <div className="col-4">
                <label htmlFor="inputAddress2">Complemento:</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress2"
                  placeholder="Apartamento, hotel, casa, etc."
                ></input>
              </div>
              <div className="row">
                <div className="col-3">
                  <label htmlFor="inputCity">Cidade<font color="#ff0000">*</font>:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="city"
                    name="city"
                    required
                  ></input>
                </div>
                <div className="col-3">
                  <label htmlFor="inputEstado">Estado<font color="#ff0000">*</font>:</label>
                  <select id="state" name="state" className="form-control">
                    <option selected>Escolher...</option>
                    <option>SP</option>
                    <option>RJ</option>
                    <input
                    required
                  ></input>
                  </select>
                </div>
                <div className="col-3">
                  <label htmlFor="inputCEP">CEP<font color="#ff0000">*</font>:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="zipCode"
                    name="zipCode"
                    required
                  ></input>
                </div>
                <div className="col-3">
                  <button type="submit" className={`${styles.botao} btn btn-dark mb-3`}>
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
