# everton-chaveiro

Site do **Everton Chaveiro Expresso 24h**, em Ipanema (Rio de Janeiro).

## Como rodar

Precisa do [Node.js](https://nodejs.org) 20.19 ou mais novo.

```bash
npm install
npm run dev
```

O `npm run dev` sobe um servidor local e abre o site no navegador (o endereço aparece no terminal). O cache fica desligado, então depois de editar um arquivo é só recarregar a página. Para ver celular, tablet e desktop lado a lado, abra `/Prévia Responsiva.dc.html` no mesmo endereço.

## Estrutura

Tudo o que vai para o ar fica em `public/`. O resto é ferramenta de desenvolvimento e não é publicado.

| Caminho | O que é |
| --- | --- |
| `public/index.html` | A página do site |
| `public/Prévia Responsiva.dc.html` | A página em celular, tablet e desktop lado a lado |
| `public/support.js` | Runtime que renderiza a página (arquivo gerado, não editar à mão) |
| `public/assets/` | Logo e fotos do site |
| `public/vendor/` | React, ReactDOM e Lucide, copiados do `node_modules` pelo `npm install` |
| `scripts/vendor.mjs` | Script que faz essa cópia |
| `uploads/` | Arquivos originais do design (não são publicados) |

## Publicar

É um site estático, sem etapa de build. No Vercel, o preset **Other** já publica a pasta `public/` sozinho, sem configuração extra. Em outras hospedagens, basta apontar a pasta de publicação para `public/`.

## Dependências

As bibliotecas são instaladas pelo npm com versão fixa e copiadas para `public/vendor/` automaticamente a cada `npm install`. Essa pasta fica no git, então o site não depende de CDN.

| Pacote | Versão | Para quê |
| --- | --- | --- |
| `react`, `react-dom` | 18.3.1 | Exigidos pelo `support.js`, que espera exatamente essa versão |
| `lucide` | 1.61.0 | Ícones |
| `http-server` | 14.1.1 | Servidor local do `npm run dev` (só desenvolvimento) |

Para atualizar o Lucide, rode `npm install lucide@<versão> --save-exact` e faça commit da pasta `public/vendor/` junto. O React deve continuar em 18.3.1 enquanto o `support.js` pedir essa versão.

O `overrides` do `package.json` troca uma dependência interna do `http-server` (`html-encoding-sniffer`) por uma versão que não usa o pacote depreciado `whatwg-encoding`.
