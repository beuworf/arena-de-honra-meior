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
- Raças: `RACES` tem 9 entradas (a 9ª, `BEAR`, é a secreta Urso-trovão, liberada por `localStorage['arena_premio_dif']`). Tabelas por raça e sexo usam `raça + RN*sexo` (`RN=RACES.length`), não 8. O raio do urso sai de todo crítico: `critFx` chama `bearCrit` (intervalo de 0,5 s) e `bearBolt` (que marca `critFx.bz` para não se repetir); `boom`/`dmgE` sorteiam crítico nas habilidades quando `RC.bear`.
- Fases: o ciclo tem 7 cenários (`LV%7`; `PAL`/`THP`/`thBuild`/`PEX`/`PNM`/`PCL` índice 5 = Muralha do Norte, 6 = Pico Esquecido). `FBK` liga a fase ao chefe final: 6 → `F7` (Oto Andarilho: `oAI`, `oPil` pilares, `otoGrabHit`/`oGrabTick` agarrão no anfitrião, `otoPTick`/`otoRel` em cada aparelho; avisos com `up` (lança), `fz` (congela) e `gr` (agarrão); o cliente confirma o agarrão com o evento `og`), 7 → `F6`. `FBHPM`/`FBDMM` são os ajustes de vida e dano de cada chefe final (dificuldade crescente); o dano é aplicado em `bossHit` a partir do chefe vivo (`fbCur`), então vale no cliente também. O snapshot leva o portal aberto (`pt`). Maquinista: `G.l2`/`G.r2`, `tL2`/`tR2`, `MQ.ts`/`MQ.gs`/`MQ.cmd`; as torretas mandam a mira na presença (5º campo de `mn`) e o evento `tf` para chama/bomba/veneno (`rtFire`/`rtbUpd`, só visual).
- Chefe final da fase 7: `F6` (Valrei humano) que vira `F6u` (urso) em `vrTrans`/`vrTransTick`; IA em `vrAI`/`vuAI`, golpes pelos avisos `zc`/`zn`/`zl`/`zp` e a fila `e.zq`. Os modelos `valrei_h`/`valrei_u` só carregam a partir da fase 5 (`vrLoad`, chamado por `pal`). `valrei_u` traz `userData.rq` (repouso do herói) e `EMDMP` diz quanto da animação entra em cada osso. O golpe atual (`e.fmv`) vai no snapshot (`FMVL`, posição 10) para o cliente escolher a animação.
- Saves num endereço fixo: o itch.io põe cada upload num endereço novo, então o primeiro `<script>` do `index.html` abre escondida a `save.html` de `https://beuworf.github.io/arena-de-honra-meior/` (GitHub Pages do `main` do arena-de-honra-meior) e sincroniza com ela toda chave `arena_*` (as `arena__*` são só locais). O jogo (`__svRun`) e o idioma só começam depois de juntar as cópias (no máximo 3 s); conquistas e recordes são somados, nunca trocados. A `save.html` precisa continuar no `main` com o mesmo endereço; para testar em outro endereço use `window.ARENA_SAVE_URL`.

## Regras

- Todo texto visível para o jogador é em **português do Brasil**.
- Tudo precisa funcionar no celular (toque, `pointer:coarse`, safe areas) e
  com controle de PlayStation, além de teclado.
- O multiplayer é host-autoritativo (`NET.h` host, `NET.c` cliente,
  `NET.gh` fantasma após morrer). Mudanças em dano, inimigos ou drops precisam
  ser replicadas pelas mensagens `nemit`/`onEv`, ou rodar só no host.
- Rede: a presença de cada jogador (`netPost`) leva posição, golpe atual (`ak`: tipo, lado, duração e acerto), bloqueio, esquiva, invocações (`mn`) e animal (`an`). Os eventos `ev` levam os projéteis (`sh`), os anéis de efeito (`rg`) e os ataques do chefe (`bt`/`bs`). Os avatares remotos são cópias do personagem local montadas com a raça e a classe do outro jogador (`mkAv`) e animadas por `avUpd`. Cada mensagem do relay leva a hora de quem enviou (`s`); `nClk`/`nbPush`/`nbAt` montam um buffer de interpolação: o boneco remoto usa `r.vx/r.vz/r.vf` (interpolados) e a jogabilidade continua usando `r.x/r.z` (posição mais nova). Inimigos no cliente usam o mesmo buffer. No host, `mlw(w,wf)` faz os inimigos preferirem jogadores corpo a corpo (a distância conta 55%; Adagas não entra). `SB0`/`sbOf()` aplica um ajuste por build (dano causado via `sbTick` no host/solo, dano recebido em `hurt` e evasão extra). `sbOf()` multiplica ainda pelo `SBS0` (calibrado no solo para fase média 5,0–5,9 e usado também no cooperativo; ver `docs/balanceamento-rodada9.md`). No online o cliente multiplica o dano que manda em `dmg` e o host desconta esse dano de `e.dlh` para não escalar de novo. No single player não existe aliado; `al` só é usado no multiplayer, como o jogador real mais próximo.
- Entrar no meio da partida: o anfitrião, na fase `p`, põe no elenco quem está na sala (`ph:'l'`) e marcou pronto (`hostLate`, presença `ro`/`lt`/`lv`); o cliente começa por `netStart(ro,lv)` e vira espírito com `lateGhost` até `netLvl` reviver todo mundo. Enquanto `NET.xb` (presença `xb`), `xGain` multiplica o XP por 3 até o nível de `lateTgt()` (menor `xl` entre os outros sem bônus).
- Paladino: combos em `W[7].C` com `pf` (efeito extra em `palPf`, chamado no fim de `strike`); carga do ○ em `palHold`; defesa + ○/△ em `palBlk` (`palSpiral`/`palWave`, evento `pfx` só visual para os outros).
- Animações: clipes em `modelos/animacoes2.json` (`c`), escolhidos por classe em `heroPickAnim` e por gesto em `gaPick`; inimigos em `emClipPick`/`emAnim` (lista de clipes em `emClips`). Os clipes `m*` só têm ossos do corpo e recebem a pegada dos dedos de `p.grip` em `heroClips`. Conversor em `ferramentas/animacoes/`.
- Diagnóstico: `errLog` guarda os últimos erros em `arena_errs`; `arena_bc` marca se a aba estava jogando (para avisar quando ela fecha sozinha).
- Não use pausa, câmera lenta ou qualquer coisa que pare o tempo quando
  `NET.on` for verdadeiro.
- Abrir com `#dbg` no fim da URL expõe `window.__dbg` (jogador, inimigos,
  `spawn`, `hurt`) para testes automáticos.

## Como testar

1. Sirva a pasta (`python3 -m http.server`) e abra no navegador.
2. Jogar solo → escolha raça, classe e build → ande, ataque, suba de
   nível e escolha uma melhoria (Q), pause (Esc), morra e confira o recorde.
3. Para o cooperativo, abra duas abas: Cooperativo → Criar sala numa, Cooperativo → Entrar no jogo de um amigo (código de 4 dígitos) na outra.
4. Veja se o console do navegador ficou sem erros.
