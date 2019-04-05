import { Component, OnInit } from '@angular/core';
import { GetfaqsService } from '../private-services/getfaqs.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {
  faq:any;

  constructor(private faqdata : GetfaqsService) { }

  ngOnInit() {
    this.faqdata.get_faqs().subscribe(
      res => {
        this.faq=res;
        // console.log(res);

      }
    );

  }

}
