import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FastButtonComponent } from './components/fast-button/fast-button.component';
import { FastDesignSystemProviderComponent } from './components/fast-design-system-provider/fast-design-system-provider.component';
import { FastTextFieldComponent } from './components/fast-text-field/fast-text-field.component';

@NgModule({
  declarations: [
    FastButtonComponent,
    FastDesignSystemProviderComponent,
    FastTextFieldComponent
  ],
  imports: [
  ],
  exports: [
    FastButtonComponent,
    FastDesignSystemProviderComponent,
    FastTextFieldComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class FastAngularModule { }
