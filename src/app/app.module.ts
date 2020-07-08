import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireAnalyticsModule,ScreenTrackingService, CONFIG } from '@angular/fire/analytics';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { FooterComponent } from './footer/footer.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { CvComponent } from './cv/cv.component';
import { ListCvComponent } from './list-cv/list-cv.component';
import { DetailCvComponent } from './detail-cv/detail-cv.component';
import { ItemCvComponent } from './item-cv/item-cv.component';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { ParticulierComponent } from './particulier/particulier.component';
import {FormsModule} from '@angular/forms';
import { CreateEseCamerounComponent } from './create-ese-cameroun/create-ese-cameroun.component';
import { EntrepriseCamerounaiseComponent } from './entreprise-camerounaise/entreprise-camerounaise.component';
import { PostuleComponent } from './postule/postule.component';
import { EntrepriseFrancaiseComponent} from './entreprise-francaise/entreprise-francaise.component';
import { CandidateComponent } from './candidate/candidate.component';
import { CertificationComponent } from './certification/certification.component';
import { FormationHotesseComponent } from './formation-hotesse/formation-hotesse.component';
import { FormationReceptionnisteComponent } from './formation-receptionniste/formation-receptionniste.component';
import { FormationConseilVenteComponent } from './formation-conseil-vente/formation-conseil-vente.component';
import { FormationTeleoperateurComponent } from './formation-teleoperateur/formation-teleoperateur.component';
import { FormationAssistanatComponent } from './formation-assistanat/formation-assistanat.component';
import { TemoignageComponent } from './temoignage/temoignage.component';
import { InformatiqueCvComponent } from './informatique-cv/informatique-cv.component';
import { ListCvInComponent } from './informatique-cv/list-cv-in/list-cv-in.component';
import { DetailCvInComponent } from './informatique-cv/detail-cv-in/detail-cv-in.component';
import { ItemCvInComponent } from './informatique-cv/item-cv-in/item-cv-in.component';
import { CvThequeComponent } from './cv-theque/cv-theque.component';
import { TeleoperateurCvComponent } from './teleoperateur-cv/teleoperateur-cv.component';
import { DetailCvTelComponent } from './teleoperateur-cv/detail-cv-tel/detail-cv-tel.component';
import { ItemCvTelComponent } from './teleoperateur-cv/item-cv-tel/item-cv-tel.component';
import { ListCvTelComponent } from './teleoperateur-cv/list-cv-tel/list-cv-tel.component';
import { CommerciauxCvComponent } from './commerciaux-cv/commerciaux-cv.component';
import { ListCvCommerComponent } from './commerciaux-cv/list-cv-commer/list-cv-commer.component';
import { ItemCvCommerComponent } from './commerciaux-cv/item-cv-commer/item-cv-commer.component';
import { DetailCvCommerComponent } from './commerciaux-cv/detail-cv-commer/detail-cv-commer.component';
import { TestComponent } from './test/test.component';
@NgModule({
  declarations: [
    EntrepriseCamerounaiseComponent,
    AppComponent,
    HeaderComponent,
    BodyComponent,
    CertificationsComponent,
    FooterComponent,
    CvComponent,
    ListCvComponent,
    DetailCvComponent,
    ItemCvComponent,
    ParticulierComponent,
    CreateEseCamerounComponent,
    PostuleComponent,
    EntrepriseFrancaiseComponent,
    CandidateComponent,
    CertificationComponent,
    FormationHotesseComponent,
    FormationReceptionnisteComponent,
    FormationConseilVenteComponent,
    FormationTeleoperateurComponent,
    FormationAssistanatComponent,
    TemoignageComponent,
    InformatiqueCvComponent,
    ListCvInComponent,
    DetailCvInComponent,
    ItemCvInComponent,
    CvThequeComponent,
    TeleoperateurCvComponent,
    DetailCvTelComponent,
    ItemCvTelComponent,
    ListCvTelComponent,
    CommerciauxCvComponent,
    ListCvCommerComponent,
    ItemCvCommerComponent,
    DetailCvCommerComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireAnalyticsModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    AngularFontAwesomeModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
   // AngularFireDatabase
  ],
  providers: [ ScreenTrackingService,
    { provide: CONFIG, useValue: {
      send_page_view: false,
      allow_ad_personalization_signals: false,
      anonymize_ip: true
    } }],
  bootstrap: [AppComponent]
})
export class AppModule { }
