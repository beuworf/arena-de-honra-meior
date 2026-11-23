# Urso-trovão (forma base) — trabalho em andamento, ainda fora do jogo

Personagem da raça secreta Urso-trovão. **Nada desta pasta é carregado pelo jogo ainda**: falta a forma de urso e decidir as regras da transformação.

## Créditos
- Arte de referência: inspirada na arte conceitual **"INUIT SIRIUS", de Wu Shenyou** (ArtStation). As imagens em `referencias/` serviram de base.
- Modelo 3D gerado pelo autor do jogo num app de IA a partir dessas imagens.

## Versão atual (modelo com textura)
- `urso_base.glb`: versão para o jogo, com ~21 mil triângulos (o original tinha 1,5 milhão), textura 1024×1024 e o esqueleto dos heróis (mesmas animações), na altura deles e virada para o mesmo lado.
- `urso_textura.jpg`: a textura separada (260 KB; a original tinha 4096×4096, 18 MB).
- `rig.html`: refaz o `urso_base.glb` a partir do modelo original do app (que tem 82 MB e fica fora do repositório, no Google Drive do autor).
- `previa.png`: frente, costas e um teste de pose exagerado (braço levantado e perna dobrada).

## Versão anterior
- `v1-projecao/`: primeiro modelo do app, que veio sem textura; a cor era projetada da folha de 4 vistas. Guardado só para referência.

Para abrir as ferramentas: na raiz do repositório, `python3 -m http.server` e acesse `/ferramentas/urso-trovao/rig.html`.

## Forma de urso (`forma-urso/`)
- `urso_forma.glb`: homem-urso em pé e curvado, com ~30 mil triângulos (o original tinha 1,5 milhão), textura 1024 e **a boca fechada** (a mandíbula foi girada 48° para cima, dentes cerrados).
- Esqueleto: o mesmo dos heróis (mesmos nomes de ossos, então usa as mesmas animações), com cada osso ajustado às articulações do urso (`juntas.js`: pernas curtas e abertas, tronco enorme e curvado, braços longos). Pesos de pele calculados pela distância até os ossos, só entre ossos vizinhos.
- Altura: 2,3 m curvado (o herói tem 1,8 m).
- `rig.html`: refaz o arquivo a partir do modelo original do app (fora do repositório, ~83 MB no Google Drive do autor; coloque-o em `forma-urso/original_app.glb`).
- `previa.png` (frente, lado e um teste de pose) e `previa_boca.png` (boca fechada).
- Ao colocar no jogo: as animações dos heróis guardam a rotação "absoluta" de cada osso, então o urso ficaria com a postura de um humano (reto, pernas juntas). Para manter o jeito curvado e de pernas abertas, as animações devem ser aplicadas como diferença em relação à pose de repouso do herói (pose do urso × (repouso do herói⁻¹ × animação)).

## Pendências
- Regras da transformação (duração, se mantém a arma, urso em pé ou de quatro).
- Conferir a deformação com as animações de verdade do jogo (ombros, cristais e a tira pendurada atrás).
