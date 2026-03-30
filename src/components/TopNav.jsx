import React from 'react';

const TopNav = () => (
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
      <button className="material-symbols-outlined text-[#474747] hover:text-black transition-colors">settings</button>
      <button className="material-symbols-outlined text-[#474747] hover:text-black transition-colors">help</button>
      <div className="w-8 h-8 rounded-full bg-surface-container-highest overflow-hidden">
        <img
          alt="User profile"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDK7d1moCj-0c7pWjqc4vKLuOEI4s7kkSdRLUAiI_3zalV7eKjKK9VyVfpWvZVhdjmN3jLPqICwodtfw5iyDwa58rzpUyZl0UEv1cXpmndQ4rStG3dMKcG7QPpZG3BpP9axeVVk5OwRSBCv8P7si-Z77WNnG01msHFzUSpWWh6VkgI8bSwWh0-DK8tNNfSsI9LyZYwKRAQC5fRNXtpPUI7brVUr9w3WdqFHL1Hrg4HBU1epUAxtkhEpwxc1UHQuohPVVL2cZuMJpA"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  </nav>
);

export default TopNav;
