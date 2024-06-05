import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-base-200 text-base-content ">
        <div className="footer  text-base-content container mx-auto">
          <Link to={"/"} className=" ">
            <img className="w-[90px]" src="logo.png" alt="" />
          </Link>
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <form>
            <h6 className="footer-title">Newsletter</h6>
            <fieldset className="form-control  md:w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="join flex-col md:flex-row rounded w-full">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item "
                />
                <button className="btn btn-primary join-item">Subscribe</button>
              </div>
            </fieldset>
          </form>
        </div>
      </footer>
    </>
  );
};

export default Footer;
