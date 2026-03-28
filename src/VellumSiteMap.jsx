import React from 'react';

const VellumSitemap = () => {
  return (
    <div className="light font-body text-on-surface bg-background min-h-screen">
      {/* Top Navigation Bar */}
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
          <button className="material-symbols-outlined text-[#474747] hover:text-black transition-colors" data-icon="settings">
            settings
          </button>
          <button className="material-symbols-outlined text-[#474747] hover:text-black transition-colors" data-icon="help">
            help
          </button>
          
          <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center overflow-hidden">
            <img 
              alt="User profile" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDK7d1moCj-0c7pWjqc4vKLuOEI4s7kkSdRLUAiI_3zalV7eKjKK9VyVfpWvZVhdjmN3jLPqICwodtfw5iyDwa58rzpUyZl0UEv1cXpmndQ4rStG3dMKcG7QPpZG3BpP9axeVVk5OwRSBCv8P7si-Z77WNnG01msHFzUSpWWh6VkgI8bSwWh0-DK8tNNfSsI9LyZYwKRAQC5fRNXtpPUI7brVUr9w3WdqFHL1Hrg4HBU1epUAxtkhEpwxc1UHQuohPVVL2cZuMJpA"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </nav>

      {/* Side Navigation Bar */}
      <aside className="h-screen w-64 fixed left-0 top-0 bg-[#f3f3f4] flex flex-col p-6 space-y-8 z-40">
        <div className="pt-16 pb-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white">
              <span className="material-symbols-outlined">layers</span>
            </div>
            <div>
              <h2 className="text-xl font-black text-black leading-tight">Project Alpha</h2>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant">Sitemap Editor</p>
            </div>
          </div>

          <button className="w-full py-3 bg-black text-white rounded-lg font-bold text-sm uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all duration-100 mb-8">
            New Page
          </button>
        </div>

        <nav className="flex-grow space-y-2">
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-[#474747] hover:bg-[#e8e8e8] hover:translate-x-1 transition-all rounded-lg text-sm uppercase tracking-widest">
            <span className="material-symbols-outlined">dashboard</span>
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-white text-black rounded-lg font-bold shadow-sm text-sm uppercase tracking-widest">
            <span className="material-symbols-outlined">layers</span>
            <span>Pages</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-[#474747] hover:bg-[#e8e8e8] hover:translate-x-1 transition-all rounded-lg text-sm uppercase tracking-widest">
            <span className="material-symbols-outlined">folder_open</span>
            <span>Assets</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-[#474747] hover:bg-[#e8e8e8] hover:translate-x-1 transition-all rounded-lg text-sm uppercase tracking-widest">
            <span className="material-symbols-outlined">history</span>
            <span>History</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-[#474747] hover:bg-[#e8e8e8] hover:translate-x-1 transition-all rounded-lg text-sm uppercase tracking-widest">
            <span className="material-symbols-outlined">ios_share</span>
            <span>Export</span>
          </a>
        </nav>

        <div className="mt-auto pt-6 border-t border-[#c6c6c6]/15">
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-[#474747] hover:bg-[#e8e8e8] transition-all rounded-lg text-sm uppercase tracking-widest">
            <span className="material-symbols-outlined">account_circle</span>
            <span>Account</span>
          </a>
        </div>
      </aside>

      {/* Main Canvas Area */}
      <main className="ml-64 pt-20 pr-80 min-h-screen relative canvas-grid">
        <div className="p-12">
          <div className="flex flex-col items-center">
            {/* Root Node */}
            <div className="relative group">
              <div className="w-56 h-32 bg-white rounded-xl shadow-sm border border-[#c6c6c6]/15 p-5 flex flex-col justify-between hover:border-black transition-colors cursor-pointer hover:ring-2 hover:ring-black/20 ring-offset-4">
                <div className="flex justify-between items-start">
                  <span className="text-[10px] uppercase tracking-widest text-on-surface-variant">Home</span>
                  <span className="material-symbols-outlined text-sm text-[#777777]">home</span>
                </div>
                <h3 className="font-bold text-lg text-black">Landing Page</h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xs text-on-surface-variant">/index.html</span>
                  <button className="material-symbols-outlined text-sm hover:text-black transition-colors">add_circle</button>
                </div>
              </div>

              {/* Vertical Connector */}
              <div className="w-[1px] h-16 bg-[#c6c6c6]/30 mx-auto"></div>

              {/* Level 2 Nodes */}
              <div className="flex gap-12 justify-center relative">
                {/* Horizontal Connector */}
                <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-[#c6c6c6]/30"></div>

                {/* Solutions Node */}
                <div className="flex flex-col items-center">
                  <div className="w-[1px] h-6 bg-[#c6c6c6]/30"></div>
                  <div className="w-48 h-24 bg-white rounded-xl shadow-sm border border-[#c6c6c6]/15 p-4 flex flex-col justify-between hover:border-black transition-colors cursor-pointer">
                    <span className="text-[10px] uppercase tracking-widest text-on-surface-variant">Parent</span>
                    <h4 className="font-bold text-md text-black">Solutions</h4>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] text-on-surface-variant">/solutions</span>
                      <span className="material-symbols-outlined text-xs">more_vert</span>
                    </div>
                  </div>
                  <div className="w-[1px] h-12 bg-[#c6c6c6]/30"></div>
                  {/* Add Page Placeholder */}
                  <div className="w-40 h-20 bg-white/50 rounded-xl border border-dashed border-[#c6c6c6] p-3 flex flex-col items-center justify-center hover:bg-[#e8e8e8] transition-all cursor-pointer">
                    <span className="material-symbols-outlined text-[#777777]">add</span>
                    <span className="text-[10px] uppercase tracking-widest mt-1 text-on-surface-variant">Add Page</span>
                  </div>
                </div>

                {/* Products Node (Selected) */}
                <div className="flex flex-col items-center">
                  <div className="w-[1px] h-6 bg-[#c6c6c6]/30"></div>
                  <div className="w-48 h-24 bg-white rounded-xl shadow-lg border-2 border-black p-4 flex flex-col justify-between cursor-pointer">
                    <span className="text-[10px] uppercase tracking-widest text-on-surface-variant">Selected</span>
                    <h4 className="font-bold text-md text-black">Products</h4>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] text-on-surface-variant">/products</span>
                      <span className="material-symbols-outlined text-xs">more_vert</span>
                    </div>
                  </div>

                  {/* Hover Controls */}
                  <div className="flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 bg-white rounded-full shadow-sm hover:bg-black hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-sm">add</span>
                    </button>
                  </div>
                </div>

                {/* About Node */}
                <div className="flex flex-col items-center">
                  <div className="w-[1px] h-6 bg-[#c6c6c6]/30"></div>
                  <div className="w-48 h-24 bg-white rounded-xl shadow-sm border border-[#c6c6c6]/15 p-4 flex flex-col justify-between hover:border-black transition-colors cursor-pointer">
                    <span className="text-[10px] uppercase tracking-widest text-on-surface-variant">Static</span>
                    <h4 className="font-bold text-md text-black">About Us</h4>
                    <div className="flex justify-between items-center">
                      <span className="text-[10px] text-on-surface-variant">/about</span>
                      <span className="material-symbols-outlined text-xs">more_vert</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Zoom Controls */}
        <div className="fixed bottom-8 left-72 bg-white/80 backdrop-blur-md rounded-full shadow-lg p-1 flex items-center gap-1 border border-[#c6c6c6]/10">
          <button className="p-2 hover:bg-[#f3f3f4] rounded-full transition-colors material-symbols-outlined">zoom_in</button>
          <div className="h-4 w-[1px] bg-[#c6c6c6]/30 mx-1"></div>
          <span className="text-xs font-bold px-2">85%</span>
          <div className="h-4 w-[1px] bg-[#c6c6c6]/30 mx-1"></div>
          <button className="p-2 hover:bg-[#f3f3f4] rounded-full transition-colors material-symbols-outlined">zoom_out</button>
          <button className="p-2 hover:bg-[#f3f3f4] rounded-full transition-colors material-symbols-outlined">center_focus_strong</button>
        </div>
      </main>

      {/* Right Sidebar - Page Properties */}
      <aside className="fixed right-0 top-0 h-full w-80 bg-white border-l border-[#c6c6c6]/15 z-40 p-8 pt-24 overflow-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-black">Page Properties</h2>
          <button className="material-symbols-outlined text-on-surface-variant hover:text-black transition-colors">close</button>
        </div>

        <div className="space-y-8">
          {/* Page Title */}
          <div className="space-y-3">
            <label className="text-[10px] uppercase tracking-widest text-on-surface-variant block">Page Title</label>
            <input 
              type="text" 
              value="Products"
              className="w-full bg-[#f3f3f4] border-none rounded-lg p-4 font-bold text-black focus:ring-1 focus:ring-black focus:bg-white transition-all"
            />
          </div>

          {/* URL Slug */}
          <div className="space-y-3">
            <label className="text-[10px] uppercase tracking-widest text-on-surface-variant block">URL Slug</label>
            <div className="flex items-center bg-[#f3f3f4] rounded-lg overflow-hidden">
              <span className="pl-4 text-xs text-[#777777] font-mono">/</span>
              <input 
                type="text" 
                value="products"
                className="w-full bg-transparent border-none p-4 pl-1 font-mono text-xs focus:ring-0"
              />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <label className="text-[10px] uppercase tracking-widest text-on-surface-variant block">Description</label>
            <textarea 
              rows={4}
              className="w-full bg-[#f3f3f4] border-none rounded-lg p-4 text-sm text-on-surface-variant focus:ring-1 focus:ring-black focus:bg-white transition-all resize-none"
              placeholder="Enter meta description for SEO..."
            >
              Overview of all current product offerings and enterprise services available.
            </textarea>
          </div>

          {/* Navigation Status */}
          <div className="space-y-3">
            <label className="text-[10px] uppercase tracking-widest text-on-surface-variant block">Navigation Status</label>
            <div className="flex gap-2">
              <button className="flex-1 py-2 rounded-lg bg-black text-white text-xs font-bold uppercase tracking-widest">Public</button>
              <button className="flex-1 py-2 rounded-lg bg-[#f3f3f4] text-on-surface-variant text-xs font-bold uppercase tracking-widest hover:bg-[#e8e8e8] transition-colors">Draft</button>
            </div>
          </div>

          {/* Delete Button */}
          <div className="pt-8 mt-8 border-t border-[#c6c6c6]/15">
            <button className="w-full flex items-center justify-center gap-2 py-3 rounded-lg border border-red-500/20 text-red-600 hover:bg-red-50 transition-colors text-xs font-bold uppercase tracking-widest">
              <span className="material-symbols-outlined text-sm">delete</span>
              Delete Page
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default VellumSitemap;