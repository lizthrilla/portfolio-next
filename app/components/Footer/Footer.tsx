import { FaChevronCircleUp } from "react-icons/fa"
const Footer = () => {
    return (
        <footer id="footer" className="bg-blue w-full flex flex-row items-center justify-center h-20 absolute bottom-0">
            <div>
                <a href="#home" aria-label="Back to top">
                    <FaChevronCircleUp className="text-light" aria-hidden="true" />
                </a>
            </div>
        </footer>
    )
}

export default Footer