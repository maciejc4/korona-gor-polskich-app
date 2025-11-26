import { Injectable, signal, computed } from '@angular/core';
import { Mountain, SortColumn, SortDirection } from '../models/mountain.model';
import { KORONA_GOR_POLSKICH } from '../data/mountains.data';

const STORAGE_KEY = 'korona-gor-polskich-climbed';

@Injectable({
  providedIn: 'root'
})
export class MountainService {
  private mountainsSignal = signal<Mountain[]>(this.loadMountains());
  private sortColumnSignal = signal<SortColumn>('height');
  private sortDirectionSignal = signal<SortDirection>('desc');

  readonly mountains = computed(() => {
    const mountains = [...this.mountainsSignal()];
    const column = this.sortColumnSignal();
    const direction = this.sortDirectionSignal();

    return mountains.sort((a, b) => {
      let comparison = 0;

      switch (column) {
        case 'name':
          comparison = a.name.localeCompare(b.name, 'pl');
          break;
        case 'height':
          comparison = a.height - b.height;
          break;
        case 'region':
          comparison = a.region.localeCompare(b.region, 'pl');
          break;
        case 'difficulty':
          const difficultyOrder = { 'łatwa': 1, 'średnia': 2, 'trudna': 3 };
          comparison = difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
          break;
        case 'climbed':
          comparison = (a.climbed === b.climbed) ? 0 : a.climbed ? -1 : 1;
          break;
      }

      return direction === 'asc' ? comparison : -comparison;
    });
  });

  readonly climbedMountains = computed(() => 
    this.mountainsSignal().filter(m => m.climbed)
  );

  readonly notClimbedMountains = computed(() => 
    this.mountainsSignal().filter(m => !m.climbed)
  );

  readonly sortColumn = this.sortColumnSignal.asReadonly();
  readonly sortDirection = this.sortDirectionSignal.asReadonly();

  private loadMountains(): Mountain[] {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const climbedIds: number[] = JSON.parse(saved);
        return KORONA_GOR_POLSKICH.map(mountain => ({
          ...mountain,
          climbed: climbedIds.includes(mountain.id)
        }));
      }
    } catch (error) {
      console.error('Error loading mountains from localStorage:', error);
    }
    return [...KORONA_GOR_POLSKICH];
  }

  private saveMountains(): void {
    try {
      const climbedIds = this.mountainsSignal()
        .filter(m => m.climbed)
        .map(m => m.id);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(climbedIds));
    } catch (error) {
      console.error('Error saving mountains to localStorage:', error);
    }
  }

  toggleClimbed(mountainId: number): void {
    this.mountainsSignal.update(mountains =>
      mountains.map(m =>
        m.id === mountainId ? { ...m, climbed: !m.climbed } : m
      )
    );
    this.saveMountains();
  }

  sort(column: SortColumn): void {
    if (this.sortColumnSignal() === column) {
      this.sortDirectionSignal.update(dir => dir === 'asc' ? 'desc' : 'asc');
    } else {
      this.sortColumnSignal.set(column);
      this.sortDirectionSignal.set('asc');
    }
  }
}
