const fs = require('fs');
let code = fs.readFileSync('src/components/Gallery.jsx', 'utf8');

code = code.replace("import React, { useState } from 'react';", "import React, { useState, useEffect } from 'react';");

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
  }, [lightboxIndex, filteredItems.length]);
`;

code = code.replace("const nextLightbox = () => {", hookCode + "\n  const nextLightbox = () => {");
fs.writeFileSync('src/components/Gallery.jsx.test', code);
