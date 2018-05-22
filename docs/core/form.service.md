---
Added: v2.0.0
Status: Active
---

# Form service

Implements Process Services form methods

## Basic Usage

```ts
import { FormService, FormEvent, FormFieldEvent } from '@alfresco/adf-core';

@Component(...)
class MyComponent {

    constructor(formService: FormService) {

        formService.formLoaded.subscribe(
            (e: FormEvent) => {
                console.log(`Form loaded: ${e.form.id}`);
            }
        );

        formService.formFieldValueChanged.subscribe(
            (e: FormFieldEvent) => {
                console.log(`Field value changed. Form: ${e.form.id}, Field: ${e.field.id}, Value: ${e.field.value}`);
            }
        );

    }

}
```

### Events

| Name | Args Type | Description |
| ---- | --------- | ----------- |
| formLoaded | FormEvent | Raised when form has been loaded or reloaded |
| formFieldValueChanged | FormFieldEvent | Raised when input values change |
| taskCompleted | FormEvent | Raised when a task is completed successfully |
| taskCompletedError | FormErrorEvent | Raised when a task is completed unsuccessfully |
| taskSaved | FormEvent | Raised when a task is saved successfully |
| taskSavedError | FormErrorEvent | Raised when a task is saved unsuccessfully |
| executeOutcome | FormOutcomeEvent | Raised when a form outcome is executed |
| formEvents | Event | You can subscribe to this event to listen : ( click, blur, change, focus, focusin, focusout, input, invalid, select) of any elements in the form , see doc below |
| validateForm | ValidateFormEvent | Raised each time a form is validated. You can use it to provide custom validation or prevent default behaviour. |
| validateFormField | ValidateFormFieldEvent | Raised each time a form field is validated. You can use it to provide custom validation or prevent default behaviour. |

### Methods

-   `parseForm(json: any, data?: FormValues, readOnly: boolean = false): FormModel`  
    Parses JSON data to create a corresponding Form model.  
    -   `json` - JSON to create the form
    -   `data` - (Optional) Values for the form fields
    -   `readOnly` - Should the form fields be read-only?
-   `createFormFromANode(formName: string): Observable<any>`  
    Create a Form with a field for each metadata property.  
    -   `formName` - Name of the new form
-   `createForm(formName: string): Observable<any>`  
    Create a Form.  
    -   `formName` - Name of the new form
-   `saveForm(formId: string, formModel: FormDefinitionModel): Observable<any>`  
    Saves a form.  
    -   `formId` - ID of the form to save 
    -   `formModel` - Model data for the form
-   `addFieldsToAForm(formId: string, formModel: FormDefinitionModel): Observable<any>`  
    -   `formId` - ID of the form
    -   `formModel` - Form definition
-   `searchFrom(name: string): Observable<any>`  
    Search for a form by name.  
    -   `name` - The form name to search for
-   `getForms(): Observable<any>`  
    Gets all the forms.  

-   `getProcessDefinitions(): Observable<any>`  
    Get Process Definitions  

-   `getProcessVarablesById(processInstanceId: string): Observable<any[]>`  
    Get instance variables for a process.  
    -   `processInstanceId` - ID of the target process
-   `getTasks(): Observable<any>`  
    Gets all the tasks.  

-   `getTask(taskId: string): Observable<any>`  
    Gets a task.  
    -   `taskId` - Task Id
-   `saveTaskForm(taskId: string, formValues: FormValues): Observable<any>`  
    Save Task Form.  
    -   `taskId` - Task Id
    -   `formValues` - Form Values
-   `completeTaskForm(taskId: string, formValues: FormValues, outcome?: string): Observable<any>`  
    Complete Task Form  
    -   `taskId` - Task Id
    -   `formValues` - Form Values
    -   `outcome` - (Optional) Form Outcome
-   `getTaskForm(taskId: string): Observable<any>`  
    Get Form related to a taskId  
    -   `taskId` - Task Id
-   `getFormDefinitionById(formId: string): Observable<any>`  
    Get Form Definition  
    -   `formId` - Form Id
-   `getFormDefinitionByName(name: string): Observable<any>`  
    Returns form definition with a given name.  
    -   `name` - The form name
-   `getStartFormInstance(processId: string): Observable<any>`  
    Get start form instance for a given processId  
    -   `processId` - Process definition ID
-   `getProcessIntance(processId: string): Observable<any>`  
    Gets a process instance.  
    -   `processId` - ID of the process to get
-   `getStartFormDefinition(processId: string): Observable<any>`  
    Get start form definition for a given process  
    -   `processId` - Process definition ID
-   `getRestFieldValues(taskId: string, field: string): Observable<any>`  
    Gets values of fields populated by a REST backend.  
    -   `taskId` - Task identifier
    -   `field` - Field identifier
-   `getRestFieldValuesByProcessId(processDefinitionId: string, field: string): Observable<any>`  
    Gets values of fields populated by a REST backend using a process ID.  
    -   `processDefinitionId` - Process identifier
    -   `field` - Field identifier
-   `getRestFieldValuesColumnByProcessId(processDefinitionId: string, field: string, column?: string): Observable<any>`  
    Gets column values of fields populated by a REST backend using a process ID.  
    -   `processDefinitionId` - Process identifier
    -   `field` - Field identifier
    -   `column` - (Optional) Column identifier
-   `getRestFieldValuesColumn(taskId: string, field: string, column?: string): Observable<any>`  
    Gets column values of fields populated by a REST backend.  
    -   `taskId` - Task identifier
    -   `field` - Field identifier
    -   `column` - (Optional) Column identifier
-   `getUserProfileImageApi(userId: number): string`  
    Returns a URL for the profile picture of a user.  
    -   `userId` - ID of the target user
-   `getWorkflowUsers(filter: string, groupId?: string): Observable<UserProcessModel[]>`  
    Gets a list of workflow users.  
    -   `filter` - Filter to select specific users
    -   `groupId` - (Optional) Group ID for the search
-   `getWorkflowGroups(filter: string, groupId?: string): Observable<GroupModel[]>`  
    Gets a list of groups in a workflow.  
    -   `filter` - Filter to select specific groups
    -   `groupId` - (Optional) Group ID for the search
-   `getFormId(res: any): string`  
    Gets the ID of a form.  
    -   `res` - Object representing a form
-   `toJson(res: any): any`  
    Creates a JSON representation of form data.  
    -   `res` - Object representing form data
-   `toJsonArray(res: any): any`  
    Creates a JSON array representation of form data.  
    -   `res` - Object representing form data
-   `handleError(error: any): Observable<any>`  
    Reports an error message.  
    -   `error` - Data object with optional \`message\` and \`status\` fields for the error