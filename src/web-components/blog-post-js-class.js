
class BlogPostJSClassComponent extends HTMLElement{
    constructor() {
        super(); 
        //var template = document.querySelector('template').content;
        //console.log('template: '+template);
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        console.log('connectedCallback ');
        console.log('this.template: '+this.htmlTemplate);
        
        //if using plain html
        this.shadowRoot.innerHTML = this.htmlTemplate;
    }
    
    get htmlTemplate() {
        return `
            <div id="blog-post">  
                <h1>BlogPostJS Awesome header!!!</h1>
                <p>Here is some really interesting paragraph content.</p>
            </div>
        `
    }
}

window.customElements.define('blog-post-js-class', BlogPostJSComponent)

  