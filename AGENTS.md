# Regras para agentes

Este projeto é o **Arena de Honra**, um action RPG de horda feito em um único
`index.html`. Leia `docs/design.md` antes de mudar regras de jogo.

## Como o código está organizado

- Tudo fica em `index.html`: CSS no `<style>`, HTML do HUD e dos menus, e um
  único IIFE em `<script>`. Seções começam com comentários `// ---- Nome`.
- O código é compacto de propósito (nomes curtos: `p` jogador, `E` inimigos,
  `W` armas/builds, `wi` build atual, `cls` classe, `LV` nível, `NET` rede).
  Siga o mesmo estilo e não reformate o arquivo inteiro: diffs pequenos
  facilitam comparar com o original em `arena-de-honra-meior`.
- Bibliotecas: three.js **r128** (API antiga, sem módulos ES) e PeerJS 1.5.4,
  ambos por CDN. Não troque de versão sem testar tudo. (O PeerJS não é mais carregado: o online usa `relayJoin`, um cliente MQTT mínimo por WebSocket, com a lista de servidores em `BROKERS()`.)
- Boneco 3D opcional: só o modelo VRM 0.0 que o jogador carregar nas configurações (o repositório não traz modelo; ver `modelos/LEIA-ME.md`), carregados com three-vrm **0.6.5** (a última compatível com three r128). O modelo segue o esqueleto antigo do jogo: os golpes continuam animando `sw`/`sw2` e `vrmUpd` faz o corpo VRM acompanhar. Inimigos continuam com modelos simples.
- Configurações ficam em `localStorage['arena_set']` e o recorde em
  `localStorage['arena_rec']`.

## Regras

- Todo texto visível para o jogador é em **português do Brasil**.
- Tudo precisa funcionar no celular (toque, `pointer:coarse`, safe areas) e
  com controle de PlayStation, além de teclado.
- O multiplayer é host-autoritativo (`NET.h` host, `NET.c` cliente,
  `NET.gh` fantasma após morrer). Mudanças em dano, inimigos ou drops precisam
  ser replicadas pelas mensagens `nemit`/`onEv`, ou rodar só no host.
- Rede: a presença de cada jogador (`netPost`) leva posição, golpe atual (`ak`: tipo, lado, duração e acerto), bloqueio, esquiva, invocações (`mn`) e animal (`an`). Os eventos `ev` levam os projéteis (`sh`), os anéis de efeito (`rg`) e os ataques do chefe (`bt`/`bs`). Os avatares remotos são cópias do personagem local montadas com a raça e a classe do outro jogador (`mkAv`) e animadas por `avUpd`. Cada mensagem do relay leva a hora de quem enviou (`s`); `nClk`/`nbPush`/`nbAt` montam um buffer de interpolação: o boneco remoto usa `r.vx/r.vz/r.vf` (interpolados) e a jogabilidade continua usando `r.x/r.z` (posição mais nova). Inimigos no cliente usam o mesmo buffer. No host, `mlw(w,wf)` faz os inimigos preferirem jogadores corpo a corpo (a distância conta 55%; Adagas não entra). `SB0`/`sbOf()` aplica um ajuste por build (dano causado via `sbTick` no host/solo, dano recebido em `hurt` e evasão extra). No online o cliente multiplica o dano que manda em `dmg` e o host desconta esse dano de `e.dlh` para não escalar de novo. No single player não existe aliado; `al` só é usado no multiplayer, como o jogador real mais próximo.
- Não use pausa, câmera lenta ou qualquer coisa que pare o tempo quando
  `NET.on` for verdadeiro.
- Abrir com `#dbg` no fim da URL expõe `window.__dbg` (jogador, inimigos,
  `spawn`, `hurt`) para testes automáticos.

## Como testar

1. Sirva a pasta (`python3 -m http.server`) e abra no navegador.
2. Single Player → escolha raça, classe e build → ande, ataque, suba de
   nível e escolha uma melhoria (Q), pause (Esc), morra e confira o recorde.
3. Para multiplayer, abra duas abas: Host numa, código de 4 dígitos na outra.
4. Veja se o console do navegador ficou sem erros.
