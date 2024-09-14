# Setting Up LESS in Vite

## 1. Install LESS

You need to install LESS as a dev dependency for Vite to handle LESS files:

````bash
npm install -D less
````

### 2. Configure Vite for LESS

Set it up if you haven’t already:

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true, // Example option for LESS
      },
    },
  },
});
````
### 3. Import Your LESS File in React

You can now import your LESS file directly in your React component just like regular CSS:

```tsx
import "./index.less";

export default function Index() {
  return (
    <div>
      <header>
        <h1 className="hello">Hello World!</h1>
      </header>
    </div>
  );
}
````
