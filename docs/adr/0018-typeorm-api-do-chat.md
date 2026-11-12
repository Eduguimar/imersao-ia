---
status: aceita
---

# 0018 · TypeORM na API do chat

A API do chat usa TypeORM para acesso e migrações do Banco do chat. A escolha integra persistência ao projeto NestJS e permite que o schema evolua por migrações versionadas.

Descartadas: SQL manual sem ORM; outro ORM para a API do chat.
Custo aceito: o código e as migrações ficam vinculados ao modelo e às convenções do TypeORM; o motivo detalhado da escolha está a definir.
