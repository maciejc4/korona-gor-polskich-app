import { Component, EventEmitter, Input, Output, OnInit, OnDestroy, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Mountain } from '../../models/mountain.model';

@Component({
  selector: 'app-mountain-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mountain-modal.component.html',
  styleUrl: './mountain-modal.component.scss'
})
export class MountainModalComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() mountain!: Mountain;
  @Output() close = new EventEmitter<void>();
  @Output() toggleClimbed = new EventEmitter<number>();
  
  @ViewChild('mapContainer') mapContainer!: ElementRef<HTMLDivElement>;
  
  private escapeListener?: (event: KeyboardEvent) => void;

  ngOnInit(): void {
    this.escapeListener = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        this.onClose();
      }
    };
    document.addEventListener('keydown', this.escapeListener);
    document.body.style.overflow = 'hidden';
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  ngOnDestroy(): void {
    if (this.escapeListener) {
      document.removeEventListener('keydown', this.escapeListener);
    }
    document.body.style.overflow = '';
  }

  private initMap(): void {
    if (this.mapContainer && this.mountain) {
      const { latitude, longitude } = this.mountain.details;
      const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.05}%2C${latitude - 0.03}%2C${longitude + 0.05}%2C${latitude + 0.03}&layer=mapnik&marker=${latitude}%2C${longitude}`;
      
      const iframe = document.createElement('iframe');
      iframe.src = mapUrl;
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.border = 'none';
      iframe.style.borderRadius = '12px';
      iframe.title = `Mapa ${this.mountain.name}`;
      iframe.loading = 'lazy';
      
      this.mapContainer.nativeElement.appendChild(iframe);
    }
  }

  onClose(): void {
    this.close.emit();
  }

  onOverlayClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.onClose();
    }
  }

  onToggleClimbed(): void {
    this.toggleClimbed.emit(this.mountain.id);
  }

  getTrailDifficultyClass(difficulty: string): string {
    switch (difficulty) {
      case 'łatwy': return 'trail-easy';
      case 'umiarkowany': return 'trail-medium';
      case 'trudny': return 'trail-hard';
      default: return '';
    }
  }

  openInMaps(): void {
    const { latitude, longitude } = this.mountain.details;
    window.open(`https://www.openstreetmap.org/?mlat=${latitude}&mlon=${longitude}#map=14/${latitude}/${longitude}`, '_blank');
  }
}
