import { useState } from "react";

const componentCategories = {
  "Basic Elements": ["Button", "Input", "Card", "Badge"],
  Navigation: ["Navbar", "Sidebar", "Breadcrumbs", "Tabs"],
  Layout: ["Container", "Grid", "Stack", "Divider"],
  Feedback: ["Alert", "Toast", "Progress", "Spinner"],
  Form: ["Checkbox", "Radio", "Select", "Textarea"],
};

interface SidebarProps {
  onSelectedComponent: (component: string) => void;
  selectedComponent: string | null;
}

export default function Sidebar({
  onSelectedComponent,
  selectedComponent,
}: SidebarProps) {
  const [expandedCategory, setExpandCategory] = useState<string | null>(null);
  return (
    <aside className="w-[300px] overflow-y-auto border-r-2 bg-gray-50 border-black h-screen ">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Components</h2>
        <div className="space-y-2">
          {Object.entries(componentCategories).map(([category, components]) => (
            <div key={category}>
              <button
                className="w-full text-left p-2 hover:bg-gray-100 rounded-md font-medium"
                onClick={() =>
                  setExpandCategory(
                    expandedCategory === category ? null : category
                  )
                }
              >
                {category}
              </button>
              {expandedCategory === category && (
                <div className="ml-4 space-y-1">
                  {components.map((component) => (
                    <button
                      key={component}
                      className={`w-full text-left p-2 rounded-md ${
                        selectedComponent === component
                          ? "bg-blue-100 text-blue-700"
                          : "hover:bg-gray-100"
                      }`}
                      onClick={() => onSelectedComponent(component)}
                    >
                      {component}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
