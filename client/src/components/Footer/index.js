import styles from "./footer.module.css";

const Footer = () => {
  return <footer className={styles.footer}>
    <div>
      <h1 className={styles.thanks}>
        <a href="https://github.com/Centauri-OS/Stellar">GitHub</a></h1>
    </div>
  </footer>;
};

export default Footer;
