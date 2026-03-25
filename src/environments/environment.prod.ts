export const environment = {
  production: true,
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
