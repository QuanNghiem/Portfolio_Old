import '../Home/Home.css'
import Navigation from '../Navigation/Navigation';
import Link from '../Link/Link';

function Home () {
    return (
        <div>
            <Navigation />
            <div className="home_container">
                <h1 className='title'>
                    Quan Nghiem
                </h1>
                <p className='sub_title'>
                    Full Stack Web Developer
                </p>

                <Link />
            </div>



            <div className='content_container'>

            </div>
        </div>
    );
}

export default Home;