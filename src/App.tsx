import "./App.css";
import { Accordion } from "./components/Accordion/Accordion.tsx";
import AccordionWrapper from "./components/Accordion/AccordionWrapper/AccordionWrapper.tsx";

function App() {
  return (
    <>
      <h1>React Accordion</h1>
      <div className="card">
        <AccordionWrapper>
          <Accordion background={"red"} isRoot={true} title={"Toggle"}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum sint
              voluptatum ipsam, labore laboriosam ratione consectetur harum dicta,
              sequi cum illo iste! Quae, quidem ea. Sit maiores iure sed
              doloribus?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum sint
              voluptatum ipsam, labore laboriosam ratione consectetur harum dicta,
              sequi cum illo iste! Quae, quidem ea. Sit maiores iure sed
              doloribus?
            </p>
            <Accordion background={"blue"} isRoot={false} title={"Toggle"}>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum sint
                voluptatum ipsam, labore laboriosam ratione consectetur harum dicta,
                sequi cum illo iste! Quae, quidem ea. Sit maiores iure sed
                doloribus?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum sint
                voluptatum ipsam, labore laboriosam ratione consectetur harum dicta,
                sequi cum illo iste! Quae, quidem ea. Sit maiores iure sed
                doloribus?
              </p>
              <Accordion background={"green"} isRoot={false} title={"Toggle"}>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum sint
                  voluptatum ipsam, labore laboriosam ratione consectetur harum dicta,
                  sequi cum illo iste! Quae, quidem ea. Sit maiores iure sed
                  doloribus?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum sint
                  voluptatum ipsam, labore laboriosam ratione consectetur harum dicta,
                  sequi cum illo iste! Quae, quidem ea. Sit maiores iure sed
                  doloribus?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum sint
                  voluptatum ipsam, labore laboriosam ratione consectetur harum dicta,
                  sequi cum illo iste! Quae, quidem ea. Sit maiores iure sed
                  doloribus?
                </p>
              </Accordion>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum sint
                voluptatum ipsam, labore laboriosam ratione consectetur harum dicta,
                sequi cum illo iste! Quae, quidem ea. Sit maiores iure sed
                doloribus?
              </p>
            </Accordion>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum sint
              voluptatum ipsam, labore laboriosam ratione consectetur harum dicta,
              sequi cum illo iste! Quae, quidem ea. Sit maiores iure sed
              doloribus?
            </p>
          </Accordion>
        </AccordionWrapper>
      </div>
    </>
  );
}

export default App;
