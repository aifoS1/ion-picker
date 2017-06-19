# ion-picker
A simple ion picker, easily customizable.

## Preview

![Picker with 3 choices](https://github.com/keldorg/ion-picker/blob/master/img/ion-picker.png)

## Prerequisites.

**1)** > Ionic 2.X 

## Installation

Copy src to your project.

## Usage

### Basic
1.Import MultiPickerModule to your app/module.
```
import { IonPicker } from '../components/ion-picker/ion-picker';
...
@NgModule({
  declarations: [
    MyApp,
    IonPicker
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IonPicker
  ],
  providers: providers()
})
export class AppModule {}
```

2.Initialize picker data.

```typescript
public items: Array<any> = [{
    icon: 'logo-android',
    text: 'Android',
    value: 'android',
  }, {
    icon: 'logo-angular',
    text: 'Angular',
    value: 'angular',
  }, {
    icon: 'logo-apple',
    text: 'Apple',
    value: 'apple',
  }];
```

3.Insert ion-picker into form.

```html
<ion-item>
  <ion-picker formControlName="option" [items]="items" required></ion-picker>
</ion-item>
```

## License
MIT
