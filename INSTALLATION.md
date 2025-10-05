# Panduan Instalasi VT Shield

## Langkah 1: Setup API Key

1. Buka `background.js`
2. Cari baris:
   ```javascript
   const VT_API_KEY = 'YOUR_VIRUSTOTAL_API_KEY';
   ```
3. Ganti dengan API key VirusTotal Anda

## Langkah 2: Install di Chrome

1. Buka Chrome
2. Ketik `chrome://extensions/` di address bar
3. Aktifkan toggle "Developer mode" (pojok kanan atas)
4. Klik tombol "Load unpacked"
5. Pilih folder `vt-shield`
6. Extension siap digunakan!

## Langkah 3: Mendapatkan API Key VirusTotal (Gratis)

1. Kunjungi: https://www.virustotal.com/gui/join-us
2. Daftar dengan email Anda
3. Verifikasi email
4. Login dan kunjungi: https://www.virustotal.com/gui/my-apikey
5. Copy API key Anda

## Testing

1. Buka website apapun
2. Hover ke link manapun - tooltip akan muncul
3. Klik ikon VT Shield di toolbar - pop-up akan menampilkan detail

## Troubleshooting

### Tooltip tidak muncul
- Pastikan API key sudah diisi dengan benar
- Cek console browser (F12) untuk error
- Reload halaman web

### Error "Invalid API key"
- Pastikan API key sudah benar
- Tidak ada spasi atau karakter tambahan
- API key aktif di dashboard VirusTotal

### Error "Rate limit exceeded"
- API gratis terbatas 4 request/menit
- Tunggu 1 menit sebelum scan lagi
- Gunakan API key premium untuk limit lebih tinggi

### Extension tidak muncul di toolbar
- Pastikan "Developer mode" aktif
- Reload extension di `chrome://extensions/`
- Restart Chrome

## Update Extension

1. Edit file yang diperlukan
2. Buka `chrome://extensions/`
3. Klik tombol refresh pada VT Shield card
4. Changes akan langsung aktif
