import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  // Formsmodule angularda form işlemleri için kullanılır.

@Component({
  selector: 'app-root',
  standalone: true,  // Modül bağlılığı olmadığını ifade eder. Bu yüzden FormsModule eklenmeli...
  imports: [FormsModule],  // FormsModule eklenmeli diye ifade eder.
  templateUrl: './app.html', // HTML şablon dosyası (bileşenin görünümünün olacağı yer)
  styleUrls: ['./app.css'] // CSS stil dosyası (bileşenin stilinin olacağı yer)
})
export class AppComponent {
  gizliSayi: number = this.rastgeleSayiUret();
  tahmin: number | null = null;
  mesaj: string = '';
  tahminSayisi: number = 0;

  rastgeleSayiUret(): number {
    return Math.floor(Math.random() * 100) + 1;
  }

  tahminEt() {
    if (this.tahmin === null) {
      this.mesaj = 'Lütfen bir sayı girin.';
      return;
    }

    this.tahminSayisi++;

    if (this.tahmin < this.gizliSayi) {
      this.mesaj = 'Daha büyük bir sayı gir.';
    } else if (this.tahmin > this.gizliSayi) {
      this.mesaj = 'Daha küçük bir sayı gir.';
    } else {
      this.mesaj = `Tebrikler! ${this.tahminSayisi}. denemede bildiniz!`;
    }
  }

  yenidenBaslat() {
    this.gizliSayi = this.rastgeleSayiUret();
    this.tahmin = null;
    this.mesaj = '';
    this.tahminSayisi = 0;
  }
}