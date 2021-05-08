import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ItemComponent} from './item/item.component';
import {ItemBoardComponent} from './item-board/item-board.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import {FlexModule} from '@angular/flex-layout';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ItemSaveDialogComponent} from './item-save-dialog/item-save-dialog.component';
import {HttpErrorsInterceptor} from './interceptor/http-errors-interceptor';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MomentHumanizePipe} from './pipe/moment-humanize.pipe';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatChipsModule} from "@angular/material/chips";
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemBoardComponent,
    ItemSaveDialogComponent,
    MomentHumanizePipe
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatTooltipModule,
        MatToolbarModule,
        BrowserAnimationsModule,
        MatDialogModule,
        FormsModule,
        FlexModule,
        DragDropModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatSelectModule,
        MatChipsModule,
        MatCheckboxModule,
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorsInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
