import earthImg from "./assets/Earth.jpg";
import sunImg from "./assets/Sun.jpg";
import andromedaImg from "./assets/Andromeda.jpg";

const data = [
    {
        id: "earth",
        name: "Earth",
        description: "The third planet from the Sun and the only astronomical object known to harbor life. Our home plannet.",
        image: earthImg,
        category: "planets"
    },
    {
        id: "sun",
        name: "Sun",
        description: "The star at the center of our solar system. It provides the light and heat that sustains life on Earth.",
        image: sunImg,
        category: "stars"
    },
    {
        id: "andromeda",
        name: "Andromeda Galaxy",
        description: "The nearest spiral galaxy to the Milky Way and is on a collision course with our galaxy.",
        image: andromedaImg,
        category: "galaxies"
    }

];

export default data;