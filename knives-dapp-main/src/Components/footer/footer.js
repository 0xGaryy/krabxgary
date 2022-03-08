import "./footer.css";
import line from "../../assets/line.png";
import { GiRadarDish } from "react-icons/gi"

export default function Footer(props){
    return(
        <div className='dashboard-title'>
              <div>
                 <div>
                <img src={line} alt="line svg"/>
              </div>
              <span>{props.icon}  {props.title}</span>

              </div>
          </div>
    )
}