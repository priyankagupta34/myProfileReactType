import "./styles.css";

export default function App() {
  return (
    <div>
      <div className="app">
        <div className="flexDiv">
          <div className="qwer1"></div>
          <div className="qwer2">
            Hi, This is Priyanka. I am fullstack developer. This is just a pet
            project for me creating with Reactjs with Typescript and I know it
            never actually works but having a profile is better then not having
            one{" "}
            <span role="img" aria-label="">
              &#128517;
            </span>
            .
            <br />
            <br />
            And display profile that you see on the left is actually me no
            kidding{" "}
            <span role="img" aria-label="">
              &#128556;
            </span>
            . Click on icons to know me more.
          </div>
          <div className="okcont">
            <span role="img" aria-label="" className="ok">
              🎓
            </span>
            <span role="img" aria-label="" className="ok">
              📃
            </span>
            <span role="img" aria-label="" className="ok">
              🛠
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
