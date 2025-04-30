import { bootstrap, runMigrations } from '@vendure/core';
import { config } from './vendure-config';

runMigrations(config)
  .then(() => bootstrap(config))
  .then(app => {
    console.log(`✅ Vendure is running on http://${config.apiOptions.hostname}:${config.apiOptions.port}`);
  })
  .catch(err => {
    console.error('❌ Error starting Vendure:', err);
  });

  process.on('uncaughtException', (err) => {
    console.error('UNCAUGHT EXCEPTION!', err);
  });
  process.on('unhandledRejection', (err) => {
    console.error('UNHANDLED REJECTION!', err);
  });