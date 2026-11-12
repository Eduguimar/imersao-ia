---
status: aceita
---

# 0021 · Contadores gravados na transação

Contadores de não lidas e menções são persistidos por pessoa e conversa e atualizados atomicamente na transação da mensagem. Isso mantém os contadores consistentes com as mensagens sem recalcular o histórico em cada leitura.

Descartadas: calcular os totais a cada consulta; manter apenas contadores efêmeros fora do banco.
Custo aceito: cada mensagem relevante atualiza registros adicionais e pode criar contenção em conversas movimentadas.
