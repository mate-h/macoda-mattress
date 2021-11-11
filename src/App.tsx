import { Fiber } from "./three-fiber";

function App() {
  return (
    <>
      <h1>Macoda Mattress</h1>
      <a href="https://macoda.com.au/products/macoda-mattress" target="_blank">
        See Main page
      </a>
      <div style={{paddingTop: "66.67%", position:"relative"}}>
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}>
          <Fiber />
        </div>
      
      </div>
      <div>
        <img
          style={{ maxWidth: "100vw", objectFit: "cover" }}
          src="/render-2.png"
        />
      </div>
      
    </>
  );
}

export default App;
