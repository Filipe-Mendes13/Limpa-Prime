# Limpa Prime — site completo

Landing page em HTML, CSS e JavaScript, pronta para hospedagem estática. Não precisa instalar Node, npm, banco de dados ou servidor de aplicação.

## O que está incluído

- Layout responsivo, com menu próprio para celular.
- Fotos dos sócios no ambiente aprovado, preservadas no arquivo da abertura.
- Comparador de antes/depois com mouse, toque e teclado.
- Seis categorias de serviços, apresentação da empresa e orçamento em três passos.
- Vídeo real do serviço, com reprodução controlada pelo visitante.
- Botões para o WhatsApp **+55 31 99191-3583** e mensagens por serviço.
- Animações suaves, foco visível e respeito à preferência por movimento reduzido.
- Imagens otimizadas e arquivos locais, sem dependências externas.

## 1. Executar no computador

Extraia o ZIP. Abra a pasta `limpa-prime` e dê dois cliques em `index.html`.

Para testar com um servidor local, se você tiver Python instalado, abra o terminal dentro dessa pasta:

No Windows:

```bash
py -m http.server 8000
```

No macOS/Linux:

```bash
python3 -m http.server 8000
```

Abra **http://localhost:8000** no navegador. Para encerrar o servidor, pressione **Ctrl+C** no terminal. Isso executa o site no computador; não o publica na internet.

## 2. Colocar o código no GitHub

1. Entre na sua conta do GitHub e crie um repositório chamado `limpa-prime`.
2. Você pode manter o repositório privado e autorizar somente esse repositório na integração de hospedagem.
3. Use a opção de enviar arquivos do repositório (Upload files).
4. Envie o **conteúdo da pasta extraída**, incluindo a pasta `assets`. Não envie apenas o ZIP.
5. Confirme o envio com um commit. O arquivo `index.html` deve ficar na raiz do repositório, junto de `styles.css`, `script.js`, `README.md` e `assets/`.

Se preferir usar Git no terminal, crie primeiro um repositório vazio e execute dentro da pasta do site:

```bash
git init
git add .
git commit -m "Site Limpa Prime"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/limpa-prime.git
git push -u origin main
```

Substitua `SEU_USUARIO` pelo seu usuário real. Faça a autenticação pelo fluxo normal do GitHub; nunca coloque senhas ou tokens no código do site.

## 3. Hospedagem recomendada: Cloudflare Pages conectado ao GitHub

O GitHub guarda o código e o histórico. O Cloudflare Pages entrega o site aos visitantes e publica as alterações enviadas ao repositório.

**Por que essa combinação?** A documentação do GitHub Pages restringe seu uso como hospedagem gratuita para negócios online e sites principalmente voltados a transações comerciais. Como a Limpa Prime divulga serviços e capta orçamentos, esta entrega recomenda hospedar pelo Cloudflare Pages, mantendo o código no GitHub.

1. Entre no painel da Cloudflare.
2. Acesse **Workers & Pages → Create application → Pages** e escolha a conexão/importação de um repositório Git.
3. Conecte sua conta GitHub, autorize o repositório `limpa-prime` e selecione-o.
4. Use a configuração abaixo:

| Campo | Valor |
| --- | --- |
| Production branch | `main` |
| Framework preset | `None` |
| Build command | `exit 0` |
| Build output directory | `.` |
| Root directory | Deixe o padrão, raiz do repositório |
| Environment variables | Nenhuma |

5. Clique em **Save and Deploy**. Ao terminar, o painel mostrará o endereço público com final `pages.dev`.
6. Abra esse endereço e teste no computador e no seu celular, incluindo os botões do WhatsApp e o comparador.

O ponto (`.`) indica a raiz do projeto, onde está o `index.html`. O comando `exit 0` apenas conclui a etapa de build, pois o site já está pronto para servir.

**Atualizações:** edite os arquivos e faça commit/push na branch `main`. A integração publica uma nova versão automaticamente.

**Domínio próprio:** no projeto do Cloudflare Pages, use **Custom domains** e siga a configuração de DNS indicada para seu domínio. Comprar o domínio é uma etapa separada; não precisa ter um para testar o site publicado.

## 4. Alterar o site

| Arquivo | Para que serve |
| --- | --- |
| `index.html` | Textos, seções, imagens, contatos e metadados |
| `styles.css` | Cores, fontes, espaçamentos, responsividade e animações |
| `script.js` | Menu, comparador, mensagens dos serviços e animações ao rolar |
| `assets/` | Imagens, logo, ícones e vídeo |

### Telefone

O número atual é `5531991913583`. Se trocar o número, substitua-o em **index.html e script.js**, e atualize também o telefone visível e o link `tel:` do HTML. Assim os links funcionam inclusive sem JavaScript.

### Fotos do antes e depois

Substitua `assets/antes.webp` e `assets/depois.webp`. As imagens atuais são do mesmo serviço, mas foram fotografadas em ângulos diferentes; isso está informado na página. Para um encaixe exato no comparador, use futuras fotos tiradas do mesmo ponto, com mesma orientação e enquadramento. Não foi criada artificialmente uma foto de resultado.

### Foto dos sócios

A abertura usa `assets/equipe-ambiente.webp`, derivada da composição aprovada. O site não gera rostos nem altera tatuagens; apenas exibe essa imagem com corte responsivo.

### Compartilhamento em WhatsApp e redes sociais

Depois de publicar e escolher o endereço definitivo, troque o valor de `og:image` no início de `index.html` pelo endereço **completo e público** da imagem:

```html
<meta property="og:image" content="https://SEU-DOMINIO/assets/compartilhar.jpg">
```

Substitua `SEU-DOMINIO` pelo endereço real, sem usar literalmente o exemplo. Nesse momento você também pode adicionar `og:url` e um link `canonical` com a URL definitiva. A imagem de compartilhamento já está incluída; a URL absoluta depende da hospedagem escolhida.

## 5. Verificação feita nesta entrega

- JavaScript conferido quanto à sintaxe.
- Imagens locais e referências de arquivos conferidas.
- Abertura e comparador inspecionados em navegador.
- Comparador testado por teclado nos extremos e com setas.
- Layout e menu conferidos em largura de celular (390 px).
- Vídeo reproduzido no navegador, sem erro de mídia.
- Destinos e mensagens dos links de WhatsApp conferidos, sem envio de mensagens.

A publicação em uma conta de hospedagem ainda não foi feita. Teste o endereço público depois de implantar, principalmente no seu próprio celular. O site não processa pagamentos nem armazena formulários; os pedidos seguem para o WhatsApp.

## Referências oficiais de hospedagem

- Restrições do GitHub Pages: https://docs.github.com/en/site-policy/github-terms/github-terms-for-additional-products-and-features
- Integração Git do Cloudflare Pages: https://developers.cloudflare.com/pages/get-started/git-integration/
- HTML estático no Cloudflare Pages: https://developers.cloudflare.com/pages/framework-guides/deploy-anything/

Guia preparado em 9 de novembro de 2026. Os nomes de alguns botões dos provedores podem mudar.
