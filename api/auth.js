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
  const host = req.headers.host;
  
  // Ensure we use https in production
  const protocol = host.includes('localhost') ? 'http' : 'https';
  
  const authorizationUri = client.authorizeURL({
    redirect_uri: `${protocol}://${host}/api/callback`,
    scope: 'repo,user',
    state: 'ccp_secure_auth_state',
  });

  res.redirect(authorizationUri);
}
