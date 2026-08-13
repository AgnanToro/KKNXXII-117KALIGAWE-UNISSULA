# Kaligawe Chronicle

Buat website resmi KKN KELOMPOK 117 KALIGAWE UNISSULA dari awal.

Gunakan React + TypeScript + Vite + Tailwind CSS VERSI 3.

============================================================
ATURAN PENTING
============================================================

1. Gunakan Tailwind CSS VERSI 3, BUKAN Tailwind CSS V4.
2. Pastikan Tailwind benar-benar aktif dan semua styling ter-render.
3. Jangan sampai website tampil seperti HTML default browser.
4. Jangan menggunakan Times New Roman atau font browser default.
5. Jangan membuat seluruh website di App.tsx.
6. Gunakan struktur folder dan komponen yang rapi.
7. Buat routing untuk setiap halaman.
8. Navbar dan Footer harus reusable.
9. Gunakan logo dan gambar referensi yang saya upload sebagai sumber utama identitas visual.
10. Jangan membuat website generik berwarna hijau.
11. Jangan menggunakan warna biru corporate.
12. Jangan membuat website seperti dashboard admin.
13. Jangan menjadikan UMKM sebagai program utama.
14. Jangan membuat data kegiatan yang belum saya berikan.
15. Jika informasi tertentu belum tersedia, gunakan placeholder yang jelas dan mudah diganti.

============================================================
IDENTITAS WEBSITE
============================================================

Nama utama:

KKN KELOMPOK 117 KALIGAWE

Identitas:

KKN Tematik XXII
Universitas Islam Sultan Agung (UNISSULA)

Lokasi:

Kelurahan Kaligawe
Kecamatan Gayamsari
Kota Semarang
Jawa Tengah

Gunakan identitas:

"Kelompok 117"

sebagai elemen visual penting.

Logo yang saya upload memiliki identitas:
- angka 117
- tulisan Kaligawe
- KKN Tematik XXII
- UNISSULA
- elemen daun
- elemen landmark/arsitektur
- matahari

Gunakan logo tersebut sebagai referensi utama.

Tagline utama:

"Menuju Kaligawe yang lebih hijau, lebih sehat, dan lebih berdaya."

============================================================
KONSEP WEBSITE
============================================================

Website merupakan website profil, dokumentasi, dan showcase kegiatan KKN Kelompok 117 di Kelurahan Kaligawe.

Website harus terasa seperti:

"Website KKN universitas modern yang menggabungkan identitas visual poster KKN dengan website profesional."

Karakter:

- Natural
- Hangat
- Community based
- Editorial
- Modern
- Sedikit retro
- Terinspirasi poster/majalah
- Youthful
- Profesional
- Memiliki karakter visual yang kuat

Jangan membuat desain terlalu minimalis dan kosong.

Jangan membuat desain terlalu ramai seperti poster yang dipaksa menjadi website.

Website harus tetap nyaman digunakan dan mudah dinavigasi.

============================================================
REFERENSI VISUAL
============================================================

Gunakan logo dan gambar referensi yang saya upload.

Dari referensi tersebut, pertahankan karakter:

- Hijau olive
- Hijau tua
- Hijau daun
- Kuning matahari
- Golden yellow
- Cream
- Off-white
- Sedikit orange hangat
- Halftone dots
- Pola titik
- Organic shapes
- Bentuk awan
- Matahari
- Daun
- Paper/card effect
- Garis ilustrasi
- Bentuk seperti potongan kertas
- Border hijau

Jangan hanya menggunakan warna hijau.

Background utama lebih banyak menggunakan:

Cream / warm white / pale yellow.

Gunakan hijau sebagai warna identitas dan teks.

Gunakan kuning sebagai aksen.

============================================================
PALET WARNA
============================================================

Buat CSS variables / Tailwind colors berdasarkan identitas visual.

Gunakan pendekatan:

Primary:
Hijau olive / forest green

Secondary:
Hijau daun

Accent:
Golden yellow / warna matahari

Background:
Cream / warm white

Supporting:
Orange hangat

Dark:
Hijau sangat gelap untuk footer dan teks utama.

Jangan menggunakan:
- Biru
- Ungu
- Neon
- Cyan
- Gradient biru

============================================================
STRUKTUR FOLDER
============================================================

Gunakan struktur project:

src/
│
├── assets/
│   ├── logo/
│   ├── images/
│   └── icons/
│
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── SectionTitle.tsx
│   ├── ProgramCard.tsx
│   ├── ActivityCard.tsx
│   ├── GalleryCard.tsx
│   ├── StatCard.tsx
│   ├── SocialLinks.tsx
│   └── BackButton.tsx
│
├── pages/
│   ├── Home.tsx
│   ├── Profil.tsx
│   ├── ProgramKerja.tsx
│   ├── ProgramDetailTPQ.tsx
│   ├── ProgramDetailPemetaan.tsx
│   ├── ProgramDetailTOGA.tsx
│   ├── ProgramDetailStunting.tsx
│   ├── Kegiatan.tsx
│   ├── Galeri.tsx
│   └── Kontak.tsx
│
├── layouts/
│   └── MainLayout.tsx
│
├── data/
│   ├── programs.ts
│   ├── activities.ts
│   └── gallery.ts
│
├── App.tsx
├── main.tsx
└── index.css

Jangan menaruh seluruh website di App.tsx.

App.tsx hanya digunakan untuk routing dan layout.

============================================================
ROUTING
============================================================

Gunakan routing:

/
    Home

/profil
    Profil KKN

/program-kerja
    Daftar semua program kerja

/program-kerja/tpq
    Detail Pendidikan TPQ

/program-kerja/pemetaan-rw3
    Detail Pemetaan Wilayah RW 3

/program-kerja/toga
    Detail Penanaman TOGA

/program-kerja/stunting
    Detail Penyuluhan Stunting

/kegiatan
    Kegiatan pendukung

/galeri
    Galeri dokumentasi

/kontak
    Kontak dan social media

============================================================
NAVBAR
============================================================

Buat navbar modern dan responsive.

Sebelah kiri:

Logo KKN 117 Kaligawe.

Menu:

Beranda
Profil
Program Kerja
Kegiatan
Galeri
Kontak

Navbar desktop:
- Horizontal
- Sticky
- Transparent di hero
- Saat scroll berubah menjadi cream/white
- Shadow lembut
- Border bawah tipis
- Text hijau tua

Hover:
- Hijau
- Golden yellow accent

Mobile:
- Hamburger menu
- Menu fullscreen/dropdown
- Smooth animation

Navbar harus reusable di semua halaman.

============================================================
HOMEPAGE
============================================================

Buat homepage dengan urutan:

1. Hero
2. Statistik
3. Tentang KKN
4. Lokasi
5. Program Kerja Utama
6. Kegiatan Pendukung
7. Galeri Preview
8. CTA
9. Footer

============================================================
HERO
============================================================

Hero harus menjadi visual utama website.

Gunakan background cream/golden yellow.

Tambahkan elemen dekoratif terinspirasi poster:

- Matahari besar
- Halftone dots
- Awan putih
- Garis organik
- Daun
- Bentuk blob
- Pattern titik

Jika terdapat foto lingkungan/kegiatan, gunakan sebagai visual pendukung.

Tampilkan:

"KKN TEMATIK XXII"

"KELOMPOK 117"

"KALIGAWE"

Judul utama:

"Menuju Kaligawe yang lebih hijau,
lebih sehat, dan lebih berdaya."

Tambahkan tombol:

"Lihat Program Kerja →"

"Jelajahi Kegiatan"

Angka 117 harus terlihat kuat sebagai bagian identitas.

Jangan membuat hero terlalu penuh.

============================================================
STATISTIK
============================================================

Buat section statistik dengan style editorial/poster.

Tampilkan:

117
Kelompok KKN

4
Program Utama

1
Kelurahan

2026
Tahun Pengabdian

Gunakan angka besar.

Background:
Cream / yellow.

Tambahkan pattern titik halus.

============================================================
TENTANG KKN
============================================================

Judul:

"Bergerak Bersama Kaligawe"

Isi:

"Kelompok KKN 117 melaksanakan pengabdian kepada masyarakat di Kelurahan Kaligawe melalui berbagai kegiatan yang berfokus pada pendidikan, lingkungan, kesehatan, pemetaan wilayah, serta kegiatan sosial bersama masyarakat."

Layout:
- Foto besar
- Text
- Decorative leaf
- Paper card

Tambahkan CTA:

"Kenal Lebih Dekat →"

menuju /profil.

============================================================
LOKASI
============================================================

Judul:

"Tempat Kami Mengabdi"

Tampilkan:

Kelurahan Kaligawe
Kecamatan Gayamsari
Kota Semarang
Jawa Tengah

Buat layout seperti poster referensi.

Satu sisi:
Peta / visual lokasi.

Sisi lain:
Informasi lokasi.

Gunakan:
- Pin kuning
- Background cream
- Halftone
- Paper card
- Organic decoration

Jangan membuat data geografis yang tidak diketahui.

============================================================
PROGRAM KERJA UTAMA
============================================================

Buat section:

"Program Kerja Utama"

Subtitle:

"Empat langkah untuk memberikan kontribusi nyata bagi masyarakat Kaligawe."

Tampilkan 4 card:

1. Pendidikan TPQ
2. Pemetaan Wilayah RW 3
3. Penanaman TOGA
4. Penyuluhan Stunting

PENTING:

Homepage hanya menampilkan PREVIEW.

Setiap card WAJIB mempunyai:

- Foto
- Kategori
- Judul
- Deskripsi singkat
- Tombol "Lihat Selengkapnya →"

Ketika tombol diklik, user masuk ke halaman khusus program tersebut.

JANGAN menggunakan modal untuk detail program.

============================================================
CARD PROGRAM 1
============================================================

Judul:

"Pendidikan TPQ"

Kategori:

"PENDIDIKAN"

Deskripsi:

"Kegiatan pendampingan pembelajaran Al-Qur'an bersama anak-anak TPQ di wilayah Kaligawe."

Gunakan foto kegiatan TPQ.

Icon:
Book / education.

Button:

"Lihat Selengkapnya →"

Link:

/program-kerja/tpq

============================================================
CARD PROGRAM 2
============================================================

Judul:

"Pemetaan Wilayah RW 3"

Kategori:

"PEMETAAN WILAYAH"

Deskripsi:

"Pembuatan peta wilayah RW 3 Kelurahan Kaligawe sebagai media informasi dan dokumentasi wilayah masyarakat."

Gunakan foto peta atau survey.

Icon:
Map / location.

Button:

"Lihat Selengkapnya →"

Link:

/program-kerja/pemetaan-rw3

============================================================
CARD PROGRAM 3
============================================================

Judul:

"Penanaman TOGA"

Kategori:

"LINGKUNGAN"

Deskripsi:

"Pemanfaatan taman TOGA di setiap RT melalui penanaman tanaman obat keluarga."

Tanaman:

Mint
Kumis Kucing

Gunakan foto tanaman/taman.

Icon:
Leaf / plant.

Button:

"Lihat Selengkapnya →"

Link:

/program-kerja/toga

============================================================
CARD PROGRAM 4
============================================================

Judul:

"Penyuluhan Stunting"

Kategori:

"KESEHATAN"

Deskripsi:

"Kegiatan penyuluhan bersama ibu-ibu PKK mengenai pencegahan stunting dan pentingnya pemenuhan gizi."

Gunakan foto penyuluhan.

Icon:
Health / community.

Button:

"Lihat Selengkapnya →"

Link:

/program-kerja/stunting

============================================================
DESAIN CARD
============================================================

Card harus terlihat premium.

Gunakan:

- rounded-2xl
- border hijau
- shadow lembut
- cream background
- image cover
- image aspect ratio 16:10
- hover zoom
- hover translate
- hover shadow
- golden yellow accent

Tambahkan dekorasi halftone kecil.

Jangan membuat card terlalu besar sehingga homepage terlalu panjang.

============================================================
HALAMAN PROGRAM KERJA
============================================================

Route:

/program-kerja

Buat halaman khusus semua program.

Hero:

"Program Kerja"

Subtitle:

"Empat program utama Kelompok 117 untuk memberikan kontribusi nyata bagi masyarakat Kaligawe."

Tampilkan 4 program dalam layout grid.

Setiap card tetap memiliki:

Foto
Kategori
Judul
Deskripsi
"Lihat Selengkapnya →"

Tambahkan kegiatan pendukung di bagian bawah.

============================================================
DETAIL PROGRAM TPQ
============================================================

Route:

/program-kerja/tpq

Buat halaman project showcase.

Hero:
- Foto kegiatan TPQ
- Label "PROGRAM PENDIDIKAN"
- Judul "Pendidikan TPQ"
- Deskripsi singkat

Tambahkan breadcrumb:

Beranda / Program Kerja / Pendidikan TPQ

Section:

"Latar Belakang"

Section:

"Tujuan Kegiatan"

Buat beberapa card tujuan.

Section:

"Kegiatan yang Dilaksanakan"

Contoh:
- Pembelajaran Al-Qur'an
- Pendampingan anak-anak
- Belajar bersama
- Aktivitas edukatif

Section:

"Sasaran"

Anak-anak TPQ di wilayah Kaligawe.

Section:

"Dokumentasi"

Gallery foto.

Section:

"Hasil dan Dampak"

Tampilkan highlight hasil kegiatan.

Di bagian bawah:

"← Kembali ke Program Kerja"

============================================================
DETAIL PROGRAM PEMETAAN
============================================================

Route:

/program-kerja/pemetaan-rw3

Hero:
Foto/peta.

Judul:

"Pemetaan Wilayah RW 3"

Kategori:

"PROGRAM PEMETAAN WILAYAH"

Breadcrumb.

Section:

"Latar Belakang"

Section:

"Tujuan Pemetaan"

Section:

"Proses Pemetaan"

Buat timeline:

01
Survey wilayah

02
Pengumpulan data

03
Identifikasi wilayah

04
Penyusunan peta

05
Finalisasi

Section:

"Hasil Pemetaan"

Tampilkan gambar/peta hasil.

Section:

"Dokumentasi"

Gallery proses survey.

Tambahkan tombol kembali.

Jangan membuat informasi geografis spesifik yang belum diberikan.

============================================================
DETAIL PROGRAM TOGA
============================================================

Route:

/program-kerja/toga

Hero:
Foto taman.

Judul:

"Penanaman TOGA"

Kategori:

"PROGRAM LINGKUNGAN"

Section:

"Latar Belakang"

Section:

"Tujuan"

Section:

"Tanaman yang Ditanam"

Buat dua card:

MINT

Tampilkan:
- Foto
- Nama
- Deskripsi
- Manfaat

KUMIS KUCING

Tampilkan:
- Foto
- Nama
- Deskripsi
- Manfaat

Jangan membuat klaim medis berlebihan.

Section:

"Pelaksanaan"

Jelaskan bahwa kegiatan dilakukan di taman TOGA setiap RT.

Section:

"Dokumentasi"

Gallery.

Section:

"Dampak Kegiatan"

Fokus pada:
- Pemanfaatan ruang
- Penghijauan
- Edukasi tanaman
- Keterlibatan masyarakat

============================================================
DETAIL PROGRAM STUNTING
============================================================

Route:

/program-kerja/stunting

Hero:
Foto penyuluhan.

Judul:

"Penyuluhan Stunting"

Kategori:

"PROGRAM KESEHATAN"

Section:

"Latar Belakang"

Section:

"Tujuan Penyuluhan"

Section:

"Materi yang Disampaikan"

Contoh:
- Pemahaman mengenai stunting
- Pentingnya gizi seimbang
- Pencegahan stunting
- Pola hidup sehat

Section:

"Sasaran"

Ibu-ibu PKK dan masyarakat.

Section:

"Pelaksanaan"

Tampilkan waktu/lokasi HANYA jika data tersedia.

Jangan mengarang tanggal.

Section:

"Dokumentasi"

Gallery.

Section:

"Hasil dan Dampak"

Tampilkan hasil kegiatan.

Tambahkan tombol kembali.

============================================================
KEGIATAN PENDUKUNG
============================================================

Route:

/kegiatan

Judul:

"Lebih dari Sekadar Program Kerja"

Deskripsi:

"Selain program utama, Kelompok 117 juga terlibat dalam berbagai kegiatan bersama masyarakat."

Tampilkan:

1. Lomba di wilayah RT
2. Kegiatan TPQ
3. Kerja bakti
4. Bersih-bersih kelurahan
5. Kegiatan sosial masyarakat

PENTING:

Kegiatan ini bukan 4 program utama.

Buat desain gallery/card.

============================================================
GALERI
============================================================

Route:

/galeri

Judul:

"Jejak Perjalanan Kami"

Subtitle:

"Dokumentasi perjalanan Kelompok 117 bersama masyarakat Kaligawe."

Buat filter:

Semua
TPQ
Pemetaan
TOGA
Kesehatan
Sosial

Gunakan responsive masonry/grid.

Foto:
- Rounded
- Object cover
- Hover zoom
- Overlay judul
- Lightbox saat diklik

Jika belum ada foto asli, buat placeholder area yang mudah diganti.

Jangan menggunakan gambar rusak.

============================================================
HALAMAN PROFIL
============================================================

Route:

/profil

Hero:

"Tentang Kelompok 117"

Tampilkan:

KKN Tematik XXII
Kelompok 117
UNISSULA
Kaligawe

Section:

"Siapa Kami"

Section:

"Tempat Kami Mengabdi"

Section:

"Nilai yang Kami Bawa"

Buat 4 nilai:

Peduli
Kolaborasi
Pengabdian
Keberlanjutan

Gunakan style seperti panel pada poster referensi.

Tambahkan foto kelompok jika tersedia.

============================================================
HALAMAN KONTAK
============================================================

Route:

/kontak

Judul:

"Terhubung Bersama Kami"

Tampilkan:

KKN Kelompok 117 Kaligawe
UNISSULA

Lokasi:

Kelurahan Kaligawe
Kecamatan Gayamsari
Kota Semarang
Jawa Tengah

Social media:

Instagram
TikTok

Buat CTA:

"Ikuti Perjalanan KKN Kami"

Tombol Instagram.
Tombol TikTok.

URL social media gunakan placeholder jika akun belum diberikan.

============================================================
FOOTER
============================================================

Footer harus reusable melalui MainLayout.

Background:

Hijau tua / forest green.

Tambahkan:

Logo KKN

"KKN KELOMPOK 117"

"KALIGAWE"

"KKN Tematik XXII — UNISSULA"

Tagline:

"Menuju Kaligawe yang lebih hijau,
lebih sehat, dan lebih berdaya."

Navigation:

Beranda
Profil
Program Kerja
Kegiatan
Galeri
Kontak

Social media:

Instagram
TikTok

Gunakan icon brand yang benar.

Jika menggunakan react-icons:

FaInstagram
FaTiktok

JANGAN menggunakan:

Instagram dari lucide-react
TikTok dari lucide-react

Tambahkan:

"© 2026 KKN Kelompok 117 Kaligawe UNISSULA"

Tambahkan pattern halftone dan dekorasi daun secara subtle.

============================================================
DESAIN VISUAL
============================================================

Gunakan gaya visual yang konsisten dengan poster/logo yang saya upload.

Elemen:

Halftone dots
Organic shapes
Sun illustration
Leaf illustration
Cloud shapes
Paper cards
Thin green borders
Yellow highlights
Green typography
Cream backgrounds

Buat beberapa section memiliki background yellow/cream bergantian agar halaman tidak monoton.

Gunakan decorative elements dengan position absolute tetapi pastikan tidak menyebabkan horizontal overflow.

============================================================
TIPOGRAFI
============================================================

Gunakan font modern:

Poppins atau Inter untuk body.

Untuk heading tertentu boleh menggunakan font display/decorative yang memiliki karakter editorial.

Jangan menggunakan font script untuk paragraf panjang.

Hierarchy:

Hero:
Sangat besar

Section:
Large / bold

Card:
Medium / bold

Body:
Readable

============================================================
ANIMASI
============================================================

Gunakan animasi ringan:

- Fade in
- Slide up
- Hover lift
- Image zoom
- Smooth scroll
- Navbar transition

Jangan gunakan animasi berlebihan.

Pastikan performa tetap baik.

============================================================
RESPONSIVE
============================================================

WAJIB responsive.

Desktop:
- Max width 1200-1280px
- Grid 2-4 kolom
- Hero besar

Tablet:
- Grid menyesuaikan

Mobile:
- 1 kolom
- Hamburger navbar
- Button mudah ditekan
- Text tidak overflow
- Image proporsional
- Tidak ada horizontal scrolling

============================================================
TAILWIND CSS V3
============================================================

Gunakan:

tailwindcss@3.4.1
postcss
autoprefixer

Pastikan tailwind.config.js:

content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"
]

index.css harus menggunakan:

@tailwind base;
@tailwind components;
@tailwind utilities;

Pastikan index.css di-import di main.tsx.

Jangan gunakan:

@import "tailwindcss";

karena itu adalah pendekatan Tailwind v4.

============================================================
ICON
============================================================

Gunakan lucide-react untuk icon UI seperti:

MapPin
Leaf
BookOpen
Heart
Users
ArrowRight
Calendar
Camera
Menu
X

Untuk social media gunakan react-icons:

FaInstagram
FaTiktok

Jangan import Instagram atau TikTok dari lucide-react.

============================================================
DATA
============================================================

Pisahkan data program ke:

src/data/programs.ts

Pisahkan data kegiatan ke:

src/data/activities.ts

Pisahkan data gallery ke:

src/data/gallery.ts

Program harus memiliki:

id
title
category
description
image
route
icon

Gunakan data tersebut untuk membuat ProgramCard.

Jangan hardcode card berulang-ulang jika bisa dibuat menggunakan data array.

============================================================
LAYOUT
============================================================

Gunakan:

MainLayout.tsx

untuk:

Navbar
Page content
Footer

Semua halaman menggunakan MainLayout.

Jangan copy-paste Navbar dan Footer ke setiap halaman.

============================================================
KUALITAS KODE
============================================================

Sebelum selesai pastikan:

- Tidak ada TypeScript error
- Tidak ada import error
- Tidak ada broken route
- Tidak ada broken image
- Tidak ada icon yang tidak tersedia
- Tidak ada console error
- Tidak ada horizontal overflow
- Semua tombol berfungsi
- Semua link Program Kerja menuju halaman detail yang benar
- Tombol kembali berfungsi
- Navbar bekerja di mobile
- Footer muncul di semua halaman
- Tailwind CSS aktif
- Tidak ada HTML default browser

============================================================
HASIL AKHIR
============================================================

Website harus terlihat seperti:

WEBSITE KKN UNIVERSITAS MODERN
+
IDENTITAS POSTER KKN 117
+
NATURAL COMMUNITY DESIGN
+
DOCUMENTATION SHOWCASE

Pertahankan identitas visual:

HIJAU OLIVE
+
KUNING MATAHARI
+
CREAM
+
HALFTONE
+
DAUN
+
ORGANIC SHAPES
+
PAPER EFFECT

Identitas "117" dan "KALIGAWE" harus sangat terlihat.

Homepage harus menjadi landing page yang menarik.

Program Kerja harus menjadi showcase.

Setiap program memiliki halaman detailnya sendiri.

Dokumentasi harus menjadi bagian penting website.

Website harus terlihat profesional tetapi tetap memiliki nuansa hangat dan dekat dengan masyarakat.

Jangan membuat website generik.
Jangan membuat website corporate.
Jangan membuat website seperti blog.
Jangan membuat dashboard.

Buat website yang terasa benar-benar dibuat khusus untuk:

"KKN KELOMPOK 117 KALIGAWE UNISSULA."

buat full dan penuh animasi dan effect yg modern

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/a912ff64-0abd-4873-97d6-c6ffa6c0164e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
