import './Cards.css'; // Importando o arquivo CSS
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ProjectCards from './ProjectCards'

function Cards() {
    const [cards, setCard] = useState([])

    useEffect(() => {
        fetch('https://api-a3-eliane.vercel.app/api/readall/posts', {
            method: 'GET',
            header: {
                'Content-Type': 'application/json',
            },
        }).then(resp => resp.json())
            .then((data) => { console.log(data); setCard(data) })
            .catch((err) => console.log(err))

    }, [])

    return (
        <>
            {cards.map((Cards) => {
                return (<ProjectCards recect={Cards} />)
            })}
        </>
    )
}

export default Cards;