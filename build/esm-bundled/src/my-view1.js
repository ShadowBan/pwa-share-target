import{PolymerElement,html}from"./my-app.js";class MyView1 extends PolymerElement{static get template(){return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <div class="circle">1</div>
        <h1>View One</h1>
        <p>Ut labores minimum atomorum pro. Laudem tibique ut has.</p>
        <p>Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Cu mei vide viris gloriatur, at populo eripuit sit.</p>
        <button on-click="handleClick">CLICK ME!</button>
      </div>
    `}handleClick(){console.log("I am being clicked!");if(navigator.share){navigator.share({title:"Web Fundamentals",text:"Check out Web Fundamentals \u2014 it rocks!",url:"https://developers.google.com/web"}).then(()=>console.log("Successful share")).catch(error=>console.log("Error sharing",error))}}}window.customElements.define("my-view1",MyView1);