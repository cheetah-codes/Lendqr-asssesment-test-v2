import { useState } from "react";
// import './App.css'

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div>hello react with vite and scss</div>
      return (
      <div>
        // you can also put this in your static html file
        <div id="modal-root"></div>
        {showModal && (
          <Modal>
            <div
              style={{
                display: "grid",
                placeItems: "center",
                height: "100vh",
                width: "100vh",
                background: "rgba(0,0,0,0.1)",
                zIndex: 99,
              }}
            >
              I'm a modal!{" "}
              <button
                style={{ background: "papyawhip" }}
                onClick={() => setShowModal(false)}
              >
                close
              </button>
            </div>
          </Modal>
        )}
        <button onClick={() => setShowModal(true)}>show Modal</button>
        // rest of your app
      </div>
      );
    </>
  );
}

export default App;
