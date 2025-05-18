import React, { useState } from "react";

import "./App.css";

import type { ListOfInterfaces } from "./@common/types";

import Layout from "./layouts/main";
import Dashboard from "./interfaces/dashboard";
import Lock from "./interfaces/lock";
import Settings from "./interfaces/settings";

const interfaceComponents: Record<ListOfInterfaces, React.ReactNode> = {
  dashboard: <Dashboard/>,
  lock: <Lock/>,
  settings: <Settings/>,
};

function App() {
  const [whichInterface, setWhichInterface] = useState<ListOfInterfaces>("dashboard");
  return (
    <Layout setWhichInterface={setWhichInterface}>
      {Object.keys(interfaceComponents).map((interfaceID) =>
        whichInterface === interfaceID ? interfaceComponents[interfaceID] : null
      )}
    </Layout>
  )
}

export default App
