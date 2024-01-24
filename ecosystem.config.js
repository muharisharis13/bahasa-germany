module.exports = {
  apps: [
    {
      name: 'nextjs-app-bahasa-germany',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 8081, // Sesuaikan port sesuai kebutuhan
      },
    },
  ],
};