import "./styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__text">
        <p>Copyright &copy; 2023 by JoseTo21 | All Rights Reserved</p>
      </div>
      <div className="icons__footer">
        <a href="https://www.linkedin.com/in/jose-toro-vargas-157315266/">
          <i className="bx bxl-linkedin-square"></i>
        </a>
        <a href="https://github.com/JoseTo21">
          <i className="bx bxl-github"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
