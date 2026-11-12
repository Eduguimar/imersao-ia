---
status: aceita
---

# 0010 · Agente grava como bot pela API do chat

O Serviço de agentes grava respostas e ações na conversa pela API do chat, com credencial de bot. A API continua sendo dona das mensagens, tarefas, notificações e eventos, inclusive quando a ação parte de um agente.

Descartadas: permitir que o agente grave diretamente no banco do chat; fazer o BFF gravar respostas do agente em nome dele.
Custo aceito: chamadas de agentes dependem da disponibilidade e dos contratos da API do chat, que precisa limitar as credenciais dos bots.
