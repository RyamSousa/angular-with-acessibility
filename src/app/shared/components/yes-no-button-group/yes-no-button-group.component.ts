import { Component, EventEmitter, forwardRef, Input, Output } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { UniqueIdService } from "../../services/unique-id/unique-id.service";
@Component({
	selector: "app-yes-no-button-group",
	templateUrl: "./yes-no-button-group.component.html",
	styleUrls: ["./yes-no-button-group.component.scss"],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => YesNoButtonGroupComponent),
			multi: true,
		},
	],
})
export class YesNoButtonGroupComponent implements ControlValueAccessor {
	@Input() public disabled = false;
	@Input() public value: string = null;
	@Input() public label: string = "";

	public id: string = null;

	constructor(private uniqueIdService: UniqueIdService) {
		this.id = uniqueIdService.generateUniqueIdWithPrefix("yes-no-button-group");
	}

	@Output()
	public valueChange = new EventEmitter();

	public options = YesNoButtonGroupOptions;
	public onChange = (value: string) => {};
	public onTouched = () => {};

	public writeValue(value: string): void {
		this.value = value;
		this.onChange(this.value);
		this.valueChange.emit(this.value);
	}

	public registerOnChange(fn: (value: string) => void): void {
		this.onChange = fn;
	}

	public registerOnTouched(fn: () => void): void {
		this.onTouched = fn;
	}

	public setDisabledState?(isDisabled: boolean): void {
		this.disabled = isDisabled;
	}

	public activate(value: string) {
		this.writeValue(value);
	}
}

enum YesNoButtonGroupOptions {
	YES = "yes",
	NO = "no",
}
