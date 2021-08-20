import styles from "./styles.module.css";

export const CadidateForm = () => (
  <div className={styles.forms}>
    <form name="contact" method="POST" data-netlify="true">
      <p className={styles.name}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" />
      </p>
      <p>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" />
      </p>
      <p>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message"></textarea>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  </div>
);
