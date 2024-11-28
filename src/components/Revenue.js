import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";


function Revenue() {
    const location = useLocation();
    const { recect } = location.state || {};

    // Função para formatar o texto com quebras de linha
    const formatText = (text) => {
        if (!text) return null;

        // Substitui \\n por uma quebra de linha real
        const formattedText = text.replace(/\\n/g, '\n');
        
        // Divide o texto nas quebras de linha
        return formattedText.split('\n').map((line, index) => (
            <p key={index}>{line}</p>  // Cada linha será renderizada dentro de um <p>
        ));
    };

    return (
        <>
            <div className="conteiner_botao">
                <div>
                    <Link className="botao" to='/pesquisa'>Voltar</Link>
                </div>
            </div>
            <div className='card_pai'>
                <div className='detalhe_card'>
                    <img src={recect.img_post} className='img_card2' alt={recect.nome_prato} />

                    <div className='container'>
                        <h1 className='titulo'>{recect.nome_prato}</h1>
                        <h6>{recect.nivel_dificuldade}</h6>
                        <p>
                            Tempo de Preparo: {recect.tempo_preparo}<br />
                            Quantidade de Porções: {recect.quantidade_porcao}
                        </p>

                        <div className="conteiner_detalhe">
                            <strong><p>Ingredientes:</p></strong>
                            {formatText(recect.nome_ingredientes)} {/* Formata o texto com quebras de linha */}
                        </div>
                        <div className="conteiner_detalhe">
                            <strong><p>Modo de Preparo:</p></strong>
                            {formatText(recect.mode_preparo)} {/* Formata o texto com quebras de linha */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Revenue;
