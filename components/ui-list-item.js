// Create a class for the element
class UIListItem extends HTMLElement {
	static observedAttributes = ["avatar", "item-title", "content"];

	constructor() {
		// Always call super first in constructor
		super();
	}

	connectedCallback() {
        this.style.backgroundColor = "var(--color-1-lighter)"
        this.style.display = "block"
        this.style.borderRadius = "5px"
		this.style.margin = "8px"
        if (this.getAttribute("item-title")) {
            const itemTitle = document.createElement("h2")
            itemTitle.innerText = this.getAttribute("item-title")
            itemTitle.style.margin = "0px"
            this.appendChild(itemTitle)
        }
	}

	// disconnectedCallback() {
	// 	console.log("Custom element removed from page.");
	// }

	// adoptedCallback() {
	// 	console.log("Custom element moved to new page.");
	// }

	// attributeChangedCallback(name, oldValue, newValue) {
	// 	console.log(`Attribute ${name} has changed.`);
	// }
}

customElements.define("ui-list-item", UIListItem);