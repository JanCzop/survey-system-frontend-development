# Wymagane do zainstalowania:

1. Node v18.18.0
2. pnpm 8.8.0

### Polecam [Volta](https://docs.volta.sh/guide/getting-started) jako version manager

```bash
volta install node
volta install pnpm
```

### Polecany edytor [vscode](https://code.visualstudio.com/)

3. Wtyczki:
   - Eslint
   - Prettier

Powinno się pojawić powiadomienie sugerujące ich instalację

## Należy zainstalować zależności

```bash
pnpm i
```

## Eslint:

Sprawdzanie składni - dodanych jest sporo reguł, które wyłączają najbardziej irytujące właściwości eslinta, polecam mieć włączone w środowisku formatowanie kodu podczas zapisywania, część problemów zostanie wtedy naprawiona automatycznie.

Jeśli ktoś natknie się na jakąś irytującą regułę to przed zmodyfikowaniem `.eslintrc.json` warto to omówić z resztą zespołu, w wyjątkowych sytuacjach można użyć `// eslint-disable-next-line [nazwa reguły]`

# Część wygenerowana automatycznie przez next:

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
