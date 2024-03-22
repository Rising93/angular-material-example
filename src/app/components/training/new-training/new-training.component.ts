import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {TrainingClass} from "./training.model";

@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})

export class NewTrainingComponent implements OnInit {
  @Output() trainingStart = new EventEmitter<void>();

  typeTraining!: TrainingClass[];
  newTrainingForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.newTrainingForm = new FormGroup({
      date: new FormControl(null, {validators: [Validators.required]}),
      type: new FormControl(null, {validators: [Validators.required]}),
      duration: new FormControl(null, {validators: [Validators.required]}),
      calories: new FormControl(null, {validators: [Validators.required]})
    });
    this.typeTraining = [
      TrainingClass.createMyObject('Crunches', 'crunches'),
      TrainingClass.createMyObject('Touch Toes', 'touch-toes'),
      TrainingClass.createMyObject('Burpees', 'burpees'),
      TrainingClass.createMyObject('Side Lunges', 'side-lunges'),
    ]
  }


  onStartTraining() {
    this.trainingStart.emit();
  }
}
