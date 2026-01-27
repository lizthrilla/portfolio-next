import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaDownload
  } from "react-icons/fa";

  const links = [
    {name: "LinkedIn", href: "https://www.linkedin.com/in/elizabethtiller/", icon: <FaLinkedin aria-hidden="true" />, label: "LinkedIn profile"},
    {name: "Github", href: "https://github.com/lizthrilla", icon: <FaGithub aria-hidden="true" />, label: "GitHub profile"},
    {name: "eMail", href: "mailto:elizabeth.tiller@gmail.com?Subject=Hello%20again", icon: <FaEnvelope aria-hidden="true" />, label: "Send email", external: false},
    {name: "Resume", href: "https://docs.google.com/document/d/e/2PACX-1vTeEgh85ujVfXXEzllVQn3a7LWCo1_c3oZWUf7DZfY2VI5WuM1TC-r7meaIP3J2flIdYdPAZqtrYUj6/pub", icon: <FaDownload aria-hidden="true" />, label: "Download resume"},
  ]

  const SocialLinks = () => (
    <ul className="social flex flex-row">
      {
        links.map((link) => (
          <li key={link.name} className="hover:text-yellow me-2 pe-1">
            <a 
              href={link.href} 
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          </li>
        ))
      }
    </ul>
  );
  
  export default SocialLinks;
  