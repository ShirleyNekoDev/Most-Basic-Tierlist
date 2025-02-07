/**
 * @typedef {HTMLElement} TierlistEntry
 */
export class TierlistEntry extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({
      mode: 'open',
    });
    this.shadowRoot.innerHTML = `
      
    `;
  }

  connectedCallback() {
  }

  disconnectedCallback() {
  }
}
customElements.define('tierlist-entry', TierlistRow);
