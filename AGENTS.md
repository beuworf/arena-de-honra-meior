# Regras para agentes

Este projeto é o **Arena de Honra**, um action RPG de horda feito em um único
`index.html`. Leia `docs/design.md` antes de mudar regras de jogo.

## Como o código está organizado

- Tudo fica em `index.html`: CSS no `<style>`, HTML do HUD e dos menus, e um
  único IIFE em `<script>`. Seções começam com comentários `// ---- Nome`.
- O código é compacto de propósito (nomes curtos: `p` jogador, `E` inimigos,
  `W` armas/builds, `wi` build atual, `cls` classe, `LV` nível, `NET` rede).
  Siga o mesmo estilo e não reformate o arquivo inteiro: diffs pequenos
  facilitam revisar as mudanças.
- Bibliotecas: three.js **r128** (API antiga, sem módulos ES) e PeerJS 1.5.4,
  ambos por CDN. Não troque de versão sem testar tudo.
- Configurações ficam em `localStorage['arena_set']` e o recorde em
  `localStorage['arena_rec']`.

## Regras

- Todo texto visível para o jogador é em **português do Brasil**.
- Tudo precisa funcionar no celular (toque, `pointer:coarse`, safe areas) e
  com controle de PlayStation, além de teclado.
- O multiplayer é host-autoritativo (`NET.h` host, `NET.c` cliente,
  `NET.gh` fantasma após morrer). Mudanças em dano, inimigos ou drops precisam
  ser replicadas pelas mensagens `nemit`/`onEv`, ou rodar só no host.
- Não use pausa, câmera lenta ou qualquer coisa que pare o tempo quando
  `NET.on` for verdadeiro.
- Abrir com `#dbg` no fim da URL expõe `window.__dbg` (jogador, inimigos,
  `spawn`, `hurt`) para testes automáticos.

## Como testar

1. Sirva a pasta (`python3 -m http.server`) e abra no navegador.
2. Single Player → escolha raça, classe e build → ande, ataque, use a
   mochila (Q), pause (Esc), morra e confira o recorde.
3. Para multiplayer, abra duas abas: Host numa, código de 4 dígitos na outra.
4. Veja se o console do navegador ficou sem erros.
