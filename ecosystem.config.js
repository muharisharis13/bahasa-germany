module.exports = {
  apps: [
    {
      name: 'nextjs-app-bahasa-germany',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 8081,
      },
    },
  ],
};