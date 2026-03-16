---
layout: assignment
title: Korvplaneraren
color: green
---
Lärare ordnar ofta med korv och dryck till skolutflykter. Eftersom det är tidskrävande och lätt att göra fel när man räknar ut hur mycket som behövs manuellt, ska du skriva ett skript för att automatisera denna process.

Inför varje utflykt ber lärarna eleverna att välja mellan fyra specifika måltidsalternativ. Ditt skript måste sköta uträkningarna åt dem genom att använda fyra separata input()-satser – en för varje individuell kategori – som frågar hur många elever som valde:

- 2 korvar
- 3 korvar
- 2 vegankorvar
- 3 vegankorvar

Baserat på elevernas val måste ditt skript räkna ut och visa:

- Antalet förpackningar med vanlig korv som behövs (8 korvar per förpackning)
- Antalet förpackningar med vegankorv som behövs (4 vegankorvar per förpackning)
- Det totala antalet drycker som behövs (1 per elev)
- Den totala kostnaden för hela beställningen

Priserna för varorna är följande:

| Produkt     | Kostnad                 |
| ----------- | ----------------------- |
| Vanlig korv | 20.95:- per förpackning |
| Vegankorv   | 34.95:- per förpackning |
| Dryck       | 13.95:- styck           |
