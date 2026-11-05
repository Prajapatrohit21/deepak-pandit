# PROJECT_HANDOVER.md — Mangal Dosh Puja Nivaran (Ujjain)

> **IMPORTANT NOTICE FOR NEXT DEVELOPER / AI AGENT:**  
> **Google Ads are currently ACTIVE on this website.**  
> Do **NOT** alter the phone number (`+91 62634 01651`), WhatsApp links, Web3Forms config, or Google Analytics event trackers (`trackPhoneCall`, `trackWhatsAppClick`, `trackBookingSubmit`). Any breaking change will directly impact live ad spend and devotee inquiries!

---

## 1. Project Overview & Facts
- **Production URL:** [https://mangaldoshpujanivaran.in/](https://mangaldoshpujanivaran.in/)
- **GitHub Repository:** `https://github.com/Prajapatrohit21/deepak-pandit.git`
- **Main Branch:** `main`
- **Hosting & CI/CD:** GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`). Pushing to `main` automatically triggers build and live deployment.
- **Client / Acharya:** वैदिक पंडित दीपक पंड्या (Pandit Deepak Pandya) — 15+ years of Vedic experience in Ujjain.
- **Phone / WhatsApp:** `+91 62634 01651`
- **Email:** `mangaldoshpujanivaran@gmail.com`
- **Primary Location:** श्री मंगलनाथ मंदिर क्षेत्र एवं महाकालेश्वर ज्योतिर्लिंग, उज्जैन (मध्य प्रदेश)

---

## 2. Tech Stack & Directory Structure
- **Framework:** React 19 + Vite 8
- **Routing:** `react-router-dom` v6 (`BrowserRouter`)
- **Styling:** Tailwind CSS + Custom CSS (`index.css`)
- **SEO / Head:** `react-helmet-async` + Static `<head>` in `index.html` + `scripts/prerender.js`

### Key Files & Locations:
- `index.html` — Primary SEO metadata, Open Graph, Twitter cards, and `LocalBusiness` JSON-LD schema.
- `scripts/prerender.js` — Post-build static HTML generator for Googlebot / AI search engines and 200 OK static route directories for GitHub Pages.
- `src/App.jsx` — Root router, route definitions, and `ROUTE_TITLES` dictionary for title management.
- `src/data/services.js` — All 9 puja services with direct answers, procedures, and real photo imports (`image:`).
- `src/data/content.js` — All website copy (Hindi & English), testimonials, trust badges, NAP details.
- `src/components/ui/ServiceCard.jsx` — Service card with real puja thumbnail photos and unique descriptive anchor links.
- `src/components/ui/BookingForm.jsx` — Lead-capture form redirecting directly to WhatsApp with pre-filled name, phone, service, problem.
- `src/components/layout/Footer.jsx` — Footer with quick links, NAP info, and "WhatsApp पर शेयर करें" share button.
- `src/pages/Home.jsx` — Full landing page: Hero, Trust badges, Services, Comparison Table, About, Testimonials, FAQs, Booking form.

---

## 3. Work Completed Recently

1. **On-Page SEO Optimization (Audit fixes):**
   - `<title>` shortened to ~46 characters (`मंगल दोष पूजा उज्जैन | वैदिक पंडित दीपक पंड्या`) under 580px limit.
   - `meta description` shortened to 145 characters starting with `"उज्जैन में मंगल दोष पूजा..."`.
   - Repeated internal link anchors fixed (no more generic "अधिक जानें" / "पूरा पढ़ें" / "क्लिक करें" — each link now uses unique descriptive keywords).
   - Added clean `LocalBusiness` JSON-LD schema in `<head>`.
   - Added unobtrusive "WhatsApp पर शेयर करें" share button in footer.

2. **UI Professionalization & Ad Conversion Polish:**
   - **Removed Clipboard Hijacker:** Removed a legacy script in `App.jsx` that copied `🤡` to user's clipboard.
   - **Replaced Emojis with Real Photos:** All service cards now show authentic high-resolution Vedic puja photos (`hero_mangal_puja.jpg`, `Kaal-Sarp-Puja-Ujjain.webp`, `g1.jpg`, `g9.jpg`, `g10.jpg`, `g11.jpg`, `pandit_deepak_pandya.jpg`) instead of emojis.
   - **Replaced Casual Emojis with Sacred Symbols:**
     - Hero buttons now use clean SVG icons (calendar booking icon + official WhatsApp SVG).
     - Table and bullet points use sacred golden `✦`.
     - Badges updated to authoritative phrasing (`विश्वसनीय वैदिक सेवा`, `संक्षिप्त विवरण तालिका`, `जिज्ञासा एवं समाधान`).

---

## 4. How to Continue Work & Push Changes

### Local Development:
```bash
npm run dev
# Opens on http://localhost:5173
```

### Commit & Deploy:
```bash
git add .
git commit -m "your descriptive commit message"
git push origin main
```
GitHub Actions will automatically run `npm ci`, `npm run build`, and deploy to GitHub Pages within 1-2 minutes.
Check build status at: `https://github.com/Prajapatrohit21/deepak-pandit/actions`

