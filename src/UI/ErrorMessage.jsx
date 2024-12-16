export default function ErrorMessage({ heading, message }) {
    return <div className="error-container">
        <h2>{heading}</h2>
        <p>{message}</p>
    </div>
}