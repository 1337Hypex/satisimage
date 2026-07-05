# Sign Hex Generator

Client-side React + TypeScript tool за Satisfactory mosaic signs. Качваш изображение, избираш grid ръчно или автоматично според снимката, а приложението генерира по един краен HEX цвят за всяка 0.5 m табелка.

## Стартиране

```bash
npm install
npm run dev
```

След това отвори адреса, който Vite покаже в терминала.

## Какво прави

- Drag & drop или бутон за качване на изображение.
- Ръчен grid или автоматичен grid според пропорцията на качената снимка.
- Auto режим с целеви брой табелки, например 96, който избира близки колони и редове.
- Canvas API resize към избрания grid и анализ на всяка клетка.
- Метод за цвят: average color или dominant color.
- Quantization лимит: 8, 16, 32, 64, 128 или 256 цвята.
- Preview табове: оригинал и табелки.
- HEX таблица с copy за всеки ред и copy all.
- Export към `.txt` и `.json`.

Всичко работи локално в браузъра, без backend.

## GitHub Pages

Да, проектът става за GitHub Pages, защото build-ът е статичен.

1. Качи проекта в GitHub repo.
2. В repo настройките отвори **Settings → Pages**.
3. За **Build and deployment** избери **GitHub Actions**.
4. Push към `main` ще пусне `.github/workflows/deploy.yml` и ще публикува `dist`.

Vite е настроен с `base: './'`, така че app-ът работи и когато repo-то е публикувано като subpath, например `https://username.github.io/sign-hex-generator/`.
