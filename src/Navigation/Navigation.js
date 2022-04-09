import '../Navigation/Navigation.css'

function Navigation () {
    function email () {
        var str = window.open('mailto:quan.nghiem2904@gmail.com');
    }

    return (
        <div className="nav_container">
            <div>
                <button className='nav_btn'>
                    Home
                </button>
                <button className='nav_btn'>
                    Projects
                </button>
            </div>
        </div>
    );
}


export default Navigation;