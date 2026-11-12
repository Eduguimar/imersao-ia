---
status: aceita
---

# 0002 · Next.js como BFF e WebSocket direto

O Next.js serve a interface e atua como BFF para chamadas REST, enquanto o navegador abre o WebSocket diretamente na API do chat. Assim, a sessão é validada pela API que mantém a conexão em tempo real, sem fazer o BFF intermediar uma conexão persistente.

Descartadas: encaminhar também o WebSocket pelo BFF, adicionando um intermediário à conexão persistente; expor a API do chat como ponto de entrada para as páginas e chamadas REST do navegador.
Custo aceito: a API do chat precisa ser exposta para o WebSocket, e o navegador conhece os endereços do BFF e da API.
