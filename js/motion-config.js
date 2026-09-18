/**
 * ============================================================================
 * ATELIER AURA — MOTION CONFIGURATION
 * ============================================================================
 * Minimalist luxury physics and motion orchestration.
 * Isolated configuration for vertical immersive scroll, fluid damping,
 * organic parallax, and warm ambient canvas lighting.
 */

const motionConfig = {
  // Fluid LERP damping for heavy, weighted luxury scroll feel
  lerp: 0.07,

  // Smooth scroll responsiveness
  scrollSensitivity: 1.0,

  // 3D Warm Canvas Camera & Perspective
  camera: {
    fov: 40,
    near: 0.1,
    far: 1000,
    baseY: 0,
    baseZ: 12
  },

  // Soft cursor follower damping
  cursor: {
    lerp: 0.12,
    scaleOnHover: 1.6
  },

  // Multi-layer vertical parallax depth coefficients
  parallax: {
    backgroundSpeed: 0.2,   // Ambient warm caustic field & celestial grain
    cardsSpeed: 0.85,       // Editorial imagery & sculptural cards
    floatingSpeed: 1.45     // Delicate floating champagne dust & light prisms
  },

  // Warm ambient lighting settings
  lighting: {
    ambientColor: 0x1f1b18,
    warmKeyColor: 0xf5dfbe,
    terracottaRimColor: 0xd97757,
    keyIntensity: 1.8,
    rimIntensity: 1.4
  }
};

if (typeof window !== 'undefined') {
  window.motionConfig = motionConfig;
}
