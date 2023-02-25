import { Component, ElementRef } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { EmailService } from "../DataAccess/email.service";
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
    selector: "contact-intiwatana-webpage",
    templateUrl: "./contact.component.html",
    styleUrls: ["./contact.component.css"]
})
export class ContactIntiWebPageComponent {

    capcha64: SafeResourceUrl;

    constructor(private translate: TranslateService, private genCaptcha: EmailService, private domSanitizer: DomSanitizer){
        this.procesarConsulta()
    }

    procesarConsulta() {
        // this.showLoadingSpinner = true;
        this.genCaptcha.generarCaptcha().subscribe(
        data => {
            this.capcha64 = this.domSanitizer.bypassSecurityTrustResourceUrl("data:image/bmd;base64, " + data );
            console.log(`este es:`, this.capcha64)
        },
        error => {
            this.showErrorConexionMessage();
        },
        () => {                 
            // this.showLoadingSpinner = false;                              
        } );
    }

    setLanguage(lang: string){
        this.translate.use(lang);
    }

    showErrorConexionMessage() {

    }
}