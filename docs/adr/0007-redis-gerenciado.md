---
status: aceita
---

# 0007 · Redis gerenciado para fila e estado efêmero

Redis gerenciado guarda a fila de pedidos demorados, os eventos recentes para reconexão e os contadores de limite e custo. Esses usos compartilham um armazenamento rápido de estado efêmero e permitem que o Worker consuma tarefas de forma assíncrona.

Descartadas: manter fila, eventos e contadores apenas na memória dos processos, que não é compartilhada; usar exclusivamente Postgres para esses usos.
Custo aceito: a indisponibilidade do Redis impede pedidos que dependem dos contadores e interrompe o processamento em segundo plano; eventos retidos podem expirar.
