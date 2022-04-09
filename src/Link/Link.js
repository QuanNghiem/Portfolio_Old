import '../Link/Link.css'

function Link () {
    function email () {
        window.open('mailto:quan.nghiem2904@gmail.com');
    }

    return (
        <div className='icon_container'>
            <a className='link_btn' onClick={ () => email() }>Email</a>
            <a className='link_btn' href="https://www.linkedin.com/in/quannghiem/" rel="noreferrer" target="_blank">Linkedin</a>
            <a className='link_btn' href="https://github.com/QuanNghiem" rel="noreferrer" target="_blank">Github</a>
        </div>
    );
}


export default Link;