import styled, { createGlobalStyle } from 'styled-components';
import DrThomasImg from './imgs/Dr.Thomas.jpg';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Roboto+Mono:wght@400;700&display=swap');
  body {
    font-family: 'Oswald', 'Roboto Mono', Arial, sans-serif;
    background:
      url('https://st.depositphotos.com/1030985/2708/i/600/depositphotos_27088623-stock-photo-background-apocalyptic-scenario-v2.jpg') center center / cover no-repeat fixed,
      radial-gradient(ellipse at top, #444 0%, #222 100%);
    color: #eaeaea;
    margin: 0;
    padding: 32px;
    min-height: 100vh;
    letter-spacing: 0.5px;
    position: relative;
    z-index: 0;
    /* Efeito de neblina escura */
    /* Sobreposição de gradientes para simular neblina */
  box-shadow: 0 0 200px 40px #444 inset;
  }
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto 40px auto;
  padding-top: 16px;
  background: rgba(30, 30, 30, 0.98);
  border-radius: 16px;
  box-shadow: 0 0 40px 10px #0f0f0f, 0 0 80px 10px #e0b06044;
  padding: 40px 32px 32px 32px;
  color: #eaeaea;
  border: 2px solid #e0b060;
  position: relative;
  overflow: hidden;
  z-index: 1;
`;

const Imagem = styled.div`
  text-align: center;
  margin-bottom: 24px;
  position: relative;
`;

const Foto = styled.img`
  max-width: 340px;
  border-radius: 12px;
  box-shadow: 0 0 40px #e0b06088, 0 0 80px #000a;
  border: 3px solid #e0b060;
`;

const Titulo = styled.h1`
  
  color: #e0b060;
  text-align: center;
  margin-top: 16px;
  font-family: 'Oswald', 'Roboto Mono', Arial, sans-serif;
  font-size: 2.8rem;
  text-shadow: 0 0 12px #e0b06088, 0 0 24px #000a;
  letter-spacing: 2px;
`;

const Subtitulo = styled.h2`
  color: #e0b060;
  font-family: 'Oswald', 'Roboto Mono', Arial, sans-serif;
  text-shadow: 0 0 8px #e0b06044;
`;

const Destaque = styled.span`
  color: #e0b060;
  font-weight: bold;
  text-shadow: 0 0 6px #e0b06044;
`;

const Section = styled.section`
  margin-bottom: 32px;
  background: rgba(20, 20, 20, 0.7);
  border-radius: 8px;
  box-shadow: 0 0 12px #000a;
  padding: 18px 16px;
`;

const Movimentos = styled.div`
  background: #181818;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
  box-shadow: 0 0 16px #e0b06022;
`;

const MovTitulo = styled.h3`
  color: #e0b060;
  margin-top: 0;
  font-family: 'Oswald', 'Roboto Mono', Arial, sans-serif;
  text-shadow: 0 0 8px #e0b06044;
`;


function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Imagem>
          <Foto src={DrThomasImg} alt="Dr. Thomas" />
          <Titulo>Dr. Thomas</Titulo>
        </Imagem>
        <Section>
          <Subtitulo>Resumo do Personagem</Subtitulo>
          <ul>
            <li><Destaque>Classe:</Destaque> O Racional</li>
            <li><Destaque>Caminho Mágico:</Destaque> Lucerna</li>
            <li><Destaque>Idade:</Destaque> 30 anos</li>
            <li><Destaque>Aparência:</Destaque> Barba, atlético, cicatrizes, altura: 1.75m</li>
            <li><Destaque>Conceito:</Destaque> Médico de guerra traumatizado que usa seu treinamento científico para entender e combater o sobrenatural, vendo-o como uma doença a ser erradicada.</li>
            <li><Destaque>Motivação:</Destaque> "Nunca Mais". Impedir que outros sofram o mesmo destino de seus amigos e pacientes.</li>
            <li><Destaque>Conflito:</Destaque> Luta entre seu juramento de curar e a necessidade de destruir criaturas sobrenaturais.</li>
            <li><Destaque>Segredo:</Destaque> Se culpa pela morte de todos na casa. "Se eu tivesse chegado mais cedo... se eu fosse mais rápido..."</li>
            <li><Destaque>Ponto de Vulnerabilidade:</Destaque> Sobreviventes inocentes. Arrisca-se irracionalmente para salvar civis, revivendo seu fracasso passado.</li>
          </ul>
        </Section>
        <Section>
          <Subtitulo>Descrição</Subtitulo>
          <p>
            Ex-médico militar, experiente em zonas de guerra e acostumado ao caos do campo de batalha. Durante uma operação de resgate, foi enviado para socorrer sobreviventes, incluindo amigos de infância. Após confronto brutal, encontrou todos mortos por uma criatura sobrenatural. Um caçador chamado Silas o salvou e o levou à organização secreta Vigília, dedicada a combater ameaças sobrenaturais.
          </p>
        </Section>
        <Section>
          <Subtitulo>Trauma</Subtitulo>
          <ul>
            <li><Destaque>O Pesadelo:</Destaque> Encontrou amigos congelados em terror, sem ferimentos, olhos vitrificados. A criatura deixou apenas vazio e silêncio sobrenatural.</li>
            <li><Destaque>O Salvador:</Destaque> Silas, caçador experiente, usou rituais para conter a energia da criatura. Encontrou Thomas em estado catatônico, agarrado ao cadáver do amigo Mateus.</li>
            <li><Destaque>A Recuperação:</Destaque> Thomas passou semanas se recuperando do trauma psíquico, aprendendo sobre o Caminho da Umbra e devoradores de almas.</li>
          </ul>
        </Section>
        <Section>
          <Subtitulo>Motivação e Conflito Interno</Subtitulo>
          <ul>
            <li><Destaque>Motivação Primária:</Destaque> Inicialmente vingança, depois dever pessoal: garantir que ninguém mais sofra o mesmo.</li>
            <li><Destaque>Atração pelo Sobrenatural:</Destaque> Necessidade patológica de compreensão. Vê o sobrenatural como doença a ser estudada e curada.</li>
          </ul>
        </Section>
        <Section>
          <Subtitulo>Classe: O Racional</Subtitulo>
          <ul>
            <li><Destaque>Visão geral:</Destaque> Cético, mente lógica, analisa mistérios e vê detalhes ignorados por outros.</li>
            <li><Destaque>Estilo de jogo:</Destaque> Investigativo e tático. Brilha estudando pistas, criando teorias e equipamentos.</li>
            <li><Destaque>Motivação dramática:</Destaque> Cientista, policial ou médico que busca salvar vidas pela lógica.</li>
          </ul>
        </Section>
        <Section>
          <Subtitulo>Movimentos</Subtitulo>
          <Movimentos>
            <MovTitulo>Nunca Desiste (CON)</MovTitulo>
            <ul>
              <li><Destaque>Sucesso:</Destaque> Ação completa antes de cair inconsciente.</li>
              <li><Destaque>Parcial:</Destaque> Última ação menor, depois cai.</li>
              <li><Destaque>Falha:</Destaque> Cai imediatamente.</li>
            </ul>
          </Movimentos>
          <Movimentos>
            <MovTitulo>Análise Forense (INT)</MovTitulo>
            <p>Pode fazer pergunta extra ao Mestre ao analisar pistas/amostras.</p>
          </Movimentos>
          <Movimentos>
            <MovTitulo>Kit de Especialista (INT)</MovTitulo>
            <p>Começa com kit especializado à escolha (primeiros socorros, lockpicks, armas exóticas).</p>
          </Movimentos>
        </Section>
        <Section>
          <Subtitulo>Atributos</Subtitulo>
          <ul>
            <li>+2 Inteligência (INT)</li>
            <li>+1 Percepção (PER)</li>
            <li>0 Constituição (CON)</li>
            <li>0 Força (FOR)</li>
            <li>-1 Carisma (CAR)</li>
            <li>-1 Destreza (DES)</li>
          </ul>
        </Section>
        <Section>
          <Subtitulo>Perícias</Subtitulo>
          <ul>
            <li>Armas de fogo</li>
            <li>Medicina</li>
            <li>Investigação</li>
          </ul>
        </Section>
        <Section>
          <Subtitulo>Caminho Mágico: Lucerna</Subtitulo>
          <p><Destaque>Olhar da Verdade:</Destaque> Enxerga detalhes ocultos, falhas na realidade e aspectos monstruosos.</p>
        </Section>
        <Section>
          <Subtitulo>Equipamento</Subtitulo>
          <ul>
            <li>Maleta médica adaptada:
              <ul>
                <li>2 Soro regenerativo (Cura 2d10+4, -1 PER na próxima ação)</li>
                <li>1 Bandagens com runas de contenção (Cura 2d8 PV, remove sangramento)</li>
                <li>Lanterna tática com filtro infravermelho</li>
                <li>Diário de anotações sobre criaturas</li>
                <li>Adrenalina em autoinjetor</li>
                <li>Spray hemostático</li>
                <li>Kit de desinfecção de emergência</li>
                <li>Morfina (ou equivalente mágico)</li>
                <li>Ferramenta multifuncional</li>
                <li>Cartucho de fumaça</li>
                <li>Seringa de prata</li>
                <li>Veneno paralizante</li>
                <li>Distintivo de ex-militar</li>
              </ul>
            </li>
            <li>Pistola</li>
            <li>Escopeta</li>
          </ul>
        </Section>
      </Container>
    </>
  );
}

export default App;
