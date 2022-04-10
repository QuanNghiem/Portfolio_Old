import '../About/About.css';
function About () {
    return (
        <div className='about_container'>
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
                <div>
                    <h3>Front-end Technologies:</h3>
                    <div className='tech_container'>
                        <div className='tech_icon_container'>
                            <i class="devicon-angularjs-plain colored"></i>
                            <p className='tech_name'>
                                Angular
                            </p>
                        </div>
                        <div className='tech_icon_container'>
                            <i className="devicon-html5-plain colored"></i>
                            <p className='tech_name'>
                                HTML
                            </p>
                        </div>
                        <div className='tech_icon_container'>
                            <i className="devicon-css3-plain colored"></i>
                            <p className='tech_name'>
                                CSS
                            </p>
                        </div>
                        <div className='tech_icon_container'>
                            <i className="devicon-react-original colored"></i>
                            <p className='tech_name'>
                                React
                            </p>
                        </div>
                        {/* <div className='tech_icon_container'>
                            <i className="devicon-jquery-plain colored"></i>
                            <p className='tech_name'>
                                JQuery
                            </p>
                        </div> */}
                        <div className='tech_icon_container'>
                            <i className="devicon-javascript-plain colored"></i>
                            <p className='tech_name'>
                                Javascript
                            </p>
                        </div>
                        <div className='tech_icon_container'>
                            <i className="devicon-typescript-plain colored"></i>
                            <p className='tech_name'>
                                Typescript
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3>Back-end Technologies:</h3>
                    <div className='tech_container'>
                        <div className='tech_icon_container'>
                            <i className="devicon-dotnetcore-plain colored"></i>
                            <p className='tech_name'>
                                .NetCore
                            </p>
                        </div>
                        <div className='tech_icon_container'>
                            <i className="devicon-csharp-plain colored"></i>
                            <p className='tech_name'>
                                C#
                            </p>
                        </div>
                        <div className='tech_icon_container'>
                            <i className="devicon-nodejs-plain colored"></i>
                            <p className='tech_name'>
                                NodeJS
                            </p>
                        </div>
                        <div className='tech_icon_container'>
                            <i className="devicon-express-original-wordmark colored"></i>
                            <p className='tech_name'>
                                ExpressJS
                            </p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3>Databases:</h3>
                    <div className='tech_container'>
                        <div className='tech_icon_container'>
                            <i className="devicon-mongodb-plain colored"></i>
                            <p className='tech_name'>
                                MongoDB
                            </p>
                        </div>
                        <div className='tech_icon_container'>
                            <i className="devicon-oracle-original colored"></i>
                            <p className='tech_name'>
                                OracleSQL
                            </p>
                        </div>
                        <div className='tech_icon_container'>
                            <i className="devicon-sqlite-plain colored"></i>
                            <p className='tech_name'>
                                SQLite
                            </p>
                        </div>
                        <div className='tech_icon_container'>
                            <i className="devicon-neo4j-plain colored"></i>
                            <p className='tech_name'>
                                Neo4J
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;