
import { Link } from 'react-router-dom'
import './Cards.css';
function ProjectCards({ recect }) {
    console.log(recect)
    return (
        <>
            <div className='card_pai'>
                <div className='card' >

                    <img src={recect.img_post} className='img_card' />

                    <div className='container'>
                        <h1 className='titulo'>{recect.nome_prato}</h1>
                        <h6>{recect.nivel_dificuldade}</h6>
                        <p>
                            Tempo de Preparo: {recect.tempo_preparo}<br />
                            Quantidade de Porções: {recect.quantidade_porcao}
                        </p>
                        <span><Link to="/revenue" state={{ recect }}>Ver detalhes</Link></span>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ProjectCards