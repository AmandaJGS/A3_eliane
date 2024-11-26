import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"

function Revenue() {
    const location = useLocation();
    const { recect } = location.state || {};

    return (
        <>
        <div className="conteiner_botao">
            <div ><Link className="botao" to='/pesquisa' >Voltar</Link></div>
        </div>
            <div className='card_pai'>
                <div className='detalhe_card' >

                    <img src={recect.img_post} className='img_card2' />

                    <div className='container'>
                        <h1 className='titulo'>{recect.nome_prato}</h1>
                        <h6>{recect.nivel_dificuldade}</h6>
                        <p>
                            Tempo de Preparo: {recect.tempo_preparo}<br />
                            Quantidade de Porções: {recect.quantidade_porcao}
                        </p>

                        <div className="conteiner_detalhe">
                            <strong><p>Ingredientes:</p></strong>
                            <p style={{ whiteSpace: "pre-wrap" }}>{recect.nome_ingredientes}</p>
                        </div>
                        <div className="conteiner_detalhe">
                        <strong><p>Modo de Preparo:</p></strong>
                            {recect.mode_preparo}
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Revenue;