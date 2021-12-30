const template = document.createElement('template');
template.innerHTML = `
<style>
  .admission-banner {
    font-family: sans-serif;
    background-color: lightgray;
    color: black;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  
    flex-direction: row;
  }

 

  .admission-button {
    margin-left: 10px;
    height: 2rem;
  }

  @media only screen and (max-width: 600px) {
    .admission-banner {
      flex-direction: column;
      text-align: center;
      padding: 5px;
      font-size: .8rem;
    }
    .admission-banner p {
        width: 100%;
    }
  }

</style>
<div class="admission-banner">
    <p>Admissions are open for the Year 2021-2022.</p>
    <button class="admission-button">Apply Now</button>
</div>`;

class AdmissionBanner extends HTMLElement{
 constructor(){
     super();
     this.attachShadow({ mode: 'open'});
     this.shadowRoot.appendChild(template.content.cloneNode(true));
     this.shadowRoot.querySelector('p').innerText = this.getAttribute('message');
 } 

 connectedCallback(){
   this.p = this.getAttribute("message")
   this.render();
 }

 render(){
   this.p;
 }
}
window.customElements.define('admission-banner', AdmissionBanner);