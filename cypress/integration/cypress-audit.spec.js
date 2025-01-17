/// <reference types="Cypress" />

describe('Casino.pt website', () => {
  it('should run lighthouse performance audits using default thresholds', () => {
    cy.visit('/');
    cy.lighthouse();
  });

  it('should run lighthouse performance audits using custom thresholds', () => {
    const thresholds = {
      performance: 50,
      accessibility: 80,
      'first-contentful-paint': 2000,
      'largest-contentful-paint': 3000,
      interactive: 2000,
      seo: 60,
      pwa: 50,
    };

    const lighthouseConfig = {
      emulatedFormFactor: 'desktop',
    };

    cy.visit('/');
    cy.lighthouse(thresholds, lighthouseConfig);
  });
});
