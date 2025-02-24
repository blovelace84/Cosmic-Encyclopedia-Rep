import { useParams } from "react-router-dom";
import data from "./data";
import "./ContentPage.css";

const ContentPage = () => {
    const { id } = useParams();
    const object = data.find(item => item.id === id);

    if(!object){
        return <h2 className="error">Object not found</h2>;
    }

    return(
        <div className="content-page">
            <h1>{object.name}</h1>
            <img src={object.image} alt={object.name} className="object-image" />
            <p>{object.description}</p>
        </div>
    );
};

export default ContentPage;