const fs = require('fs');

let code = fs.readFileSync('src/components/Gallery.jsx', 'utf8');

// Update imports
code = code.replace("import React, { useState } from 'react';", "import React, { useState, useEffect } from 'react';");

// Insert useEffect
const hookCode = `
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevLightbox();
      if (e.key === 'ArrowRight') nextLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex]);
`;

code = code.replace("const prevLightbox = () => {", hookCode + "\n  const prevLightbox = () => {");

fs.writeFileSync('src/components/Gallery.jsx', code);
console.log("Patched Gallery.jsx");
