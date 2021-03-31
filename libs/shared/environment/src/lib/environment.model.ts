export type EnvType = 'local' | 'e2e' | 'prd' | 'dev' | 'acc' | 'tst';

export interface EnvironmentBase {
  production: boolean;
  appName: string;
  env: EnvType | string;
}

export interface ClientEnvironment extends EnvironmentBase {
  api: {
    url: string;
  };
  versions: {
    app: string;
    nx: string;
    angular: string;
    material: string;
    rxjs: string;
    angularCli: string;
    typescript: string;
  };
}

export interface GraphQLEnvironment extends EnvironmentBase {
  port: number;
  versions: {
    app: string;
  };
  api: {
    url: string;
  };
}
