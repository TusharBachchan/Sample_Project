import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'Sample Project To Replicate Multi-Tab';
  http: any;

  constructor() { }

  ngOnInit(): void {
  }

  DownloadfromBlob() {
    console.log("Outer Div Clicked")
    let text = "Peace of mind is one of those instants in life that are hard to describe, but easy to know. We all know the sensation. In those fleeting instants, there are no doubts, anxieties, or cares. For a flash, life is totally under modification. It is a sensation that we all wish in life, but it is few, far between, and brief. At least it seems that way \"Freedom from disquieting or oppressive thoughts or emotions\" \n \n";
    var file = new Blob([text + "\n ************ This is a sample content please ignore ! ************** "], { type: 'pdf' })
          var fileURL = URL.createObjectURL(file);

// if you want to open PDF in new tab
          window.open(fileURL); 
          var a         = document.createElement('a');
          a.href        = fileURL;
          console.log("fileURL= "+fileURL+"   file= " + file); 
          a.target      = '_blank';
          a.download    = 'Sample.pdf';
          document.body.appendChild(a);
          a.click();
  }

}
function saveAs(blob: Blob, filename: string) {
  throw new Error('Function not implemented.');
}
