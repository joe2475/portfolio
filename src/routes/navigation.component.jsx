import {Outlet, Link} from "react-router-dom";
import { Fragment } from "react";
import './navigation.styles.scss'
import { Container } from "react-bootstrap";
import {ReactComponent as DragonLogo} from '../assets/dragon.svg'

const Navigation = () =>
{
    return(
    <Fragment>
        <div className="navigation">
        <Link className="logo-container" to='/'>
          <DragonLogo className='logo'/>
          </Link>
            <div className="nav-links-container">
            <Link className="nav-link" to='/about'>About</Link>
            <Link className="nav-link" to='/project'>Projects</Link>
            <Link className="nav-link" to='/resume'>Resume</Link>
          
            </div>
        </div>
        <Outlet/>
    </Fragment>

    )
}

export default Navigation