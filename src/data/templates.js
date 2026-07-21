// Prebuilt sitemap trees for common website types. Ids only need to be
// unique within a board (each template becomes its own board), and any nodes
// added later use the timestamped uid(), so these fixed slugs can't collide.

const page = (id, title, slug, icon, children = [], label = 'Page') => ({
  id,
  title,
  slug,
  label,
  icon,
  status: 'public',
  description: '',
  children,
});

const home = (children) => ({
  ...page('root', 'Home', 'index.html', 'home', children, 'Home'),
  description: 'Main entry point of the site.',
});

export const TEMPLATES = [
  {
    id: 'business',
    name: 'Business Site',
    icon: 'domain',
    description: 'A services company: what you do, who you are, and a clear path to contact.',
    tree: home([
      page('about', 'About', 'about', 'info', [page('team', 'Team', 'about/team', 'groups')]),
      page('services', 'Services', 'services', 'widgets', [
        page('consulting', 'Consulting', 'services/consulting', 'lightbulb'),
        page('support', 'Support', 'services/support', 'support_agent'),
      ]),
      page('pricing', 'Pricing', 'pricing', 'sell'),
      page('blog', 'Blog', 'blog', 'article'),
      page('contact', 'Contact', 'contact', 'mail'),
    ]),
  },
  {
    id: 'ecommerce',
    name: 'E-commerce Store',
    icon: 'shopping_bag',
    description: 'Storefront with category browsing, cart-to-checkout flow, and account area.',
    tree: home([
      page('shop', 'Shop', 'shop', 'storefront', [
        page('category', 'Category', 'shop/category', 'grid_view'),
        page('product', 'Product Page', 'shop/product', 'inventory_2'),
      ]),
      page('cart', 'Cart', 'cart', 'shopping_cart'),
      page('checkout', 'Checkout', 'checkout', 'credit_card'),
      page('account', 'Account', 'account', 'person', [
        page('orders', 'Orders', 'account/orders', 'receipt_long'),
      ]),
      page('help', 'Help', 'help', 'help', [
        page('faq', 'FAQ', 'help/faq', 'quiz'),
        page('returns', 'Returns', 'help/returns', 'assignment_return'),
      ]),
    ]),
  },
  {
    id: 'blog',
    name: 'Blog / Publication',
    icon: 'newspaper',
    description: 'Editorial site organized around articles, categories, and authors.',
    tree: home([
      page('articles', 'Articles', 'articles', 'article', [
        page('category', 'Category', 'articles/category', 'label'),
        page('post', 'Article Page', 'articles/post', 'description'),
      ]),
      page('authors', 'Authors', 'authors', 'groups'),
      page('newsletter', 'Newsletter', 'newsletter', 'mark_email_read'),
      page('about', 'About', 'about', 'info'),
    ]),
  },
  {
    id: 'portfolio',
    name: 'Portfolio',
    icon: 'palette',
    description: 'A personal or studio portfolio: selected work with case studies.',
    tree: home([
      page('work', 'Work', 'work', 'work', [
        page('case-study', 'Case Study', 'work/case-study', 'auto_stories'),
      ]),
      page('about', 'About', 'about', 'person'),
      page('services', 'Services', 'services', 'widgets'),
      page('contact', 'Contact', 'contact', 'mail'),
    ]),
  },
  {
    id: 'saas',
    name: 'SaaS Product',
    icon: 'rocket_launch',
    description: 'Product marketing plus docs: features, pricing, and developer resources.',
    tree: home([
      page('features', 'Features', 'features', 'star'),
      page('pricing', 'Pricing', 'pricing', 'sell'),
      page('docs', 'Docs', 'docs', 'menu_book', [
        page('getting-started', 'Getting Started', 'docs/getting-started', 'flag'),
        page('api', 'API Reference', 'docs/api', 'code'),
      ]),
      page('blog', 'Blog', 'blog', 'article'),
      page('signup', 'Sign Up', 'signup', 'person_add'),
    ]),
  },
  {
    id: 'restaurant',
    name: 'Restaurant',
    icon: 'restaurant',
    description: 'Menu-first local business site with reservations and location info.',
    tree: home([
      page('menu', 'Menu', 'menu', 'menu_book', [
        page('lunch', 'Lunch', 'menu/lunch', 'lunch_dining'),
        page('dinner', 'Dinner', 'menu/dinner', 'dinner_dining'),
      ]),
      page('reservations', 'Reservations', 'reservations', 'event_available'),
      page('about', 'Our Story', 'about', 'info'),
      page('location', 'Location', 'location', 'location_on'),
    ]),
  },
];
