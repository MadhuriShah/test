Meteor.startup(function() {
  // Add Facebook configuration entry
  
  ServiceConfiguration.configurations.update(
    { service: "facebook" },
    { $set: {
        appId: "524546111037504",
        secret: "6ca507fa2a1ace255c3b97a69b23086b"
      }
    },
    { upsert: true }
  );

  // Add GitHub configuration entry
  /*
  ServiceConfiguration.configurations.update(
    { service: "github" },
    { $set: {
        clientId: "XXXXXXXXXXXXXXXXXXXX",
        secret: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
      }
    },
    { upsert: true }
  );
  */

  // Add Google configuration entry
  ServiceConfiguration.configurations.update(
    { service: "google" },
    { $set: {
        clientId: "498745873351-lnmr6u95vdcu7a0hn9joqqk689tdckin.apps.googleusercontent.com",
        secret: "LgjB_h-lsc6HAy_m-MD-pxJJ"
      }
    },
    { upsert: true }
  );

  // Add Linkedin configuration entry
  /*
  ServiceConfiguration.configurations.update(
    { service: "linkedin" },
    { $set: {
        clientId: "XXXXXXXXXXXXXX",
        secret: "XXXXXXXXXXXXXXXX"
      }
    },
    { upsert: true }
  );
  */
});