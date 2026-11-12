---
status: aceita
---

# 0013 · Somente leitura garantido pelo banco e pelo código

Consultas de negócio são limitadas por uma conta Postgres somente leitura e por uma conferência no código antes da execução. As duas barreiras sustentam o requisito de que instruções na conversa não alterem dados de negócio.

Descartadas: depender apenas das instruções ao modelo; depender apenas do usuário de banco; permitir consultas sem validação no código.
Custo aceito: é preciso manter permissões restritas no banco e uma validação de consulta compatível com o SQL aceito.
