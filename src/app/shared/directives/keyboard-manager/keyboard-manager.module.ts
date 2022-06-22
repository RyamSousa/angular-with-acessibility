import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { KeyBoardManagedItemDirective } from "./keyboard-managed-item.directive";
import { KeyboradManagerDirective } from "./keyboard-manager.directive";

@NgModule({
	declarations: [KeyboradManagerDirective, KeyBoardManagedItemDirective],
	imports: [CommonModule],
	exports: [KeyboradManagerDirective, KeyBoardManagedItemDirective],
})
export class KeyboardManagerModule {}
