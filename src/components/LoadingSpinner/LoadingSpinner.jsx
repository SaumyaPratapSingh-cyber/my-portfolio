import "./LoadingSpinner.scss";

const LoadingSpinner = ({ message = "Loading..." }) => {
    return (
        <div className="loading-spinner-container">
            <div className="loading-spinner">
                <div className="spinner"></div>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default LoadingSpinner;
