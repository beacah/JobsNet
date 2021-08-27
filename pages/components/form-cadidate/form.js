import styles from "./styles.module.css";


export const CadidateForm = () => (
  <div class="row" className={styles.container}>

    <p className={styles.titulo1}>Ficha de cadastro:</p>
    <div class="row" className={styles.forms}>
      <p>Dados Pessoais:</p>
      <div class="col-6"className={styles.name}>
        <label htmlFor="name">Nome:</label>
        <input type="text" class="form-control" placeholder="Digite o seu nome" id="name"></input>
      </div>
      <div class="col-6" className={styles.email}>
        <label htmlFor="email">Email:</label>
        <input type="email" class="form-control" id="email" placeholder="Digite o seu e-mail" name="email"></input>
      </div>
      <div class="col-6" className={styles.telefone}>
        <label f="telefone">Telefone:</label>
        <input type="telefone" class="form-control" id="telefone" placeholder="Digite o seu telefone" name="telefone"></input>
      </div>
      <div class="col-6" className={styles.nascimento}>
        <label f="telefone">Data de nascimento:</label>
        <input type="aniversario" class="form-control" id="aniversario" placeholder="DD/MM/AAAA" name="aniversario"></input>
      </div>
      <div class="col-6" className={styles.sexo}>
        <label f="cpf">Gênero:</label>
        <input type="sexo" class="form-control" id="sexo" placeholder="Digite seu gênero" name="sexo"></input>
      </div>
      <div class="col-6" className={styles.cpf}>
        <label f="cpf">CPF:</label>
        <input type="cpf" class="form-control" id="cpf" placeholder="Digite o seu CPF" name="cpf" required></input>
    </div>
      </div>

  <div class="form-row" className={styles.forms2}>

  <div class="form-group">
    <label for="inputAddress">Endereço:</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Rua dos Bobos, nº 0"></input>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Endereço 2:</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartamento, hotel, casa, etc."></input>
  </div>
  <div class="form-row">
    <div class="form-group col-6">
      <label for="inputCity">Cidade:</label>
      <input type="text" class="form-control" id="inputCity"></input>
    </div>
    <div class="form-group col-4">
      <label for="inputEstado">Estado</label>
      <select id="inputEstado" class="form-control">
        <option selected>Escolher...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-2">
      <label for="inputCEP">CEP:</label>
      <input type="text" class="form-control" id="inputCEP"></input>
    </div>
  </div>
  </div>

  <div class="row" className={styles.forms3}>
  <div class="form-group">
    <label for="inputAddress">Cargo desejado:</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Digite seu cargo dos sohos"></input>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Escolaridade:</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Digite seu nivel de escolaridade"></input>
  </div>
  </div>

  <div>
  <button type="button" class="btn btn-outline-dark" classname={styles.botao}>Enviar</button>
  </div>

  </div>

      
);
