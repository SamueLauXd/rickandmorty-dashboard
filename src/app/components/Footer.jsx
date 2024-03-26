import Link from "next/link";
import { FaGithub, FaLinkedin, FaBehance } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="flex flex-wrap items-center justify-between p-7 border-t border-slate-500 mt-14">
            <p>Developed by <strong>Samuel Ortiz</strong></p>
            <span className="flex flex-wrap gap-6">
                <a target="_blank" rel="noopener noreferrer" href='https://github.com/SamueLauXd'>
                    <FaGithub size={32}/>
                </a>
                <a target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/samuel-ortiz-8018051b6/'>
                    <FaLinkedin size={32}/>
                </a>
                <a target="_blank" rel="noopener noreferrer" href='https://www.behance.net/samuelortiz3'>
                    <FaBehance size={32}/>
                </a>
            </span>
        </footer>
    )
}