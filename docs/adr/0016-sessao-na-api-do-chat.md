---
status: aceita
---

# 0016 · API do chat é dona da sessão

A API do chat cria, armazena, valida e revoga as sessões. O BFF encaminha a sessão nas chamadas REST, e o WebSocket direto à API usa a mesma sessão, permitindo revogação centralizada.

Descartadas: manter a sessão somente no BFF, o que dificultaria compartilhá-la com o WebSocket direto; criar sessões independentes para REST e tempo real.
Custo aceito: a API do chat é dependência de autenticação do BFF e do WebSocket; o formato e o armazenamento do identificador ainda estão a definir.
