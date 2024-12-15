import { useContext } from 'react';
import classes from './Footer.module.css';
import { LanguageContext } from '../context/LanguageContext';

export default function Footer() {
    const { handleSetLanguage } = useContext(LanguageContext);

    const handleChange = (event) => {
        handleSetLanguage(event.target.value);
    }

    return <div className={classes.container}>
        <select onChange={handleChange}>
            <option value="en">English</option>
            <option value="de">German</option>
            <option value="fr">French</option>
        </select>
    </div>
}