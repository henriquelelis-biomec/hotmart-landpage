# Hotmart Landpage

Landing page estatica para o curso **Biomecanica do Desempenho Esportivo**, com HTML, CSS, JavaScript e assets locais.

## GitHub Pages

Site publicado em: https://henriquelelis-biomec.github.io/hotmart-landpage/

## Estrutura

```text
.
|-- .nojekyll
|-- index.html
|-- assets/
|   `-- course-cover.png
|-- css/
|   `-- styles.css
`-- js/
    `-- main.js
```

## Como visualizar

Abra `index.html` diretamente no navegador ou sirva a pasta com um servidor estatico local.

Exemplo com Python:

```bash
python -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Observacoes de manutencao

- O arquivo `index.html` referencia `assets/author.jpg`, mas esse asset ainda nao esta presente na pasta.
- Antes de publicar em producao, revise os links dos botoes de compra, que atualmente usam `href="#"`.
- Se os textos aparecerem com acentos quebrados no navegador ou no editor, salve os arquivos como UTF-8.
