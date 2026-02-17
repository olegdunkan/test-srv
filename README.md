# TS Express Echo

Minimal TypeScript + Express echo server.

Quick start

Install deps:

```bash
npm install
```

Run in dev mode (auto-reload):

```bash
npm run dev
```

Build and run:

```bash
npm run build
npm start
```

Endpoint

- `GET /echo?message=yourtext` — returns JSON `{ message: 'ok', echo: 'yourtext' }`
