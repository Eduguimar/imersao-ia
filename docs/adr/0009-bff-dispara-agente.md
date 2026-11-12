---
status: aceita
---

# 0009 · BFF dispara o agente

Depois de gravar a mensagem pela API do chat, o BFF reconhece a menção e dispara o Serviço de agentes sem esperar pela resposta. O chat permanece disponível mesmo quando o provedor de modelo está lento ou indisponível.

Descartadas: fazer a API do chat executar ou aguardar o agente; fazer o navegador chamar diretamente o Serviço de agentes.
Custo aceito: o BFF coordena a gravação da mensagem e o disparo, e precisa apresentar falha quando não consegue encaminhar o pedido.
