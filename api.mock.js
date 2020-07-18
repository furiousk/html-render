const dataset = [{
    html: `
    <html>
        <head></head>
        <body style="font-family: &quot;Open Sans&quot;, serif;color: hsl(0, 0%, 7%);background-color: #F6F7FB;margin: 0 !important;padding: 0 !important">
            <span id="capa" epub:type="pagebreak"></span>
            <section epub:type="chapter">
                <h1 hidden="" title="Capa" style="font-size: 2em;line-height: 1.175em;font-weight: 700;color: #55A8FD;padding-top: 0.938em;padding-bottom: 0.538em;text-align: left;font-style: normal"></h1>
                <figure class="figura-capa" style="display: flex;justify-content: center;text-align: center;width: 100%;margin: 0 auto 0 auto">
                    <img class="figura-capa" src="https://staticbv.am4.com.br/publicacoes/5/20665/capa.png" style="max-width: 100% !important">
                </figure>
            </section>
        </body>
    </html>
    `
},{
    html: `
    <html><head></head><body style="font-family: &quot;Open Sans&quot;, serif;color: hsl(0, 0%, 7%);background-color: #F6F7FB;margin: 0 !important;padding: 0 !important">
    <span id="page-R02" epub:type="pagebreak"></span>
    <section epub:type="chapter">
      <div>
        <figure class="figura-capa" style="display: flex;justify-content: center;text-align: center;width: 100%;margin: 0 auto 0 auto">
          <img class="figura-capa" src="https://staticbv.am4.com.br/publicacoes/5/20665/falso.png" alt="" style="max-width: 100% !important">
        </figure>
      </div>
    </section>
  </body></html>`
},{
  html:`<html><head></head><body style="font-family: &quot;Open Sans&quot;, serif;color: hsl(0, 0%, 7%);background-color: #F6F7FB;margin: 0 !important;padding: 0 !important">
  <span id="page-R03" epub:type="pagebreak"></span>

  <section epub:type="chapter">
    <div>
      <h1 hidden="" title="Folha de Rosto" style="font-size: 2em;line-height: 1.175em;font-weight: 700;color: #55A8FD;padding-top: 0.938em;padding-bottom: 0.538em;text-align: left;font-style: normal"></h1>

      <figure class="figura-capa" style="display: flex;justify-content: center;text-align: center;width: 100%;margin: 0 auto 0 auto">
        <img class="figura-pagina" src="https://staticbv.am4.com.br/publicacoes/5/20665/rosto.png" alt="" style="max-width: 100% !important;display: block;max-height: 95%;margin: 1% auto 0.5% auto">
      </figure>
    </div>
  </section>
</body></html>`
},{
  html:`<html><head></head><body style="font-family: &quot;Open Sans&quot;, serif;color: hsl(0, 0%, 7%);background-color: #F6F7FB;margin: 0 !important;padding: 0 !important">
  <span id="page-R04" epub:type="pagebreak"></span>

  <section epub:type="chapter">
    <div>
      <h1 hidden="" title="Página de Créditos" style="font-size: 2em;line-height: 1.175em;font-weight: 700;color: #55A8FD;padding-top: 0.938em;padding-bottom: 0.538em;text-align: left;font-style: normal"></h1>

      <p class="centro" style="text-align: center">2006 by Hong Yuh Ching</p>

      <p class="centro" style="text-align: center">Todos os direitos reservados.Nenhuma parte desta publicação poderá ser reproduzida ou transmitida de qualquer modo ou por qualquer outro meio, eletrônico ou mecânico, incluindo fotocópia, gravação ou qualquer outro tipo de sistema de armazenamento e transmissão de informação, sem prévia autorização, por escrito, da Pearson Education do Brasil.</p>

      <p class="centro" style="text-align: center"><i>Gerente editorial</i>: Roger Trimer <i>Editora de desenvolvimento</i>: Marileide Gomes <i>Editora de texto</i>: Sheila Fabre <i>Preparação</i>: Márcio Della Rosa <i>Revisão</i>: Maria Luíza Favret e Angélica Freitas <i>Capa</i>: Marcelo da Silva Françozo <i>Editoração eletrônica</i>: Laser House</p>

      <p class="centro" style="text-align: center"><strong style="text-align: left;font-style: normal">Dados Internacionais de Catalogação na Publicação (CIP) (Câmara Brasileira do Livro, SP, Brasil)</strong></p>

      <div class="box-creditos-1" style="padding: 5px;margin: 0 0 0 0;border-radius: 10px;border-collapse: collapse;border-color: inherit;border-style: solid;border-width: 1px">
        <p class="centro" style="text-align: center">Hong, Yuh Ching</p>

        <p class="centro" style="text-align: center">Contabilidade gerencial / Hong Yuh Ching. — São Paulo : Pearson Prentice Hall, 2006.</p>

        <p class="centro" style="text-align: center">Bibliografia.</p>

        <p class="centro" style="text-align: center">ISBN 85-7605-048-X</p>

        <p class="centro" style="text-align: center">1. Contabilidade 2. Contabilidade gerencial</p>

        <p class="centro" style="text-align: center">I. Título.</p>

        <p class="centro" style="text-align: center"><span class="sublinhado" style="text-decoration: underline">05-7771 CDD-657</span></p>
      </div>

      <p class="centro" style="text-align: center"><strong style="text-align: left;font-style: normal">Índices para catálogo sistemático:</strong></p>

      <p class="centro" style="text-align: center">1. Contabilidade gerencial 657</p>

      <p class="centro" style="text-align: center">2005 Direitos exclusivos para a língua portuguesa cedidos à</p>

      <p class="centro" style="text-align: center">Pearson Education do Brasil, uma empresa do grupo Pearson Education Av.Ermano Marchetti, 1435 CEP 05038-001 – Lapa – São Paulo – SP Tel.: (11) 3613-1222 – Fax: 3611-0444 e-mail: vendas@pearsoned.com</p>
    </div>
  </section>
</body></html>`
},{
  html:`<html><head></head><body style="font-family: &quot;Open Sans&quot;, serif;color: hsl(0, 0%, 7%);background-color: #F6F7FB;margin: 0 !important;padding: 0 !important">
  <span id="page-R05" epub:type="pagebreak"></span>

  <section epub:type="chapter">
    <div>
      <h1 class="titulo-0" style="font-size: 2em;line-height: 1.175em;font-weight: 700;color: #55A8FD;padding-top: 0.938em;padding-bottom: 0.538em;text-align: left;font-style: normal">Prefácio</h1>

      <p style="text-align: justify">O uso das novas tecnologias da informação e das comunicações na gestão dos negócios tem provocado contínua renovação das práticas contábeis.</p>

      <p style="text-align: justify">As formas emergentes de organização, indispensáveis para adaptar as empresas ao seu meio ambiente em constante mutação, exigem uma contabilidade analítica bem mais avançada do que a contabilidade financeira e gerencial tradicionais.</p>

      <p style="text-align: justify">Nos últimos anos, vem se afirmando a contabilidade gerencial como um sistema de mensuração e informação, útil na tomada de decisão, focalizado no funcionamento das atividades dos processos produtivos. Ela rompe os limites dos modelos clássicos de custos ao identificar a dinâmica dos direcionadores das atividades necessárias para a produção dos bens e serviços. Proporciona uma base de informações preciosa para a transição das organizações à gestão por processos, integrando a cadeia de valor.</p>

      <p style="text-align: justify">É nesse contexto de modernidade que está sendo publicado o livro do professor Hong Yuh Ching sobre a contabilidade gerencial. É uma obra que se inicia com a apresentação didática dos conceitos renovados da contabilidade e o uso combinado de medidas financeiras e não financeiras nas decisões relativas à gestão da cadeia de valor. Termina com a proposta avançada de um novo modelo de mensuração do desempenho dos negócios alinhado ao alcance dos objetivos estratégicos da empresa, que foi objeto de seu doutoramento na Universidade Estadual de Campinas.</p>

      <p style="text-align: justify">Nos capítulos intermediários, o leitor tem a oportunidade de afirmar e ampliar conhecimentos a respeito de questões fundamentais. A evolução dos sistemas tradicionais de custo para o custeio por atividades (ABC) é apresentada numa interessante correlação com os novos métodos de formação dos preços e orientada aos clientes ao longo do ciclo de vida dos produtos. Na gestão baseada em atividades, há o resgate do orçamento como importante ferramenta de planejamento e controle, ao associá-lo a um plano mestre de resultados estratégicos. O autor propõe ainda um modelo genérico de gestão de negócio para a efetiva</p>
    </div>
  </section>
</body></html>`
},{
  html:`<html><head></head><body style="font-family: &quot;Open Sans&quot;, serif;color: hsl(0, 0%, 7%);background-color: #F6F7FB;margin: 0 !important;padding: 0 !important">
  <span id="page-R06" epub:type="pagebreak"></span>

  <section epub:type="chapter">
    <div>
      <p style="text-align: justify">geração e manutenção de valor, com base na otimização de processos, nas perspectivas de curto, médio e longo prazos.</p>

      <p style="text-align: justify">Hong Yuh Ching é autor consagrado em nosso país. Seus diversos livros sobre contabilidade e finanças para não especialistas, gestão por atividades, cadeia de logística integrada, dentre outros, têm sido muito úteis para a disseminação dos novos conceitos contábeis em programas de graduação e pós-graduação de diversos cursos voltados à mensuração à melhoria da performance dos negócios.</p>

      <p style="text-align: justify">O autor tem o mérito de ilustrar diversos capítulos com exemplos práticos e tópicos para discussão formulados a partir da experiência brasileira. Ele os selecionou de sua bemsucedida prática de consultor em diversas organizações empresariais nas áreas de governo, indústria e serviços. A organização metódica desta obra se deve à condição acadêmica de seu magistério.</p>

      <p style="text-align: justify">A contabilidade gerencial transcende o restrito espaço da contabilidade financeira. O caráter multifuncional de seus instrumentos de análise congrega, num trabalho sistêmico, contadores, engenheiros, economistas, administradores, bem como outros profissionais responsáveis pela elaboração, planejamento, implantação e controle da estratégias de negócios e dos sistemas de informação e gestão por processos. A todos esses profissionais recomenda-se a leitura deste livro.</p>

      <p class="direita" style="text-align: right">Florianópolis, novembro de 2005.</p>

      <p class="direita" style="text-align: right">ANTÔNIO DIOMÁRIO DE QUEIROZ</p>

      <p class="direita" style="text-align: right">Professor em gestão de negócios do Programa de Pós-Graduação em</p>

      <p class="direita" style="text-align: right">Engenharia de Produção da Universidade Federal de Santa Catarina.</p>

      <p class="direita" style="text-align: right">Doutor pela Université de Paris I — Sorbonne, França.</p>

      <p class="direita" style="text-align: right">Secretário de Estado da Educação, Ciência e Tecnologia de Santa Catarina.</p>
    </div>
  </section>
</body></html>`
},{
  html:`<html><head></head><body style="font-family: &quot;Open Sans&quot;, serif;color: hsl(0, 0%, 7%);background-color: #F6F7FB;margin: 0 !important;padding: 0 !important">
  <span id="page-R07" epub:type="pagebreak"></span>

  <section epub:type="chapter">
    <div>
      <nav epub:type="toc" id="toc"><h1 class="titulo-0" style="font-size: 2em;line-height: 1.175em;font-weight: 700;color: #55A8FD;padding-top: 0.938em;padding-bottom: 0.538em;text-align: left;font-style: normal">Sumário</h1>

      <ol>
        <li style="line-height: 1.8em;color: #0B0B0B;display: block"><br style="display: none"></li>

        <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">PARTE I - FUNDAMENTOS DA CONTABILIDADEGERENCIAL</a></li>

        <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">CAPÍTULO 1 - Entendendo a contabilidade gerencial e o uso de medidas não financeiras</a> 

        <ol>
          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">1.1 Necessidade de informação contábil gerencial</a></li>

          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">1.2 Diferença entre contabilidade gerencial e contabilidade financeira</a></li>

          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">1.3 Mudança do ambiente empresarial</a></li>

          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">1.4 Papel da contabilidade gerencial neste novo ambiente</a></li>

          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">1.5 Importância do uso de medidas não-financeiras</a></li>
        </ol></li>

        <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">CAPÍTULO 2 - Conceito de cadeia de valor e o foco em processos e atividades</a> 

        <ol>
          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">2.1 Organização vista como seqüência de atividades</a></li>

          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">2.2 Focando a cadeia de valor</a></li>

          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">2.3 Alguns desenhos de cadeia de valor e suas estratégias</a></li>

          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">2.4 Objetivos de desempenho da cadeia de valor</a></li>
        </ol></li>

        <li style="line-height: 1.8em;color: #0B0B0B;display: block"><br style="display: none"></li>
      </ol></nav>
    </div>
  </section>
</body></html>`
},{
  html:`<html><head></head><body style="font-family: &quot;Open Sans&quot;, serif;color: hsl(0, 0%, 7%);background-color: #F6F7FB;margin: 0 !important;padding: 0 !important">
  <span id="page-R08" epub:type="pagebreak"></span>

  <section epub:type="chapter">
    <div>
      <nav epub:type="toc" id="toc"><ol>
        <li style="line-height: 1.8em;color: #0B0B0B;display: block"><br style="display: none"></li>

        <li style="line-height: 1.8em;color: #0B0B0B;display: block"><ol></ol></li>

        <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">PARTE II - GESTÃO DE CUSTOS E PREÇO</a></li>

        <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">CAPÍTULO 3 - Conceitos de custos e sistemas de custeio</a> 

        <ol>
          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">3.1 Custos no cenário presente</a></li>

          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">3.2 Terminologia e conceitos de custos</a></li>

          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">3.3 Sistema de custeio por absorção</a></li>

          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">3.4 Sistema de custeio variável</a></li>

          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">3.5 Margem de contribuição e ponto de equilíbrio</a></li>
        </ol></li>

        <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">CAPÍTULO 4 - Sistemas tradicionais de custo</a> 

        <ol>
          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">4.1 Custeio por ordem de produção</a></li>

          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">4.2 Custeio por processo</a></li>

          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">4.3 Custo-meta e custo kaizen (target e kaizen costing)</a></li>
        </ol></li>

        <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">CAPÍTULO 5 - Sistema de custeio baseado em atividades (ABC)</a> 

        <ol>
          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">5.1 Críticas em relação aos sistemas tradicionais de custo e contabilidade</a></li>

          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">5.2 Entendendo a metodologia do ABC por meio de um estudo de caso</a></li>

          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">5.3 Estrutura do sistema ABC</a></li>

          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">5.4 Levantamento das atividades e criação do Dicionário de Atividades</a></li>

          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">5.5 Continuação do caso da Celulose S.A.</a></li>
        </ol></li>

        <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">CAPÍTULO 6 - Custos e formação de preços</a> 

        <ol>
          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">6.1 Estratégia de preço baseada em valor</a></li>

          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">6.2 Preço ao longo do ciclo de vida de um produto</a></li>

          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">6.3 Etapas para uma adequada precificação ou fixação de preço</a></li>

          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">6.3 Decisões de precificação de curto e longo prazo</a></li>
        </ol></li>

        <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">CAPÍTULO 7 - Gestão baseada em atividades ABM</a> 

        <ol>
          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">7.1 Entendendo ABM gestão baseada em atividades mediante um estudo de caso</a></li>

          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">7.2 Movendo de ABC para ABM</a></li>

          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><br style="display: none"></li>
        </ol></li>
      </ol></nav>
    </div>
  </section>
</body></html>`
},{
  html:`<html><head></head><body style="font-family: &quot;Open Sans&quot;, serif;color: hsl(0, 0%, 7%);background-color: #F6F7FB;margin: 0 !important;padding: 0 !important">
  <span id="page-R09" epub:type="pagebreak"></span>

  <section epub:type="chapter">
    <div>
      <nav epub:type="toc" id="toc"><ol>
        <li style="line-height: 1.8em;color: #0B0B0B;display: block"><br style="display: none"></li>

        <li style="line-height: 1.8em;color: #0B0B0B;display: block"><ol>
          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">7.3 Análise do caso de uma indústria química</a></li>

          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">7.4 Capacidade dos recursos disponíveis: utilizada e não utilizada</a></li>
        </ol></li>

        <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">CAPÍTULO 8 - Usando orçamento para planejar os resultados</a> 

        <ol>
          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">8.1 Planejamento orçamentário no contexto do planejamento empresarial</a></li>

          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">8.2 Plano mestre de orçamento</a></li>

          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">8.3 Elaborando o plano mestre e os planos que o compõem</a></li>
        </ol></li>

        <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">PARTE III - FERRAMENTAS DE PLANEJAMENTO E CONTROLE</a></li>

        <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">CAPÍTULO 9 - Gestão de negócio</a> 

        <ol>
          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">9.1 Conceito de negócio</a></li>

          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">9.2 O que existe atualmente: gestão por função ou especialidade</a></li>

          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">9.3 Mudando o paradigma da gestão de negócio — Enxergando o todo</a></li>

          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">9.4 Apresentando um modelo genérico de gestão de negócio</a></li>
        </ol></li>

        <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">CAPÍTULO 10 - Sistemas de mensuração de desempenho</a> 

        <ol>
          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">10.1 Problemas com os sistemas de mensuração de desempenho</a></li>

          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">10.2 Premissas básicas de um sistema de mensuração de desempenho</a></li>

          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">10.3 Escolha das medidas de desempenho</a></li>

          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">10.4 Alguns exemplos de modelos de mensuração de desempenho</a></li>

          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">10.5 Explorando o modelo BSC (Balanced Scorecard)</a></li>

          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">10.6 Análise crítica dos modelos de mensuração de desempenho identificados</a></li>
        </ol></li>

        <li style="line-height: 1.8em;color: #0B0B0B;display: block"><br style="display: none"></li>
      </ol></nav>
    </div>
  </section>
</body></html>`
},{
  html:`<html><head></head><body style="font-family: &quot;Open Sans&quot;, serif;color: hsl(0, 0%, 7%);background-color: #F6F7FB;margin: 0 !important;padding: 0 !important">
  <span id="page-R10" epub:type="pagebreak"></span>

  <section epub:type="chapter">
    <div>
      <nav epub:type="toc" id="toc"><ol>
        <li style="line-height: 1.8em;color: #0B0B0B;display: block"><br style="display: none"></li>

        <li style="line-height: 1.8em;color: #0B0B0B;display: block"><ol></ol></li>

        <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">CAPÍTULO 11 - Uma proposta de um novo modelo de mensuração de desempenho</a> 

        <ol>
          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">11.1 Abordagem do projeto axiomático</a></li>

          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">11.2 Alguns conceitos de manufatura enxuta</a></li>

          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">11.3 Definição do modelo de negócio da empresa e seus objetivos estratégicos</a></li>

          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">11.4 Lógica do modelo de mensuração de desempenho proposto</a></li>

          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">11.5 Decomposição do sistema de manufatura enxuta</a></li>

          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">11.6 Definição e forma de cálculo das medidas de desempenho Nesta seção, são definidas todas as medidas de desempenho demonstradas e suas fórmulas de cálculo.</a></li>
        </ol></li>

        <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">CAÍTULO 12 - Aplicação prática do modelo em uma empresa brasileira</a> 

        <ol>
          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">12.1 Sobre a empresa</a></li>

          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">12.2 Sobre o produto cartucho</a></li>

          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">12.3 Área de aplicação prática na empresa</a></li>

          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">12.4 Mapas dos fluxos de valor</a></li>

          <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">12.5 Resultados advindos da aplicação do modelo e comparação com a situação anterior</a></li>
        </ol></li>

        <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">Bibliografia</a></li>

        <li style="line-height: 1.8em;color: #0B0B0B;display: block"><a href="#" style="color: #55A8FD;font-size: 1.3em;text-decoration: none">Índice remissivo</a></li>
      </ol></nav>
    </div>
  </section>
</body></html>`
},{
  html:`<html><head></head><body style="font-family: &quot;Open Sans&quot;, serif;color: hsl(0, 0%, 7%);background-color: #F6F7FB;margin: 0 !important;padding: 0 !important">
  <span id="page-001" epub:type="pagebreak"></span>

  <section epub:type="chapter">
    <div>
      <h1 class="parte" style="font-size: 2em;line-height: 1.175em;font-weight: 700;color: #55A8FD;padding-top: 0.938em;padding-bottom: 0.538em;text-align: right;font-style: normal"><i>PARTE I - FUNDAMENTOS DA CONTABILIDADEGERENCIAL</i></h1>
    </div>
  </section>
</body></html>`
},{
  html:`<html><head></head><body style="font-family: &quot;Open Sans&quot;, serif;color: hsl(0, 0%, 7%);background-color: #F6F7FB;margin: 0 !important;padding: 0 !important">
  <span id="page-003" epub:type="pagebreak"></span>

  <section epub:type="chapter">
    <div>
      <h1 class="titulo-1" style="font-size: 2em;line-height: 1.175em;font-weight: 700;color: #55A8FD;padding-top: 0.938em;padding-bottom: 0.538em;text-align: left;font-style: normal"><i>CAPÍTULO 1 - Entendendo a contabilidade gerencial e o uso de medidas não financeiras</i></h1>

      <p style="text-align: justify"><i>Após a leitura deste capítulo, você deverá ser capaz de:</i></p>

      <p class="bullet-1" style="text-align: justify;margin-left: 3em;text-indent: -1em">• <i>Entender a importância do papel da contabilidade gerencial nas diferentes organizações.</i></p>

      <p class="bullet-1" style="text-align: justify;margin-left: 3em;text-indent: -1em">• <i> Explicar as diferenças entre contabilidade financeira e contabilidade gerencial.</i></p>

      <p class="bullet-1" style="text-align: justify;margin-left: 3em;text-indent: -1em">• <i> Apreciar como diferentes pessoas na organização têm diferentes demandas de informações gerenciais.</i></p>

      <p class="bullet-1" style="text-align: justify;margin-left: 3em;text-indent: -1em">• <i> Discutir por que contabilidade gerencial deve incluir informações financeiras e não financeiras.</i></p>

      <h2 class="titulo-2" id="sigil_toc_id_1" style="font-size: 1.6em;line-height: 1.175em;font-weight: 700;color: #484848;padding-top: 0.938em;text-align: left;font-style: normal">1.1<strong style="text-align: left;font-style: normal"> Necessidade de informação contábil gerencial</strong></h2>

      <p style="text-align: justify">Considere as seguintes perguntas em suas respectivas situações:</p>

      <p class="bullet-1" style="text-align: justify;margin-left: 3em;text-indent: -1em">• Vários bancos no Brasil oferecem serviços aos seus clientes para que eles não precisem deslocar-se fisicamente até as agências, tais como coleta de depósitos em cheques, entrega de talão de cheque, atendimento pessoal e exclusivo etc., tudo sem custo adicional desde que o cliente tenha uma renda mínima e/ou mantenha um saldo mínimo em conta. Quanto custa ao banco oferecer esses serviços gratuitos?</p>

      <p class="bullet-1" style="text-align: justify;margin-left: 3em;text-indent: -1em">• Um gerente de produto considera a idéia de distribuir amostras grátis em diversos pontos promocionais na expectativa de aumentar as vendas. Como o custo dessas amostras grátis mais seu custo de distribuição se comparam com o lucro incremental?</p>
    </div>
  </section>
</body></html>`
},{
  html:`<html><head></head><body style="font-family: &quot;Open Sans&quot;, serif;color: hsl(0, 0%, 7%);background-color: #F6F7FB;margin: 0 !important;padding: 0 !important">
  <span id="page-004" epub:type="pagebreak"></span>

  <section epub:type="chapter">
    <div>
      <p class="bullet-1" style="text-align: justify;margin-left: 3em;text-indent: -1em">• Uma editora que publica revistas e as vende em bancas de jornal decide quantos exemplares devem ser distribuídos nas bancas de uma região da cidade, isto é, se deixa um ‘encalhe’ (sobra) ou assume o risco de faltar exemplares. Qual é o custo desse ‘exemplar a mais’ <i>versus</i> a margem que a editora deixará de ganhar, caso o produto venha a faltar?</p>

      <p class="bullet-1" style="text-align: justify;margin-left: 3em;text-indent: -1em">• Um restaurante que serve comida por quilo no almoço considera a possibilidade de abrir o local à noite para servir refeições à la carte, para diluir o custo do investimento feito no local e a despesa do seu aluguel. Vale a pena incorrer em custos adicionais, como luz, água, funcionários, limpeza e alimentação diante da receita incremental ou se deve ficar como está? Qual o ponto de equilíbrio a ser atingido para compensar os custos?</p>

      <p class="bullet-1" style="text-align: justify;margin-left: 3em;text-indent: -1em">• Uma empresa de autopeças preparou três especificações de manufatura possíveis para uma peça de um cliente. Qual delas é a que tem melhor custo–benefício para o cliente?</p>

      <p style="text-align: justify">O objetivo básico da informação contábil é ajudar as pessoas, dentro e fora das organizações, a tomar decisões; é o caso de executivos em nível sênior, gerentes de nível médio ou colaboradores de ‘linha de frente’ em qualquer tipo de organização (manufatura, serviço, comércio) e/ou em qualquer função organizacional (comercial, financeiro, recursos humanos ou produção). Também pode haver investidores, credores e clientes que se utilizam de tais informações.</p>

      <p style="text-align: justify">A expansão de uma empresa para outras regiões deve ser planejada com extremo cuidado pela administração. Devem ser pesadas as oportunidades com a necessidade de recursos a serem investidos pela empresa. Devem ser levados em conta o tamanho do mercado da região, as projeções de vendas, os investimentos, os custos e as margens de lucro. Os planos da administração devem ser detalhados em orçamentos para cada uma das áreas funcionais da empresa e regularmente controlados. Nesta etapa, a administração procura assegurar que os planos estejam sendo seguidos, mediante, por exemplo, sistemas de mensuração de desempenho nos quais as informações financeiras e operacionais são consideradas de forma harmônica.</p>

      <p style="text-align: justify">As etapas de planejamento e controle acima descritas são necessárias às empresas em expansão, às que buscam promover a manutenção do negócio e às em retração, bem como aos seus gestores. Para que estes possam realizar suas atividades adequadamente, a informação contábil gerencial exerce um papel vital.</p>

      <p style="text-align: justify">É esse o arcabouço do que passaremos a chamar de <i>contabilidade gerencial</i>.</p>

      <p style="text-align: justify">Segundo Garrison &amp; Noreen (2001), a contabilidade gerencial fornece informações essenciais segundo as quais as empresas são efetivamente geridas; ela destina essas informações a pessoas dentro das organizações. Para Horngren et al (2002), trata-se do processo de identificar, medir, acumular, analisar, preparar, interpretar e comunicar informação que ajude os gerentes a cumprir os objetivos organizacionais. O Instituto de Contadores Gerenciais dos Estados Unidos, (IMA, www.inamet.org) define contabilidade gerencial como um processo contínuo de melhoria de planejamento, desenho, mensuração e operação de sistemas de informação financeiro e não-financeiro. Tal processo direciona a ação gerencial, motiva comportamentos, suporta e cria valores culturais necessários para uma empresa alcançar seus objetivos estratégicos, táticos e operacionais.</p>
    </div>
  </section>
</body></html>`
},{
  html:`<html><head></head><body style="font-family: &quot;Open Sans&quot;, serif;color: hsl(0, 0%, 7%);background-color: #F6F7FB;margin: 0 !important;padding: 0 !important">
  <span id="page-005" epub:type="pagebreak"></span>

  <section epub:type="chapter">
    <div>
      <p style="text-align: justify">Enquanto Garrison &amp; Noreen e Horngren et al discorrem sobre informação de forma generalizada e ampla, o IMA a enfatiza como processo financeiro e não financeiro. Relacionam-se a este último as informações físicas ou operacionais provenientes de diversas áreas funcionais da empresa. Assim, na área comercial, os objetivos concentram-se nas informações sobre a satisfação do cliente, no recebimento dos produtos no prazo combinado e na participação no mercado. Na área de manufatura, na qualidade dos produtos, no índice de rejeição, no retrabalho, no tempo de processo. Na área de desenvolvimento, <i>timeto-market</i> (tempo de introdução do produto no mercado) e performance do produto. Na área de recursos humanos, <i>turnover</i> dos colaboradores, satisfação e qualidade no trabalho. Esse conjunto de informações não financeiras alavanca a maneira como os gerentes irão atingir seus objetivos.</p>

      <h2 class="titulo-2" style="font-size: 1.6em;line-height: 1.175em;font-weight: 700;color: #484848;padding-top: 0.938em;text-align: left;font-style: normal">1.2<strong style="text-align: left;font-style: normal"> Diferença entre contabilidade gerencial e contabilidade financeira</strong></h2>

      <p style="text-align: justify">A contabilidade financeira refere-se à informação contábil desenvolvida para o uso de pessoas e entidades fora da organização, tais como acionistas, investidores, bancos, governo, clientes e fornecedores e a sociedade (Horngren et al, 2002). É o processo de produzir relatórios financeiros para constituintes externos, delimitado por padrões, convenções, autoridades fiscais e exigências dos auditores independentes (Atkinson et al, 2001).1</p>

      <p style="text-align: justify">A Tabela 1.1 ilustra as principais diferenças entre a contabilidade gerencial e a financeira.</p>

      <h5 class="subtitulo-1 sigil_not_in_toc" style="font-size: 1.2em;text-align: left;font-style: normal;padding: 0.5em 0 0.5em 0"><strong style="text-align: left;font-style: normal">Usuários</strong></h5>

      <p style="text-align: justify">As informações da contabilidade financeira são destinadas ao uso do público externo, conforme mencionado. No entanto, também servem para o consumo do público interno da organização, notadamente seus colaboradores. É desse modo que são obtidas informações sobre o faturamento da empresa em que trabalham, se ela tem lucro ou prejuízo, quanto custam as mercadorias que são vendidas, qual é a despesa com marketing e vendas e ainda quanto ela tem de ativo imobilizado. O interesse aumenta ainda mais se os executivos têm seus bônus atrelados aos resultados.</p>

      <p style="text-align: justify">Em contraste, as informações da contabilidade gerencial são voltadas exclusivamente ao público interno da organização, porque a contabilidade gerencial é desenvolvida para atender às necessidades de planejamento, controle e avaliação de desempenho. O público externo não iria compreender tais informações, pois não há uniformidade de comparação entre empresas e não são seguidas regras definidas. <sup class="sobrescrito" style="vertical-align: text-top;line-height: 1;font-size: 0.7em"><span id="footnote-000-backlink"><a class="_idFootnoteLink _idGenColorInherit" href="../Text/page-005.xhtml#footnote-000" style="color: #55A8FD">1</a></span></sup></p>

      <hr class="HorizontalRule-1">

      <div class="_idFootnotes">
        <div id="footnote-000" class="_idFootnote" epub:type="footnote">
          <p class="rodape" style="text-align: justify;font-size: .8em"><a class="_idFootnoteAnchor _idGenColorInherit" href="../Text/page-005.xhtml#footnote-000-backlink" style="color: #55A8FD">1</a> Os interessados em saber mais sobre contabilidade financeira podem recorrer a CHING, Yuh Hong, <i>Contabili</i><i>dade e finanças para não especialistas</i>. São Paulo: Pearson Education, 2003.</p>
        </div>
      </div>
    </div>
  </section>
</body></html>`
},{
  html:`<html><head></head><body style="font-family: &quot;Open Sans&quot;, serif;color: hsl(0, 0%, 7%);background-color: #F6F7FB;margin: 0 !important;padding: 0 !important">
  <span id="page-006" epub:type="pagebreak"></span>

  <section epub:type="chapter">
    <div>
      <p style="text-align: justify"><strong style="text-align: left;font-style: normal">Tabela 1.1 </strong>Diferenças entre a contabilidade financeira e a gerencial</p>

      <table id="table001" class="tabela-normal" style="display: inline-table;margin: 0 auto;padding: .25em;font-size: .8em;text-align: left;border-collapse: collapse;border-color: #2A2A2A;border-style: solid;border-width: 1px;width: 100%">
        <colgroup>
          <col>

          <col>

          <col>
        </colgroup>

        <tbody>
          <tr style="width: auto;padding: .25em">
            <td class="celula-titulo" style="width: auto;padding: 0.5em;font-weight: bold;color: #FFFFFF;background-color: #55A8FD;text-align: center;vertical-align: middle;margin: 0 auto;border-color: #FFFFFF;border-style: solid;border-width: 1px">
              &nbsp;
            </td>

            <td class="celula-titulo" style="width: auto;padding: 0.5em;font-weight: bold;color: #FFFFFF;background-color: #55A8FD;text-align: center;vertical-align: middle;margin: 0 auto;border-color: #FFFFFF;border-style: solid;border-width: 1px">
              <p style="text-align: justify"><strong style="text-align: left;font-style: normal">Contabilidade financeira</strong></p>
            </td>

            <td class="celula-titulo" style="width: auto;padding: 0.5em;font-weight: bold;color: #FFFFFF;background-color: #55A8FD;text-align: center;vertical-align: middle;margin: 0 auto;border-color: #FFFFFF;border-style: solid;border-width: 1px">
              <p style="text-align: justify"><strong style="text-align: left;font-style: normal">Contabilidade gerencial</strong></p>
            </td>
          </tr>

          <tr style="width: auto;padding: .25em">
            <td class="celula-normal" style="width: auto;padding: .25em;border-collapse: collapse;border-color: #2A2A2A;border-style: solid;border-width: 1px">
              <p style="text-align: justify">Usuários</p>
            </td>

            <td class="celula-normal" style="width: auto;padding: .25em;border-collapse: collapse;border-color: #2A2A2A;border-style: solid;border-width: 1px">
              <p style="text-align: justify">Primordialmente o público externo</p>
            </td>

            <td class="celula-normal" style="width: auto;padding: .25em;border-collapse: collapse;border-color: #2A2A2A;border-style: solid;border-width: 1px">
              <p style="text-align: justify">Pessoas dentro da organização</p>
            </td>
          </tr>

          <tr style="width: auto;padding: .25em">
            <td class="celula-normal" style="width: auto;padding: .25em;border-collapse: collapse;border-color: #2A2A2A;border-style: solid;border-width: 1px">
              <p style="text-align: justify">Tipo de informação</p>
            </td>

            <td class="celula-normal" style="width: auto;padding: .25em;border-collapse: collapse;border-color: #2A2A2A;border-style: solid;border-width: 1px">
              <p style="text-align: justify">Somente medidas financeiras</p>
            </td>

            <td class="celula-normal" style="width: auto;padding: .25em;border-collapse: collapse;border-color: #2A2A2A;border-style: solid;border-width: 1px">
              <p style="text-align: justify">Medidas financeiras mais informações operacionais e físicas</p>
            </td>
          </tr>

          <tr style="width: auto;padding: .25em">
            <td class="celula-normal" style="width: auto;padding: .25em;border-collapse: collapse;border-color: #2A2A2A;border-style: solid;border-width: 1px">
              <p style="text-align: justify">Foco do tempo</p>
            </td>

            <td class="celula-normal" style="width: auto;padding: .25em;border-collapse: collapse;border-color: #2A2A2A;border-style: solid;border-width: 1px">
              <p style="text-align: justify">Avaliação de desempenho voltado ao passado</p>
            </td>

            <td class="celula-normal" style="width: auto;padding: .25em;border-collapse: collapse;border-color: #2A2A2A;border-style: solid;border-width: 1px">
              <p style="text-align: justify">O que ocorre no momento e orientada para o futuro</p>
            </td>
          </tr>

          <tr style="width: auto;padding: .25em">
            <td class="celula-normal" style="width: auto;padding: .25em;border-collapse: collapse;border-color: #2A2A2A;border-style: solid;border-width: 1px">
              <p style="text-align: justify">Natureza da informação</p>
            </td>

            <td class="celula-normal" style="width: auto;padding: .25em;border-collapse: collapse;border-color: #2A2A2A;border-style: solid;border-width: 1px">
              <p style="text-align: justify">Objetividade dos dados, confiável e auditável</p>
            </td>

            <td class="celula-normal" style="width: auto;padding: .25em;border-collapse: collapse;border-color: #2A2A2A;border-style: solid;border-width: 1px">
              <p style="text-align: justify">Ênfase na relevância dos dados, subjetiva e flexível</p>
            </td>
          </tr>

          <tr style="width: auto;padding: .25em">
            <td class="celula-normal" style="width: auto;padding: .25em;border-collapse: collapse;border-color: #2A2A2A;border-style: solid;border-width: 1px">
              <p style="text-align: justify">Restrição</p>
            </td>

            <td class="celula-normal" style="width: auto;padding: .25em;border-collapse: collapse;border-color: #2A2A2A;border-style: solid;border-width: 1px">
              <p style="text-align: justify">Regras definidas por princípios contábeis e autoridades governamentais</p>
            </td>

            <td class="celula-normal" style="width: auto;padding: .25em;border-collapse: collapse;border-color: #2A2A2A;border-style: solid;border-width: 1px">
              <p style="text-align: justify">Sistemas e informações para atender às necessidades dos usuários</p>
            </td>
          </tr>

          <tr style="width: auto;padding: .25em">
            <td class="celula-normal" style="width: auto;padding: .25em;border-collapse: collapse;border-color: #2A2A2A;border-style: solid;border-width: 1px">
              <p style="text-align: justify">Escopo</p>
            </td>

            <td class="celula-normal" style="width: auto;padding: .25em;border-collapse: collapse;border-color: #2A2A2A;border-style: solid;border-width: 1px">
              <p style="text-align: justify">Informações agregadas e resumidas sobre a organização como um todo</p>
            </td>

            <td class="celula-normal" style="width: auto;padding: .25em;border-collapse: collapse;border-color: #2A2A2A;border-style: solid;border-width: 1px">
              <p style="text-align: justify">Informações desagregadas, relatórios sobre produtos, clientes e em qualquer nível</p>
            </td>
          </tr>

          <tr style="width: auto;padding: .25em">
            <td class="celula-normal" style="width: auto;padding: .25em;border-collapse: collapse;border-color: #2A2A2A;border-style: solid;border-width: 1px">
              <p style="text-align: justify">Comportamento</p>
            </td>

            <td class="celula-normal" style="width: auto;padding: .25em;border-collapse: collapse;border-color: #2A2A2A;border-style: solid;border-width: 1px">
              <p style="text-align: justify">Preocupação com o modo como os números da empresa irão afetar o comportamento externo</p>
            </td>

            <td class="celula-normal" style="width: auto;padding: .25em;border-collapse: collapse;border-color: #2A2A2A;border-style: solid;border-width: 1px">
              <p style="text-align: justify">Preocupação com o modo como as medidas e os relatórios irão influenciar o comportamento dos gerentes</p>
            </td>
          </tr>
        </tbody>
      </table>

      <h5 class="subtitulo-1 sigil_not_in_toc" style="font-size: 1.2em;text-align: left;font-style: normal;padding: 0.5em 0 0.5em 0"><strong style="text-align: left;font-style: normal">Tipo de informação</strong></h5>

      <p style="text-align: justify">Outra característica que distingue as duas contabilidades são as informações produzidas. A gerencial não se prende apenas a números e medidas financeiras; ela se complementa com informações físicas e operacionais. Isso ocorre porque usuários internos da organização percebem que as informações são essenciais para a tomada de decisões corretas.</p>

      <p style="text-align: justify">Assim, por exemplo, o gerente de uma loja necessita de dados operacionais para gerir sua unidade adequadamente. São informações que contemplam a satisfação dos clientes, o tempo de espera para atendimento, o nível de reclamação e/ou de devolução de mercadorias, o padrão de atendimento dos clientes por dia da semana e por período dentro de cada dia da semana, o tempo de reposição das mercadorias pela matriz, o giro do estoque por item, preços comparativos com a concorrência na região, sem mencionar as informações financeiras relativas a vendas em valor por produto/item, lucro da loja etc.</p>

      <h5 class="subtitulo-1 sigil_not_in_toc" style="font-size: 1.2em;text-align: left;font-style: normal;padding: 0.5em 0 0.5em 0"><strong style="text-align: left;font-style: normal">Foco do tempo</strong></h5>

      <p style="text-align: justify">Por ser baseada em informações contábeis, a ênfase da contabilidade financeira está centrada no que já ocorreu, nas conseqüências financeiras passadas. Já a contabilidade gerencial tem orientação para o futuro, para o planejamento de eventos e atividades e para as decisões que afetam o futuro da empresa. O gerente foca as previsões, e não somente no que se passou. Um bom sistema de mensuração de desempenho é uma ferramenta útil para designar com precisão o foco no tempo.</p>
    </div>
  </section>
</body></html>`
},{
  html:`<html><head></head><body style="font-family: &quot;Open Sans&quot;, serif;color: hsl(0, 0%, 7%);background-color: #F6F7FB;margin: 0 !important;padding: 0 !important">
  <span id="page-007" epub:type="pagebreak"></span>

  <section epub:type="chapter">
    <div>
      <h5 class="subtitulo-1 sigil_not_in_toc" style="font-size: 1.2em;text-align: left;font-style: normal;padding: 0.5em 0 0.5em 0"><strong style="text-align: left;font-style: normal">Restrição</strong></h5>

      <p style="text-align: justify">Os demonstrativos contábeis financeiros das empresas, por serem destinados aos usuários externos, têm de ser comparáveis entre si para serem compreendidos. É preciso haver segurança de que as informações foram preparadas segundo regras básicas comuns que ajudam a evitar fraudes. Essas regras são os princípios contábeis geralmente aceitos e representam as premissas básicas sobre fatores econômico-financeiros conforme os quais a contabilidade financeira deve operar.</p>

      <p style="text-align: justify">Dependendo do setor em que a empresa opera, autoridades governamentais estabelecem seus regulamentos específicos. Dessa forma, todas as sociedades anônimas (fechadas ou de capital aberto) seguem normas ditadas pela CVM (Comissão de Valores Mobiliários). O Banco Central também estabelece normas e diretrizes para as instituições financeiras.</p>

      <p style="text-align: justify">A ênfase da contabilidade gerencial é outra. Por ela não estar ‘amarrada’ a regras e convenções básicas comuns, seus usuários internos estabelecem regras próprias no tocante ao conteúdo, forma e freqüência das informações. Os sistemas permanecem à disposição, conforme suas necessidades de informação.</p>

      <p style="text-align: justify">A contabilidade financeira é obrigatória — autoridades fiscais como a Secretaria da Receita Federal exigem demonstrações contábeis anualmente — o mesmo não acontece com a gerencial. Não há organismos reguladores que determinem o que deve ser feito nas empresas. Portanto, a decisão é inteiramente de cada empresa. <i>Em vez de perguntar quanto custa para obter informações pertinentes para tomar decisões, a pergunta correta é: quanto se está perdendo por não obtê-las.</i></p>

      <h5 class="subtitulo-1 sigil_not_in_toc" style="font-size: 1.2em;text-align: left;font-style: normal;padding: 0.5em 0 0.5em 0"><strong style="text-align: left;font-style: normal">Natureza da informação</strong></h5>

      <p style="text-align: justify">Por causa dessas regras e normas, as informações contábeis devem ser objetivas, confiáveis e sujeitas à auditoria externa. Por outro lado, os usuários da contabilidade gerencial preocupam-se menos com a precisão do que com a relevância, a flexibilidade e a rapidez das informações.</p>

      <p style="text-align: justify">Quando o gestor tiver nas mãos uma oportunidade de negócio que envolva milhões de reais, ele preferirá, em vez de precisão, informações relevantes e rápidas para fechar o negócio.</p>

      <h5 class="subtitulo-1 sigil_not_in_toc" style="font-size: 1.2em;text-align: left;font-style: normal;padding: 0.5em 0 0.5em 0"><strong style="text-align: left;font-style: normal">Escopo da informação</strong></h5>

      <p style="text-align: justify">A contabilidade financeira preocupa-se com a elaboração de demonstrativos financeiros da empresa como um todo, de forma agregada. Ela poderá ter desdobramentos parciais das suas unidades de negócio ou filiais, como receitas e custos, posições de estoques e contas a receber, mas dificilmente conseguirá elaborar um balanço ou um demonstrativo de resultados que não seja da empresa.</p>
    </div>
  </section>
</body></html>`
},{
  html:`<html><head></head><body style="font-family: &quot;Open Sans&quot;, serif;color: hsl(0, 0%, 7%);background-color: #F6F7FB;margin: 0 !important;padding: 0 !important">
  <span id="page-008" epub:type="pagebreak"></span>

  <section epub:type="chapter">
    <div>
      <p style="text-align: justify">A contabilidade gerencial, ao contrário, concentra-se nos níveis inferiores, isto é, nos setores da empresa, suas linhas de produto, divisões, departamentos, unidades de atendimento, clientes e fornecedores.</p>

      <h5 class="subtitulo-1 sigil_not_in_toc" style="font-size: 1.2em;text-align: left;font-style: normal;padding: 0.5em 0 0.5em 0"><strong style="text-align: left;font-style: normal">Comportamento</strong></h5>

      <p style="text-align: justify">Os executivos podem ficar equivocados ao preocupar-se em demasia em como os números financeiros da empresa irão afetar o comportamento do público externo. Eles a gerenciam tendo em vista o curto prazo, o lucro e as vendas do trimestre, por exemplo, e se esquecem de olhar para o futuro e para a geração de valor a longo prazo para os acionistas. Outra preocupação é com o valor do bônus que irão receber, baseado no lucro que a empresa gerou no ano.</p>

      <p style="text-align: justify">A contabilidade gerencial preocupa-se com a influência das medidas e relatórios sobre o comportamento dos gerentes em planejar o futuro sem descuidar do presente. É ter um olho no futuro sem deixar de considerar o presente.</p>

      <h2 class="titulo-2" id="sigil_toc_id_2" style="font-size: 1.6em;line-height: 1.175em;font-weight: 700;color: #484848;padding-top: 0.938em;text-align: left;font-style: normal">1.3<strong style="text-align: left;font-style: normal"> Mudança do ambiente empresarial</strong></h2>

      <p style="text-align: justify">A intensificação da competição num mercado globalizado obriga as empresas a desdobrar-se para manterem-se competitivas e sobreviver. Temos convivido com vários fenômenos nas duas últimas décadas, tais como a invasão de produtos asiáticos no Ocidente; a aceleração de transformações tecnológicas na engenharia e na manufatura com o CAD/CAM e avanços da eletrônica; a consolidação do tema qualidade na gestão das empresas, com o TQM e o Seis Sigma; o declínio da capacidade competitiva da manufatura norte-americana desde meados da década de 1980; ciclos de vida mais curtos dos produtos; e a exigência dos clientes de maior variedade de produtos, para citar apenas alguns.</p>

      <p style="text-align: justify">As empresas respondem de diversas maneiras a essa crescente competitividade: mediante a valorização de pessoas e equipes nas organizações, o chamado <i>empowerment</i>, para tomar decisões mais rapidamente; fusões, aquisições e <i>joint ventures</i> que visam à sinergia nos negócios, ao aumento da produtividade e à redução dos custos; sistemas de manufatura mais flexíveis e de menor custo, e ainda mediante a adoção de novas ferramentas gerenciais como os ERPs (sistemas de gestão empresarial).</p>

      <p style="text-align: justify">A globalização promoveu diversas modificações em praticamente todos os segmentos de negócio, industriais, serviços ou bancários, sobretudo na forma de as empresas realizarem seus negócios.</p>

      <p style="text-align: justify">Segundo Kotler (1999), uma empresa obtém intimidade com o consumidor quando é capaz de customizar seus produtos ou serviços de acordo com as exigências do cliente. Algumas empresas exploram uma oportunidade denominada customização em massa. Isso significa capacidade de preparar, em bases de produção em massa, produtos, serviços e comunicações individualizados. Graças a bancos de dados computadorizados e a linhas de produção flexíveis, muitas empresas podem oferecer produtos exclusivos a milhares de clientes. A National Bicycle Industrial Company, do Japão, fabrica bicicletas sob medida pa</p>
    </div>
  </section>
</body></html>`
},{
  html:`<html><head></head><body style="font-family: &quot;Open Sans&quot;, serif;color: hsl(0, 0%, 7%);background-color: #F6F7FB;margin: 0 !important;padding: 0 !important">
  <span id="page-009" epub:type="pagebreak"></span>

  <section epub:type="chapter">
    <div>
      <p style="text-align: justify">ra atender às preferências e à anatomia de compradores específicos, e é capaz de produzir 11.231.862 combinações de 18 modelos de bicicletas em 199 cores diferentes.<sup class="sobrescrito" style="vertical-align: text-top;line-height: 1;font-size: 0.7em"><span id="footnote-001-backlink"><a class="_idFootnoteLink _idGenColorInherit" href="../Text/page-009.xhtml#footnote-001" style="color: #55A8FD">2</a></span></sup></p>

      <p style="text-align: justify">Para Groover (1987), as seguintes tendências podem ser observadas na manufatura como decorrência de pressões externas: ciclos de vida de produtos menores, maior ênfase na qualidade e na confiabilidade, produtos mais dedicados aos clientes, utilização de novos materiais, uso crescente de eletrônica, pressão para reduzir estoques, terceirização, produção <i>just in time</i>, entre outras.</p>

      <p style="text-align: justify">De acordo com Ching (2001), pressões resultantes da globalização e da modificação do mercado consumidor, cada vez mais bem informado e exigente na hora de adquirir bens e serviços, levam as empresas a repensar o modo como operam os elementos de sua cadeia logística. Essas empresas têm sido obrigadas a mudar seu papel e suas atividades a fim de adaptar-se aos fatores externos que exercem pressões sobre elas. Alguns dos fatores externos mencionados por ele são:</p>

      <p class="bullet-1" style="text-align: justify;margin-left: 3em;text-indent: -1em">• <i>•</i> Ciclo de vida do produto mais curto: devido ao rápido avanço tecnológico e às constantes e crescentes mudanças dos produtos, seu ciclo de vida diminuiu muito, principalmente na área de equipamentos eletroeletrônicos, na de máquinas e na de informática; produtos lançados hoje dispõem de uma nova versão ou de novo <i>upgrade</i> um ano depois, ou então são substituídos por produtos inteiramente novos. As empresas, conseqüentemente, são obrigadas a inovar sua linha de produtos para manter-se atualizadas no mercado. O mercado tornou-se muito mais competitivo, e os clientes, mais exigentes.</p>

      <p class="bullet-1" style="text-align: justify;margin-left: 3em;text-indent: -1em">• <i>•</i> Clientes exigentes e bem informados: devido à grande quantidade de informações e opções de que os clientes dispõem, torna-se cada vez mais criteriosa a análise das opções existentes. A empresa, por sua vez, é obrigada a adotar uma postura que cative o cliente, em que os produtos e os serviços oferecidos satisfaçam plenamente a suas necessidades e a seus desejos. Ela tem de esforçar-se para criar com eles um vínculo de confiança. Essa postura é coerente com o que Kotler afirma a respeito de a empresa customizar seus produtos ou serviços conforme as exigências do cliente.</p>

      <p class="bullet-1" style="text-align: justify;margin-left: 3em;text-indent: -1em">• Competição externa: diferentes fatores competitivos implicam diferentes objetivos de desempenho para a empresa. Assim, se os clientes valorizam...</p>

      <p style="text-align: justify">estes fatores competitivos</p>

      <p style="text-align: justify">preço baixo alta qualidade entrega rápida entrega confiável produtos e serviços inovadores alteração de quantidade ou prazo de entrega</p>

      <p style="text-align: justify">os objetivos de desempenho são... custo qualidade rapidez confiabilidade flexibilidade de produto/serviço flexibilidade de volume e entrega</p>

      <hr class="HorizontalRule-1">

      <div class="_idFootnotes">
        <div id="footnote-001" class="_idFootnote" epub:type="footnote">
          <p class="rodape" style="text-align: justify;font-size: .8em"><a class="_idFootnoteAnchor _idGenColorInherit" href="../Text/page-009.xhtml#footnote-001-backlink" style="color: #55A8FD">2</a> Segundo Kotler, o termo ‘customização em massa’ foi originalmente usado por Stanley Davis em 1987 e mais tarde, em 1993, por Joseph Pine.</p>
        </div>
      </div>
    </div>
  </section>
</body></html>`
},{
  html:`<html><head></head><body style="font-family: &quot;Open Sans&quot;, serif;color: hsl(0, 0%, 7%);background-color: #F6F7FB;margin: 0 !important;padding: 0 !important">
  <span id="page-010" epub:type="pagebreak"></span>

  <section epub:type="chapter">
    <div>
      <p style="text-align: justify">As conseqüências que as tendências acima trazem para qualquer empresa são mais flexibilidade tanto na oferta de maior variedade como na resposta a mudanças de volume e mix; maior velocidade no desenvolvimento de novos produtos e serviços que atendam às exigências dos clientes, bem como nas entregas; qualidade cada vez melhor; confiabilidade quanto à entrega da mercadoria na data exigida e, por fim, menor custo.</p>

      <h2 class="titulo-2" style="font-size: 1.6em;line-height: 1.175em;font-weight: 700;color: #484848;padding-top: 0.938em;text-align: left;font-style: normal">1.4<strong style="text-align: left;font-style: normal"> Papel da contabilidade gerencial neste novo ambiente</strong></h2>

      <p style="text-align: justify">Afinal, quais são as conseqüências dessas tendências e da competição globalizada para a contabilidade? Os contadores financeiros preocupavam-se muito em atender a pressões vindas de fora da empresa, dos credores, dos mercados de capital, das autoridades fiscais que solicitavam relatórios e demonstrativos acurados e, muitas vezes, auditados. Isso ocorria quando a ajuda do computador era incipiente e lenta. Uma enorme estrutura era montada nas empresas para elaborar relatórios.</p>

      <p style="text-align: justify">Tradicionalmente, a informação contábil gerencial é de natureza financeira, isto é, tudo o que se traduz numa moeda como o real (R$) ou o dólar (US$). Os gerentes elaboravam relatórios, ditos gerenciais, em que adaptavam os números da contabilidade para servir a seus propósitos de relato de informações. A base de dados, porém, era financeira. Era um viés do que ocorria na contabilidade financeira.</p>

      <p style="text-align: justify">À medida que os produtos se expandiam, as empresas penetravam em novas regiões geográficas e as operações se tornavam complexas, os executivos sentiram necessidade de informações e relatórios, distintos daqueles de ordem financeira, que subsidiassem suas decisões.</p>

      <p style="text-align: justify">Inúmeras críticas surgiram: as informações geradas não eram relevantes e estavam longe da realidade; referiam-se ao negócio como um todo em vez de fornecer dados para o controle gerencial e baseavam-se em normas ou padrões (Hill, 1994). Para Hayes et al (1988), no que diz respeito à mensuração do desempenho da manufatura, os sistemas contábeis preocupam-se com variações contra padrões internos e orçamentos, obscurecem a importância da melhoria contínua e tornam-se um impedimento para a vantagem competitiva. Nunca o nível e a pressão de resposta rápida foram tão grandes como neste momento. No entanto, os sistemas contábeis ficaram parados no tempo e são, no máximo, reativos.</p>

      <p style="text-align: justify">Uma pesquisa realizada no Reino Unido em 1991 e citada por Hill em seu livro mostra que, nos cinco anos anteriores, 68% dos entrevistados efetuaram revisões significativas nos sistemas de custos. Contudo, a pesquisa também mostra que muitas dessas revisões foram ‘tradicionais’, sem a implementação de ‘novas’ técnicas e práticas contábeis (U.K. Survey, Davies et al, p. 16).</p>

      <p style="text-align: justify">Kaplan (1984) constata que muitas empresas ainda usam para o ambiente competitivo de hoje, radicalmente diferente, os mesmos sistemas contábeis de custo e controle gerencial que foram desenvolvidos décadas atrás. Talvez elas não tenham percebido que os custos indiretos, chamados <i>overheads,</i> representam hoje entre 25% e 50% dos custos totais e crescem tanto no valor absoluto como no tamanho relativo. Isso é confirmado pela pes</p>
    </div>
  </section>
</body></html>`
},{
  html:`<html><head></head><body style="font-family: &quot;Open Sans&quot;, serif;color: hsl(0, 0%, 7%);background-color: #F6F7FB;margin: 0 !important;padding: 0 !important">
  <span id="page-011" epub:type="pagebreak"></span>

  <section epub:type="chapter">
    <div>
      <p style="text-align: justify">quisa citada. Os contadores continuam a usar predominantemente uma única taxa de absorção do <i>overhead</i> para as diversas partes do negócio envolvido, o que não reflete a natureza do negócio e a relevância da informação gerada.</p>

      <p style="text-align: justify">É muito difícil que uma empresa passe a outro patamar se ela planeja e controla suas operações e negócios, bem como toma decisões com base em informações contábeis gerenciais inadequadas, que não atendem às necessidades dos seus executivos. Por outro lado, uma contabilidade gerencial bem planejada pode suportar o bom desempenho de uma empresa. Isso, no entanto, não garante por si só um bom desempenho, mas seguramente um sistema contábil gerencial deficiente pode prejudicar os esforços dos seus executivos no sentido de torná-la eficiente e competitiva.</p>

      <h2 class="titulo-2" style="font-size: 1.6em;line-height: 1.175em;font-weight: 700;color: #484848;padding-top: 0.938em;text-align: left;font-style: normal">1.5<strong style="text-align: left;font-style: normal"> Importância do uso de medidas não-financeiras</strong></h2>

      <p style="text-align: justify">Algumas empresas mensuram seu desempenho com o enfoque em medidas financeiras que, além de ser inadequadas, encorajam decisões disfuncionais. Assim, por exemplo:</p>

      <p style="text-align: justify"><strong style="text-align: left;font-style: normal">Variações de custo padrão: </strong>institucionalizam os níveis de perda, além de não haver incentivo para melhoria contínua;</p>

      <p style="text-align: justify"><strong style="text-align: left;font-style: normal">Controle orçamentário: </strong>tem um forte viés por utilizar base histórica, não reflete o nível de atividade da empresa e não mede a eficiência do custo;</p>

      <p style="text-align: justify"><strong style="text-align: left;font-style: normal">Relatórios gerenciais: </strong>foco excessivo nos itens de receita e despesa de curto prazo, além de não refletir a perspectiva do cliente no negócio a longo prazo.</p>

      <p style="text-align: justify">As medidas financeiras fornecem análises históricas, mostram sempre o resultado final, têm pouca conexão com as causas-raiz, são centradas nos aspectos internos do negócio, além de ser direcionadas por ciclos mensais de relato de informações. São denominadas <i>lagging indicators</i>. No entanto, muitas empresas continuam a utilizá-las de modo bastante expressivo. Uma possível explicação é a pressão dos investidores e acionistas por resultados imediatistas e sempre financeiros. O que se prega é uma combinação e o balanço adequado entre medidas financeiras e não financeiras.</p>

      <p style="text-align: justify">Copeland et al (1996) propõem em seu enfoque VBM (Value Based Management — Gestão Baseada em Valor) algo nesse sentido. VBM é um processo integrador, projetado para melhorar a tomada de decisão estratégica e operacional por toda a empresa, ao focar os direcionadores-chave de valor. Esses autores, assim como outros de livros de administração financeira, sustentam que o propósito de uma empresa é maximizar o valor do acionista e o uso efetivo do capital, e ele deve refletir-se em toda decisão, em qualquer nível.</p>

      <p style="text-align: justify">Uma parte importante do VBM é compreender quais variáveis de desempenho vão de fato direcionar o valor da empresa. Essa compreensão é essencial porque ela não consegue agir diretamente no valor; tem de agir em fatores influentes, como satisfação do cliente, custo, gastos com capital. Um direcionador de valor é simplesmente qualquer variável que</p>
    </div>
  </section>
</body></html>`
}]

module.exports = () => {
  return dataset
}