import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
	styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
	title = "Curso Acessibilidade";
	public formGroup: FormGroup = null;

	ngOnInit(): void {
		this.formGroup = new FormGroup({
			yesNoAnswer: new FormControl("no"),
		});
	}

	public submit(): void {
		console.log(this.formGroup.value);
	}
}
