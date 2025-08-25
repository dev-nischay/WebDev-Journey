import Navbar from "./Navbar";

export default ({ children, sidebar = null }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex">
        {sidebar && (
          <div className="w-64 min-h-screen bg-white border-r border-gray-200 p-6 flex-shrink-0">
            {sidebar}
          </div>
        )}
        <div className="flex-1 flex flex-col min-w-0">
          {children}
        </div>
      </div>
    </div>
  );
};