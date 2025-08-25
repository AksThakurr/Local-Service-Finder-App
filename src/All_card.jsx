import { FaWrench, FaBolt, FaCar, FaBroom, FaChalkboardTeacher } from "react-icons/fa";
import "./All_card.css";
import Card from "./Crad.jsx";
function Allcard()
{
    console.log("Item Component Rendered");
    return(
        <div className="allcard">
             <h3>Popular Categories </h3>
             <div className="cards-container">
                  <Card title="Plumber" Icon={() => <FaWrench size={40} color="#ff6347" />}/>
                   <Card title="Electrician "Icon={() => <FaBolt size={40} color="#f1c40f" />}/>
                    <Card title="Mechanic" Icon={() => <FaCar size={40} color="#3498db" />} />
                    <Card title="Cleaner" Icon={() => <FaBroom size={40} color="#2ecc71" />} />
                    <Card title="Tutor" Icon={() => <FaChalkboardTeacher size={40} color="#9b59b6" />} />
             </div>
        </div>
       
    )
}
export default Allcard;