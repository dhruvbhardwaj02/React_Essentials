import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import { useState } from "react";

export default function Examples(){

    const [selectedTopic, setSelectedTopic] = useState();

    function handelSelect(selectedButton) {
      setSelectedTopic(selectedButton);
      console.log(selectedTopic);
    }
  
    let tabContent = <p>Please Select a topic.</p>;
  
    if (selectedTopic) {
      tabContent = (
        <div id="tab-content">
          <h3>{EXAMPLES[selectedTopic].title}</h3>
          <p></p>
          {EXAMPLES[selectedTopic].description}
          <pre>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </pre>
        </div>
      );
    }

    return(
        <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton
            isSelected={selectedTopic === "components"}
            onSelect={() => handelSelect("components")}
          >
            Components
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "jsx"}
            onSelect={() => handelSelect("jsx")}
          >
            JSX
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "props"}
            onSelect={() => handelSelect("props")}
          >
            Props
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "state"}
            onSelect={() => handelSelect("state")}
          >
            State
          </TabButton>
        </menu>
        {tabContent}
      </section>
    )
}