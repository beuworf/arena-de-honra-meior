# Conversor de animações para o esqueleto dos heróis

Converte animações de outros esqueletos para o formato de `modelos/animacoes2.json`
(rotações de cada osso a 30 quadros por segundo, deslocamento do quadril e instante de impacto).

## Fontes usadas

- **Mesh2Motion – biblioteca humana** (CC0): `static/assets/human/animations/*.glb` do repositório
  `Mesh2Motion/mesh2motion-app` no GitHub. Esqueleto em pose T, de frente para +Z, proporção humana.
- **KayKit Adventurers / Skeletons** (CC0, Kay Lousberg): o conversor também lê o esqueleto deles
  (clipe `T-Pose` como referência). Ficou de fora do jogo por enquanto: os personagens do KayKit têm
  cabeça grande e braços curtos, então os golpes ficam contidos demais num herói de proporção humana.

## Como funciona

1. Para cada osso mapeado, a rotação do quadro é comparada com a pose T da origem (diferença em espaço do mundo).
2. A diferença é girada 180° (a origem olha para +Z; os heróis, para −Z) e espelhada: as armas do jogo
   ficam na mão esquerda, então o braço direito da origem move o braço esquerdo do herói.
3. A diferença é aplicada sobre a pose T do herói e convertida para rotação local de cada osso.
4. O quadril segue a mesma diferença de posição, escalada pela altura do quadril.
5. O impacto (`i[1]`) é o quadro de maior velocidade da mão da arma (ou do pé, nos chutes) e pode ser
   corrigido à mão em `lista.json` (`ti`, `t0`, `cut` para cortar o fim).

## Uso

Sirva uma pasta com `converter.html`, `three.min.js`, `GLTFLoader.js`, `meshopt_decoder.js`
(three r128), `herois_m.glb` (o `.glb` de `modelos/herois_m.json`), `heroinfo.json`
(lista de ossos e pegada dos dedos) e os `.glb` de origem em `m2m/`. Depois rode:

```
node converter.js lista.json saida.json
```

e junte os clipes de `saida.json` em `modelos/animacoes2.json` (chave `c`).
