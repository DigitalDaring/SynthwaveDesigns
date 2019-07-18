class SynthwaveCard extends HTMLElement {

    shadow: ShadowRoot;

    constructor() {
        super();
        this.shadow = this.attachShadow({mode: 'open'});
        this.render();
    }

    get styles(): string {
        return `
        
            :host {
                display: flex;
            }
        
            section.synthwave-card {
                border-radius: 60px;
                box-shadow: 6px 6px 12px 2px var(--vapor-theme-shadow-color, rgba(185,33,167,.5));
                display: flex;
                flex-direction: column;
                font-family: var(--vapor-theme-font, 'Roboto');
                color: var(--vapor-theme-primary-text-color, #FFF);
                padding: 20px;
                overflow: hidden;
                background-image: linear-gradient(to bottom right, var(--vapor-theme-primary-color, #B921AB), var(--vapor-theme-secondary-color, #BD235E));
            }
            
            ::slotted(button) {
                padding: 12px;
                border-radius: 60px;
                font-family: var(--vapor-theme-font, 'Roboto');
                color: var(--vapor-theme-primary-color, #B921AB);
                background-color: #FFF;
                box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, .3);
                font-size: 24px;
                outline: none;
                border: none;
                justify-self: flex-end;
                margin-top: auto;
            }
            
            ::slotted(button:hover) {
                box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, .2);
            }
            
            ::slotted(img) {
                margin: -20px;
                margin-bottom: -60px;
                padding: 0;
            }
        `;
    }

    get html(): string {
        return `
            <section class="synthwave-card">
                <slot name="image"></slot>
                <slot name="title"></slot>
                <slot name="content"></slot>
                <slot name="actions"></slot>
            </section>
        `
    }

    render() {
        this.shadow.innerHTML = `
            <style>${this.styles}</style>
            ${this.html}
        `;
    }

}

console.log('test');

window.customElements.define('synthwave-card', SynthwaveCard);