import {
    FaEnvelope,
    FaGithub,
    FaTwitter,
    FaLinkedin
  } from "react-icons/fa";

  const SocialLinks = () => (
    <ul className="social">
    <li>
      <a href="https://www.linkedin.com/in/elizabethtiller/" target="_blank">
        <FaLinkedin />
      </a>
    </li>
      <li>
        <a href="https://twitter.com/liztiller" target="_blank">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https://github.com/lizthrilla" target="_blank">
          <FaGithub />
        </a>
      </li>
      <li>
        <a href="mailto:elizabeth.tiller@gmail.com?Subject=Hello%20again">
          <FaEnvelope />
        </a>
    </li>
    </ul>
  );
  
  export default SocialLinks;
  