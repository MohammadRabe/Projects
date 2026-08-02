import { Rate } from "antd"
import ContactMeBtn from "../shared/ContactMeBtn"

const Footer = () => {
    const giveRate = (rate)=>{
        console.log(rate);
    }
  return (
    <div className="footer d-flex flex-column flex-md-row align-items-center justify-content-between">
        <div className="left d-flex flex-column text-md-start">
            <h3 className="mb-5 d-flex flex-column">
                <span>GET IN TOUCH</span>
            </h3>
            <p><i className="fa-solid fa-envelope"></i>
                morabea@gmail.com
            </p>
            <p>
                <i className="fa-solid fa-phone"></i>
                010
            </p>
        </div>
        <div className="d-flex flex-column">
            <ContactMeBtn />
            
        </div>

        <div className="right d-flex flex-column gap-3">
            <div className="social d-flex gap-3 justify-content-end fs-4">
                <i className="fa-brands fa-linkedin"></i>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
            </div>
            <span>
                Copyright &copy; 2026 EG
            </span>
        </div>
    </div>
  )
}

export default Footer