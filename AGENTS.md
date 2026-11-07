# Diretrizes do Projeto
- Stack: Vite + React + TypeScript + Tailwind CSS (build estático em `dist/`).
- Animações: framer-motion; ícones: lucide-react.
- Conteúdo do portfólio: `src/data/cases.ts`; assets em `static/`.
- Deploy: GitHub Actions (`.github/workflows/deploy.yml`) builda e envia `dist/` via FTP para a HostGator.
- Acessibilidade: HTML semântico, alt descritivo, foco visível e respeito a `prefers-reduced-motion`.
- Legado PHP (`index.php`, `config/`, `includes/`, `pages/`, `public/`) não é mais utilizado.
