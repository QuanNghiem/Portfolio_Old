import '../Background/Background.css'

function Background () {
    return (
        // <div>
        //     <div className='profile_container css-selector'>
        //         <img src={ `${process.env.PUBLIC_URL}/LinkedIn_Pic.Jpeg` } className='profle'></img>
        //     </div>
        // </div>
        <div className='profile_container css-selector'>
            <img src={ `${process.env.PUBLIC_URL}/LinkedIn_Pic.Jpeg` } className='profle'></img>
            {/* <div class="view">
                <div class="plane main">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="circle"></div>
                </div>
            </div> */}
        </div>
    );
}

export default Background;