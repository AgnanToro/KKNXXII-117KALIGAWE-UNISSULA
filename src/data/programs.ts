import { BookOpen, MapPin, Leaf, HeartPulse, type LucideIcon } from "lucide-react";

import tpqImg from "@/assets/images/tpq.webp";
import tpq2Img from "@/assets/images/tpq2.webp";
import tpq3Img from "@/assets/images/tpq3.webp";
import tpq4Img from "@/assets/images/tpq4.webp";
import tpq5Img from "@/assets/images/tpq5.webp";
import tpq6Img from "@/assets/images/tpq6.webp";

import pemetaanImg from "@/assets/images/peta.webp";
import pemetaan2Img from "@/assets/images/petaaaa2.jpg";
import pemetaan3Img from "@/assets/images/petaaa2.webp";
import pemetaan4Img from "@/assets/images/peta1.webp";
import togaImg from "@/assets/images/toga.webp";

import stuntingImg from "@/assets/images/stunting.webp";
import stunting2Img from "@/assets/images/stunting2.webp";
import stunting3Img from "@/assets/images/stunting3.webp";

import petaImg from "@/assets/images/peta-rw3.webp";
import mintImg from "@/assets/images/mint.jpg";
import kumisImg from "@/assets/images/kumis-kucing.jpg";
import togart01Img from "@/assets/images/RT1.webp";
import togart02Img from "@/assets/images/RT2.webp";
import togart03Img from "@/assets/images/RT3.webp";
import togart04Img from "@/assets/images/RT4.webp";
import togart05Img from "@/assets/images/RT5.webp";
import togart06Img from "@/assets/images/RT6.webp";
import togart07Img from "@/assets/images/RT7.webp";
import togart08Img from "@/assets/images/RT8.webp";
import togart09Img from "@/assets/images/RT9.webp";

export type Program = {
  id: string;
  title: string;
  category: string;
  heroLabel: string;
  description: string;
  image: string;
  route: string;
  icon: LucideIcon;
  background: string[];
  goals: { title: string; text: string }[];
  activities: string[];
  target: string;
  documentation: { src: string; caption: string }[];
  impact: { title: string; text: string }[];
  timeline?: { step: string; title: string; text: string }[];
  result?: { image: string; caption: string; text: string };
  plants?: { name: string; image: string; description: string; benefit: string }[];
  materials?: string[];
  execution?: string;
  schedule?: string;
};

export const programs: Program[] = [
  {
    id: "tpq",
    title: "Pendidikan TPQ",
    category: "PENDIDIKAN",
    heroLabel: "PROGRAM PENDIDIKAN",
    description:
      "Kegiatan pendampingan pembelajaran Al-Qur'an bersama anak-anak TPQ di wilayah Kaligawe.",
    image: tpqImg,
    route: "/program-kerja/tpq",
    icon: BookOpen,
    background: [
      "Kegiatan belajar Al-Qur'an bagi anak-anak di wilayah Kaligawe berjalan melalui TPQ yang ada di lingkungan masyarakat. Kelompok 117 hadir sebagai pendamping agar suasana belajar semakin hidup dan menyenangkan.",
      "Pendampingan dilakukan bersama pengajar TPQ setempat, sehingga kegiatan tetap mengikuti kebiasaan belajar yang sudah berjalan di lingkungan.",
    ],
    goals: [
      {
        title: "Mendampingi Belajar",
        text: "Membantu anak-anak TPQ dalam membaca dan memahami bacaan Al-Qur'an.",
      },
      {
        title: "Menumbuhkan Semangat",
        text: "Menciptakan suasana belajar yang hangat, ramah anak, dan menyenangkan.",
      },
      {
        title: "Mendekatkan Diri",
        text: "Membangun kedekatan antara mahasiswa KKN dengan anak-anak dan orang tua.",
      },
      {
        title: "Mendukung Pengajar",
        text: "Menjadi tenaga pendamping tambahan bagi pengajar TPQ di lingkungan.",
      },
    ],
    activities: [
      "Pembelajaran Al-Qur'an",
      "Pendampingan anak-anak",
      "Belajar bersama",
      "Aktivitas edukatif",
    ],
    target: "Anak-anak TPQ di wilayah Kaligawe.",
    documentation: [
      { src: tpq2Img, caption: "Pendampingan membaca Al-Qur'an" },
      { src: tpq3Img, caption: "Belajar bersama anak-anak TPQ" },
      { src: tpq4Img, caption: "Pengenalan di TPQ bersama Pak RW 3 Kaligawe" },
      { src: tpq5Img, caption: "Lomba Day 1 di TPQ" },
      { src: tpq6Img, caption: "Lomba day 2 di TPQ" },
      { src: tpqImg, caption: "Penutupan Pembelajaran di TPQ" },
    ],
    impact: [
      {
        title: "Anak-anak Lebih Antusias",
        text: "Suasana belajar menjadi lebih hidup dengan hadirnya pendamping tambahan.",
      },
      {
        title: "Kedekatan Terbangun",
        text: "Hubungan mahasiswa dengan anak-anak dan warga sekitar semakin dekat.",
      },
      {
        title: "Kegiatan Berlanjut",
        text: "Pendampingan diserahkan kembali kepada pengajar TPQ agar tetap berjalan.",
      },
    ],
  },
  {
    id: "pemetaan-rw3",
    title: "Pemetaan Wilayah RW 3",
    category: "PEMETAAN WILAYAH",
    heroLabel: "PROGRAM PEMETAAN WILAYAH",
    description:
      "Pembuatan peta wilayah RW 3 Kelurahan Kaligawe sebagai media informasi dan dokumentasi wilayah masyarakat.",
    image: pemetaanImg,
    route: "/program-kerja/pemetaan-rw3",
    icon: MapPin,
    background: [
      "Media informasi wilayah yang mudah dibaca membantu warga maupun tamu dalam mengenali lingkungan RW 3. Kelompok 117 menyusun peta wilayah sebagai dokumentasi bersama masyarakat.",
      "Proses penyusunan dilakukan melalui survey langsung dan pendataan bersama perwakilan warga.",
    ],
    goals: [
      {
        title: "Media Informasi",
        text: "Menyediakan peta wilayah yang mudah dipahami warga RW 3.",
      },
      {
        title: "Dokumentasi Wilayah",
        text: "Mendokumentasikan gambaran lingkungan sebagai arsip masyarakat.",
      },
      {
        title: "Memudahkan Orientasi",
        text: "Membantu warga dan pendatang mengenali tata letak lingkungan.",
      },
      {
        title: "Data Bersama",
        text: "Menghasilkan data wilayah yang dapat dimanfaatkan kembali oleh warga.",
      },
    ],
    activities: [
      "Survey wilayah bersama warga",
      "Pengumpulan data lapangan",
      "Penyusunan peta wilayah RW 3",
      "Finalisasi dan penyerahan peta",
    ],
    target: "Warga RW 3 Kelurahan Kaligawe.",
    timeline: [
      { step: "01", title: "Survey Wilayah", text: "Menyusuri wilayah RW 3 untuk mengenali kondisi lingkungan." },
      { step: "02", title: "Pengumpulan Data", text: "Mencatat data lapangan bersama perwakilan warga." },
      { step: "03", title: "Identifikasi Wilayah", text: "Mengelompokkan bagian wilayah berdasarkan hasil survey." },
      { step: "04", title: "Penyusunan Peta", text: "Menyusun draf peta wilayah dari data yang terkumpul." },
      { step: "05", title: "Finalisasi", text: "Menyempurnakan peta dan menyerahkannya kepada warga." },
    ],
    result: {
      image: pemetaan2Img,
      caption: "Hasil peta wilayah RW 3 Kaligawe",
      text: "Peta wilayah RW 3 disusun sebagai media informasi dan dokumentasi. Gambar pada halaman ini merupakan placeholder ilustrasi dan dapat diganti dengan hasil peta final.",
    },
    documentation: [

      { src: pemetaan3Img, caption: "Proses Pemasangan Peta Wilayah RW 3" },
      { src: pemetaan4Img, caption: "Penyusunan kerangka peta" },
      { src: pemetaanImg, caption: "Hasil Peta wilayah RW 3" },
    ],
    impact: [
      { title: "Informasi Wilayah", text: "Warga memiliki media informasi wilayah yang mudah dibaca." },
      { title: "Arsip Lingkungan", text: "Gambaran wilayah terdokumentasi dan dapat digunakan kembali." },
      { title: "Kolaborasi Warga", text: "Proses pemetaan melibatkan perwakilan warga secara langsung." },
    ],
  },
  {
    id: "toga",
    title: "Penanaman TOGA",
    category: "LINGKUNGAN",
    heroLabel: "PROGRAM LINGKUNGAN",
    description:
      "Pemanfaatan taman TOGA di setiap RT melalui penanaman tanaman obat keluarga.",
    image: togaImg,
    route: "/program-kerja/toga",
    icon: Leaf,
    background: [
      "Taman TOGA di setiap RT menjadi ruang hijau yang dapat dimanfaatkan bersama. Kelompok 117 mengisi taman tersebut melalui penanaman tanaman obat keluarga.",
      "Kegiatan dilakukan bersama warga agar tanaman terus dirawat setelah masa KKN berakhir.",
    ],
    goals: [
      { title: "Memanfaatkan Ruang", text: "Mengoptimalkan taman TOGA yang sudah tersedia di setiap RT." },
      { title: "Penghijauan", text: "Menambah ruang hijau di lingkungan permukiman." },
      { title: "Edukasi Tanaman", text: "Mengenalkan jenis tanaman obat keluarga kepada warga." },
      { title: "Keterlibatan Warga", text: "Menanam dan merawat tanaman bersama warga setiap RT." },
    ],
    plants: [
      {
        name: "Mint",
        image: mintImg,
        description:
          "Tanaman herbal beraroma segar yang mudah ditanam di pot maupun bedengan taman TOGA.",
        benefit: "Daunnya biasa dimanfaatkan warga sebagai bahan minuman dan masakan sehari-hari.",
      },
      {
        name: "Kumis Kucing",
        image: kumisImg,
        description:
          "Tanaman obat keluarga yang umum dijumpai di pekarangan dan tumbuh baik di iklim tropis.",
        benefit: "Secara tradisional dikenal masyarakat sebagai tanaman herbal yang dimanfaatkan sebagai rebusan.",
      },
    ],
    activities: [
      "Persiapan media tanam",
      "Penanaman bibit TOGA",
      "Penataan taman TOGA setiap RT",
      "Perawatan bersama warga",
    ],
    target: "Warga di setiap RT Kelurahan Kaligawe.",
    execution:
      "Kegiatan penanaman dilaksanakan di taman TOGA yang berada di setiap RT, dikerjakan bersama warga sekitar taman.",
    documentation: [
      { src: togaImg, caption: "Penanaman di taman TOGA" },
      { src: mintImg, caption: "Bibit mint" },
      { src: kumisImg, caption: "Tanaman kumis kucing" },
      { src: togart01Img, caption: "Pemberian tanaman toga di Taman Toga RT 01" },
      { src: togart02Img, caption: "Pemberian tanaman toga di Taman Toga RT 02" },
      { src: togart03Img, caption: "Pemberian tanaman toga di Taman Toga RT 03" },
      { src: togart04Img, caption: "Pemberian tanaman toga di Taman Toga RT 04" },
      { src: togart05Img, caption: "Pemberian tanaman toga di Taman Toga RT 05" },
      { src: togart06Img, caption: "Pemberian tanaman toga di Taman Toga RT 06" },
      { src: togart07Img, caption: "Pemberian tanaman toga di Taman Toga RT 07" },
      { src: togart08Img, caption: "Pemberian tanaman toga di Taman Toga RT 08" },
      { src: togart09Img, caption: "Pemberian tanaman toga di Taman Toga RT 09" },
    ],
    impact: [
      { title: "Pemanfaatan Ruang", text: "Taman TOGA di setiap RT kembali dimanfaatkan secara aktif." },
      { title: "Penghijauan", text: "Lingkungan permukiman menjadi lebih hijau dan tertata." },
      { title: "Edukasi & Keterlibatan", text: "Warga mengenal tanaman TOGA dan terlibat dalam perawatannya." },
    ],
  },
  {
    id: "stunting",
    title: "Penyuluhan Stunting",
    category: "KESEHATAN",
    heroLabel: "PROGRAM KESEHATAN",
    description:
      "Kegiatan penyuluhan bersama ibu-ibu PKK mengenai pencegahan stunting dan pentingnya pemenuhan gizi.",
    image: stuntingImg,
    route: "/program-kerja/stunting",
    icon: HeartPulse,
    background: [
      "Pemahaman mengenai gizi keluarga menjadi bagian penting dalam upaya pencegahan stunting. Kelompok 117 mengadakan penyuluhan bersama ibu-ibu PKK di Kelurahan Kaligawe.",
      "Penyuluhan dikemas dalam suasana santai dengan ruang tanya jawab bersama peserta.",
    ],
    goals: [
      { title: "Menambah Pemahaman", text: "Mengenalkan apa itu stunting dan mengapa perlu dicegah." },
      { title: "Gizi Keluarga", text: "Membahas pentingnya pemenuhan gizi seimbang dalam keluarga." },
      { title: "Diskusi Terbuka", text: "Memberi ruang tanya jawab bersama ibu-ibu PKK." },
      { title: "Kebiasaan Sehat", text: "Mendorong pola hidup sehat di lingkungan keluarga." },
    ],
    materials: [
      "Pemahaman mengenai stunting",
      "Pentingnya gizi seimbang",
      "Pencegahan stunting",
      "Pola hidup sehat",
    ],
    activities: [
      "Pemaparan materi penyuluhan",
      "Diskusi dan tanya jawab",
      "Pendampingan bersama ibu-ibu PKK",
    ],
    target: "Ibu-ibu PKK dan masyarakat Kelurahan Kaligawe.",
    execution:
      "Penyuluhan dilaksanakan bersama ibu-ibu PKK RW 03 Kelurahan Kaligawe.",
    schedule: "Waktu & lokasi:Jumat, 7 Agustus 2026 — Rumah ibu RW 03",
    documentation: [
      { src: stuntingImg, caption: "Pemaparan materi penyuluhan" },
      { src: stunting2Img, caption: "Diskusi bersama ibu-ibu PKK" },
      { src: stunting3Img, caption: "Pemberian gift " },
    ],
    impact: [
      { title: "Pemahaman Meningkat", text: "Peserta lebih mengenal stunting dan cara pencegahannya." },
      { title: "Diskusi Aktif", text: "Ibu-ibu PKK aktif bertanya seputar gizi keluarga." },
      { title: "Pesan Berlanjut", text: "Materi dapat disampaikan kembali di pertemuan warga." },
    ],
  },
];

export const getProgram = (id: string) => programs.find((p) => p.id === id);
