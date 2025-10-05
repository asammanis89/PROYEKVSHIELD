# ✅ Checklist Instalasi & Testing VT Shield

## Pre-Installation

- [ ] Chrome browser terinstall (versi 88 atau lebih baru)
- [ ] Akun VirusTotal sudah dibuat
- [ ] API key VirusTotal sudah didapat
- [ ] Folder vt-shield sudah didownload/extract

## Konfigurasi

- [ ] Buka file `background.js`
- [ ] Temukan baris: `const VT_API_KEY = 'YOUR_VIRUSTOTAL_API_KEY';`
- [ ] Ganti dengan API key Anda
- [ ] Save file

## Instalasi di Chrome

- [ ] Buka Chrome
- [ ] Ketik `chrome://extensions/` di address bar
- [ ] Aktifkan toggle "Developer mode" (pojok kanan atas)
- [ ] Klik "Load unpacked"
- [ ] Pilih folder `vt-shield`
- [ ] Pastikan extension muncul di list dengan status "On"
- [ ] Ikon VT Shield muncul di toolbar Chrome

## Testing - Tooltip On-Hover

- [ ] Buka website apapun (contoh: https://example.com)
- [ ] Hover cursor ke link manapun di halaman
- [ ] Tooltip "Memindai..." muncul
- [ ] Setelah 1-2 detik, status berubah menjadi:
  - ✓ Aman (hijau), atau
  - ⚡ Mencurigakan (kuning), atau
  - ⚠️ Bahaya (merah)

## Testing - Pop-up

- [ ] Klik ikon VT Shield di toolbar
- [ ] Pop-up terbuka dengan tampilan:
  - Header dengan logo dan judul "VT Shield"
  - Status card dengan glassmorphism effect
  - Status title (Memindai... atau status akhir)
  - URL yang dianalisis
  - Statistik (3 kolom: Berbahaya, Mencurigakan, Aman)
  - Footer "Powered by VirusTotal"

## Verifikasi Design

### Tooltip
- [ ] Background blur (glassmorphism)
- [ ] Border subtle
- [ ] Shadow halus
- [ ] Font Inter
- [ ] Warna sesuai status
- [ ] Transisi smooth

### Pop-up
- [ ] Width: 380px
- [ ] Background: #141419 (dark)
- [ ] Status card dengan gradient
- [ ] Backdrop filter blur
- [ ] Typography Inter
- [ ] Angka statistik besar dan bold
- [ ] Label kecil dan uppercase

## Testing Error Handling

### Invalid API Key
- [ ] Ganti API key dengan string random
- [ ] Hover ke link
- [ ] Tooltip menampilkan "Error: Invalid API key"
- [ ] Kembalikan API key yang benar

### Rate Limit
- [ ] Hover ke 5+ link berbeda dalam 1 menit
- [ ] Jika rate limit tercapai, tooltip menampilkan "Error: Rate limit exceeded"
- [ ] Tunggu 1 menit dan test lagi

### Cache Testing
- [ ] Hover ke link A → tunggu hasil
- [ ] Hover ke link B → tunggu hasil
- [ ] Hover kembali ke link A
- [ ] Hasil muncul instant (dari cache)

## Testing Different Link Types

- [ ] HTTP link → Dianalisis ✓
- [ ] HTTPS link → Dianalisis ✓
- [ ] javascript: link → Tidak dianalisis ✓
- [ ] mailto: link → Tidak dianalisis ✓
- [ ] Internal Chrome pages (chrome://) → Tidak dianalisis ✓

## Browser Compatibility Testing

- [ ] Google Chrome → Works
- [ ] Microsoft Edge → Works (opsional)
- [ ] Brave Browser → Works (opsional)

## Performance Check

- [ ] Tooltip muncul dalam < 500ms
- [ ] API response dalam 1-3 detik
- [ ] Cached results instant (< 100ms)
- [ ] No lag saat browsing normal
- [ ] Memory usage reasonable (<50MB)

## Final Checks

- [ ] Semua file ada:
  - manifest.json
  - background.js
  - content.js
  - popup.html
  - popup.js
  - popup-style.css
  - style.css
  - icons/icon16.png
  - icons/icon48.png
  - icons/icon128.png

- [ ] No console errors (F12 → Console)
- [ ] Extension dapat di-disable/enable tanpa error
- [ ] Extension dapat di-reload tanpa error

## Troubleshooting Reference

| Masalah | Solusi |
|---------|--------|
| Tooltip tidak muncul | Check API key, reload page |
| Error "Invalid API key" | Verifikasi API key di VirusTotal dashboard |
| Error "Rate limit exceeded" | Tunggu 1 menit, atau upgrade API key |
| Pop-up tidak terbuka | Check manifest.json, reload extension |
| Ikon tidak muncul | Check icons folder, reload extension |
| Style tidak sesuai | Check CSS files, hard reload (Ctrl+Shift+R) |

## Dokumentasi

- [ ] README.md dibaca
- [ ] INSTALLATION.md dibaca
- [ ] FITUR.md dibaca
- [ ] CHECKLIST.md (ini) selesai

## ✨ Selamat! Extension Siap Digunakan!

Jika semua checklist di atas ✅, maka VT Shield sudah terinstall dengan sempurna dan siap melindungi browsing Anda!
