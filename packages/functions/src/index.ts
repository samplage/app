import { https } from 'firebase-functions';
import gqlServer from './graphql/server';

const server = gqlServer();

// Graphql api
// https://us-central1-samplage-d938b.cloudfunctions.net/api/
const api = https.onRequest(server);

export { api };
