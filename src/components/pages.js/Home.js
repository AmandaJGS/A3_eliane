import img_1 from '../img/terra.png'
import './styles.css'
function Home() {
  return (
    <>
      <div className='container_home'>
        <div>
          <img src={img_1} className="foto1" />
        </div>

        <div className='conteudo'>
         

          <h1>Já pensaram no impacto que sua alimentação pode estar causando ao mundo?</h1>
          <p>O leite é o alimento mais consumido no mundo, com cerca de 580 milhões de toneladas consumidas anualmente. Em média, cada pessoa no mundo consome 116 kg de leite por ano.</p>
          <p>O leite vem de vacas e vacas, para aqueles que não respiraram fundo ao visitar uma fazenda de gado recentemente, produzem estrume - toneladas e toneladas de estrume, junto com uma quantidade enorme de metano que aquece o clima. O estrume é uma das maiores fontes de gases de efeito estufa em uma fazenda de gado leiteiro.

            Já que as vacas não vão parar de fazer cocô tão cedo, pensamos conosco, há alguma maneira de minimizar o impacto desses resíduos no meio ambiente e fazer uso dele como um recurso renovável? E a resposta é sim, mudando nossos habitos alimentares </p>

          <p>Quem nunca já ouviu a frase “quem vê cara, não vê coração” se encaixa muito bem aqui. Isso porque as PANCs possuem essa aparência de ervas daninhas, que aparentemente não parecem comestíveis, mas que na verdade escondem um universo de possibilidades na cozinha, mas guardam alto teor de nutrientes e podem ser fonte de renda para produtores, principalmente da agricultura familiar e são bons exemplos de alimento in natura. Somado aos benefícios para a saúde, essas plantas também possuem <strong>baixo impacto ambiental</strong>. Normalmente, elas possuem um crescimento espontâneo, exigem um cultivo simples, além de serem facilmente adaptáveis a diferentes ambientes. Todos esses fatores influenciam no baixo impacto ambiental. Isso sem falar que, no passado, essas plantas faziam parte da cultura e alimentação local.</p>
          
        </div>
      </div>


    </>

  )
}

export default Home