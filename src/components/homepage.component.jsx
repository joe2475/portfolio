import React from "react";
import './homepage.styles.scss';
import {render} from 'react-dom';
import Project from "./project.component";
import ParticlesBg from "particles-bg";
function HomePage() {
    return(
        <div className="homepage">
            <h1>Welcome</h1>
            <ParticlesBg type="cobweb" bg={true}/>
        </div>
       
           )
}

export default HomePage