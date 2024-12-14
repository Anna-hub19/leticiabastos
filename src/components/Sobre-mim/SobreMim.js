import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './SobreMim.css';

function SobreMim(){
    return (
        <>
        <Header/>
        <div className='container-sobreMim'>
            <img className='foto-sobreMim' src='./imagens/fotoSobreMim.jpg'/>
            <div className='container-sobreMim-paragrafo'>
                <h2>Sobre mim: </h2>
              <h3 className='paragrafo-sobreMim'>
              Olá, meu nome é Letícia Bastos, sou psicóloga infantil especializada em Análise do Comportamento Aplicada (ABA) ao Autismo. Minha trajetória com o público infantil começou ainda na graduação, e desde então venho construindo uma carreira pautada em conhecimento, dedicação e sensibilidade.  
Acredito que o trabalho com crianças vai além das técnicas: ele deve ser fundamentado pela ciência, mas conduzido com empatia, acolhimento e afeto. Cada criança é única, e meu propósito é caminhar ao lado dela e de sua família, ajudando a construir uma trajetória de autonomia, confiança e felicidade.  
Possuo formações que enriquecem minha prática clínica, como a especialização em Intervenção para Autismo Nível 3 de Suporte e o Treinamento de Respostas Pivotais (PRT), uma abordagem naturalista focada no desenvolvimento de habilidades essenciais. Meu foco principal está na intervenção precoce, onde vejo um enorme potencial de transformação e crescimento.  
Se você busca um atendimento que valoriza a individualidade e prioriza o cuidado humanizado, será um prazer contribuir. Vamos transformar desafios em conquistas e criar uma jornada cheia de novas descobertas!

              </h3>
            </div>
           
        </div>
        <Footer/>
        </>
    )
}
export default SobreMim;