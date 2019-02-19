import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NewsDetailsComponent } from "./news-details/news-details.component";
import { MatCardModule, MatButtonModule } from "@angular/material";

@NgModule({
  declarations: [NewsDetailsComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  exports: [NewsDetailsComponent]
})
export class NewsDetailsModule {}
