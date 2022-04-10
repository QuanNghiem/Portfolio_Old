import '../Link/Link.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/fontawesome-free-brands';
import { faEnvelope } from '@fortawesome/fontawesome-free-solid';
import { faSave } from '@fortawesome/free-regular-svg-icons';
import React, { useState, useEffect } from 'react';

function Link () {
    const [ email, setValue ] = useState('Email');

    function changeEmail (event) {
        // setValue(event);
        navigator.clipboard.writeText('quan.nghiem2904@gmail.com');
        let notice = document.getElementById('emailNotice');
        notice.classList = [];
        notice.classList.add('emailSpan');
        notice.classList.add('fadeIn');
        setTimeout(() => {
            let notice = document.getElementById('emailNotice');
            notice.classList = [];
            notice.classList.add('emailSpan');
            notice.classList.add('fadeOut');
            // setValue('Email');
        }, 3000)
    }

    return (
        <div className='icon_container'>
            <a className='link_btn' href={ `${process.env.PUBLIC_URL}/Resume.pdf` } target='_blank' download>
                <FontAwesomeIcon className='fa-lg font_awesome_link' icon={ faSave } />
                Resume
            </a>
            <div className='span_container'>
                <a className='link_btn' onClick={ () => changeEmail('quan.nghiem2904@gmail.com') } href="mailto:quan.nghiem2904@gmail.com">
                    <FontAwesomeIcon className='fa-lg font_awesome_link' icon={ faEnvelope } />
                    { email }
                    <span className='emailSpan hidden' id='emailNotice'>Copied!</span>
                </a>
            </div>
            <a className='link_btn' href="https://www.linkedin.com/in/quannghiem/" rel="noreferrer" target="_blank">
                <FontAwesomeIcon className='fa-lg font_awesome_link' icon={ faLinkedin } />
                Linkedin
            </a>
            <a className='link_btn' href="https://github.com/QuanNghiem" rel="noreferrer" target="_blank">
                <FontAwesomeIcon className='fa-lg font_awesome_link' icon={ faGithub } />
                Github
            </a>
        </div >
    );
}


export default Link;