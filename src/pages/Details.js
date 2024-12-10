import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../index.css'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
function Details() {
    const [details, setDetails] = useState([])
    const [ingridients, setIngred] = useState([])
    let params = useParams()
    useEffect(() => {
        // console.log(params.id)
        getDetails(params.id)
    }, [params.id])
    const getDetails = async (id) => {
        const check = localStorage.getItem("details")
        const check2 = localStorage.getItem('ingridients')
        if (check && check2) {
            setDetails(JSON.parse(check))
            setIngred(JSON.parse(check2))
            console.log(details)
        } else {
            let data = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey= 2c5fcbdd007f453498a6a76d331b6f7d `)
            let response = await data.json()
            localStorage.setItem("details", JSON.stringify(response))
            localStorage.setItem('ingridients', JSON.stringify(response.extendedIngredients))
            setDetails(response)
            setIngred(response.extendedIngredients)
            console.log(response)
        }
    }
    return (
        <>
            <Navbar />
            <div className='container' style={{ margin: "0% 15%" }}>
                <h1 style={{ marginTop: "50px", color: "whitesmoke" }}>{details.title}</h1>
                <img className="img-card" style={{ marginTop: "30px", borderRadius: "26px" }} src={details.image} alt={details.title} />
                <h3 style={{ marginTop: "10px" }}>Source: <a href={details.sourceUrl} target='_blank' rel="noreferrer" >{details.sourceName}</a></h3>
                {/* <h2 style={{marginLeft:"700px",marginBottom:"600px"}}>Recipe:</h2> */}
                <div className="card" style={{ position: "inherit", marginLeft: "700px", width: "30rem", marginTop: "-420px", backgroundColor: "rgb(21, 39, 39)" }}>
                    <div className="card-body" style={{ color: "whitesmoke" }}>
                        <h5 className="card-title" >Recipe</h5>
                        <div className='flex gap-20'>
                            <h6 className="card-subtitle mb-2"  >Prep Time : {details.readyInMinutes}</h6>
                            <br></br>
                            <br></br>
                            <h6 className="card-subtitle mb-2"  >Servings : {details.servings}</h6>
                            <br></br><br></br>
                        </div>
                        <p className="card-text" style={{ backgroundColor: "transparent" }}><b style={{ fontWeight: "bolder" }}>Summary:</b><br></br></p>  <div style={{ fontFamily: "Andika", fontSize: "18px" }} dangerouslySetInnerHTML={{ __html: details.summary }} /><br></br>
                    </div>
                </div>
                <Card>
                    <h2>Instructions</h2> <div style={{ fontFamily: "Andika", fontSize: "18px", color: "whitesmoke", backgroundColor: "rgb(21, 39, 39)" }}>{details.instructions}</div>
                </Card>
                <div className=' grid grid-cols-2 grid-rows-3 text-white' style={{ marginTop: "-80px" }}>
                    <h2 style={{ marginBottom: "-10px" }}>Ingredients</h2><br></br>
                    {ingridients.map((ingridients) => {
                        return (
                            <div key={crypto.randomUUID()}>

                                <ul> <li className='ml-5 text-red-500 text-xl' style={{ marginTop: "-0px" }} >{ingridients.name}
                                    <img src={`https://spoonacular.com/cdn/ingredients_250x250/${ingridients.image}`} alt={ingridients.name} />
                                </li>
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div >
        </>
    )
}

const Card = styled.div`
  min-height: 25rem;
  overflow: hidden;
  width:74rem;
`;
export default Details
