import "./HeroSections.css";
function HeroSection()
{
    return(
           <div className="herosection">
            <h1>Find Trusted Local Service Near By You</h1>
            <p>Plumbers, Electricians, Tutors & More - Verified & Reted</p>
            <div className="search-bar">
                     <input type="text" placeholder="Search for a service e.g. Plum " className="search-input"/>
            <input type="text" placeholder="Enter Location or Pincode" className="search-input"/>
            <button className="search-btn">Search</button>
            </div>
           </div>
    )
}
export default HeroSection;