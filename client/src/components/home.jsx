import React, {useState} from "react";
import { BsHandbagFill } from "react-icons/bs/index"
import appleLogo from "/appleLogo.png"
import googleLogo from "/googleLogo.png"

function Home() {
    const [isHidden, setIsHidden] = useState(false);

  const handleHover = () => {
    setIsHidden(true);
  };

  const handleLeave = () => {
    setIsHidden(false);
  };

  return (
    <div className="overflow-hidden">
      <nav className="aside1">
        <div className="about asideBlocks">About</div>
        <div className="logo flex flex-row items-center space-x-1"><BsHandbagFill/><div>MyPROD</div></div>
        <div className="privacy asideBlocks">Privacy Policy</div>
      </nav>
      <div
        className=' flex flex-row items-center space-x-1 text-[#ee82ee] text-[6em] fixed top-1/2 left-1/2 p-10 z-[1000]'
        style={{ transform: "translate(-50%, -50%)"}}
      ><BsHandbagFill/></div>

      <div className="flex flex-row w-[100vw]"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      >
        <section className="section1">
          <div className="section1Box sectionBox">
            <div className="section1Descr flex flex-col space-y-2 mb-12">
              <h1 className="section1Title">BUY AND SELL ANY PROD TODAY</h1>
              <h3 className="section1Text mb-12">Join MyProd Now</h3>
            </div>

            <button className="buttonProviders">
              <img
                className="buttonImage"
                src={googleLogo}
                alt="google logo"
              />
              <span>Sign Up with Google</span>
            </button>
            <button className="buttonProviders">
              <img
                className="buttonImage"
                src={appleLogo}
                alt="apple logo"
              />
              <span>Sign Up with Apple</span>
            </button>

            <h3>or</h3>

            <button className="withEP withEP1">
              Sign Up with Email and Password
            </button>
          </div>

          <div className="signUpEpBox">
            <h1 className="signUpEpBoxTitle">Sign In To An Existing Account</h1>
            <input
              type="email"
              className="email"
              placeholder="enter your email"
            />
            <input
              type="password"
              className="password"
              placeholder="enter your password"
            />
            <input type="checkbox" id="showPass" name="showPass" value="Bike" />
            <label htmlFor="showPass"> Show Password</label>

            <button className="signIn">Sign In</button>
            <button className="backSignUp">Back</button>
          </div>
        </section>

        <section className="section2">
          <div className="section2Box sectionBox">
            <div className="section1Descr">
              <h3 className="section1Text">Already have an account?</h3>
            </div>

            <button className="buttonProviders">Sign In</button>

            <h3>or</h3>

            <button className="withEP">Visit MyProd</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
