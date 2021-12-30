const template = document.createElement('template');
template.innerHTML = `
<style>
<style>
  .employee-card {
    font-family: sans-serif;
    background: #f4f6f7;
    width: 250px;
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 10px;
  }

</style>
<div class="employee-card">
  <img/>
  <div>
    <h3></h3>
    <div class="details">
    </div>
  </div>
</div>`;

class EmployeeCard extends HTMLElement{
 constructor(){
     super();
     this.attachShadow({ mode: 'open'});
     this.shadowRoot.appendChild(template.content.cloneNode(true));
     this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
     this.shadowRoot.querySelector('img').src = 'https://via.placeholder.com/150';   
 } 

 connectedCallback(){
   this.h3 = this.getAttribute("name")
   this.render();
 }

 render(){
   this.h3;
 }
}
window.customElements.define('employee-card', EmployeeCard);