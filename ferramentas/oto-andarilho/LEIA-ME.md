# Oto Andarilho (próximo chefe, ainda fora do jogo)

Brutamontes do gelo: juba e barba brancas, braço esquerdo de gelo, ombreiras em forma de chifre azul, couro marrom e pele pálida.

## Créditos
- Inspirado na arte de **～ 轩 (Xuan)**, artista chinês ("Human Ornn by ～ 轩", repostada no Reddit em r/ornnmains). Modelo 3D gerado pelo autor do jogo num app de IA a partir da arte.
- A arte é fan art do Ornn (Riot Games). Para o chefe ser um personagem nosso, mudamos o nome, as cores, a lava (agora gelo) e a barba ruiva (agora branca).

## Arquivos
- `oto_andarilho.glb`: modelo para o jogo, **com o esqueleto dos heróis** (mesmas animações). 50 mil triângulos, textura 1024, 2,2 m de altura, de frente para -z como os heróis. Traz `userData.altura` e `userData.rq` (repouso do herói) como o urso do Valrei.
- `oto_sem_ossos.glb`: o mesmo modelo sem esqueleto (frente para +z), base para refazer o rigging.
- `textura_oto.jpg`: textura com as cores novas (2048).
- `rig.html` + `juntas.js`: refazem o `oto_andarilho.glb` (posição de cada articulação em `juntas.js`).
- `recolor.py`: a troca de cores. Usa um mapa de posição (cada pixel da textura com a posição 3D do ponto do modelo) para mexer só onde precisa: braço de lava → gelo, juba/barba/pelos rosados → brancos, chifres e vermelhos → azul, pele lilás → pálida, calça roxa → azul-ardósia, botas → couro escuro. As bordas dos pedaços da textura recebem a cor nova do vizinho (sem linhas da cor antiga).
- `previa_cores.png`, `previa_animacoes.png` (parado, andar, golpes A/B, esmagar, soco, golpe com as duas mãos e magia) e `previa_jogo.png` (no Pico Esquecido, em tamanho de chefe).

## Como as animações entram
Como no urso do Valrei: animação como diferença em relação ao repouso do herói, com o tronco só em parte e os braços seguindo a animação direto
(`EMDMP.oto={Hips:.6,Spine:.35,Chest:.35,UpperChest:.35,Neck:.6,Head:.6, ombros/braços/mãos: -1}`). Assim ele mantém as pernas abertas e o corpo curvado e os golpes aparecem.

## Falta
- Decidir a fase, os golpes e a história dele no jogo.
