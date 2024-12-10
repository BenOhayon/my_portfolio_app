import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { GrLinkedinOption } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import upArrow from '../../../assets/up-arrow.svg'

import "./Footer.scss";
import { useAppContext } from "../MainApp/App";
import { FooterProps } from "../../propTypes";

const socials = {
    "https://www.facebook.com/profile.php?id=100000341139297": <BiLogoFacebook className="social-link-image" />,
    "https://www.linkedin.com/in/benohayon": <GrLinkedinOption className="social-link-image" />,
    "https://github.com/BenOhayon": <FaGithub className="social-link-image" />,
};

export default function Footer({
    resumeData
}: FooterProps) {

    const {
        isMobile
    } = useAppContext()

    function goToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <footer className="footer-container">
            <div className="footer-content">
                {
                    !isMobile && <div className="footer-go-to-top-button" onClick={goToTop}>
                        <img className="footer-go-to-top-button-image" src={upArrow} alt='Go to About' />
                        <div className="footer-go-to-top-button-text">Back to top</div>
                    </div>
                }
                <div className="footer-summery">
                    <h3 className="footer-summery-title footer-title">Ben Ohayon</h3>
                    <div className="footer-summery-subtitle">
                        <div className="footer-summery-subtitle-role">{resumeData?.role}</div>
                        Call me on:{" "}
                        <a href="tel:0545805203" className="footer-phone-number">
                            054-5805203
                        </a>
                    </div>
                </div>
                <div className="footer-social">
                    <h3 className="footer-social-title footer-title">Social</h3>
                    <div className="footer-social-content">
                        {Object.keys(socials).map((social) => {
                            return (
                                <a
                                    key={social}
                                    className="social-link"
                                    href={social}
                                    target="_blank"
                                >
                                    {socials[social]}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                Copyright © {new Date().getFullYear()}. Developed by Ben Ohayon
            </div>
        </footer>
    );
}
