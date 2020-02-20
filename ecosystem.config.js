module.exports = {
  apps : [{
    name: 'video-api',
    script: 'dist/server.bundle.js',
    instances: 1,
    autorestart: true,
    watch: false,
    log_date_format: 'YYYY-MM-DD HH:mm Z',
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    time: true,
    max_memory_restart: '1G',
    exec_mode: 'fork',
    env: {
      NODE_ENV: 'development',
      DB_USER: 'loanMaster',
      DB_PASS: 'FVRrFTTHYDc5HhI0',
      DB_URI: 'cluster0-bbzt9.mongodb.net/test?retryWrites=true&w=majority',
      JWT_SECRET: 'GUSORULES',
      DB_USER_DEV: 'loanMaster',
      DB_PASS_DEV: 'FVRrFTTHYDc5HhI0',
      DB_URI_DEV: 'cluster0-bbzt9.mongodb.net/test?retryWrites=true&w=majority',
      PORT: 3001,
      CLOSE_TO_EXPIRE: '5min',
      JWT_EXPIRATION: '5h',
      TOKEN_EXPIRES: false,
      PLAYGROUND: true,
      CLOUDINARY_CLOUDNAME: 'dvuhobfx2',
      CLOUDINARY_KEY: 664891344729216,
      CLOUDINARY_SECRET: 'MviK75trY7L5OZAGkwai55Tu_oE'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
