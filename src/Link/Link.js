import '../Link/Link.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/fontawesome-free-brands';
import { faEnvelope } from '@fortawesome/fontawesome-free-solid';
import { faSave } from '@fortawesome/free-regular-svg-icons';
import React, { useState, useEffect } from 'react';

function Link () {
    const [ email, setValue ] = useState('Email');

    function changeEmail (event) {
        setValue(event);
    }

    return (
        <div className='icon_container'>
            <a className='link_btn' href={ `${process.env.PUBLIC_URL}/Resume.pdf` } target='_blank' download>
                <FontAwesomeIcon className='fa-lg font_awesome' icon={ faSave } />
                Resume
            </a>
            <a className='link_btn' onMouseEnter={ () => changeEmail('quan.nghiem2904@gmail.com') } onMouseLeave={ () => changeEmail('Email') } href="mailto:quan.nghiem2904@gmail.com">
                <FontAwesomeIcon className='fa-lg font_awesome' icon={ faEnvelope } />
                { email }
            </a>
            <a className='link_btn' href="https://www.linkedin.com/in/quannghiem/" rel="noreferrer" target="_blank">
                <FontAwesomeIcon className='fa-lg font_awesome' icon={ faLinkedin } />
                Linkedin
            </a>
            <a className='link_btn' href="https://github.com/QuanNghiem" rel="noreferrer" target="_blank">
                <FontAwesomeIcon className='fa-lg font_awesome' icon={ faGithub } />
                Github
            </a>
        </div >
    );
}


export default Link;