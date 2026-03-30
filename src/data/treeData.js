let idCounter = 100;
export const uid = () => `node-${++idCounter}`;

export const defaultTree = {
  id: 'root',
  title: 'Landing Page',
  slug: 'index.html',
  label: 'Home',
  icon: 'home',
  status: 'public',
  description: 'Main entry point of the site.',
  children: [
    {
      id: 'solutions',
      title: 'Solutions',
      slug: 'solutions',
      label: 'Parent',
      icon: 'widgets',
      status: 'public',
      description: 'Product solutions overview.',
      children: [
        {
          id: 'enterprise',
          title: 'Enterprise',
          slug: 'solutions/enterprise',
          label: 'Child',
          icon: 'business',
          status: 'public',
          description: 'Enterprise-level offerings.',
          children: [],
        },
      ],
    },
    {
      id: 'products',
      title: 'Products',
      slug: 'products',
      label: 'Selected',
      icon: 'inventory_2',
      status: 'public',
      description: 'Overview of all current product offerings and enterprise services available.',
      children: [],
    },
    {
      id: 'about',
      title: 'About Us',
      slug: 'about',
      label: 'Static',
      icon: 'info',
      status: 'draft',
      description: 'Our story and mission.',
      children: [],
    },
  ],
};
