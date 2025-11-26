import { Component, inject, computed, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MountainService } from '../../services/mountain.service';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss'
})
export class StatisticsComponent {
  private mountainService = inject(MountainService);
  
  close = output<void>();

  readonly climbedMountains = this.mountainService.climbedMountains;
  readonly allMountains = this.mountainService.mountains;

  readonly totalHeight = computed(() => {
    return this.climbedMountains().reduce((sum, m) => sum + m.height, 0);
  });

  readonly averageHeight = computed(() => {
    const climbed = this.climbedMountains();
    if (climbed.length === 0) return 0;
    return Math.round(this.totalHeight() / climbed.length);
  });

  readonly highestClimbed = computed(() => {
    const climbed = this.climbedMountains();
    if (climbed.length === 0) return null;
    return climbed.reduce((max, m) => m.height > max.height ? m : max);
  });

  readonly lowestClimbed = computed(() => {
    const climbed = this.climbedMountains();
    if (climbed.length === 0) return null;
    return climbed.reduce((min, m) => m.height < min.height ? m : min);
  });

  readonly difficultyStats = computed(() => {
    const climbed = this.climbedMountains();
    const all = this.allMountains();
    
    return {
      easy: {
        climbed: climbed.filter(m => m.difficulty === 'łatwa').length,
        total: all.filter(m => m.difficulty === 'łatwa').length
      },
      medium: {
        climbed: climbed.filter(m => m.difficulty === 'średnia').length,
        total: all.filter(m => m.difficulty === 'średnia').length
      },
      hard: {
        climbed: climbed.filter(m => m.difficulty === 'trudna').length,
        total: all.filter(m => m.difficulty === 'trudna').length
      }
    };
  });

  readonly regionStats = computed(() => {
    const climbed = this.climbedMountains();
    const all = this.allMountains();
    
    const regions = [...new Set(all.map(m => m.region))];
    
    return regions.map(region => ({
      name: region,
      climbed: climbed.filter(m => m.region === region).length,
      total: all.filter(m => m.region === region).length
    })).sort((a, b) => b.climbed - a.climbed);
  });

  readonly completedRegions = computed(() => {
    return this.regionStats().filter(r => r.climbed === r.total && r.total > 0);
  });

  onClose(): void {
    this.close.emit();
  }

  onOverlayClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('modal-overlay')) {
      this.onClose();
    }
  }
}
