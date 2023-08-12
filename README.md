# AngularBasics


##Use Angular CLI
Angular comes with its own command line. It’s highly recommended to install it and use it as much as possible. Using predefined commands instead of doing everything by hand is incredibly time-saving.

``` bash
ng new {projectName} 

ng g c {componentName}
```

##Break down and reuse your components

During Angular development, it’s easy to create big components with similar logic repeated many times throughout the application. But it’s a much better option to create small, reusable components. You also should keep in mind their dumb and smart versions.

The main benefits of breaking down and reusing your components are:

Easy maintenance because of small components,
Saved time because of the reusable components.


###Use interfaces

It’s very likely you will operate on some data from the API. It usually has a predefined JSON format. It’s extremely good to have it typed with interfaces instead of using any. The interfaces in Angular allow specifying whether the property is mandatory (by default) or optional (you need to add ? after the property name).

Here’s a simple example:
``` typescript
export interface BookState {

 books: Book[];

 loaded: boolean;

 error?: string | null;

}
```


##Use safe navigation operator (also known as optional chaining)
Who has never seen the error ‘cannot read property of undefined’?

Nobody?

Yeah, that’s what I thought.

In many cases, this error is a result of not using a safe navigation operator. It’s a critical error, so when it happens, Angular will not render the component. It can be prevented with a simple construction like this:

``` typescript

objectMayBeUndefined?.property

```

Rely on OnPush change detection strategy


##Rely on OnPush change detection strategy

By default, it will react to all of the actions that happen both synchronously and asynchronously. Each change to your @Input (even properties nested somewhere deep inside the object), each event, browser API call (like setTimeout, scroll event etc.), will trigger change detection. It happens because Angular does not know all possible ways that your data can change. It needs to “just work”, so it reacts to everything.

To optimize that, you can opt-in to use OnPush change detection strategy that will greatly reduce the number of re-renders, but can also cause your view to not reflect your current state correctly. When you use OnPush, only changes to your @Inputs

``` typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

}
```



##Don’t use type any
Angular allows you to use a general type any that’s used to match anything. It’s easy to spot — it might result in many errors like property name typos, type mismatch, potential undefined value, etc. For example:

``` html
metaData: any;

<div class="card-container">
  <button (click)="addBook()">{{ metaData.numberOfBoks+1 }} books already there</button>
 </div>
```

## Use Built-In Angular Features For DOM Operations

From time to time, you’ve got to manipulate DOM elements in HTML. Because Angular is based on TypeScript, which is a tyYou might find yourself in a situation where you need direct access to DOM elements

``` html
<result-score #winnerResult [result]="result"></result-score>
```

``` typescript
@ViewChild("winnerResult") winnerResult: WinnerResultComponent;
```


## Use getComponent to inspect component state

Angular provide ng get component to return instance of component with dom.

``` typescript
 ng.getComponent($0)
```

## Control container

The ControlContainer is a base class for form directives that contain multiple registered instances of NgControl. We can use the ControlContainer to access FormControls, FormGroups, and FormArrays and manage a main form chunked across components.

```
 constructor(public controlContainer:ControlContainer) {
  }
```


## Write Tests

Writing tests may seem like an unnecessary overhead but it’s a vital practice for all developers. Local unit tests and final automated end-to-end tests are valuable assets to detect bugs early

# Ngtemplate NgContainer
the ng-template directive represents an Angular template: this means that the content of this tag will contain part of a template, that can be then be composed together with other templates in order to form the final component template.

Angular is already using ng-template under the hood in many of the structural directives that we use all the time: ngIf, ngFor

The ng-container allows us to use structural directives without any extra element, making sure that the only DOM changes being applied are those dictated by the directives themselves.

``` html
<ng-template></ng-template>

<ng-container></ng-container>
```

# Nested component transfer data

When child component receive data from parent though @Input beware reference object change  angular lifecycle is not detected.

