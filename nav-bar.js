const template = document.createElement('template');
template.innerHTML = `
<style>
#nav-bar {
  font-family: sans-serif;
  background-color: black;
  color: lightblue;
  padding: 10px;
  padding-right: 5%;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-end;
}

#nav-bar a {
    margin-right: 5px;
    color: white;
    text-decoration: none;
}

#nav-bar .active {
    color: hotpink;
}
</style>
<div id="nav-bar">
  <a href="index.html">Home</a>
  <a href="russia.html">Russia</a>
  <a href="admission.html">Admission</a>
  <a href="contact.html">Contact Us</a>
</div>`;

class NavBar extends HTMLElement {


  connectedCallback() {
    const node = document.importNode(template.content, true);
    this.appendChild(node);
  }

}
window.customElements.define('nav-bar', NavBar);