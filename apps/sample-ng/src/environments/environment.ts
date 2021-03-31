// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { ClientEnvironment } from '@ult/shared/environment';
import * as packageJson from '../../../../package.json';

export const environment: ClientEnvironment = {
  production: false,
  appName: 'NG App',
  env: 'local',
  versions: {
    app: packageJson.version,
    nx: packageJson.devDependencies['@nrwl/workspace'],
    angular: packageJson.dependencies['@angular/core'],
    material: packageJson.dependencies['@angular/material'],
    rxjs: packageJson.dependencies.rxjs,
    angularCli: packageJson.devDependencies['@angular/cli'],
    typescript: packageJson.devDependencies.typescript,
  },
  api: {
    url: 'http://localhost:9351',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
