import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';
import { Icons } from '../../components/Icons';
import { motion } from 'framer-motion';


const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 520) {
                setIsOpen(false);
            }
        }
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])

    return (
        <header>
            <nav className={isOpen ? 'mobile' : 'nav-header'}>
                <div className="logo">
                    <h2>Abhishek Rai</h2>
                </div>
                <div className="links">
                    {!isOpen ? (
                        Icons.map((name) => (
                            <a className="link" href={name.link} key={name} target='_blank' rel="noopener noreferrer">
                                <FontAwesomeIcon icon={name.icon} />
                            </a>
                        ))
                    ) : (
                        Icons.map((name) => (
                            <motion.div className="link-name" key={name}
                                animate={{ x: !isOpen ? 200 : 5 }}
                                transition={{ type: 'spring', duration: 4, bounce: 0.7 }}

                            >
                                <a
                                    href={name.link} target='_blank' rel="noopener noreferrer">
                                    <FontAwesomeIcon className="link" icon={name.icon} />
                                    {name.name}
                                </a>
                            </motion.div>
                        ))
                    )}
                </div>
                <div className="hamburger">
                    {!isOpen ? (
                        <div className="open">
                            <svg onClick={() => setIsOpen(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                            </svg>
                        </div>
                    ) : (
                        <div className="close">
                            <svg onClick={() => setIsOpen(false)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    )
                    }
                </div>
            </nav>
        </header>
    )
}

export default Header;
