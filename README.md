# Arena de Honra

Action RPG de horda em 3D low-poly (estilo PS1) que roda direto no navegador,
no PC e no celular. Escolha raça, classe e build, sobreviva às ondas de
inimigos, derrote o boss de cada nível e jogue com amigos pelo multiplayer
online P2P.

> Esta é a versão de testes, preparada para ser aberta e evoluída no
> [OhMyGame](https://github.com/WhiteTowerAI/ohmygame). O projeto original
> continua guardado, sem alterações, em `arena-de-honra-meior`.

## Como jogar

Abra o `index.html` no navegador. Para instalar como app no celular, ou para
o multiplayer funcionar direito, sirva a pasta por HTTP, por exemplo:

```sh
npx serve .
# ou
python3 -m http.server 8000
```

| Ação | Teclado | Controle (PlayStation) |
| --- | --- | --- |
| Mover | WASD / setas | Analógico esquerdo |
| Golpe rápido / forte | J / K | ○ / △ |
| Bloqueio (parry no tempo certo) | L | □ |
| Pular | Espaço | ✕ |
| Esquivar | Shift | R1 |
| Melhoria de nível (toque troca, segure escolhe) | Q (ou Z, X, V direto) | L1 |
| Elemento do Mago | 1–4 | Direcional |
| Reiniciar a fase (troca classe e build) | C, ou no menu de pausa | Share |
| **Pausar** | **Esc / P** | — |
| Cone de flechas (só Arco) | E | R2 |
| **Girar a câmera** | Clique na tela e mova o mouse | Analógico direito |

No celular os botões seguem o padrão do PPSSPP: L1 e R1 nos cantos de cima, △○✕□ em losango à direita, SELECT (Arma, só no Mago) e START (Pausa) embaixo no meio; Reiniciar fica no menu de pausa. Em *Configurações → Botões na tela → Editar layout* dá para arrastar cada botão e analógico para onde quiser, mudar o tamanho de cada um e de todos de uma vez, ajustar a transparência e escolher se o analógico de movimento é flutuante (aparece onde você toca) ou fixo. As posições ficam salvas em % da tela, então funcionam em celulares e tablets de tamanhos diferentes. O jogo roda deitado (tela cheia), com analógico de movimento à esquerda, analógico da câmera (📷) à direita e botões na tela; também dá para arrastar a tela para girar a câmera, e o analógico da câmera pode ser desligado nas configurações. As teclas podem ser trocadas
em **Configurações**.

## O que mudou em relação ao original

- **Nome e ícone:** o jogo se chama Arena de Honra em toda parte e tem ícone próprio.
- **Instalável:** dá para adicionar à tela inicial do celular (PWA), em tela cheia e na horizontal.
- **Pausa:** Esc ou P pausam o single player. O jogo também pausa sozinho quando você troca de aba. O multiplayer não pausa.
- **Números de dano:** cada golpe e cada magia mostra quanto tirou do inimigo, e golpes fortes aparecem em amarelo.
- **Recorde:** o jogo guarda seu melhor número de abates e o nível mais alto, e mostra os dois na tela de derrota e no menu.
- **Ajuda:** a barra de controles agora quebra linha em vez de sair da tela, e some depois de 15 s de partida. Ela continua aparecendo na tela de pausa.
- **Gráficos estilo PS1 (opcional, desligado por padrão):** os vértices "tremem" presos à grade de pixels e as cores usam dithering de 15 bits, tudo feito no próprio shader, sem custo extra. As texturas pixeladas (grama, terra, água animada, madeira, telhas, tijolo, pedra, tecido, pele) são geradas na hora, sem baixar nenhuma imagem.
- **Modelos mais detalhados:** os inimigos ganharam mandíbula, presas, sobrancelha, nariz, cotovelos, mãos com garras, pés, cinto, tanga e espinhos nas costas. Como cada parte vira uma malha só, eles ficaram mais leves que antes. O aliado também tem modelo novo, com capa, e as casas ganharam alicerce e lintel.
- **Cenário:** tem grama e flores divididas em blocos (só é desenhado o que aparece na tela), margem de areia no lago, sombra redonda embaixo dos personagens e variação de cor entre árvores e pedras.
- **Animações de ataque:** cada golpe agora tem antecipação (a arma recua), um movimento rápido com aceleração e um follow-through que volta suave. O corpo gira e se inclina junto, e as pernas firmam a postura. No golpe forte o personagem levanta a arma acima da cabeça e agacha ao bater. O estocada recua antes de avançar. Os braços balançam ao andar, o personagem respira parado e encolhe as pernas no pulo.
- **Efeitos:** rastro brilhante da arma com a cor de cada uma, faíscas e pedaços ao acertar, explosão de pedaços ao matar (maior no boss), estouro dourado no parry, poeira ao esquivar e ao pousar, e o inimigo "amassa" ao apanhar. As partículas são todas desenhadas de uma vez (1 chamada de desenho).
- **Jogador e animal:** o jogador ganhou boca, gola, fivela, túnica, braçadeiras, joelheiras e cano das botas. O animal tem corpo novo, com focinho, olhos, presas, cauda, pelo texturizado (o tigre tem listras) e patas que andam de verdade.
- **Armas realistas:** espada com guarda, empunhadura de couro, pomo e lâmina afiada com sulco; espada longa de duas mãos; machado com lâmina em meia-lua e fio claro; arco curvo com corda; lança com lâmina em folha e ponteira; adagas; cajado com aro dourado; martelo de guerra com faixas e espigão; escudo redondo com bossa e cruz. Os arqueiros inimigos também usam o arco novo.
- **Animações dos inimigos:** o passo segue a velocidade real (parado, eles respiram) e os braços balançam ao contrário das pernas. Eles se inclinam ao correr, para trás ao preparar o golpe, e avançam o corpo ao bater. Ao apanhar, são empurrados para trás. Tontos, eles cambaleiam; arremessados, se debatem. Ao morrer, piscam, caem de costas, escurecem e afundam no chão.
- **Câmera no ombro (estilo ação em 3ª pessoa):** a câmera fica atrás do ombro do personagem e o movimento é relativo a ela. Ela segue sozinha quando você corre, desvia das casas e esconde as árvores que ficam na frente. A visão de cima continua disponível nas configurações.
- **Visual inspirado em "3D pixel art":** contorno escuro de 1 pixel, sombras reais em pixel com o sol acompanhando o jogador, sol quente com sombra azulada, céu em degradê, rua de paralelepípedo e casas com janelas e floreiras.
- **Raças com visual próprio:** todas usam o mesmo esqueleto, mas cada uma tem proporção, rosto e cabelo diferentes (veja `docs/racas.png` e `docs/corpos.png`). O rosto é pintado numa textura feita para cada raça: pele, olhos com íris colorida, brilho e cílios, sobrancelhas, bochechas, nariz e boca. O Troll e o Goblin têm pupila em fenda, o Meio-orc tem uma cicatriz e o Goblin tem sardas. As peças do corpo são mais arredondadas, e as mãos e as botas deixaram de ser caixas. A túnica é pintada com gola, botões, costuras, dobras e barra; a calça tem costura e joelheira, e a bota tem cadarço.
  - **Humano:** cabelo curto com franja.
  - **Elfo:** orelhas longas para trás, corpo esguio, cabelo longo loiro e olhos verdes.
  - **Anão:** baixo e largo, careca, barba e bigode grandes.
  - **Gnomo:** bem baixinho, cabeça grande, nariz redondo, topete e bigode brancos.
  - **Meio-orc:** pele verde, mais largo, presas, sobrancelha pesada e moicano.
  - **Troll:** pele azul, alto, nariz comprido, presas grandes, orelhas caídas e cabelo laranja selvagem.
  - **Minotauro:** chifres, focinho com argola, orelhas de touro, grande e forte.
  - **Goblin:** pequeno, verde, orelhas enormes, nariz pontudo, dentes afiados e olhos amarelos.
- **Proporções por raça (estilo WoW Classic):** todas usam o mesmo esqueleto, mas com tronco, ombros, braços, pernas, cabeça e postura próprios (veja `docs/racas-corpo.png`). O anão é baixo e largo; o gnomo, minúsculo e cabeçudo; o meio-orc, largo, de mãos grandes e ombros caídos; o troll, alto, magro, de braços longos e curvado; o minotauro, enorme; e o goblin, o menor de todos. As armas e o escudo acompanham o tamanho de cada um.
- **Balanceamento:** o Monge ganha +60% de dano no single player, porque no multiplayer ele é suporte. O Mago de Gelo ganhou um pouco de dano. Os arqueiros inimigos atiram mais devagar, erram mais e o jogador tem 20% de chance de evadir as flechas. O chefe agora arremessa inimigos menores (com marca no chão) e golpeia o chão com uma onda de choque que atordoa; dá para pular a onda ou esquivar. Veja `docs/balanceamento.md`.
- **Animação de combate refeita (braços com ombro, cotovelo e mão):** a arma agora fica de verdade na mão. Cada golpe define o caminho da mão e da lâmina, e o ombro, o cotovelo e a mão são calculados para acompanhar (cinemática inversa). A articulação do ombro avança com o alcance, o tronco gira sobre as pernas e a cabeça continua olhando para frente. Espada longa, lança e martelo são segurados com as duas mãos; o escudo vai no braço e sobe no bloqueio; o arco é puxado ao atirar; o Monge fica em guarda e soca com o braço certo. O personagem passou a ser destro. Os outros jogadores no multiplayer usam o mesmo sistema. Veja `docs/animacoes.png`.
- **Paladino com martelo pesado:** o martelo é segurado com as duas mãos o tempo todo. Parado, o martelo descansa no ombro, com as duas mãos no cabo e esse ombro um pouco mais baixo por causa do peso (veja `docs/paladino-parado.png`). Nos golpes, as mãos ficam juntas perto do peito, o cabo varre largo, o tronco gira e inclina junto e o personagem agacha no impacto; os movimentos têm um atraso de peso. Veja `docs/paladino.png`.
- **Monge (antigo Pugilista):** a classe mudou de nome e de visual, com as mesmas habilidades. Túnica laranja, faixa vermelha na cintura e no peito, colar de contas, faixas de pano nos antebraços e postura de artes marciais. Veja `docs/monge.png`.
- **Animal do caçador com ataques de verdade:** o animal ganhou cabeça, mandíbula e cauda que se movem, e deixou de "encostar" no inimigo. Ele dá **patadas** alternadas, **morde** abrindo a boca, dá o **bote** (salta sobre o alvo e o derruba) e o urso se **ergue nas patas traseiras e bate no chão**, derrubando quem está perto. O golpe de lança chama o animal para avançar e morder, e a mordida especial virou um bote. Ele se vira para onde anda e para quem ataca, e cai de lado quando é derrotado. Urso, tigre e lobo têm corpo, orelhas, focinho e cauda diferentes. Veja `docs/animal-ataques.png`.
- **Invocações do Necromante com modelos novos:** zumbi guerreiro curvado com costelas à mostra, espada enferrujada e escudo quebrado; esqueleto mago com caveira, manto e cajado; escudeiro de armadura com escudo-torre; cão espectral de ossos; abutre com asas que batem. Veja `docs/invocacoes.png`.
- **Sem aliado no single player:** o boneco de capa verde que seguia o jogador era só um teste do começo do projeto e foi removido. O que dependia dele mudou: o teleporte do Mago de Ilusão agora salta para longe do inimigo mais perto, o "puxar aliado" do Paladino vira um escudo sagrado (+25), o L1 do Necromante abre a mochila, o orbe do Monge cura você, e o bônus do Minotauro vira +8% de cura em você. No multiplayer, essas habilidades continuam valendo para os outros jogadores.
- **Multiplayer completo:** cada jogador vê os outros com o personagem detalhado (raça, proporções, rosto, classe, armas e escudo) e com as mesmas animações: golpes com antecipação, corrida, pulo, esquiva e bloqueio. Também chegam pela rede:
  - os projéteis (flechas, magias, martelo, soco à distância, orbe) e os efeitos de área;
  - as invocações do Necromante e o animal do Arqueiro;
  - as faíscas e os números de dano quando outro jogador acerta um inimigo, e a queda dos inimigos ao morrer;
  - a altura dos inimigos arremessados e os dois ataques do chefe (aviso, onda e arremesso), que acertam e atordoam qualquer jogador.
- **Ajustes de kit (rodada 3):**
  - **Adagas:** a esquiva gasta 40 de estamina (a barra amarela) e demora mais para recarregar.
  - **Dois Machados:** cada inimigo eliminado devolve 6 de vida.
  - **Mago de Fogo:** explodir um inimigo queimado causa dano em área nos vizinhos. A bola de fogo é um projétil maior, atravessa até 3 inimigos e cada acerto causa dano em área e queima os vizinhos.
  - **Mago de Gelo:** acertar o projétil num inimigo lento ou enfraquecido congela na hora; a nevasca congela os enfraquecidos; o estilhaçar pega lentos, enfraquecidos e congelados, com dano maior nos congelados.
  - **Mago de Ilusão:** invoca 3 clones de verdade (fogo, gelo e sombra), que andam, escolhem alvos e usam magias sozinhos por 14 s. Os inimigos os atacam e eles somem com um golpe. No online funciona igual para quem hospeda e para quem entra: todos veem os clones (como cópias do personagem do dono), e os inimigos os atacam e derrubam.
- **Ajustes de kit (rodada 4):**
  - **Mago de Ilusão:** os clones têm recarga própria de 20 s, separada das outras magias.
  - **Chefe:** no solo, recupera 4% da vida ao devorar um inimigo (no online continua 7%).
  - **Adagas:** a esquiva gasta 30 de estamina (eram 40).
  - **Necromante:** jogando sozinho, as invocações se curam um pouco cada vez que causam dano ou empurram inimigos.
  - **Lança:** com o animal caído, os golpes de lança causam 80% a mais de dano.
- **Classe nova: Corrompido** (😈, focada em dano; veja `docs/corrompido.png`). Todos os golpes acertam em círculo em volta dele.
  - **Barra de poder:** começa vazia e não enche sozinha. Enche um pouco a cada acerto e bastante com os **fragmentos de alma**, que os inimigos eliminados deixam cair e que também curam.
  - **○ Golpe rápido:** sequência de cortes em círculo; o terceiro é um giro maior.
  - **△ Golpe forte:** salta sobre o inimigo mais próximo (sem poder ser atingido no ar) e explode, jogando longe quem está perto.
  - **□ Habilidade (segurar):** raio pelos olhos, que gasta a barra enquanto estiver segurando.
  - **✕ no ar com a barra cheia:** pancada no chão e **forma gigante**: recebe 30% menos dano, ganha 25% de evasão e os golpes ficam maiores e mais fortes. A forma gigante **gasta a barra de energia**, e o gasto aumenta com o tempo: dura uns 13 s sem bater e no máximo uns 22 s batendo sem parar (golpes recarregam pouco nessa forma). Gigante, ele não recolhe fragmentos (eles ficam no chão para depois).
  - **Evasão passiva:** cada acerto dá 6% de chance de desviar, até 25%; some se ficar 2,5 s sem acertar.
  - **Com a esquiva (R1 / Shift) logo depois de uma habilidade:** ○ lança uma onda cortante para frente; △ causa dano no alvo e leva o personagem 4 m para trás dele; □ concentra o raio (mais forte, gasta mais rápido); na forma gigante, causa uma explosão enorme que encerra a transformação.
- **Classe nova: Xamã** (🪶, controle de área e suporte; veja `docs/xama-totens.png` e `docs/xama-lobo.png`).
  - **□ Totem:** coloca um totem à frente (até 3; o quarto substitui o mais antigo; duram 30 s). Cada totem tem uma área circular grande que deixa lento quem passa por ela e ataca sozinho o inimigo mais próximo com um pequeno raio.
  - **Três totens:** um inimigo que esteja dentro da área dos 3 totens ao mesmo tempo explode, causando dano em volta (no máximo uma vez a cada 3 s por inimigo).
  - **△ Cura das águas:** cura o xamã, os aliados perto dele e os aliados dentro da área dos totens (recarga de 7 s).
  - **○ Raio em cadeia:** acerta o inimigo mais próximo e salta para até 4 vizinhos. Os totens lançam o mesmo raio ao mesmo tempo. **Toque ○ de novo logo em seguida** para puxar o raio de volta e deixar presos no chão todos os inimigos atingidos. **Segure ○** para canalizar: o raio dura mais e o dano cresce, mas o xamã não anda enquanto segura (soltar e tocar de novo também prende, por mais tempo).
  - **✕ no ar:** vira **lobo espiritual**, 50% mais rápido, com 25% de evasão e sem ser atordoado nem empurrado pelos inimigos, e **atravessa a multidão** afastando para os lados quem estiver no caminho (menos o chefe). No lobo: **□** é um avanço que derruba todos os inimigos no caminho, **○** golpe rápido e **△** golpe forte (com combos). **✕** volta à forma de xamã.
  - Online, os outros jogadores veem os totens, os raios e o lobo.
  - **Modelo do lobo** (veja `docs/lobo-poses-1.png` e `docs/lobo-poses-2.png`): peito fundo, juba, cabeça com focinho, orelhas, mandíbula e dentes, pernas com joelho e jarrete, rabo felpudo em 3 partes, marcas e chamas espirituais. Animações: galope com a coluna flexionando, respiração e orelhas mexendo quando parado, pulo com as pernas recolhidas, avanço esticado de boca aberta, mordida (recua, avança e fecha a boca), garra (empina e bate com a pata), mordida girando no combo e uivo ao se transformar. O rabo segue as curvas com atraso e o lobo inclina o corpo nas curvas.
- **Ajustes de equilíbrio:**
  - Corrompido: dano base dos golpes corpo a corpo 20% menor (as habilidades continuam iguais).
  - Projéteis do jogador (flechas, magias, martelo arremessado, onda do Corrompido etc.): dano base 25% maior.
  - Arqueiro (Arco): o ○ (rajada) ficou um pouco mais lento, 0,34 s entre rajadas em vez de 0,28 s.
  - Paladino: o solo sagrado agora também deixa lentos os inimigos dentro dele.
  - Online: os inimigos preferem atacar quem luta corpo a corpo (Guerreiro, Lança, Paladino, Monge, Corrompido e Xamã em forma de lobo). O assassino de Adagas fica de fora dessa regra.
- **Mouse por classe:** os dois botões do mouse funcionam como botões do controle (segurar também vale). Nas classes à distância o clique prioriza os projéteis; nas de corpo a corpo, o esquerdo faz o combo mais longo. No começo da partida aparece um aviso com o que cada botão faz.

  | Build | Esquerdo | Direito |
  |---|---|---|
  | Espada e Escudo, Espada Longa, Monge | combo (golpe rápido) | golpe forte |
  | Dois Machados | combo | arremessar machado |
  | Arco | rajada de flechas | cone de flechas |
  | Lança e Animal | combo da lança | golpe forte |
  | Adagas | combo | arremessar adaga |
  | Mago | magia principal (bola de fogo, gelo…) | magia de área |
  | Paladino | combo | arremessar martelo |
  | Necromante | zumbi | esqueleto |
  | Corrompido | combo em círculo | raio dos olhos (segure) |
  | Xamã | raio em cadeia (segure: canaliza; clique de novo: prende) | totem |
  | Xamã lobo | combo | golpe forte |
- **Ajustes de equilíbrio (rodada 3):**
  - Xamã: anda mais devagar na forma humana (o lobo continua rápido).
  - Corrompido: na forma gigante, menos dano e menos cura ao eliminar; na forma normal, mais cura (abates e fragmentos de alma); explosões do salto e da explosão final mais fortes.
  - Adagas: mais dano base e +15% de evasão passiva. Dois Machados: mais dano base.
  - Lança e Animal: combos novos — ○○△ lança o inimigo para o alto, ○△ giro em área, △○ estocada que atordoa, △△ golpe pesado; nos combos o animal ataca junto.
  - Mago: bola de fogo com mais dano base.
  - Necromante: o abutre (pular no ar) tem recarga de 10 s e planeio curto; ele não fica mais quase sempre no ar.
  - Primeiro chefe: devora aliados para se curar com menos frequência (a cada 14 s).
- **Apoio no online:** as curas do Monge, do solo sagrado e das mãos erguidas do Paladino e o orbe do Monge curam todos os jogadores aliados no alcance (antes só o mais próximo). Quem recebe a cura vê um brilho verde. Os inimigos que miram o aliado do Necromante passam a atacar o jogador de verdade.
- **Invocações do Necromante lutam sozinhas** quando não estão sob comando: procuram inimigos perto do necromante e usam combos — zumbi (garra, garra, pancada em área e salto com mordida que sangra), esqueleto mago (fogo, queimadura, explosão e chuva de ossos que deixa lento), escudeiro (dois cortes, pancada de escudo que atordoa e investida que derruba), cão (mordidas, arrancada que sangra e bote em quem está longe) e abutre (bicadas e mergulho em área).
- **Segredo:** no solo ou no online, se você matar qualquer chefe de fase (o chefe comum, o Cavaleiro Esqueleto ou o Rei Esqueleto Infernal) em menos de 40 s depois que ele aparece, surgem dois chefes secretos, o Esqueleto Rei e o Cérbero de Ossos (veja `docs/chefes-secretos.png`, `docs/cerbero.png` e `docs/chefes-secretos-ataques.png`). O portal para a próxima fase só abre quando os dois caem. Ao matar o chefe sem ativar o segredo, o jogo mostra em quantos segundos você o derrotou. Acontece no máximo uma vez por fase.
  - **Esqueleto Rei:** espadão, coroa e capa. Golpe normal de espada e 3 especiais: *Lâmina do Rei* (cone na frente dele), *Exército dos mortos* (invoca 4 esqueletos) e *Prisão de ossos* (um círculo embaixo de cada jogador; quem não sair é preso pelos espinhos).
  - **Cérbero de Ossos:** cada cabeça escolhe o próprio alvo e morde sozinha. Cada uma tem um especial: a de fogo solta um *sopro de fogo* em cone, a de sombra dá um *uivo* com onda de choque (pule ou esquive) e a de veneno cospe *ácido* que deixa uma poça no chão.
  - Todos os ataques especiais mostram um aviso no chão antes de acertar.
- **Esqueletos campeões** (veja `docs/esqueletos-campeoes.png`): de vez em quando surge um esqueleto raro com a arma, a capa e os olhos da cor de uma build sorteada, usando as habilidades dela. Aparece um aviso quando ele surge e quando é derrotado.
  - Chance por inimigo gerado: **1% no solo** e **2% no online**, e ela sobe a cada chefe derrotado na run (+0,5% no solo, +0,75% no online). No online podem vir **2 ou 3 de uma vez**. No máximo 3 vivos ao mesmo tempo.
  - Kits: Guerreiro do Escudo (investida, giro e bloqueio que reduz o dano), Espadachim (estocada veloz, lançar ao ar, corte duplo), Guerreiro do Machado (giro triplo, machado arremessado, salto), Arqueiro (rajada, leque de flechas, armadilha e salto para trás), Lanceiro (estocada longa, arremesso para o alto, lobo de ossos), Assassino (aparece pelas costas, adaga arremessada, leque de lâminas e 30% de esquiva), Mago (bola de fogo, nova de gelo, orbe sombrio e ilusões), Paladino (martelo arremessado, solo sagrado que cura ele e machuca quem fica dentro, salto do martelo), Monge (chute voador, palma explosiva, meditação), Necromante (ergue mortos, orbe sombrio, dreno de vida), Corrompido (salto explosivo, raio dos olhos, lâminas em círculo e forma gigante abaixo de metade da vida) e Xamã (totem que dá choque, raio em cadeia, cura das águas).
  - Todos os ataques especiais mostram um aviso no chão ou vêm como projétil visível; no online cada jogador vê os mesmos avisos.
- **Nível do personagem na run:** cada abate dá XP (comuns 2; especiais 6–16, como escudeiro, blindado, curandeiro e os do online; grandes 12; mímico 30; campeões 45; chefes 80–160 e chefes secretos 120) e a barra roxa abaixo da vida mostra o nível. Cada nível dá +3% de dano e +4 de vida máxima e abre um painel pequeno no topo com 3 melhorias sorteadas: dano +8%, vida máx. +12, velocidade +6%, recarga −7%, esquiva +4%, regeneração +0,6/s, cura por abate +2 ou projéteis +12%. O painel não pausa o jogo: o botão L1 / Q passa de opção e segurar escolhe (ou toque/clique na opção, ou Z, X, V). Tudo zera quando a partida acaba. No online, cada abate dá 40% do XP para todos e 60% para quem matou, e o ranking final mostra o nível de cada jogador.
- **Ajustes (rodada 4):** Xamã mais lento na forma normal (o lobo continua rápido); os clones do Mago (Ilusão) aguentam 2 golpes; o raio do Xamã alcança só até o raio dos totens em volta dele, mas acerta qualquer inimigo que esteja dentro da área de um totem, mesmo longe.
- **Corrompido (rodada 7):** evasão máxima 25% (era 40%), forma gigante recebe 30% menos dano (era metade) e gasta a energia, fragmento de alma cura 8 (era 12); explosão do salto e explosão final mais fortes. Relatório em `docs/balanceamento-rodada7.md`.
- **Equilíbrio do single player (rodada 8):** cada build tem um ajuste próprio de dano causado, dano recebido e evasão (vale também no online: cada jogador escala o próprio dano antes de mandar ao host), achado pelo laboratório com as vantagens de raça desligadas, para que em média toda build chegue à fase 2 (fase média entre 2,16 e 2,64, média geral 2,37). Seguindo o tema: guerreiros e paladino com mais defesa e mais dano físico, arqueiro, caçador, assassino e monge com evasão extra, necromante com invocações bem mais fortes, mago com um pouco mais de dano e o Corrompido com menos dano. Tabela em `docs/balanceamento-rodada8.md`.
- **Pontos de Apoio (online):** curar aliados (Monge, Paladino, Xamã, solo sagrado, orbe), dar escudo (Paladino puxando o aliado) e marcar aliado (Necromante) rendem pontos de Apoio e XP (1 ponto = 0,25 XP). Só conta a cura que o aliado realmente precisava, para não render curando quem está com a vida cheia; marcar o mesmo aliado rende no máximo uma vez a cada 20 s. O Apoio aparece ao lado do nível no HUD e numa coluna própria do ranking, com 💚 para quem mais apoiou.
- **Mochila removida:** o botão L1 / Q agora é o da melhoria de nível (o Necromante no online continua usando ele para marcar o aliado quando não há melhoria). As bombas que os inimigos deixavam viraram XP; as poções continuam curando na hora.
- **Tela de abertura:** ao abrir o jogo aparece a marca **beuworf** (um urso de guerra em vermelho-sangue, desenho original) por uns 2,5 s; um toque ou tecla pula.
- **Som e música do próprio jogo:** todos os efeitos (golpes, golpe pesado, impacto, explosão, raio, flechas, pulo, esquiva, cura, nível, chefe) e a trilha são gerados na hora pelo navegador, sem arquivos de áudio de terceiros. A música é procedural em ré menor com tambores tribais e muda sozinha entre menu (calma), combate e chefe (mais rápida). Em *Configurações* há **volume geral**, **música** e **efeitos** separados (0–100%) e o botão de mudo; dá para zerar a música e ouvir a sua ou conversar no Discord. O som pausa quando o jogo sai da tela.
- **Um cenário por fase** (repete a cada 5): 1 **entrada da vila** (paliçada com portão e torres, lampiões acesos, poço, feira, casas e cercas), 2 **caminho para o deserto** (chão seco, árvores secas, carroça quebrada, placas), 3 **deserto** (dunas, cactos, oásis com palmeiras, ruínas, costelas gigantes), 4 **entrada do castelo** (muralha, torres, portão com grade, tochas, estandartes, lápides) e 5 **castelo do chefe final** (pilares, braseiros de chama verde e roxa, tapete real e trono). Cada cenário tem céu, cores e obstáculos próprios e é igual para todos no online.
- **Cavaleiro Blindado** (a partir da fase 2): armadura de placas pesada, lento e resistente. Flechas, adagas, lanças, machados e martelos arremessados ricocheteiam nele (aparece "🛡 IMUNE"); só magia (fogo, gelo, raio sombrio, onda do Corrompido), ataques corpo a corpo e explosões o ferem. Em partidas com Arqueiro de arco ele aparece desde a fase 1 e com frequência bem maior, para o arqueiro não vencer só parado atirando.
- **Inimigos exclusivos do online** (não aparecem no solo; cerca de 1 em cada 5 inimigos novos no online). Cada um pune um jeito de jogar, e aparece mais quando há jogadores daquele estilo no grupo:
  - **Caçador de Sombras** (fase 1+): some em fumaça e reaparece atrás de um jogador com um círculo roxo de aviso; quem fica parado é atingido.
  - **Atirador Escudeiro** (fase 1+): besta e escudo frontal (bloqueia metade do dano de frente); atira e recua.
  - **Espinhento** (fase 1+): o dano corpo a corpo volta para quem bateu; projéteis e magia causam +60% nele.
  - **Gosma Viva** (fase 1+): ao morrer se divide em duas menores, por até três gerações.
  - **Bruxo Anulador** (fase 2+): cria uma bolha de 8 s onde as magias somem; ele mesmo é imune a magia.
  - **Ladrão de Energia** (fase 2+): rápido e frágil; cada golpe rouba estamina.
  - **Corrente de Ossos** (fase 2+): dois esqueletos ligados por uma corrente que fere quem cruza (pule por cima).
  - **Porta-Estandarte** (fase 2+): fica atrás da horda e deixa os inimigos em volta 30% mais fortes e rápidos.
  - **Coveiro** (fase 3+): cava buracos embaixo dos jogadores que prendem e machucam.
  - **Totem Profano** (fase 3+): parado, ergue como esqueletos os inimigos que morreram perto dele.
  - **Mímico** (raro): parece um baú de tesouro, acorda quando alguém chega perto e solta bastante saque.
- **Bestiário** (menu principal): fichas de todos os inimigos e chefes, com onde aparecem, como agem e qual a fraqueza, com filtros Comum, Só online e Chefe.
- **Portal entre fases:** ao derrotar o chefe, um portal se abre na saída do cenário (portão da vila, fim da estrada, trilha do deserto, portão do castelo, porta dos fundos do castelo) e uma seta no chão guia até ele. Enquanto o portal está aberto não chegam inimigos novos. Ao atravessar, a tela escurece com o nome da próxima fase e você chega pela entrada do novo cenário. No online, basta um jogador encostar no portal para todos irem juntos.
- **Chefe da fase 3: Cavaleiro Esqueleto** (volta a cada 5 fases, no deserto): um esqueleto de elmo, lança e escudo montado num cavalo zumbi de olhos verdes e cascos em chamas fantasma. Investida em linha reta (com faixa de aviso) que deixa rastro de fogo verde, pisoteio em círculo quando o cavalo empina, relincho fantasma (onda: pule ou esquive) e invocação de cavaleiros caídos.
- **Chefe da fase 5: Rei Esqueleto Infernal** (volta a cada 5 fases): coroado de chamas verdes e roxas, com espada em chamas. Lâmina infernal em cone, chuva de fogo que deixa poças em chamas, exército de esqueletos e prisão de ossos; com metade da vida ele se enfurece, solta uma onda (pule ou esquive) e ataca mais rápido.
- **Inimigos novos:** **kamikaze** (fase 1+, corre e explode com aviso no chão; morto antes, explode na hora e pega outros inimigos), **escudeiro** (fase 2+, bloqueia 80% do dano de frente e gira devagar, ataque pelas costas), **curandeiro** (fase 3+, cura os inimigos em volta — derrube primeiro) e **invocador** (fase 4+, chama diabinhos).
- **Online que funciona em qualquer rede:** o multiplayer deixou de usar conexão direta entre os aparelhos (WebRTC/PeerJS), que falhava em 4G/5G e em muitos roteadores. Agora as mensagens passam por um servidor público de retransmissão (broker MQTT por WebSocket), sem conta e sem servidor próprio. O jogo tenta quatro servidores em ordem (EMQX, Eclipse, HiveMQ e Mosquitto) e quem entra procura o lobby em todos. O lobby mostra o servidor em uso. Para usar outro, defina `window.ARENA_BROKERS` antes do script.
- **Sexo do personagem:** todas as raças têm versão masculina e feminina, escolhida na tela de seleção (botões no topo, tecla G ou △ no controle) e no lobby do online. A versão feminina usa os mesmos ossos, com ombros e braços mais estreitos, postura mais ereta, rosto com cílios, sobrancelha fina e lábios, e cabelo próprio em cada raça: humana de cabelo longo, elfa com tiara, anã de tranças e sem barba, gnoma de marias-chiquinhas rosa, meio-orc de rabo de cavalo e presas menores, troll de tranças azul-esverdeadas, minotaura de chifres menores e tranças, goblin de rabo de cavalo roxo. Veja `docs/racas-femininas.png`.
- **Ranking no online:** quando todos caem, aparece uma tabela para todos os jogadores com os abates de cada um (total e por tipo: comuns, arqueiros, conjuradores, grandes e chefes), o dano causado ao chefe, o nível alcançado e o tempo da partida. O host credita cada golpe a quem o deu; dano contínuo (queimadura, sangramento, veneno) conta para quem acertou por último. Veja `docs/ranking.png`.
- **Tela cheia e iPhone:** no Android e no iPad o jogo entra em tela cheia no primeiro toque; o botão **Tela cheia** no canto superior esquerdo do menu faz o mesmo. No iPhone o Safari não permite tela cheia em sites, então o botão explica como usar **Compartilhar → Adicionar à Tela de Início** (o jogo abre sem as barras do navegador). O zoom de toque duplo e de pinça do iPhone fica bloqueado durante o jogo.
- **Online mais estável:** os outros jogadores e os inimigos são desenhados com um pequeno atraso ajustado à conexão, entre duas posições recebidas, o que tira as travadas e os teleportes quando os pacotes chegam atrasados ou juntos. Se a conexão com o servidor de sala cair, o jogo reconecta sozinho sem sair da partida.
- **Desistir da run:** no menu de pausa, encerra a partida e mostra o resumo com o recorde.
- **Personagens VRoid (opcional, desligado por padrão):** em *Configurações → Boneco 3D (VRoid)* o jogador pode carregar o próprio modelo VRM (o jogo não traz nenhum modelo 3D pronto), com animação própria de corpo humano e o visual de cada classe por cima. O modelo fica salvo só no aparelho. Veja `modelos/LEIA-ME.md`.
- **Mira dos projéteis:** facas, magias, martelo arremessado, rajada de flechas, soco à distância e orbe sombrio miram primeiro no inimigo sob o mouse. Com o mouse capturado, no analógico, no controle ou no toque, vale o centro do olhar (a mira no meio da tela); na câmera de cima, a frente do personagem. Sem ninguém na mira, vão no mais forte (boss, depois os grandes) e, se forem todos iguais, no mais perto. Um anel vermelho marca o inimigo na mira.
- **Celular:** botões no padrão do PPSSPP e editor de layout (posição, tamanho e transparência de cada botão), analógico de câmera, tela cheia na horizontal e aviso para girar o aparelho.
- **Opções para deixar leve:** Sombras, Contorno, Efeitos de golpe, Grama e flores e Visual PS1 podem ser desligados. No celular as sombras já começam desligadas.
- **Projeto OhMyGame:** o repositório tem `ohmygame.json`, um documento de design (`docs/design.md`) e regras para o agente (`AGENTS.md`).

## Abrindo no OhMyGame

1. Instale o OhMyGame (macOS ou Windows) pelo site oficial.
2. Clone este repositório e use **Abrir pasta**. O `ohmygame.json` faz o
   app reconhecer o projeto como *General Game*.
3. Em **Project settings → Web preview**, escolha o modo *Static files*: o
   jogo é um único `index.html` e não precisa de instalação.
4. Peça mudanças no chat. O agente lê o `AGENTS.md` e o `docs/design.md`
   antes de mexer no código, e pode jogar o jogo para conferir o resultado.

![Antes e depois](docs/antes-depois.png)

## Estrutura

```
index.html             o jogo inteiro (HTML + CSS + JS, three.js r128 e PeerJS via CDN)
manifest.webmanifest   dados do app instalável
icon.svg               ícone
ohmygame.json          tipo do projeto para o OhMyGame
modelos/               instruções para usar o seu próprio boneco VRoid (.vrm)
docs/design.md         documento de design do jogo
AGENTS.md              regras para agentes de código (OhMyGame, Claude Code, Codex…)
```
