import './Forms_conteudo.css'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'; 

function Forms_Conteudo() {

    const [formData, setFormData] = useState({
        nome_prato: '',
        genero_prato: '',
        nivel_dificuldade: '',
        tempo_preparo: '',
        quantidade_porcao: '',
        nome_ingredientes: '',
        mode_preparo: '',
      });
    
      const [file, setFile] = useState(null); // Estado separado para o arquivo
    
      // Atualiza os campos de texto, select, textarea
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      // Atualiza o estado para o arquivo
      const handleFileChange = (e) => {
        setFile(e.target.files[0]); // Obtém o arquivo selecionado
      };
    
      // Envia os dados para a API
      const handleSubmit = async (e) => {
        
        e.preventDefault(); // Evita o recarregamento da página
    
        // Cria um FormData para enviar o arquivo junto com os outros campos
        const data = new FormData();
        const id = uuidv4(); 
        // Adiciona os campos do formulário ao FormData
        for (const key in formData) {
          data.append(key, formData[key]);
        }
    
        // Adiciona o arquivo ao FormData
        if (file) {
          data.append('file', file);
        }
    
        try {
          const response = await fetch('https://api-a3-eliane.vercel.app/api/create/posts?=', {
            method: 'POST',
            body: data, // Envia o FormData
          });
    
          if (response.ok) {
            const result = await response.json();
            console.log('Receita enviada com sucesso:', result);
            alert('Receita cadastrada com sucesso!');
    
            // Reseta o formulário
            setFormData({
                nome_prato: '',
                genero_prato: '',
                nivel_dificuldade: '',
                tempo_preparo: '',
                quantidade_porcao: '',
                nome_ingredientes: '',
                mode_preparo: '',
            });
            setFile(null);
          } else {
            console.error('Erro ao enviar a receita:', response.statusText);
            alert('Erro ao cadastrar a receita.');
          }
        } catch (error) {
          console.error('Erro:', error);
          alert('Ocorreu um erro. Tente novamente.');
        }
      };
  



    return (
        <div className='form-content' >
            <form className="recipe-form" onSubmit={Forms_Conteudo}>
                <div className='div_file'>
                    clique para upload!
                    <input className='form_input_file'  type="file" id="file" name="file" required></input>

                </div>
                <label htmlFor="tipo">Nome da Receita:</label>
                <input className='form_input' value={FormData.nome_prato} onChange={handleChange} type="text" id="name" name="name" required />

                <label htmlFor="tipo">Tipo do prato:</label>
                <select className='form_input' id="tipo" name="tipo" onChange={handleChange} value={FormData.genero_prato}>
                    <option value="Bolos">Bolo</option>
                    <option value="Doces">Doces</option>
                    <option value="Salgados">Salgados</option>
                    <option value="saladas">Saladas</option>
                    <option value="comidas">Pratos caseiros</option>

                </select>

                <label htmlFor="difficulty">Dificuldade:</label>
                <select className='form_input' id="difficulty" name="difficulty" onChange={handleChange} value={FormData.nivel_dificuldade}>
                    <option value="facil">Fácil</option>
                    <option value="medio">Médio</option>
                    <option value="dificil">Difícil</option>
                </select>


                <label htmlFor="prepTime">Tempo de Preparo:</label>
                <select className='form_input' id="prepTime" name="prepTime" onChange={handleChange} value={FormData.tempo_preparo}>
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
                <input className='form_input' type="number" id="servings" name="servings" min="1" max="500" required onChange={handleChange} value={FormData.quantidade_porcao} />


                <label htmlFor="ingredients">Ingredientes:</label>
                <textarea className='form_input' id="ingredients" name="ingredients" rows="4" required onChange={handleChange} value={FormData.nome_ingredientes}></textarea>


                <label htmlFor="instructions">Modo de Preparo:</label>
                <textarea className='form_input' id="instructions" name="instructions" rows="4" required onChange={handleChange} value={FormData.mode_preparo}></textarea>

                <button className='submit-button' type="submit">Criar</button>
            </form>
        </div>
    )
  }
export default Forms_Conteudo