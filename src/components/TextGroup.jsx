import classes from './TextGroup.module.css';

export default function TextGroup({ label, children }) {
    return <div className={classes.group}>
        <p className={classes.label}>{label}</p>
        {children}
    </div>
}