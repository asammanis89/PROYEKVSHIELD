# VT Shield - Real-time Link Analyzer

Chrome extension yang menganalisis keamanan tautan secara real-time menggunakan VirusTotal API.

## Fitur

- **Analisis On-Hover**: Otomatis memindai tautan saat cursor mengarah ke link
- **Tooltip Elegan**: Menampilkan status keamanan dalam tooltip dengan desain glassmorphism
- **Pop-up Detail**: Lihat analisis lengkap halaman yang sedang aktif
- **Caching**: Hasil analisis disimpan selama 10 menit untuk performa optimal
- **Dark Mode**: Tema gelap yang modern dan nyaman di mata

## Cara Install

1. **Dapatkan API Key VirusTotal**
   - Daftar di [VirusTotal](https://www.virustotal.com/gui/join-us)
   - Dapatkan API key gratis di [API Settings](https://www.virustotal.com/gui/my-apikey)

2. **Konfigurasi API Key**
   - Buka file `background.js`
   - Ganti `YOUR_VIRUSTOTAL_API_KEY` dengan API key Anda:
     ```javascript
     const VT_API_KEY = 'your_actual_api_key_here';
     ```

3. **Load Extension ke Chrome**
   - Buka Chrome dan navigasi ke `chrome://extensions/`
   - Aktifkan "Developer mode" di pojok kanan atas
   - Klik "Load unpacked"
   - Pilih folder `vt-shield`

4. **Selesai!**
   - Ikon VT Shield akan muncul di toolbar Chrome
   - Hover ke link manapun untuk melihat analisis keamanan
   - Klik ikon untuk melihat detail halaman aktif

## Cara Menggunakan

### Analisis On-Hover
1. Arahkan cursor ke tautan manapun di halaman web
2. Tooltip akan muncul menampilkan status:
   - ✓ **Aman** (hijau): Tidak ada deteksi ancaman
   - ⚡ **Mencurigakan** (kuning): Ada deteksi mencurigakan
   - ⚠️ **Bahaya** (merah): Terdeteksi malware/phishing

### Pop-up Detail
1. Klik ikon VT Shield di toolbar
2. Lihat analisis lengkap untuk halaman yang sedang dibuka
3. Statistik lengkap: jumlah deteksi berbahaya, mencurigakan, dan aman

## Struktur File

```
vt-shield/
├── manifest.json          # Konfigurasi ekstensi
├── background.js          # Service worker dan logika API
├── content.js             # Script untuk interaksi halaman
├── popup.html             # UI pop-up
├── popup.js               # Logika pop-up
├── popup-style.css        # Style pop-up
├── style.css              # Style tooltip
└── icons/                 # Ikon ekstensi
    ├── icon16.png
    ├── icon48.png
    └── icon128.png
```

## Teknologi

- **Manifest V3**: Standar terbaru Chrome Extension
- **VirusTotal API v3**: Analisis keamanan URL
- **Glassmorphism Design**: UI modern dengan efek kaca buram
- **Chrome Storage API**: Caching untuk performa optimal

## Catatan Penting

- API key gratis VirusTotal memiliki limit 4 request per menit
- Hasil analisis di-cache selama 10 menit
- Extension tidak bekerja pada halaman internal Chrome (chrome://)
- Link javascript: dan mailto: tidak dianalisis

## Keamanan

Extension ini:
- Hanya mengakses API VirusTotal
- Tidak menyimpan data pribadi
- Tidak mengirim data ke server lain
- Hanya menganalisis URL, bukan konten halaman

## Lisensi

MIT License

## Support

Powered by [VirusTotal](https://www.virustotal.com)
