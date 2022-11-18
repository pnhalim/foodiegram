# How it was made

## Tools and Frameworks
- HTML
- CSS
- JavaScript
- Tailwind CSS

## Tailwind Setup
```
npm init -y
npm install tailwindcss
```
Create `src/styles.css` and `public/styles.css`. Then, modify the `package.json` scripts to include 
```
"build-css": "tailwindcss build src/styles.css -o public/styles.css"
```
This creates a command `build-css` that will use Tailwind to build `public/styles.css`. Whenever you want to build Tailwind, use
```
npm run build-css
```
Run
```
npx tailwind init
```
add `'./public/**/*.{html,js}',` to the content in the tailwind.config.js
Run
```
npm run build-css
npx tailwindcss -i ./src/styles.css -o ./public/styles.css --watch
npx tailwindcss init -full
npx tailwindcss init
```
When you update, the -u file, 
```
npm run build-css
```
More Info: https://www.youtube.com/watch?v=bxmDnn7lrnk


npm install live-server -g