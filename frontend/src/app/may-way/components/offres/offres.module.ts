import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ListOffreComponent } from './list-offre/list-offre.component'
import { BrowserModule } from '@angular/platform-browser'
import { DetailOffreComponent } from './detail-offre/detail-offre.component'
import { TabViewModule } from 'primeng/tabview'
import { InputTextModule } from 'primeng/inputtext'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CalendarModule } from 'primeng/calendar'
import { DropdownModule } from 'primeng/dropdown'
import { AccordionModule } from 'primeng/accordion'

@NgModule({
  declarations: [ListOffreComponent, DetailOffreComponent],
  imports: [
    CommonModule,
    BrowserModule,
    TabViewModule,
    InputTextModule,
    FormsModule,
    CalendarModule,
    DropdownModule,
    ReactiveFormsModule,
    AccordionModule,
  ],
  exports: [CommonModule, BrowserModule],
})
export class OffresModule {}
