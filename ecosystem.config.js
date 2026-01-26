module.exports = {
    apps: [{
      name: 'powerbi',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/powerbi/production',
      env: {
        NODE_ENV: 'production',
        PORT: 3088
      },
      error_file: '/var/www/powerbi/logs/error.log',
      out_file: '/var/www/powerbi/logs/out.log'
    }]
  }
