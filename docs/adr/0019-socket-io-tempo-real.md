---
status: aceita
---

# 0019 · Socket.IO no tempo real

O tempo real usa Socket.IO no servidor e no cliente. A biblioteca fornece o canal bidirecional necessário para eventos do chat e integração com a camada de tempo real escolhida.

Descartadas: implementar o protocolo WebSocket diretamente; usar apenas transporte HTTP de consulta periódica.
Custo aceito: cliente e servidor dependem da biblioteca Socket.IO e de seus contratos; a API do chat opera com uma instância, sem distribuição entre instâncias.
