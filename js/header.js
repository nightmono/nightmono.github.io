const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
<link rel="stylesheet" href="/css/style.css">

<header>
    <h1>nightmono</h1>
    <p>
        <a href="/index.html">$ cd</a> -
        <a href="/projects.html">Projects/</a> -
        <a href="/blog.html">Blog/</a>
    </p>
</header>
`

class Header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('header-component', Header);