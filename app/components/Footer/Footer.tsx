import { FaChevronCircleUp } from "react-icons/fa"
const Footer = () => {
    return (
        <footer id="footer" className="bg-blue w-full flex flex-row items-center justify-center h-20 absolute bottom-0">
            <div>
                <a href="#home" title="Back to Top">
                    <FaChevronCircleUp className="text-light"/>
                </a>
            </div>
        </footer>
    )
}

export default Footer