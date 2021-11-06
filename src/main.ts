import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Macoda Mattress</h1>
  <a href="https://macoda.com.au/products/macoda-mattress" target="_blank">See Main page</a>
  <div>
    <img style="max-width: 100vw; object-fit: cover;" src="/render-2.png"/>
  </div>
`
