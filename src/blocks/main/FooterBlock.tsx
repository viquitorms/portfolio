import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaBehanceSquare } from "react-icons/fa";
import { FaPinterestSquare } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">
            <nav>
                <h6 className="footer-title">Pages</h6>
                <a className="link link-hover">Contacts</a>
                <a className="link link-hover">Projects</a>
                <a className="link link-hover">GitHub Profile</a>
            </nav>
            <nav>
                <h6 className="footer-title">Contacts</h6>
                <div className="flex flex-col gap-2">
                    <div>
                        <span>victormsouza@protonmail.com</span>
                    </div>
                    <div className="flex gap-2">
                        <a href="https://www.linkedin.com/in/victormagalhaesdesouza/" target="_blank"><FaLinkedin size={25} /></a>
                        <a href="https://www.instagram.com/fromsilencetotheheart/" target="_blank"><FaSquareInstagram size={25} /></a>
                        <a href="https://www.behance.net/victormsouza" target="_blank"><FaBehanceSquare size={25} /></a>
                        <a href="https://br.pinterest.com/vicmagalhaes20/" target="_blank"><FaPinterestSquare size={25} /></a>
                    </div>
                </div>
            </nav>
        </footer>
    );
}