module.exports = function (shipit) {
  require('shipit-deploy')(shipit);

  shipit.initConfig({
    default: {
      workspace: '/tmp/showcase',
      deployTo: '/home/vagrant/showcase',
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

  shipit.on('published', function() {
    return shipit.start('install');
  });

  var npmInstall = function () {
    return shipit.remote(
      "cd " + shipit.releasePath +
      " && npm install" +
      " && ./node_modules/.bin/gulp build"
    );
  }

  shipit.blTask('install', function() {
    return npmInstall()
    .then(function () {
      shipit.log('Install Done!');
    });
  });
};
