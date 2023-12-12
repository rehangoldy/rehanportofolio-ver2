import rehanavatar from '../Assets/Images/rehan-avatar.png'
import { FaDownload, FaInstagram , FaLinkedin   , FaXTwitter   } from "react-icons/fa6";
import Typed from "react-typed";

const HeroSection = () => {
    return (
        <div className="container col-xxl-8 px-4 ">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img src={rehanavatar} className="d-block mx-lg-auto img-fluid" alt="" loading="lazy"></img>
                </div>
                <div className="col-lg-6">
                    <div className="lc-block mb-3">
                        <div editable="rich">
                            <h3 className="text-hijau">Hello, <span>I'm</span> </h3>
                            <h2 className="fw-bold display-5 text-hijau">Raihan Goldy Azzalli</h2>
                            <h3 className="">
                                <Typed
                                    strings={[
                                        "I'm a Frontend Developer",
                                        "I'm a Web Designer",

                                    ]}
                                    typeSpeed={50}
                                    backSpeed={50}
                                    loop
                                />
                            </h3>
                        </div>
                    </div>

                    <div className="lc-block mb-3">
                        <div editable="rich">
                            <p className="lead">
                                I am a Frontend Web Developer with motivation to develop technology and information science. I am also a freelance who provides services to do assignments.
                            </p>
                        </div>
                    </div>

                    <div className="lc-block d-grid gap-2 d-md-flex justify-content-md-start">
                        <a className="btn btn-primary-costume px-4 me-md-2" href="/" role="button">Hire Me</a>
                        <a className="btn btn-outline-primary-costume px-4" href="/" role="button">Download CV <FaDownload /></a>
                    </div>

                    <div className="lc-block mb-3 mt-5">
                        <p>Find me in</p>
                        <button className='btn btn-outline-primary-costume me-2'><FaInstagram/></button>
                        <button className='btn btn-outline-primary-costume me-2'><FaLinkedin  /></button>
                        <button className='btn btn-outline-primary-costume me-2'><FaXTwitter/></button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeroSection;