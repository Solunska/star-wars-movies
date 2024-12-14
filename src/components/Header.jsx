import logo from '../assets/logo.png';

import classes from './Header.module.css';

export default function Header() {
    return <div className={classes.container}>
        <img className={classes.logo} src={logo} alt="star wars logo" />
    </div>
}