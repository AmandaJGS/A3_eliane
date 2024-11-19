import './Forms_conteudo.css'
import { useState } from 'react'
function Forms_Conteudo() {
    function sendData() {
        const [formData, setFormData] = useState({
            file: '',
            name: '',
            tipo: '',
            difficulty: '',
            prepTime: '',
            servings: '',
            ingredients: '',
            instructions: '',
        })
    }



    return (
        <div className='form-content' >
            <form className="recipe-form" onSubmit={cadastrarUsusario}>
                <div className='div_file'>
                    clique para upload!
                    <input className='form_input_file' type="file" id="file" name="file" required></input>

                </div>
                <label htmlFor="tipo">Nome da Receita:</label>
                <input className='form_input' type="text" id="name" name="name" required />

                <label htmlFor="tipo">Tipo do prato:</label>
                <select className='form_input' id="tipo" name="tipo">
                    <option value="Bolos">Bolo</option>
                    <option value="Doces">Doces</option>
                    <option value="Salgados">Salgados</option>
                    <option value="saladas">Saladas</option>
                    <option value="comidas">Pratos caseiros</option>

                </select>

                <label htmlFor="difficulty">Dificuldade:</label>
                <select className='form_input' id="difficulty" name="difficulty">
                    <option value="facil">Fácil</option>
                    <option value="medio">Médio</option>
                    <option value="dificil">Difícil</option>
                </select>


                <label htmlFor="prepTime">Tempo de Preparo:</label>
                <select className='form_input' id="prepTime" name="prepTime">
                    <option value="2min">2 min</option>
                    <option value="5min">5 min</option>
                    <option value="10min">10 min</option>
                    <option value="30min">30 min</option>
                    <option value="1h">1 h</option>
                    <option value="2h">2 h</option>
                    <option value="3h">3 h</option>
                    <option value="6h">6 h</option>
                    <option value="12h">12 h</option>
                    <option value="24h">24 h</option>
                </select>


                <label htmlFor="servings">Quantidade de Porções:</label>
                <input className='form_input' type="number" id="servings" name="servings" min="1" max="500" required />


                <label htmlFor="ingredients">Ingredientes:</label>
                <textarea className='form_input' id="ingredients" name="ingredients" rows="4" required></textarea>


                <label htmlFor="instructions">Modo de Preparo:</label>
                <textarea className='form_input' id="instructions" name="instructions" rows="4" required></textarea>

                <button className='submit-button' type="submit">Criar</button>
            </form>
        </div>
    )
}

export default Forms_Conteudo