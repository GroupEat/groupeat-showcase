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
    prod: {
      branch: 'prod',
      servers: 'vagrant@groupeat.fr'
    }
  });

  shipit.on('published', () => {
    return shipit.start('install');
  });

  shipit.blTask('install', () => {
    return shipit
    .remote(`cd ${shipit.releasePath} && npm instal && ./node_modules/.bin/gulp build`)
    .then(() => {
      shipit.log('Install Done!');
    });
  });
};
