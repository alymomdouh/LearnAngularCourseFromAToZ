/**
 * Create Barrel File in Services Folder
Create a file named index.ts inside the _services folder.
The index.ts file is a barrel file that re-exports components from the _services folder so they can be imported in
 other files using only the folder path (e.g. './_services') 
 instead of the full path to the component (e.g. './_services/account.service.ts'). 
 For more info on TypeScript barrel files see https://basarat.gitbook.io/typescript/main-1/barrel.
 */

export * from './account.service';