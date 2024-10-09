import DemoNavbar from "@/components/ui/DemoNavbar";

interface ComponentShowProps {
  selectedComponent: string | null;
}

const componentMap = {
  Navbar: {
    component: DemoNavbar,
    code: `
    import { useState } from "react";

interface NavbarProps {
  variant?: "default" | "centered" | "minimal";
  logo?: string;
}

export default function DemoNavbar({
  variant = "default",
  logo = "Logo",
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Services", "Contact"];

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-bold text-gray-800">{logo}</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex sm:space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
    `,
  },
};

export default function ComponentShow({
  selectedComponent,
}: ComponentShowProps) {
  if (!selectedComponent) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500">
        Select a component from the sidebar to view it here
      </div>
    );
  }

  const selectedComponentData =
    componentMap[selectedComponent as keyof typeof componentMap];

  if (!selectedComponentData) {
    return (
      <div className="h-full flex items-center justify-center text-gray-500">
        Component not implemented yet
      </div>
    );
  }

  const Component = selectedComponentData.component;

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">{selectedComponent}</h1>

      {/* Preview Section */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Preview</h2>
        <div className="border rounded-lg overflow-hidden">
          <Component />
        </div>
      </div>

      {/* Code Section */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Code</h2>
        <div className="relative">
          <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
            <code className="text-sm">{selectedComponentData.code}</code>
          </pre>
          <button
            onClick={() =>
              navigator.clipboard.writeText(selectedComponentData.code)
            }
            className="absolute top-2 right-2 px-3 py-1 text-sm bg-gray-800 text-white rounded hover:bg-gray-700"
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
}
