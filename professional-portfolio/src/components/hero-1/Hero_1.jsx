import ContactMeBtn from "../shared/ContactMeBtn"

const Hero_1 = () => {
    return (
        <div id="hero-1" className="hero hero-1 p-5 d-flex flex-column justify-content-center align-items-start">
                <div className="heading text-light fs-2 ms-5 d-flex flex-column justify-content-center align-items-center">
                    <h1>M.Rabie</h1>
                    <p className="mb-5 ">Web Developer & Designer</p>
                    <ContactMeBtn />
            </div>
        </div>
    )
}

export default Hero_1