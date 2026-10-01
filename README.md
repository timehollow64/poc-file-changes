# node-boilerplate

Plantilla mínima de Node.js + TypeScript para probar cosas pequeñas: `tsx` para ejecutar,
Vitest para los tests y ESLint para el linting. No hay paso de compilación ni despliegue.

## Requisitos

- Node.js 22.12 o superior (la versión de referencia está en `.nvmrc`; usa `nvm use`)

## Puesta en marcha

```bash
npm install
npm run dev
```

## Scripts

| Script               | Qué hace                                                      |
| -------------------- | ------------------------------------------------------------- |
| `npm run dev`        | Ejecuta `src/index.ts` y lo relanza al guardar cambios         |
| `npm start`          | Ejecuta `src/index.ts` una vez                                |
| `npm test`           | Ejecuta los tests una vez                                     |
| `npm run test:watch` | Ejecuta los tests y los relanza al guardar cambios            |
| `npm run typecheck`  | Comprueba los tipos (`tsx` y Vitest no lo hacen)              |
| `npm run lint`       | Pasa ESLint                                                   |
| `npm run lint:fix`   | Pasa ESLint y corrige lo que se pueda automáticamente         |
| `npm run check`      | `typecheck` + `lint` + `test`                                 |

## Estructura

```
src/
├── services/    # Lógica
├── utils/       # Funciones auxiliares
└── index.ts     # Punto de entrada
```

Cada test vive junto a su módulo (`strings.ts` → `strings.test.ts`).

## Notas

- **ESM nativo** (`"type": "module"`): los imports relativos llevan extensión `.js`
  (`import { greet } from './services/greeting.service.js'`), aunque el archivo sea `.ts`.
- **`verbatimModuleSyntax`**: los imports que solo traen tipos se escriben con `import type`.
- **TypeScript 6.0**: TypeScript 7 ya existe, pero `typescript-eslint` todavía solo soporta
  versiones `<6.1`.
