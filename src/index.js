// Project Entry File

// Import all the Layout, Pages, Components etc so that it can be watched by Webpack for any changes

// HBS - Layout
require('./app/layouts/default.hbs');
require('./app/layouts/advance.hbs');

// HBS - Pages
import './app/pages/page1.hbs';
import './app/pages/page2.hbs';

// HBS - Components
import './app/fe-components/country-list/country-list.hbs';
import './app/fe-components/user/user.hbs';

console.log('🎉 🎉 Welcome message from assemble-webpack');
