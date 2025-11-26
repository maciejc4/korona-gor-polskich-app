import { Injectable, inject } from '@angular/core';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import { MountainService } from './mountain.service';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  private mountainService = inject(MountainService);
  private fontLoaded = false;
  private fontBase64: string | null = null;

  async generatePdf(): Promise<void> {
    const doc = new jsPDF();
    
    // Load and embed Polish font
    await this.loadPolishFont(doc);
    
    const climbedMountains = this.mountainService.climbedMountains();
    const notClimbedMountains = this.mountainService.notClimbedMountains();
    const totalMountains = climbedMountains.length + notClimbedMountains.length;
    
    // Theme colors matching the web app
    const primaryColor: [number, number, number] = [45, 80, 56];
    const accentGreen: [number, number, number] = [76, 175, 80];
    const accentOrange: [number, number, number] = [255, 152, 0];
    const lightBg: [number, number, number] = [245, 247, 245];
    
    const fontName = this.fontLoaded ? 'DejaVuSans' : 'helvetica';
    
    // Header background
    doc.setFillColor(...primaryColor);
    doc.rect(0, 0, 210, 45, 'F');
    
    // Title
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont(fontName, 'bold');
    doc.text('Korona Gor Polskich', 105, 20, { align: 'center' });
    
    // Subtitle with stats
    doc.setFontSize(12);
    doc.setFont(fontName, 'normal');
    const dateStr = new Date().toLocaleDateString('pl-PL');
    doc.text(`Raport postepu - ${dateStr}`, 105, 30, { align: 'center' });
    
    const percentage = totalMountains > 0 ? Math.round(climbedMountains.length / totalMountains * 100) : 0;
    doc.text(`Zdobyte: ${climbedMountains.length}/${totalMountains} (${percentage}%)`, 105, 38, { align: 'center' });
    
    let currentY = 55;
    
    // Climbed mountains section
    if (climbedMountains.length > 0) {
      doc.setTextColor(...accentGreen);
      doc.setFontSize(16);
      doc.setFont(fontName, 'bold');
      doc.text(`Zdobyte szczyty (${climbedMountains.length})`, 14, currentY);
      
      currentY += 5;
      
      autoTable(doc, {
        startY: currentY,
        head: [['Nazwa', 'Wysokosc (m n.p.m.)', 'Region', 'Trudnosc']],
        body: [...climbedMountains]
          .sort((a, b) => b.height - a.height)
          .map(m => [
            this.sanitizeText(m.name), 
            m.height.toString(), 
            this.sanitizeText(m.region), 
            this.sanitizeText(m.difficulty)
          ]),
        headStyles: {
          fillColor: accentGreen,
          textColor: [255, 255, 255],
          fontStyle: 'bold',
          font: fontName
        },
        bodyStyles: {
          textColor: [60, 60, 60],
          font: fontName
        },
        alternateRowStyles: {
          fillColor: lightBg
        },
        styles: {
          fontSize: 10,
          cellPadding: 4,
          font: fontName
        },
        columnStyles: {
          0: { cellWidth: 50 },
          1: { cellWidth: 40, halign: 'center' },
          2: { cellWidth: 55 },
          3: { cellWidth: 35, halign: 'center' }
        },
        margin: { left: 14, right: 14 }
      });
      
      currentY = (doc as any).lastAutoTable.finalY + 15;
    }
    
    // Check if we need a new page
    if (currentY > 200 && notClimbedMountains.length > 0) {
      doc.addPage();
      currentY = 20;
    }
    
    // Not climbed mountains section
    if (notClimbedMountains.length > 0) {
      doc.setTextColor(...accentOrange);
      doc.setFontSize(16);
      doc.setFont(fontName, 'bold');
      doc.text(`Szczyty do zdobycia (${notClimbedMountains.length})`, 14, currentY);
      
      currentY += 5;
      
      autoTable(doc, {
        startY: currentY,
        head: [['Nazwa', 'Wysokosc (m n.p.m.)', 'Region', 'Trudnosc']],
        body: [...notClimbedMountains]
          .sort((a, b) => b.height - a.height)
          .map(m => [
            this.sanitizeText(m.name), 
            m.height.toString(), 
            this.sanitizeText(m.region), 
            this.sanitizeText(m.difficulty)
          ]),
        headStyles: {
          fillColor: accentOrange,
          textColor: [255, 255, 255],
          fontStyle: 'bold',
          font: fontName
        },
        bodyStyles: {
          textColor: [60, 60, 60],
          font: fontName
        },
        alternateRowStyles: {
          fillColor: lightBg
        },
        styles: {
          fontSize: 10,
          cellPadding: 4,
          font: fontName
        },
        columnStyles: {
          0: { cellWidth: 50 },
          1: { cellWidth: 40, halign: 'center' },
          2: { cellWidth: 55 },
          3: { cellWidth: 35, halign: 'center' }
        },
        margin: { left: 14, right: 14 }
      });
    }
    
    // Footer on each page
    const pageCount = doc.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);
      doc.setFontSize(9);
      doc.setTextColor(128, 128, 128);
      doc.setFont(fontName, 'normal');
      doc.text(
        `Korona Gor Polskich - Strona ${i} z ${pageCount}`,
        105,
        doc.internal.pageSize.height - 10,
        { align: 'center' }
      );
    }
    
    doc.save('korona-gor-polskich.pdf');
  }
  
  private sanitizeText(text: string): string {
    // Replace Polish characters with ASCII equivalents for PDF compatibility
    const polishMap: Record<string, string> = {
      'ą': 'a', 'ć': 'c', 'ę': 'e', 'ł': 'l', 'ń': 'n',
      'ó': 'o', 'ś': 's', 'ź': 'z', 'ż': 'z',
      'Ą': 'A', 'Ć': 'C', 'Ę': 'E', 'Ł': 'L', 'Ń': 'N',
      'Ó': 'O', 'Ś': 'S', 'Ź': 'Z', 'Ż': 'Z'
    };
    
    if (this.fontLoaded) {
      return text; // Font supports Polish characters
    }
    
    return text.replace(/[ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]/g, char => polishMap[char] || char);
  }
  
  private async loadPolishFont(doc: jsPDF): Promise<void> {
    if (this.fontLoaded && this.fontBase64) {
      doc.addFileToVFS('DejaVuSans.ttf', this.fontBase64);
      doc.addFont('DejaVuSans.ttf', 'DejaVuSans', 'normal');
      doc.addFont('DejaVuSans.ttf', 'DejaVuSans', 'bold');
      doc.setFont('DejaVuSans');
      return;
    }
    
    try {
      // Try multiple font sources
      const fontUrls = [
        'https://cdn.jsdelivr.net/npm/dejavu-fonts-ttf@2.37.3/ttf/DejaVuSans.ttf',
        'https://unpkg.com/dejavu-fonts-ttf@2.37.3/ttf/DejaVuSans.ttf'
      ];
      
      for (const url of fontUrls) {
        try {
          const response = await fetch(url);
          if (response.ok) {
            const arrayBuffer = await response.arrayBuffer();
            this.fontBase64 = this.arrayBufferToBase64(arrayBuffer);
            doc.addFileToVFS('DejaVuSans.ttf', this.fontBase64);
            doc.addFont('DejaVuSans.ttf', 'DejaVuSans', 'normal');
            doc.addFont('DejaVuSans.ttf', 'DejaVuSans', 'bold');
            doc.setFont('DejaVuSans');
            this.fontLoaded = true;
            return;
          }
        } catch {
          continue;
        }
      }
      
      console.warn('Could not load Polish font, using fallback with character replacement');
    } catch (error) {
      console.warn('Could not load Polish font, using fallback:', error);
    }
  }
  
  private arrayBufferToBase64(buffer: ArrayBuffer): string {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }
}
