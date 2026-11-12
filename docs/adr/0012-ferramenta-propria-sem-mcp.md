---
status: aceita
---

# 0012 · Ferramenta própria em Python sem MCP

O Serviço de agentes usa uma ferramenta Python própria para consultar o banco de negócio por SQL somente leitura. A ferramenta pode aplicar as verificações e limites específicos do produto diretamente no caminho da consulta.

Descartadas: usar MCP como camada de ferramenta; permitir que o modelo acesse o banco sem uma ferramenta controlada pela aplicação.
Custo aceito: a equipe mantém uma integração própria e precisa cobrir suas verificações e evolução.
