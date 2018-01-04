
FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});

// Response Object
// {
//     status: 'connected',
//     authResponse: {
//         accessToken: '...',
//         expiresIn:'...',
//         signedRequest:'...',
//         userID:'...'
//     }
// }