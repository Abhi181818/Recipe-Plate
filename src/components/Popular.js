import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "@splidejs/splide/dist/css/splide.min.css";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Link } from "react-router-dom";
import '../index.css';

function Popular() {
    const [popular, setPopular] = useState([]);
    const [loading, setLoading] = useState(true); // Start loading state as true

    useEffect(() => {
        getPopular();
    }, []);

    const getPopular = async () => {
        const check = localStorage.getItem("popular");
        
        if (check) {
            setPopular(JSON.parse(check));
            setLoading(false);
        } else {
            try {
                const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=2c5fcbdd007f453498a6a76d331b6f7d&number=10`);
                const data = await response.json();
                localStorage.setItem("popular", JSON.stringify(data.recipes));
                setPopular(data.recipes);
            } catch (error) {
                console.error("Failed to fetch popular recipes:", error);
            }
            setLoading(false); // Set loading to false after API call
        }
    };

    if (loading) {
        return <h3 style={{ color: "whitesmoke" }}>Loading Popular Picks...</h3>;
    }

    return (
        <Wrapper>
            <h3 style={{ color: "whitesmoke" }}>Popular Picks</h3>
            <Splide
                style={{ borderRadius: "20px" }}
                options={{
                    perPage: 4,
                    drag: "free",
                    gap: "2rem",
                    arrows: true,
                    pagination: false,
                    type: "loop",
                    autoplay: true,
                    pauseOnHover: true,
                    perMove: 1
                }}
            >
                {popular.map((recipe) => (
                    <SplideSlide key={recipe.id}>
                        <Card className="img-card">
                            <Link to={`/details/${recipe.id}`}>
                                <p className="title">{recipe.title}</p>
                                <img src={recipe.image} alt={recipe.title} />
                            </Link>
                        </Card>
                    </SplideSlide>
                ))}
            </Splide>
        </Wrapper>
    );
}

const Wrapper = styled.div`
  margin: 0% 15%;
`;

const Card = styled.div`
  min-height: 25rem;
  overflow: hidden;
  position: relative;
  
  img {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 999;
    left: 50%;
    bottom: 50%;
    transform: translate(-50%, 50%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 800;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default Popular;
