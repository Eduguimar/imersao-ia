---
status: aceita
---

# 0011 · Identificador de pedido limita ações dos bots

Toda ação de bot leva um identificador de pedido emitido pelo fluxo do chat. A API do chat usa esse vínculo para aceitar ações somente quando pertencem a um pedido real, e para reconhecer repetições idempotentes.

Descartadas: confiar apenas na credencial do bot; aceitar ações sem vínculo com um pedido iniciado por uma pessoa.
Custo aceito: a API precisa manter e validar o ciclo de vida do identificador; sua validade está a definir.
