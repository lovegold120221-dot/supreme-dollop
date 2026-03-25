// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AQ.Ab8RN6I8Js6LYb_g-mB1YS0V9Kap3w9DIdsBxontfhqM_pfbYg',
    authDomain: 'gen-lang-client-0460519420.firebaseapp.com',
    projectId: 'gen-lang-client-0460519420',
    storageBucket: 'gen-lang-client-0460519420.appspot.com',
    messagingSenderId: '0',
    appId: '1:0:web:anonymous',
  },
  reCAPTCHAKey: '6Ldsxb8oAAAAAGyUZbyd0QruivPSudqAWFygR-4t',
  translationApi: {
    textNormalizationUrl: 'https://sign.mt/api/text-normalization',
    signWritingDescriptionUrl: 'https://sign.mt/api/signwriting-description',
    spokenTextToSignWritingUrl: 'https://sign.mt/api/spoken-text-to-signwriting',
    spokenTextToSignedPoseUrl: 'https://us-central1-sign-mt.cloudfunctions.net/spoken_text_to_signed_pose',
    spokenTextToSignedVideoUrl: 'https://us-central1-sign-mt.cloudfunctions.net/spoken_text_to_signed_video',
    imageToAvatarUrl: 'https://image-to-avatar-665830225099.us-central1.run.app/',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
