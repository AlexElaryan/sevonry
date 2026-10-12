# Savonry · Cosmetics Storefront

A responsive, multi-page frontend for a cosmetics brand, covering product discovery, product details, editorial content, and a checkout interface.

## Highlights

- Promotional and product carousels powered by Swiper.
- Desktop category navigation and a mobile menu with expandable sections.
- Basket panel with open/close controls and page-scroll locking.
- Responsive layouts and image selection for different viewport widths.
- Checkout interactions for delivery options, payment-method selection, and populated input states.

## Stack

HTML5 · CSS3 · JavaScript · Swiper 11

The repository contains static frontend files. No package installation or build step is required.

## Pages

| File | Purpose |
| --- | --- |
| `index.html` | Brand homepage and product discovery |
| `card-item.html` | Product-detail interface |
| `content.html` | Content page |
| `payment.html` | Checkout interface |

## Preview locally

With Python 3 installed:

```bash
git clone https://github.com/AlexElaryan/sevonry.git
cd sevonry
python3 -m http.server 8000
```

Open [localhost:8000](http://localhost:8000). On Windows, use `py -m http.server 8000` if `python3` is unavailable.

Swiper is loaded from a CDN, so its carousel features require an internet connection.

## Code map

| Path | Responsibility |
| --- | --- |
| `style/style.css` | Shared styling and responsive breakpoints |
| `script/script.js` | Navigation, mobile menu, footer accordions, and basket panel |
| `script/payment.js` | Checkout input states and option selection |
| `images/` | Product imagery and page assets |
| Root HTML files | Page markup and page-specific carousel setup |

## Scope

This repository demonstrates the storefront UI and browser-side interactions. The checkout page does not implement payment processing, order persistence, or a backend shopping-cart service.

## Developer

[Alex Elaryan](https://github.com/AlexElaryan) · [Portfolio](https://alexelaryan.github.io/portfolio/) · [LinkedIn](https://www.linkedin.com/in/alex-elaryan-2398642b3/)
