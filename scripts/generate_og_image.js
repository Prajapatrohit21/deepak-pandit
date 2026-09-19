import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function generateOgImage() {
  const width = 1200;
  const height = 630;

  // Read pandit image if available
  let panditBuffer = null;
  const panditPath = path.resolve('src/assets/pandit_deepak_pandya.jpg');
  if (fs.existsSync(panditPath)) {
    const resizedPandit = await sharp(panditPath)
      .resize(220, 220, { fit: 'cover' })
      .toBuffer();

    panditBuffer = await sharp(resizedPandit)
      .composite([{
        input: Buffer.from(`
          <svg width="220" height="220">
            <circle cx="110" cy="110" r="105" fill="#000" />
          </svg>
        `),
        blend: 'dest-in'
      }])
      .png()
      .toBuffer();
  }

  const svgBanner = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#140500" />
        <stop offset="40%" stop-color="#240A00" />
        <stop offset="100%" stop-color="#0A0200" />
      </linearGradient>
      <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#F5C842" />
        <stop offset="50%" stop-color="#FFE885" />
        <stop offset="100%" stop-color="#D4AF37" />
      </linearGradient>
      <linearGradient id="cardGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#3A1204" stop-opacity="0.8" />
        <stop offset="100%" stop-color="#1F0800" stop-opacity="0.9" />
      </linearGradient>
    </defs>

    <!-- Background -->
    <rect width="${width}" height="${height}" fill="url(#bg)" />

    <!-- Ornate Border -->
    <rect x="20" y="20" width="${width - 40}" height="${height - 40}" rx="16" fill="none" stroke="url(#goldGrad)" stroke-width="2" stroke-opacity="0.5" />
    <rect x="28" y="28" width="${width - 56}" height="${height - 56}" rx="12" fill="none" stroke="url(#goldGrad)" stroke-width="1" stroke-opacity="0.25" stroke-dasharray="8 6" />

    <!-- Corner Accents -->
    <circle cx="36" cy="36" r="6" fill="#F5C842" opacity="0.8" />
    <circle cx="${width - 36}" cy="36" r="6" fill="#F5C842" opacity="0.8" />
    <circle cx="36" cy="${height - 36}" r="6" fill="#F5C842" opacity="0.8" />
    <circle cx="${width - 36}" cy="${height - 36}" r="6" fill="#F5C842" opacity="0.8" />

    <!-- Subtle spiritual mandala circles -->
    <circle cx="980" cy="315" r="240" fill="none" stroke="url(#goldGrad)" stroke-width="1" opacity="0.1" />
    <circle cx="980" cy="315" r="170" fill="none" stroke="url(#goldGrad)" stroke-width="1" opacity="0.15" stroke-dasharray="4 4" />
    <circle cx="980" cy="315" r="120" fill="url(#goldGrad)" opacity="0.05" />

    <!-- Badge Tag -->
    <rect x="80" y="70" width="360" height="38" rx="19" fill="#F5C842" fill-opacity="0.15" stroke="#F5C842" stroke-width="1" stroke-opacity="0.4" />
    <text x="260" y="94" font-family="'Noto Sans Devanagari', 'Segoe UI', Arial, sans-serif" font-size="16" font-weight="600" fill="#F5C842" text-anchor="middle">
      ✦ मंगलनाथ मंदिर क्षेत्र, उज्जैन (म.प्र.) ✦
    </text>

    <!-- Main Title -->
    <text x="80" y="175" font-family="'Noto Sans Devanagari', 'Segoe UI', Arial, sans-serif" font-size="52" font-weight="800" fill="url(#goldGrad)">
      मंगल दोष पूजन केंद्र
    </text>
    <text x="80" y="225" font-family="'Segoe UI', Arial, sans-serif" font-size="24" font-weight="600" fill="#FFF5E6" opacity="0.9">
      Mangal Dosh Puja Nivaran — Ujjain
    </text>

    <!-- Subtitle / Highlights -->
    <text x="80" y="285" font-family="'Noto Sans Devanagari', 'Segoe UI', Arial, sans-serif" font-size="24" font-weight="500" fill="#E6D3B3">
      वैदिक पंडित दीपक पंड्या • 15+ वर्षों का अनुभव
    </text>

    <!-- Services Pills -->
    <g transform="translate(80, 320)">
      <!-- Pill 1 -->
      <rect x="0" y="0" width="200" height="36" rx="18" fill="#FFFFFF" fill-opacity="0.08" stroke="#F5C842" stroke-width="0.8" stroke-opacity="0.3" />
      <text x="100" y="24" font-family="'Noto Sans Devanagari', sans-serif" font-size="15" fill="#FFF" text-anchor="middle">मंगल भात पूजा</text>

      <!-- Pill 2 -->
      <rect x="215" y="0" width="210" height="36" rx="18" fill="#FFFFFF" fill-opacity="0.08" stroke="#F5C842" stroke-width="0.8" stroke-opacity="0.3" />
      <text x="320" y="24" font-family="'Noto Sans Devanagari', sans-serif" font-size="15" fill="#FFF" text-anchor="middle">कालसर्प दोष निवारण</text>

      <!-- Pill 3 -->
      <rect x="440" y="0" width="200" height="36" rx="18" fill="#FFFFFF" fill-opacity="0.08" stroke="#F5C842" stroke-width="0.8" stroke-opacity="0.3" />
      <text x="540" y="24" font-family="'Noto Sans Devanagari', sans-serif" font-size="15" fill="#FFF" text-anchor="middle">त्रिपिंडी श्राद्ध</text>
    </g>

    <g transform="translate(80, 370)">
      <!-- Pill 4 -->
      <rect x="0" y="0" width="180" height="36" rx="18" fill="#FFFFFF" fill-opacity="0.08" stroke="#F5C842" stroke-width="0.8" stroke-opacity="0.3" />
      <text x="90" y="24" font-family="'Noto Sans Devanagari', sans-serif" font-size="15" fill="#FFF" text-anchor="middle">नवग्रह शांति</text>

      <!-- Pill 5 -->
      <rect x="195" y="0" width="230" height="36" rx="18" fill="#FFFFFF" fill-opacity="0.08" stroke="#F5C842" stroke-width="0.8" stroke-opacity="0.3" />
      <text x="310" y="24" font-family="'Noto Sans Devanagari', sans-serif" font-size="15" fill="#FFF" text-anchor="middle">महामृत्युंजय अनुष्ठान</text>

      <!-- Pill 6 -->
      <rect x="440" y="0" width="200" height="36" rx="18" fill="#FFFFFF" fill-opacity="0.08" stroke="#F5C842" stroke-width="0.8" stroke-opacity="0.3" />
      <text x="540" y="24" font-family="'Noto Sans Devanagari', sans-serif" font-size="15" fill="#FFF" text-anchor="middle">रुद्राभिषेक</text>
    </g>

    <!-- Bottom Contact Bar -->
    <rect x="80" y="475" width="700" height="75" rx="16" fill="url(#cardGrad)" stroke="#F5C842" stroke-width="1.2" stroke-opacity="0.4" />
    
    <text x="110" y="522" font-family="'Segoe UI', Arial, sans-serif" font-size="28" font-weight="700" fill="#F5C842">
      📞 +91 62634 01651
    </text>
    <text x="460" y="520" font-family="'Segoe UI', Arial, sans-serif" font-size="18" font-weight="500" fill="#FFF5E6" opacity="0.85">
      24x7 Call / WhatsApp Seva
    </text>
    <text x="460" y="540" font-family="'Segoe UI', Arial, sans-serif" font-size="14" fill="#E6D3B3" opacity="0.7">
      mangaldoshpujanivaran.in
    </text>
  </svg>
  `;

  const composites = [
    { input: Buffer.from(svgBanner), top: 0, left: 0 }
  ];

  if (panditBuffer) {
    // Add gold halo behind pandit
    composites.push({
      input: Buffer.from(`
        <svg width="236" height="236">
          <circle cx="118" cy="118" r="114" fill="none" stroke="#F5C842" stroke-width="4" stroke-opacity="0.7" />
        </svg>
      `),
      top: 197,
      left: 862
    });
    composites.push({
      input: panditBuffer,
      top: 205,
      left: 870
    });
  }

  await sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 16, g: 5, b: 0, alpha: 1 }
    }
  })
    .composite(composites)
    .jpeg({ quality: 90 })
    .toFile('public/og-image.jpg');

  console.log('✓ Successfully generated public/og-image.jpg (1200x630)');
}

generateOgImage().catch(console.error);
