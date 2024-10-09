"use client";
import { useState } from "react";
import ComponentShow from "./ComponentShow";
import Sidebar from "./Sidebar";

export default function openComponent() {
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
