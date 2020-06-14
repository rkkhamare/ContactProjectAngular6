    import { BrowserModule } from '@angular/platform-browser';  
    import { NgModule } from '@angular/core';  
    import { ContactService } from './contact.service';  
    import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
    import { HttpClientModule, HttpClient } from '@angular/common/http';  
    import {  
      MatButtonModule, MatMenuModule, MatDatepickerModule, MatIconModule, MatCardModule, MatSidenavModule,MatFormFieldModule,  
      MatInputModule, MatTooltipModule, MatToolbarModule  
    } from '@angular/material';  
    import { MatRadioModule } from '@angular/material/radio';  
    import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
      
    import { AppRoutingModule } from './app-routing.module';  
    import { AppComponent } from './app.component';  
    import { ContactComponent } from './contact/contact.component';  
      
    @NgModule({  
      declarations: [  
        AppComponent,  
        ContactComponent  
      ],  
      imports: [  
        BrowserModule,  
        FormsModule,  
        ReactiveFormsModule,  
        HttpClientModule,  
        BrowserAnimationsModule,  
        MatButtonModule,  
        MatMenuModule,  
        MatDatepickerModule,  
        MatIconModule,  
        MatRadioModule,  
        MatCardModule,  
        MatSidenavModule,  
        MatFormFieldModule,  
        MatInputModule,  
        MatTooltipModule,  
        MatToolbarModule,  
        AppRoutingModule  
      ],  
      providers: [HttpClientModule, ContactService,MatDatepickerModule],  
      bootstrap: [AppComponent]  
    })  
    export class AppModule { }  
