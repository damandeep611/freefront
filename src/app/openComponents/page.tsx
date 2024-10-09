"use client";
import { useState } from "react";
import ComponentShow from "./ComponentShow";
import Sidebar from "./Sidebar";

export default function openComponent() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [selectedComponent, setSelectedComponent] = useState<string | null>(
    null
  );
  return (
    <div className="flex">
      <Sidebar
        onSelectedComponent={setSelectedComponent}
        selectedComponent={selectedComponent}
      />
      <main className="flex-1 p-6">
        <ComponentShow selectedComponent={selectedComponent} />
      </main>
    </div>
  );
}
