// Create a class for the element
class UIList extends HTMLElement {
	// show-header: tels if a header have to be displayed
	static observedAttributes = ["show-header", "header-title"];

	constructor() {
		// Always call super first in constructor
		super();
	}

	connectedCallback() {
		// Add content
		const content = document.createElement("div")
		console.log(this.children.length)
		const childrenLength = this.children.length
		for (let index = 0; index < childrenLength; index++) {
			const element = this.children[0];
			console.log(element.tagName)
			if (element.tagName === "UI-LIST-ITEM") {
				content.appendChild(element)
			}
		}
		content.style.minHeight = "5px"
		// Add extra styles to content
		content.classList.add("ui-list-content")
		// Apply classic styles
		this.classList.add("ui-list")
		if (this.getAttribute("header-title")) {
			// Add header
			const header = document.createElement("div")
			header.classList.add("ui-list-header")
			// Add a title to the header
			const headerTitle = document.createElement("h1")
			headerTitle.classList.add("ui-list-header-title")
			headerTitle.innerText = this.getAttribute("header-title")
			// Add extra styles to content
			content.classList.add("ui-list-content-header-on")
			// Append elements
			header.appendChild(headerTitle)
			this.appendChild(header)
		}
		this.appendChild(content)
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

customElements.define("ui-list", UIList);