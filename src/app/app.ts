import { Component, inject } from '@angular/core';
import { MountainService } from './services/mountain.service';
import { PdfService } from './services/pdf.service';
import { SortColumn } from './models/mountain.model';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly mountainService = inject(MountainService);
  protected readonly pdfService = inject(PdfService);

  protected readonly mountains = this.mountainService.mountains;
  protected readonly climbedMountains = this.mountainService.climbedMountains;
  protected readonly sortColumn = this.mountainService.sortColumn;
  protected readonly sortDirection = this.mountainService.sortDirection;

  protected toggleClimbed(id: number): void {
    this.mountainService.toggleClimbed(id);
  }

  protected sort(column: SortColumn): void {
    this.mountainService.sort(column);
  }

  protected async generatePdf(): Promise<void> {
    await this.pdfService.generatePdf();
  }

  protected getSortIcon(column: SortColumn): string {
    if (this.sortColumn() !== column) {
      return 'unfold_more';
    }
    return this.sortDirection() === 'asc' ? 'expand_less' : 'expand_more';
  }

  protected getDifficultyClass(difficulty: string): string {
    switch (difficulty) {
      case 'łatwa': return 'difficulty-easy';
      case 'średnia': return 'difficulty-medium';
      case 'trudna': return 'difficulty-hard';
      default: return '';
    }
  }

  protected getProgressPercentage(): number {
    const total = this.mountains().length;
    if (total === 0) return 0;
    return Math.round((this.climbedMountains().length / total) * 100);
  }
}
