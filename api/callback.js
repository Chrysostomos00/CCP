import { AuthorizationCode } from 'simple-oauth2';

function getClient() {
  return new AuthorizationCode({
    client: {
      id: process.env.OAUTH_GITHUB_CLIENT_ID,
      secret: process.env.OAUTH_GITHUB_CLIENT_SECRET,
    },
    auth: {
      tokenHost: 'https://github.com',
      tokenPath: '/login/oauth/access_token',
      authorizePath: '/login/oauth/authorize',
    },
  });
}

export default async function handler(req, res) {
  const client = getClient();
  const { code } = req.query;
  const host = req.headers.host;
  const protocol = host.includes('localhost') ? 'http' : 'https';

  try {
    const accessToken = await client.getToken({
      code,
      redirect_uri: `${protocol}://${host}/api/callback`,
    });
    
    const token = accessToken.token.access_token;
    
    const script = `
      <script>
        (function() {
          function receiveMessage(e) {
            console.log("receiveMessage %o", e);
            window.opener.postMessage(
              'authorization:github:success:{"token":"${token}","provider":"github"}',
              e.origin
            );
          }
          window.addEventListener("message", receiveMessage, false);
          window.opener.postMessage("authorizing:github", "*");
        })()
      </script>
    `;
    res.setHeader('Content-Type', 'text/html');
    res.send(script);
  } catch (error) {
    console.error('Access Token Error', error.message);
    res.status(500).json('Authentication failed');
  }
}
