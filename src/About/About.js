import '../About/About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About () {
    return (
        <div>
            <div className='text_container'>
                <h2>About Me:</h2>
                <p>
                    Hi, I'm Quan!
                </p>
                <p>
                    I'm a full stack developer based out of the Greater Seattle Area.
                </p>
                <p>
                    I enjoy developing web applications with a variety of technologies and improving my existing skillset while constantly augmenting it with new technologies. You can see some of the applications of the technologies I've used in my Projects. Currently, I'm excited about front-end, component-based frameworks like React, Angular, and Vue.
                </p>
            </div>
        </div>
    );
}

export default About;