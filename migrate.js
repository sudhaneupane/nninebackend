// migrate.js

import umzug from './umzug-config.js';

(async () => {
  try {
    await umzug.up();
    console.log('Migrations executed successfully');
  } catch (err) {
    console.error('Migration failed', err);
  }
})();
