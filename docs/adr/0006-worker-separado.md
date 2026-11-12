---
status: aceita
---

# 0006 · Worker separado para pedidos demorados

Relatórios em PDF são processados por um Worker separado do Serviço de agentes, para que tarefas demoradas ocorram em segundo plano sem bloquear pedidos comuns nem o chat.

Descartadas: executar os relatórios na requisição interativa do agente; executar o trabalho pesado dentro do processo da API do chat.
Custo aceito: há um processo adicional, fila, retentativas e requisitos de idempotência a operar.
