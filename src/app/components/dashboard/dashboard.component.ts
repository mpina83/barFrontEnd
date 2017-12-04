import {Component, Inject, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  model = {
    left: true,
    middle: false,
    right: false
  };
  closeResult: string;
  barcodeResponse: BarcodeModel;
  private static getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  constructor(private modalService: NgbModal, private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) {
  }

  ngOnInit() {
    this.http.get<BarcodeModel>( this.baseUrl + 'api/dashboard').subscribe(data => {
      // data is now an instance of type ItemsResponse, so you can do this:
      this.barcodeResponse = data;
    });
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${DashboardComponent.getDismissReason(reason)}`;
    });
  }
}

interface BarcodeModel {
  txtDecoderType: string;
  txtDecoderContent: string;
}


