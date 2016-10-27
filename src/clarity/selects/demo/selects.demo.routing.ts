import {ModuleWithProviders} from "@angular/core/src/metadata/ng_module";
import {Routes, RouterModule} from "@angular/router";
import {SelectsDemo} from "./selects.demo";

const ROUTES: Routes = [
    { path: "", component: SelectsDemo }
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);