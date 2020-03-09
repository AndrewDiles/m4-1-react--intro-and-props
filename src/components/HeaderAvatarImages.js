import React from "react";

import './HeaderAvatarImages.css';

function HeaderAvatarImages(props) {
    // {console.log('props', props);}
    return <span>
        <img className="headerAvatarImg"src={props.face} alt='one pretty face'/>
    </span>

}
export default HeaderAvatarImages;