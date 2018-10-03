import React from 'react';

const Authenticate = () => {
  return (

        <meta name="google-signin-scope" content="profile email">
          <meta name="google-signin-client_id" content="YOUR_CLIENT_ID.apps.googleusercontent.com">
            <script src="https://apis.google.com/js/platform.js" async defer></script>
            <body>
              <div class="g-signin2" data-onsuccess="onSignIn" data-theme="dark"></div>
              <script>
                function onSignIn(googleUser) {
                  //ID token to pass to backend:
                  const id_token = googleUser.getAuthResponse().id_token;
                  console.log("ID Token: " + id_token);
                };
              </script>
            </body>

            )
            }
            
