---
status: aceita
---

# 0005 · WebSocket para o tempo real

O chat usa uma conexão WebSocket para mensagens, presença, digitação e notificações em tempo real. Uma conexão bidirecional atende tanto aos eventos enviados pelo cliente quanto às atualizações distribuídas pelo servidor.

Descartadas: consulta periódica (polling), que introduz atraso e tráfego repetido; atualizar apenas por HTTP, sem canal persistente.
Custo aceito: conexões persistentes precisam ser geridas e autenticadas; recuperação após desconexão depende dos eventos retidos e do histórico.
