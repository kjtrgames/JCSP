class JCSPElement extends HTMLElement{
  constructor(){
    super();
    this._src = null;
  }

  // Its observed attribute is only "src".
  static get observedAttributes() {
    return ["src"];
  }

  // callback when its attr was changed
  attributeChangedCallback(src, oldValue, newValue) {
    this._src = newValue;
    this._updateRendering();
  }

  connectedCallback() {
    this._updateRendering();
  }

  get src() {
    return this._name;
  }

  set src(v) {
    this._updateRendering();
    this.setAttribute("src", v);
  }
  
}

customElements.define("jscp-ld",JSCPElement);//JSCP LoaD
