import '../Home/Home.css'
import Background from '../Background/Background';
import Link from '../Link/Link';
import About from '../About/About';

function Home () {
    return (
        <div>
            <Background />
            <div className="home_container">
                <div className='title_container'>
                    <h1 className='title'>
                        Quan Nghiem
                    </h1>
                    <p className='sub_title'>
                        Full Stack Web Developer
                    </p>
                </div>

                <Link />
            </div>

            <div className='content_container'>
                <About />
            </div>
        </div>
    );
}

export default Home;