# Urso-trovão (forma base) — trabalho em andamento, ainda fora do jogo

Personagem da raça secreta Urso-trovão. **Nada desta pasta é carregado pelo jogo ainda**: falta a forma de urso e decidir as regras da transformação.

## Créditos
- Arte de referência: inspirada na arte conceitual **"INUIT SIRIUS", de Wu Shenyou** (ArtStation). As imagens em `referencias/` servem de base para o modelo e a textura.
- Modelo 3D gerado pelo autor do jogo num app de IA a partir dessas imagens (`original_app.glb`).

## Arquivos
- `original_app.glb`: modelo como saiu do app (≈564 mil triângulos, sem esqueleto, sem textura).
- `urso_base.glb`: versão para o jogo, com 12 mil triângulos e o esqueleto dos heróis (mesmas animações), na altura deles e virada para o mesmo lado. Os pesos de pele vêm do corpo do herói; cristais, cabelo e capuz seguem só a coluna e a cabeça.
- `textura_folha.jpg`: a folha de 4 vistas redimensionada para 2048×1024; é a textura.
- `rig.html`: refaz o `urso_base.glb` a partir do `original_app.glb` (botão para baixar no fim).
- `previa.html`: mostra o modelo com a textura projetada (frente, lados e costas da folha), com as emendas suavizadas.
- `previa.png`: como ficou.

Para abrir: na raiz do repositório, `python3 -m http.server` e acesse `/ferramentas/urso-trovao/previa.html`.

## Pendências
- Forma de urso (o autor vai gerar).
- Regras da transformação (duração, se mantém a arma, urso em pé ou de quatro).
- Detalhes do modelo: faixa de pano solta no quadril (o autor preferiu manter) e linhas brancas finas do contorno do desenho nas pernas.
