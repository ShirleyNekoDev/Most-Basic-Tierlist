/**
 * @typedef {HTMLElement} TierlistRow
 */
export class TierlistRow extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: 'open',
    });
    this.shadowRoot.innerHTML = `
      Row
    `;
  }

  connectedCallback() {
  }

  disconnectedCallback() {
  }
}
customElements.define('tierlist-row', TierlistRow, { extends: 'ul' });
