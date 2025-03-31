import "./Navbar.css";

const Navbar = () => {

  return (
    <nav className="navbar">
        <div className="left-section">
            <div className="logo">
                <b><span style={{color: "#646cff"}}>smm</span></b>art
            </div>
        </div>

        <div className="middle-section">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Blog</a>
            <a href="">Merchantdise</a>
        </div>

        <div className="right-section">

        </div>
      
    </nav>
  );
};

export default Navbar;