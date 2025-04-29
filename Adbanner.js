export default function AdBanner({ type = 'horizontal' }) {
  // This is a placeholder for Google AdSense
  // In a production environment, this would be replaced with actual AdSense code
  
  if (type === 'sidebar') {
    return (
      <div className="fixed right-0 top-1/3 hidden lg:block z-20">
        <div className="bg-white p-2 rounded-l-lg shadow-md text-center">
          <div className="bg-gray-200 w-32 h-64 flex items-center justify-center text-gray-500 text-sm">
            <p>AdSense Sidebar</p>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="relative z-10 container mx-auto my-8 px-4">
      <div className="bg-white p-4 rounded-lg shadow-md text-center">
        <div className="bg-gray-200 h-24 flex items-center justify-center text-gray-500">
          <p>Google AdSense Banner</p>
        </div>
      </div>
    </div>
  );
}
