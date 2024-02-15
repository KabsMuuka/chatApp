export default function Footer() {
  return (
    <>
      <div className="div-footer">
        <footer>
          <p className="footerInfo">
            &copy; 2024 <br />
            Created By KabsMuuka.
            <a
              className="links"
              href="https://twitter.com/KabsMuuka"
              target="_blank"
            >
              <label>Contacts: </label>{" "}
              <img src="/twitter.png" width={30} alt="" />
            </a>
            <a
              className="links"
              href="https://www.linkedin.com/in/kabwali-muuka-7369a622a/"
              target="_blank"
            >
              <img src="/linkedin.png" width={30} alt="" />
            </a>
          </p>
        </footer>
      </div>
    </>
  );
}
