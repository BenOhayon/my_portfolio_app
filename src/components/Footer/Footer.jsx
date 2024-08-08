import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { GrLinkedinOption } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

import "./Footer.scss";

const socials = {
	"https://www.facebook.com/profile.php?id=100000341139297": <BiLogoFacebook className="social-link-image" />,
	"https://www.linkedin.com/in/benohayon": <GrLinkedinOption className="social-link-image" />,
	"https://github.com/BenOhayon": <FaGithub className="social-link-image" />,
};

export default function Footer() {
	return (
		<footer className="footer-container">
			<div className="footer-content">
				<div className="footer-summery">
					<h3 className="footer-summery-title footer-title">Ben Ohayon</h3>
					<p className="footer-summery-subtitle">
					Web Developer <br />
						Call me on:{" "}
						<a href="tel:0545805203" className="footer-phone-number">
							054-5805203
						</a>
					</p>
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
