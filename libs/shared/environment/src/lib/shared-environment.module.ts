import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientEnvironment } from './environment.model';
import { ENV } from './environment.token';

@NgModule({
  imports: [CommonModule],
})
export class SharedEnvironmentModule {
  static forRoot(
    environment: Partial<ClientEnvironment>
  ): ModuleWithProviders<SharedEnvironmentModule> {
    return {
      ngModule: SharedEnvironmentModule,
      providers: [{ provide: ENV, useValue: environment }],
    };
  }
}
