import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import {HeaderComponent}  from './header/header.component';
import { CvComponent } from './cv/cv.component';
import { ListCvComponent } from './list-cv/list-cv.component';
import { BodyComponent } from './body/body.component';
import {ParticulierComponent} from './particulier/particulier.component';
import { EntrepriseCamerounaiseComponent } from './entreprise-camerounaise/entreprise-camerounaise.component';
import { PostuleComponent } from './postule/postule.component';
import {CertificationComponent} from './certification/certification.component';
import { ItemCvComponent } from './item-cv/item-cv.component';
import { DetailCvComponent } from './detail-cv/detail-cv.component';
import {FormationHotesseComponent} from './formation-hotesse/formation-hotesse.component';
import { FormationAssistanatComponent } from './formation-assistanat/formation-assistanat.component';
import { FormationReceptionnisteComponent } from './formation-receptionniste/formation-receptionniste.component';
import { FormationTeleoperateurComponent } from './formation-teleoperateur/formation-teleoperateur.component';
import { FormationConseilVenteComponent } from './formation-conseil-vente/formation-conseil-vente.component';
import { EntrepriseFrancaiseComponent } from './entreprise-francaise/entreprise-francaise.component';
import { CvThequeComponent } from './cv-theque/cv-theque.component';
import { InformatiqueCvComponent } from './informatique-cv/informatique-cv.component';
import { DetailCvInComponent } from './informatique-cv/detail-cv-in/detail-cv-in.component';
import { TeleoperateurCvComponent } from './teleoperateur-cv/teleoperateur-cv.component';
import { DetailCvTelComponent } from './teleoperateur-cv/detail-cv-tel/detail-cv-tel.component';
import { CommerciauxCvComponent } from './commerciaux-cv/commerciaux-cv.component';
import { DetailCvCommerComponent } from './commerciaux-cv/detail-cv-commer/detail-cv-commer.component';
const routes: Routes = [{
path:'', redirectTo:'/accueil', pathMatch:'full'
},
{ path:'accueil', component:BodyComponent},
{ path:'cv',component:CvComponent,  children:[
  {path:':id', component:DetailCvComponent}
]},
{path:'cv-theque', component:CvThequeComponent},
{path:'informaticiendetail', component:DetailCvInComponent},
//{path:'informaticien', component:InformatiqueCvComponent, 
//children:[
//  {path:':id', component:DetailCvInComponent}
//]},
{path:'téléconseillerdetail', component:DetailCvTelComponent},
{path:'commercialdetail', component:DetailCvCommerComponent},
{path: 'assistante', component:FormationAssistanatComponent},
{path: 'receptionniste', component:FormationReceptionnisteComponent},
{path: 'teleoperateur', component:FormationTeleoperateurComponent},
{path: 'conseil', component:FormationConseilVenteComponent},
{path:'hotesse', component:FormationHotesseComponent},
{path:'list', component:ListCvComponent},
{path:'particulier', component:ParticulierComponent},
{path:'entrepisesCamerounaises', component:EntrepriseCamerounaiseComponent},
{path:'entrepisesFrançaises', component:EntrepriseFrancaiseComponent},
{path:'postule', component:PostuleComponent},
{path:'certification', component:CertificationComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
