import { Component, OnInit } from '@angular/core';
import { ExperienceModel } from '../shared/models/experience.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experience: ExperienceModel = {
    companyname: "Company Name",
    jobTitle: "Software Engineer",
    startDate: new Date("2019-09-01"),
    endDate: new Date(),
    jobDuty: [".Net Framework", ".Net Core", ".Net EF Core", "Xamarin", "Spring boot"],
  };

  get formattedStartDate() {
    const date = this.experience.startDate.toLocaleDateString();
    return date ? date : '';
  }
  
  get formattedEndDate() {
    if (this.experience.endDate.toDateString() === new Date().toDateString()) {
      return "Present";
    }
    const date = this.experience.endDate.toLocaleDateString();
    return date ? date : '';
  }

  constructor(private datePipe: DatePipe) { }

  ngOnInit(): void {
  }

}