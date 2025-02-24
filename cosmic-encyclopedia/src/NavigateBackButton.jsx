import { useNavigate } from "react-router-dom";
import "./Navigate.css";

const NavigateBackButton = () => {
    const navigate = useNavigate();
    return(
        <button
            onClick={() => navigate(-1)} className="back-button">
                🔙 Go back
            </button>
    );
}

export default NavigateBackButton;