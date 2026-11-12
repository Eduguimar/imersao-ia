---
status: aceita
---

# 0015 · BFF envia identidade e permissões ao agente

O BFF envia ao Serviço de agentes a identidade e as permissões da pessoa que iniciou o pedido. O agente verifica a permissão antes de consultar o banco de negócio e registra tentativas negadas.

Descartadas: deixar o agente inferir permissões do texto da conversa; permitir consulta sem identidade e autorização explícitas.
Custo aceito: o Serviço de agentes precisa confiar e validar a origem dos dados de autorização enviados pelo BFF; o formato dessa confiança está a definir.
