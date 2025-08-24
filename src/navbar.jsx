import Button from '@mui/material/Button';
import Typography from "@mui/material/Typography";
import "./navbar.css";
import Logo from "./assets/servicefinder-logo.jpg";
function Navbar()
{
    let color={color:"#005ce6"}
    return(
        <header className="navbar">
            <div className="logo-container">
                <img src={Logo} alt="ServiceFinder Logo" className='logo-img' />
                  {/* <h1 className='logo'>ServiceFinder</h1>  */}
                  <Typography variant="h6" sx={{ m: 0, p: 0, ml: 1 }} className='logo'>
                       ServiceFinder
                    </Typography>
            </div>
           <div className='nav-btn'>
             <Button variant="contained"sx={{ backgroundColor: "#ffffff", color: "#000000", "&:hover": { backgroundColor: "#255eb4ff" } }}>Login</Button>
            <Button variant="contained"  sx={{ backgroundColor: "#000a1f", color: "#fff", "&:hover": { backgroundColor: "#a90808ff" } }}>Sign UP</Button>
           </div>
        </header>
    );
}
export default Navbar;