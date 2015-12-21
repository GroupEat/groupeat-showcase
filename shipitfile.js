module.exports = shipit => {
  require('shipit-deploy')(shipit);

  shipit.initConfig({
    default: {
      workspace: '/tmp/showcase',
      deployTo: '~/showcase',
      repositoryUrl: 'git@github.com:GroupEat/groupeat-showcase.git',
      ignores: ['.git', 'node_modules', 'bower_components'],
      rsync: ['--del'],
      keepReleases: 3,
      shallowClone: true
    },
    staging: {
      branch: 'staging',
      servers: 'vagrant@staging.groupeat.fr'
    },
    production: {
      branch: 'production',
      servers: 'vagrant@groupeat.fr'
    }
  });

  shipit.on('published', () => {
    return shipit.start('install');
  });

  const npmInstall = () => {
    return shipit.remote(`
      cd ${shipit.releasePath}
        && npm install
        && ./node_modules/.bin/gulp build
    `);
  };

  shipit.blTask('install', () => {
    return npmInstall()
    .then(() => {
      shipit.log('Install Done!');
    });
  });
};
