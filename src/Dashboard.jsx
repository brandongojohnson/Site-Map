import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background text-on-surface font-['Inter']">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 bg-[#f9f9f9]/80 dark:bg-[#000000]/80 backdrop-blur-md border-b border-[#c6c6c6]/15 flex justify-between items-center px-8 py-4">
        <div className="flex items-center gap-8">
          <span className="text-lg font-bold tracking-tighter text-[#000000] dark:text-[#ffffff]">
            Vellum Sitemap
          </span>
          <div className="hidden md:flex items-center space-x-6 font-medium tracking-tight">
            <a
              href="#"
              className="text-[#000000] dark:text-[#ffffff] border-b-2 border-[#000000] dark:border-[#ffffff] pb-1 transition-colors duration-200"
            >
              Projects
            </a>
            <a
              href="#"
              className="text-[#474747] dark:text-[#e8e8e8] hover:text-[#000000] dark:hover:text-[#ffffff] transition-colors duration-200"
            >
              Templates
            </a>
            <a
              href="#"
              className="text-[#474747] dark:text-[#e8e8e8] hover:text-[#000000] dark:hover:text-[#ffffff] transition-colors duration-200"
            >
              Archive
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-[#474747] hover:text-primary transition-colors">
            settings
          </button>
          <button className="material-symbols-outlined text-[#474747] hover:text-primary transition-colors">
            help
          </button>
          <div className="w-8 h-8 rounded-full bg-surface-container-high overflow-hidden ml-2">
            <img
              alt="User profile"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkJzCnxhe5-2qMuhNmc9HLEkgFaWG9-3UPX4asN6KUW8g-YKuQQSy9ej9LB8AUsDhmyzoBl0OozvkDR5eeXuElTwD2pQSCgVxI3rknA49LRSnnpDNb48ggXtP9u4JYDC7-SfQhtKO-U6W8_61h3rDZqtuSKZrPTunxhrxbP3zjNlWj56r74bcEZQ1AiNygWAftwV9qACTrQQlsb9JWkubFfkNFteCPq97ogHgdbsF_IcIU45rFqpGcor1ylc79fskJcglLdkDLRnc"
            />
          </div>
        </div>
      </nav>

      {/* Side Navigation Bar */}
      <aside className="h-screen w-64 fixed left-0 top-0 bg-[#f3f3f4] dark:bg-[#1a1a1a] flex flex-col p-6 space-y-8 pt-24">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary text-on-primary flex items-center justify-center rounded-lg shadow-sm">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                account_tree
              </span>
            </div>
            <div>
              <h2 className="text-[#000000] dark:text-[#ffffff] font-black text-xl leading-tight">
                Project Alpha
              </h2>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#474747]">
                Sitemap Editor
              </p>
            </div>
          </div>
        </div>

        <button className="w-full bg-primary text-on-primary py-3 rounded-lg font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-95">
          <span className="material-symbols-outlined">add</span>
          New Page
        </button>

        <nav className="flex-1 space-y-2">
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 bg-[#ffffff] dark:bg-[#000000] text-[#000000] dark:text-[#ffffff] rounded-lg font-bold shadow-sm transition-transform duration-200"
          >
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-['Inter'] text-sm uppercase tracking-widest">Dashboard</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-[#474747] dark:text-[#c6c6c6] hover:bg-[#e8e8e8] dark:hover:bg-[#2a2a2a] hover:translate-x-1 transition-all"
          >
            <span className="material-symbols-outlined">layers</span>
            <span className="font-['Inter'] text-sm uppercase tracking-widest">Pages</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-[#474747] dark:text-[#c6c6c6] hover:bg-[#e8e8e8] dark:hover:bg-[#2a2a2a] hover:translate-x-1 transition-all"
          >
            <span className="material-symbols-outlined">folder_open</span>
            <span className="font-['Inter'] text-sm uppercase tracking-widest">Assets</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-[#474747] dark:text-[#c6c6c6] hover:bg-[#e8e8e8] dark:hover:bg-[#2a2a2a] hover:translate-x-1 transition-all"
          >
            <span className="material-symbols-outlined">history</span>
            <span className="font-['Inter'] text-sm uppercase tracking-widest">History</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-[#474747] dark:text-[#c6c6c6] hover:bg-[#e8e8e8] dark:hover:bg-[#2a2a2a] hover:translate-x-1 transition-all"
          >
            <span className="material-symbols-outlined">ios_share</span>
            <span className="font-['Inter'] text-sm uppercase tracking-widest">Export</span>
          </a>
        </nav>

        <div className="pt-6 border-t border-outline-variant/15">
          <a
            href="#"
            className="flex items-center gap-3 px-4 py-3 text-[#474747] dark:text-[#c6c6c6] hover:bg-[#e8e8e8] dark:hover:bg-[#2a2a2a] transition-all"
          >
            <span className="material-symbols-outlined">account_circle</span>
            <span className="font-['Inter'] text-sm uppercase tracking-widest">Account</span>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 pt-24 p-10 min-h-screen">
        <header className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-on-surface-variant/60">
              WORKSPACE
            </span>
            <span className="text-[10px] text-outline-variant/40">/</span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-medium text-primary">
              PROJECTS
            </span>
          </div>

          <div className="flex justify-between items-end">
            <div>
              <h1 className="text-5xl font-bold tracking-tighter text-primary mb-2">
                Previous Projects
              </h1>
              <p className="text-on-surface-variant text-lg max-w-xl">
                Curate and manage your architectural information hierarchies.
              </p>
            </div>
            <button className="bg-primary text-on-primary px-8 py-4 rounded-lg font-bold flex items-center gap-3 shadow-lg hover:translate-y-[-2px] transition-all active:scale-95">
              <span className="material-symbols-outlined">add_circle</span>
              Create New Sitemap
            </button>
          </div>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-12 gap-6">
          {/* Featured Project Card */}
          <div className="col-span-12 lg:col-span-8 group">
            <div className="bg-surface-container-lowest p-8 rounded-xl flex flex-col justify-between h-[400px] border border-outline-variant/10 relative overflow-hidden">
              <div className="z-10">
                <div className="flex justify-between items-start mb-4">
                  <span className="bg-primary text-on-primary text-[10px] px-3 py-1 font-bold tracking-widest uppercase">
                    Latest Edit
                  </span>
                  <div className="flex gap-2">
                    <button className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center hover:bg-surface-container-high transition-colors">
                      <span className="material-symbols-outlined">star</span>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center hover:bg-surface-container-high transition-colors">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </div>
                </div>
                <h3 className="text-3xl font-bold tracking-tight text-primary">
                  Nexus eCommerce Ecosystem
                </h3>
                <p className="text-on-surface-variant mt-2">
                  Complex multi-vendor architecture with 120+ unique node paths.
                </p>
              </div>

              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                <img
                  alt="Sitemap visualization"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3OIwGUcXp5isqZpfT4pLVsqfF_Q21XrNHG1BLBJhfKbqm5Ege2b__yRFg1OeAlyZ0L0MR0F3K_SMyllEzkBPfrim4j9N5vj2qU12n6yjksVB8lh5cwmRz2_AzayGzpuGfJ2zFqLjNq4ttknfHSIGcY7iIJfIcpCeQHtI2CG6DbGIKSXKNgX89zlKGpEq3kz7j_BrUGlltsb-qMD70ZsbbwyGIIDJkkYOgpIj9vDTDzjfQENP4HeNI2UfKOElwuTvZdkndcSZMGIk"
                />
              </div>

              <div className="z-10 flex items-center justify-between border-t border-outline-variant/15 pt-6">
                <div className="flex gap-10">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-on-surface-variant/60 mb-1">
                      Last Edited
                    </p>
                    <p className="font-medium">Oct 24, 2023</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-on-surface-variant/60 mb-1">
                      Total Pages
                    </p>
                    <p className="font-medium">142</p>
                  </div>
                </div>
                <button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-bold text-sm hover:px-8 transition-all">
                  View Project
                </button>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="col-span-12 lg:col-span-4 flex flex-col gap-6">
            <div className="bg-surface-container-low p-8 rounded-xl flex-1 flex flex-col justify-center">
              <p className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant mb-2">
                Workspace Health
              </p>
              <div className="text-4xl font-bold tracking-tighter">98.2%</div>
              <div className="mt-4 h-1 bg-outline-variant/20 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-[98%]"></div>
              </div>
              <p className="text-xs text-on-surface-variant mt-3">
                All nodes are properly linked and indexed.
              </p>
            </div>

            <div className="bg-primary text-on-primary p-8 rounded-xl flex-1 flex flex-col justify-between">
              <span
                className="material-symbols-outlined text-4xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                cloud_done
              </span>
              <div>
                <p className="text-2xl font-bold tracking-tight">Cloud Sync Active</p>
                <p className="text-on-primary/60 text-sm mt-1">
                  Version 4.2.0 deployed across 12 projects.
                </p>
              </div>
            </div>
          </div>

          {/* Active Repositories Section */}
          <div className="col-span-12 mt-10">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold tracking-tight">Active Repositories</h2>
              <div className="flex gap-4">
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/40">
                    search
                  </span>
                  <input
                    type="text"
                    placeholder="Search projects..."
                    className="bg-surface-container-high border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-1 focus:ring-primary w-64 transition-all"
                  />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-lg text-sm font-medium hover:bg-surface-container-high">
                  <span className="material-symbols-outlined">filter_list</span>
                  Filter
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* Project Item 1 */}
              <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 hover:border-primary/20 transition-all hover:shadow-xl hover:shadow-primary/5 group">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-surface-container-low rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined">account_tree</span>
                  </div>
                  <span className="text-[10px] font-bold tracking-widest uppercase py-1 px-2 bg-surface-container-high rounded text-on-surface-variant">
                    Archived
                  </span>
                </div>
                <h4 className="text-lg font-bold mb-1">Corporate Intranet Redesign</h4>
                <p className="text-sm text-on-surface-variant mb-6 line-clamp-1">
                  Legacy migration for Fortune 500 company.
                </p>
                <div className="flex items-center justify-between text-xs border-t border-outline-variant/10 pt-4">
                  <div className="flex flex-col">
                    <span className="text-on-surface-variant/60 uppercase tracking-tighter mb-0.5">Edited</span>
                    <span className="font-medium">Sep 12, 2023</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-on-surface-variant/60 uppercase tracking-tighter mb-0.5">Pages</span>
                    <span className="font-medium">42</span>
                  </div>
                </div>
                <div className="mt-6 flex gap-2">
                  <button className="flex-1 py-2 bg-surface-container-low hover:bg-surface-container-high rounded font-bold text-xs transition-colors">
                    Edit
                  </button>
                  <button className="flex-1 py-2 bg-primary text-on-primary rounded font-bold text-xs transition-colors">
                    View
                  </button>
                </div>
              </div>

              {/* Project Item 2 */}
              <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 hover:border-primary/20 transition-all hover:shadow-xl hover:shadow-primary/5 group">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-surface-container-low rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined">shopping_bag</span>
                  </div>
                  <span className="text-[10px] font-bold tracking-widest uppercase py-1 px-2 bg-primary text-on-primary rounded">
                    Active
                  </span>
                </div>
                <h4 className="text-lg font-bold mb-1">Modern Florist Shop</h4>
                <p className="text-sm text-on-surface-variant mb-6 line-clamp-1">
                  Shopify headless architecture sitemap.
                </p>
                <div className="flex items-center justify-between text-xs border-t border-outline-variant/10 pt-4">
                  <div className="flex flex-col">
                    <span className="text-on-surface-variant/60 uppercase tracking-tighter mb-0.5">Edited</span>
                    <span className="font-medium">Yesterday</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-on-surface-variant/60 uppercase tracking-tighter mb-0.5">Pages</span>
                    <span className="font-medium">18</span>
                  </div>
                </div>
                <div className="mt-6 flex gap-2">
                  <button className="flex-1 py-2 bg-surface-container-low hover:bg-surface-container-high rounded font-bold text-xs transition-colors">
                    Edit
                  </button>
                  <button className="flex-1 py-2 bg-primary text-on-primary rounded font-bold text-xs transition-colors">
                    View
                  </button>
                </div>
              </div>

              {/* Project Item 3 */}
              <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/10 hover:border-primary/20 transition-all hover:shadow-xl hover:shadow-primary/5 group">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-surface-container-low rounded-lg flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined">science</span>
                  </div>
                  <span className="text-[10px] font-bold tracking-widest uppercase py-1 px-2 bg-surface-container-high rounded text-on-surface-variant">
                    Draft
                  </span>
                </div>
                <h4 className="text-lg font-bold mb-1">R&amp;D Portfolio Lab</h4>
                <p className="text-sm text-on-surface-variant mb-6 line-clamp-1">
                  Experimental canvas for interactive nodes.
                </p>
                <div className="flex items-center justify-between text-xs border-t border-outline-variant/10 pt-4">
                  <div className="flex flex-col">
                    <span className="text-on-surface-variant/60 uppercase tracking-tighter mb-0.5">Edited</span>
                    <span className="font-medium">Oct 1, 2023</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-on-surface-variant/60 uppercase tracking-tighter mb-0.5">Pages</span>
                    <span className="font-medium">5</span>
                  </div>
                </div>
                <div className="mt-6 flex gap-2">
                  <button className="flex-1 py-2 bg-surface-container-low hover:bg-surface-container-high rounded font-bold text-xs transition-colors">
                    Edit
                  </button>
                  <button className="flex-1 py-2 bg-primary text-on-primary rounded font-bold text-xs transition-colors">
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-16">
          <button className="text-[10px] uppercase tracking-[0.4em] font-black text-primary hover:tracking-[0.6em] transition-all flex items-center gap-2">
            View All Repositories
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </main>

      {/* Background Noise Texture */}
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-30 mix-blend-multiply overflow-hidden">
        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" type="fractalNoise" />
          </filter>
          <rect filter="url(#noiseFilter)" height="100%" width="100%" />
        </svg>
      </div>
    </div>
  );
};

export default Dashboard;