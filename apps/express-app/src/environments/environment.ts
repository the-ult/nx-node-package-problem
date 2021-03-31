import { GraphQLEnvironment } from '@ult/shared/environment';
import * as packageJson from '../../../../package.json';

export const environment: GraphQLEnvironment = {
  production: false,
  appName: 'GraphQL-Server',
  env: 'localhost',
  port: process.env.PORT ? +process.env.PORT : 9340,
  versions: {
    app: packageJson.version,
  },
  api: {
    url: 'http://localhost:9006',
  },
};
