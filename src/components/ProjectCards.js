import { Link } from 'react-router-dom';
import './Cards.css';

function ProjectCards({ recect }) {
    console.log(recect);

    // Função para formatar texto e remover \\n
    const formatText = (text) => {
        if (text && typeof text === 'string') {
            // Substituir \\n por uma string vazia, removendo
            const cleanedText = text.replace(/\\n/g, '');
            return cleanedText;
        }
        return null;
    };

    return (
        <>
            <div className='card_pai'>
                <div className='card'>
                    <img src={recect.img_post} className='img_card' alt="Imagem do prato" />

                    <div className='container'>
                        <h1 className='titulo'>{recect.nome_prato}</h1>
                        <h6>{recect.nivel_dificuldade}</h6>
                        <p>
                            Tempo de Preparo: {recect.tempo_preparo}<br />
                            Quantidade de Porções: {recect.quantidade_porcao}
                        </p>
                        
                        {/* Renderizando ingredientes e modo de preparo sem \\n */}
                        <div>
                            <h3>Ingredientes:</h3>
                            <pre>{formatText(recect.nome_ingredientes)}</pre> {/* Ingredientes sem \\n */}
                        </div>

                        <div>
                            <h3>Modo de Preparo:</h3>
                            <pre>{formatText(recect.mode_preparo)}</pre> {/* Modo de preparo sem \\n */}
                        </div>

                        <span>
                            <Link to="/revenue" state={{ recect }}>Ver detalhes</Link>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProjectCards;
