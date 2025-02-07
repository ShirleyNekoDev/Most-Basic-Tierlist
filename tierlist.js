import { TierlistRow } from "./tierlist-row.js";

/**
 * @typedef {HTMLElement} Tierlist
 */
export class Tierlist extends HTMLElement {
  constructor() {
    super();
    this.appendChild(
      document.createElement('li')
    );
    // this.attachShadow({
    //   mode: 'open',
    // });
    // this.shadowRoot.innerHTML = `
    //   <style>
    //     .tierlist {
    //       display: block;
    //       border: thin solid black;
    //     }
    //   </style>
    //   <section class="tierlist">
    //     <h1>Hello world</h1>
    //     <tierlist-row>
    //     </tierlist-row>
    //   </section>
    // `;
  }

  connectedCallback() {
  }

  disconnectedCallback() {
  }
}
customElements.define('tierlist-container', Tierlist, { extends: 'ul' });
