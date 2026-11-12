# Product Brief — Expert Chat

2026-11-12 · Eduardo Guimarães · Status: rascunho

## Visão geral

O Expert Chat é um chat de equipe para navegador de desktop, voltado inicialmente a empresas pequenas e médias que vendem para outras empresas e cujos times de produto e tecnologia já trabalham por chat. Canais, conversas diretas, tarefas e agentes de IA fazem parte do mesmo espaço. As pessoas mencionam um agente para recuperar contexto, transformar pedidos em tarefas ou consultar informações de vendas com acesso autorizado.

O produto se diferencia por três promessas:

- **Recuperar o contexto:** a pessoa pede um resumo com o recorte que precisa e volta à conversa sem percorrer todo o histórico.
- **Evitar pedidos esquecidos:** a pessoa delega uma tarefa na conversa; quem a recebe é notificado, pode acompanhá-la e recebe-se o aviso quando ela é concluída ou reaberta.
- **Responder perguntas sobre o negócio:** a pessoa autorizada consulta números de vendas na conversa e recebe respostas com lastro; em caso de dúvida, o agente pergunta ou informa que não conseguiu responder.

## Problema e contexto

Em equipes que trabalham pelo chat, o contexto se perde no volume de mensagens. Quem volta de uma reunião ou chega depois precisa percorrer o histórico. Pedidos como “alguém atualiza a planilha?” ficam sem responsável e podem ser esquecidos. Perguntas como “quanto faturamos em março?” dependem de alguém com acesso ao banco de dados ou ao BI. Hoje, as pessoas percorrem a conversa, copiam trechos para um assistente de IA externo — expondo dados da empresa —, criam tarefas manualmente em outra ferramenta ou pedem o número ao time de dados e aguardam.

O momento é oportuno porque modelos de linguagem passaram a usar ferramentas de forma confiável e o MCP padronizou a conexão de agentes a bancos de dados, tornando viável consultar dados reais com permissão e somente leitura sem uma integração sob medida.

Hipóteses em que a aposta se apoia, ainda não validadas:

- As pessoas preferem pedir ao agente dentro da conversa a abrir outra ferramenta.
- Um resumo com recorte — como “só de hoje” ou “da semana” — poupa tempo de quem volta à conversa.
- Delegar pelo chat, com a tarefa registrada e notificada, reduz pedidos esquecidos.
- Empresas aceitam que uma IA consulte dados de negócio quando há permissão por pessoa e somente leitura.
- Um número errado destrói a confiança no agente; é melhor dizer “não consegui” do que chutar.

## Público-alvo

- **Perfil principal:** empresas pequenas e médias que vendem para outras empresas, cujos times de produto e tecnologia já conversam em um chat de equipe e cujos dados de vendas estão em um banco de dados. Ganham especialmente quem precisa de números sem saber SQL, como PMs e pessoas em posições de liderança, e quem perde contexto no volume de mensagens.
- **Gatilho de uso ou de compra:** a mesma pergunta sobre números volta toda semana e depende do time de dados, ou uma tarefa pedida no chat se perde e alguém cobra depois.
- **Fora do foco inicial:** grandes empresas que exigem login corporativo, auditoria formal e retenção de dados; comunidades abertas e uso pessoal; empresas cujos dados de vendas não estão em banco de dados próprio, como os que dependem de planilhas ou ERPs fechados; e pessoas que precisam de voz, vídeo ou acesso pelo celular.

## Modelo de negócio e planos

A definir.

## Objetivos e métricas de sucesso

| Métrica | O que mede | Meta em prazo a definir |
| --- | --- | --- |
| Uso do agente | Percentual de pessoas ativas na semana que fizeram ao menos um pedido a um agente | A definir |
| Tarefas delegadas concluídas | Percentual das tarefas criadas pelo agente que foram concluídas | A definir |
| Qualidade do agente | Percentual de aprovação na avaliação completa do agente | ≥ 98% |
| Número errado entregue | Respostas ou relatórios com número sem lastro que chegaram à pessoa | 0 |
| Tempo de resposta | p95 de um pedido comum a um agente | ≤ 5 s |
| Custo por pedido | Gasto com o modelo de IA por pedido a um agente | ≤ US$ 0,01 |

## Escopo do MVP

Plataforma: web, no navegador de desktop.

1. Entrar com e-mail e senha em uma conta criada pela empresa, com sessão válida para todo o navegador.
2. Conversar em canais públicos, canais privados e conversas diretas 1:1; criar canais públicos ou privados e convidar pessoas para canais privados, cujo conteúdo só fica visível e disponível para quem foi convidado.
3. Buscar pessoas por nome ou @usuário, abrir uma conversa direta e ver o perfil de qualquer pessoa.
4. Receber mensagens em tempo real, ver o aviso de digitação, percorrer o histórico paginado e acompanhar contagens de mensagens não lidas e menções.
5. Mencionar pessoas, responder citando uma mensagem, copiar texto e editar ou apagar as próprias mensagens, com as mudanças visíveis para todos imediatamente.
6. Receber notificações de menções, mensagens diretas e tarefas por alerta na tela e, se ativada, pelo navegador; abrir a mensagem correspondente ao clicar e consultar Menções, DMs e Tarefas na tela Atividade.
7. Editar o próprio nome, cargo, telefone, status e presença, e escolher o tema claro ou escuro.
8. Permitir que administradores conectem e desconectem agentes do workspace; permitir que as demais pessoas vejam os agentes disponíveis e a quem pedir acesso.
9. Pedir a um agente um resumo por período, por pessoa ou por assunto. Sem recorte, o agente pergunta e oferece opções com a quantidade de mensagens correspondente.
10. Pedir a um agente que delegue uma tarefa a outra pessoa mencionada. A pessoa responsável recebe uma notificação; a tarefa aparece em Atividade → Tarefas, pode ser concluída ou reaberta, e quem delegou é avisado das mudanças.
11. Perguntar em linguagem natural sobre dados de vendas, como faturamento por mês, pedidos por vendedor e clientes ativos. O agente responde em texto na conversa ou, quando solicitado, entrega um relatório em PDF para baixar. Só pessoas autorizadas recebem o conteúdo; para as demais, a resposta fica bloqueada.
12. Responder à pergunta de um agente sem mencioná-lo novamente ou selecionar uma das respostas prontas que ele oferece.
13. Continuar usando o chat enquanto um pedido demorado, como um relatório em PDF, é processado; o agente avisa que começou e entrega o resultado na conversa quando terminar.

## Fora de escopo

- Gráficos na conversa e relatórios agendados — candidatos ao roadmap, fase a definir.
- Agentes que agem sem serem chamados, como para lembrar de uma tarefa parada ou gerar um resumo automático do dia — candidato ao roadmap, fase a definir.
- Cadastro e convite de pessoas e tela de papéis e permissões — hoje as contas e permissões são criadas por script, fora do produto; candidato à Fase 2.
- Remover membros de canal privado e entrar ou sair de canais — candidato à Fase 2.
- Busca de mensagens — o resumo por pessoa ou assunto cobre parte da necessidade; candidato à Fase 2.
- Threads, reações e anexos de arquivo — não testam a aposta de agentes dentro da conversa; candidatos à Fase 2.
- Criar tarefas manualmente, definir prazo para tarefas e atribuir uma tarefa a várias pessoas — no MVP, a tarefa existe para testar a delegação pelo agente.
- Agente que altera dados do negócio — a consulta é somente leitura por decisão de segurança.
- Fontes de dados além do banco da empresa, como planilhas, ERPs e outras APIs.
- Vários workspaces ou várias empresas na mesma instalação.
- Login corporativo (SSO), chamadas de voz e vídeo — fora do público inicial.
- Acesso por celular ou tablet, pelo navegador ou por aplicativo nativo — o produto é só para desktop.

## Requisitos não funcionais e restrições

| Área | Requisito |
| --- | --- |
| Dados de negócio | Os agentes só leem dados do negócio; não leem mensagens nem usuários do chat. |
| Restrição | A garantia de somente leitura vem do próprio banco de dados, e não do código. Restrição imposta. |
| Permissão | Só pessoas autorizadas consultam dados. Respostas e relatórios só entregam o conteúdo a quem tem permissão; para as demais pessoas, o conteúdo fica bloqueado. Só administradores conectam e desconectam agentes. |
| Isolamento | O conteúdo da conversa não pode influenciar a consulta ao banco de dados. |
| Confiabilidade | Nenhum número sem lastro em resultado de consulta pode aparecer na resposta ou relatório. Na dúvida, o agente pergunta, recusa ou informa que não conseguiu; nunca inventa. Sem acesso ao modelo, o pedido falha com erro, sem resposta simulada. |
| Auditoria | Toda consulta ao banco registra quem pediu, conversa, pergunta, consulta e desfecho, sem guardar o conteúdo do resultado. Os registros não guardam conteúdo de mensagens. |
| Sessão | Nenhuma credencial fica acessível ao navegador. A sessão é revogável e vale para o navegador todo. |
| Custo | Há um teto de custo por pedido a um agente, cobrindo chamadas ao modelo e tokens, e um limite de no máximo 10 pedidos por minuto por pessoa. |
| Desempenho | Um pedido comum a um agente tem p95 ≤ 5 s; pedidos demorados são processados em segundo plano. Mensagens chegam em tempo real, sem atraso perceptível, e mensagens perdidas durante uma queda de conexão são recuperadas. |
| Modelo de IA | O provedor do modelo pode ser trocado por configuração, entre OpenAI, Gemini e Anthropic, sem mudar código. |
| Idioma e fuso | A interface e as respostas são em português do Brasil. “Hoje” em um resumo segue o fuso de quem pediu. |
| Acessibilidade | Todas as funções operam por teclado. |
| Hospedagem | Foi proposto que a pilha inteira rode em um servidor de 2 GB de RAM, com HTTPS e implantação automática que volta à versão anterior se algo falhar. Se essa configuração é uma restrição imposta ou um objetivo ainda está a definir. |

## Alternativas e concorrentes

| Alternativa | Pontos fortes | Pontos fracos para o público-alvo | Nosso posicionamento |
| --- | --- | --- | --- |
| Slack com a IA dele (resumos, busca com IA e agentes) | Chat líder de mercado; resume canais e threads. | Responder sobre dados próprios da empresa exige integrações e planos mais caros. | Consulta ao banco da empresa já pronta, com permissão por pessoa e somente leitura. |
| Microsoft Teams com Copilot | Vem com o pacote de escritório; resume conversas e reuniões. | Integrar banco próprio depende de conectores ou do BI da própria plataforma. | Consulta a dados já pronta e independência de pacote: o modelo de IA é trocável. |
| Percorrer o histórico do chat | Usa a conversa que a equipe já tem. | Leva tempo para quem volta depois e precisa encontrar o contexto no volume de mensagens. | Pedir um resumo com o recorte necessário dentro da conversa. |
| Copiar trechos para uma IA externa | Permite pedir resumos ou ajuda a um assistente. | Pode expor dados da empresa e exige trocar de ferramenta. | Pedir ajuda na conversa, com agentes conectados ao workspace. |
| Criar uma tarefa manualmente em outra ferramenta | Registra a tarefa em uma ferramenta própria para isso. | Exige transferir o pedido para outro lugar e pode acrescentar etapas ao fluxo. | Delegar pelo chat e acompanhar a tarefa em Atividade. |
| Pedir números ao time de dados ou BI | Usa acesso e conhecimento de quem trabalha com os dados. | A pessoa precisa esperar a resposta de alguém com acesso. | Consultar números autorizados na conversa. |
| Manter o fluxo atual | Não exige adotar outro produto. | O contexto se perde, pedidos podem ser esquecidos e perguntas sobre números dependem de terceiros. | Reunir conversa, delegação e consulta a dados no mesmo produto. |

## Riscos, dependências e premissas

O maior risco é o agente entregar um número errado com confiança ou entregar dados a quem não tem permissão; qualquer um dos dois destrói a confiança no produto.

| Risco | Mitigação |
| --- | --- |
| Produto: número errado em uma resposta ou relatório. | Todo número precisa ter lastro no resultado da consulta; na dúvida, o agente recusa ou pergunta; a qualidade é comparada entre versões com uma avaliação de 73 casos. |
| Segurança: dados de negócio chegarem a quem não tem permissão, inclusive pelo PDF. | Permissão por pessoa; conteúdo bloqueado para quem não tem acesso, inclusive no PDF; agente somente leitura; auditoria de cada consulta. |
| Segurança: instruções escritas na conversa manipularem o agente. | Tratar conteúdo da conversa como dado não confiável e sem influência na consulta ao banco; permitir apenas consultas de leitura. |
| Técnico: custo com o modelo de IA sair do controle. | Limitar chamadas e tokens por pedido e a no máximo 10 pedidos por minuto por pessoa. |
| Técnico: o provedor do modelo cair, encarecer ou mudar de comportamento. | Permitir trocar o modelo por configuração e comparar modelos antes da troca pela avaliação. |

**Dependências:**

- Banco de dados de vendas da empresa.
- Provedor de modelo de IA.
- Outras dependências externas e se o MCP é obrigatório: A definir.

**Premissas:**

- As pessoas preferem pedir ao agente dentro da conversa a abrir outra ferramenta.
- Um resumo com recorte poupa tempo de quem volta à conversa.
- Delegar pelo chat, com tarefa registrada e notificada, reduz pedidos esquecidos.
- Empresas aceitam que uma IA consulte dados de negócio com permissão por pessoa e somente leitura.
- Um número errado destrói a confiança no agente; é melhor informar que não conseguiu do que chutar.

## Roadmap

O prazo de lançamento está a definir; por isso, o roadmap não usa datas. Equipe e orçamento também estão a definir.

- **Fase 1 — fechar o MVP.** Objetivo: completar a aposta definida para o MVP.
- **Fase 2 — operar como produto.** Objetivo: permitir que uma empresa use o produto sem depender de scripts para criar contas e permissões. Inclui cadastro e convite de pessoas, tela de papéis e permissões, remoção de membros de canal privado, entrada e saída de canais, busca de mensagens, threads, reações e anexos. A fase começa quando a Fase 1 atingir as metas de qualidade: ≥ 98% na avaliação, 0 números errados entregues, p95 ≤ 5 s e ≤ US$ 0,01 por pedido.
- **Sem fase definida:** gráficos na conversa, relatórios agendados e agentes que agem sem serem chamados, como lembretes de tarefas paradas e resumos automáticos do dia; são candidatos ao roadmap, com fase a definir.

## Questões em aberto

- [ ] Definir modelo de negócio, planos, periodicidade de cobrança, formas de pagamento e referência de preço.
- [ ] Definir metas de uso do agente e de tarefas delegadas concluídas.
- [ ] Definir o prazo após o lançamento para atingir cada meta de sucesso.
- [ ] Definir o protocolo da avaliação completa de qualidade com 73 casos e o critério de aprovação de cada caso.
- [ ] Definir as dependências externas do produto e se o MCP é obrigatório.
- [ ] Confirmar se hospedar toda a pilha em um servidor de 2 GB, com implantação automática e reversão, é uma restrição imposta ou um objetivo.
- [ ] Definir prazo de lançamento, equipe e orçamento.
- [ ] Decidir quando gráficos na conversa, relatórios agendados e agentes proativos serão reconsiderados no roadmap.
