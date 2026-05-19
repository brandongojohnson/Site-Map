import React, { useState } from 'react';

const TopNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#f9f9f9]/80 backdrop-blur-md border-b border-[#c6c6c6]/15 flex justify-between items-center px-8 py-4 font-medium tracking-tight">
        <div className="flex items-center gap-8">
          <span className="text-lg font-bold tracking-tighter text-black">Vellum Sitemap</span>
          <div className="hidden md:flex gap-6">
            <a href="#" className="text-[#474747] hover:text-black transition-colors duration-200">Projects</a>
            <a href="#" className="text-black border-b-2 border-black pb-1">Templates</a>
            <a href="#" className="text-[#474747] hover:text-black transition-colors duration-200">Archive</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden md:block material-symbols-outlined text-[#474747] hover:text-black transition-colors">settings</button>
          <button className="hidden md:block material-symbols-outlined text-[#474747] hover:text-black transition-colors">help</button>
          <div className="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden">
            <img
              alt="User profile"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDK7d1moCj-0c7pWjqc4vKLuOEI4s7kkSdRLUAiI_3zalV7eKjKK9VyVfpWvZVhdjmN3jLPqICwodtfw5iyDwa58rzpUyZl0UEv1cXpmndQ4rStG3dMKcG7QPpZG3BpP9axeVVk5OwRSBCv8P7si-Z77WNnG01msHFzUSpWWh6VkgI8bSwWh0-DK8tNNfSsI9LyZYwKRAQC5fRNXtpPUI7brVUr9w3WdqFHL1Hrg4HBU1epUAxtkhEpwxc1UHQuohPVVL2cZuMJpA"
              className="w-full h-full object-cover"
            />
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden material-symbols-outlined text-[#474747] hover:text-black transition-colors"
          >
            {menuOpen ? 'close' : 'menu'}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <div
        className={`fixed top-16 right-0 w-64 bg-white border-l border-[#c6c6c6]/15 shadow-lg z-40 transform transition-transform duration-300 md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 space-y-6">
          <nav className="space-y-4">
            <a href="#" className="block text-[#474747] hover:text-black transition-colors duration-200">Projects</a>
            <a href="#" className="block text-black border-b-2 border-black pb-1">Templates</a>
            <a href="#" className="block text-[#474747] hover:text-black transition-colors duration-200">Archive</a>
          </nav>
          <div className="border-t border-[#e0e0e0] pt-6 space-y-4">
            <button className="flex items-center gap-3 text-[#474747] hover:text-black transition-colors w-full">
              <span className="material-symbols-outlined text-xl">settings</span>
              <span>Settings</span>
            </button>
            <button className="flex items-center gap-3 text-[#474747] hover:text-black transition-colors w-full">
              <span className="material-symbols-outlined text-xl">help</span>
              <span>Help</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
