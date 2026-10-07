# R7XIR

Painel web responsivo com tema azul, marca R7XIR, símbolo Spotify, cartões de controles redesenhados e suporte PWA para instalação na tela inicial. Inclui autenticação por chave, gerador de sensibilidade, histórico/favoritos, páginas Auxílio, Sobre e Conta e painel administrativo.

## Desenvolver e validar

```bash
pnpm install --frozen-lockfile
cp .env.example .env
pnpm dev
```

Antes de executar localmente, substitua `replace-with-a-random-secret-generated-by-openssl-rand-hex-32` em `.env` por um valor gerado com `openssl rand -hex 32`.

```bash
pnpm check
pnpm test
pnpm build
```

## Deploy na Vercel

Configure estas variáveis de ambiente na Vercel para Production (e Preview/Development se usar esses ambientes):

- `RBXIS_ADMIN_KEY`: `R7XMIN00` — chave de acesso administrativo, lida pelo servidor a partir do ambiente.
- `RBXIS_SESSION_SECRET`: segredo aleatório longo. Gere um valor exclusivo com `openssl rand -hex 32`; não o compartilhe nem o commite.
- `MOCKAPI_KEYS_URL`: `https://6ac66d7ebea0e72cf5c906ed.mockapi.io/users` (padrão do projeto).

O login falha de forma segura quando `RBXIS_SESSION_SECRET` ou `RBXIS_ADMIN_KEY` não estiverem configurados. Para segurança, não reutilize a chave administrativa em outros serviços.

## MockAPI

A coleção configurada é `https://6ac66d7ebea0e72cf5c906ed.mockapi.io/users`. O endpoint respondeu com coleção vazia durante a preparação do repositório. O painel usa os campos `key`, `username`, `used`, `device`, `expire`, `type`, `createdAt`, `activatedAt`, `expiresAt`, `status`, `onlineAt` e `history`; o campo `id` é criado pela MockAPI.

## PWA

O manifesto, service worker, favicons e ícones azuis do R7XIR ficam em `client/public/`; os metadados de instalação ficam em `client/index.html`. O símbolo Spotify foi obtido de [IconsDB](https://www.iconsdb.com/spotify-icons/spotify-icon-256.html). Se o ícone antigo persistir no iPhone após o deploy, remova o atalho e instale novamente pelo Safari.
