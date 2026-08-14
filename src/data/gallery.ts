import tpqImg from "@/assets/images/tpq.webp";
import tpq2Img from "@/assets/images/tpq2.webp";
import tpq3Img from "@/assets/images/tpq3.webp";
import tpq4Img from "@/assets/images/tpq4.webp";
import tpq5Img from "@/assets/images/tpq5.webp";
import tpq6Img from "@/assets/images/tpq6.webp";

import pemetaanImg from "@/assets/images/peta.webp";
import petaImg from "@/assets/images/peta1.webp";
import peta2Img from "@/assets/images/petaaa2.webp";

import togaImg from "@/assets/images/toga.webp";
import mintImg from "@/assets/images/mint.jpg";
import kumisImg from "@/assets/images/kumis-kucing.jpg";
import stuntingImg from "@/assets/images/stunting.webp";
import lombaImg from "@/assets/images/lomba.webp";
import kerjaBaktiImg from "@/assets/images/kerja-bakti.webp";
import jalanImg from "@/assets/images/jalan.webp";
import catImg from "@/assets/images/cat.webp";
import sosialImg from "@/assets/images/sosial.webp";
import kelompokImg from "@/assets/images/kelompok.webp";

import togart01Img from "@/assets/images/RT1.webp";
import togart02Img from "@/assets/images/RT2.webp";
import togart03Img from "@/assets/images/RT3.webp";
import togart04Img from "@/assets/images/RT4.webp";
import togart05Img from "@/assets/images/RT5.webp";
import togart06Img from "@/assets/images/RT6.webp";
import togart07Img from "@/assets/images/RT7.webp";
import togart08Img from "@/assets/images/RT8.webp";
import togart09Img from "@/assets/images/RT9.webp";

export type GalleryCategory = "TPQ" | "Pemetaan" | "TOGA" | "Kesehatan" | "Sosial";

export type GalleryItem = {
  id: string;
  title: string;
  category: GalleryCategory;
  image: string;
};

export const galleryCategories: GalleryCategory[] = [
  "TPQ",
  "Pemetaan",
  "TOGA",
  "Kesehatan",
  "Sosial",
];

export const gallery: GalleryItem[] = [
  // TPQ
  { id: "g1", title: "Pendampingan belajar Al-Qur'an", category: "TPQ", image: tpqImg },
  { id: "g2", title: "Pendampingan membaca Al-Qur'an", category: "TPQ", image: tpq2Img },
  { id: "g3", title: "Belajar bersama anak-anak TPQ", category: "TPQ", image: tpq3Img },
  { id: "g4", title: "Pengenalan di TPQ bersama Pak RW 3 Kaligawe", category: "TPQ", image: tpq4Img },
  { id: "g5", title: "Lomba Day 1 di TPQ", category: "TPQ", image: tpq5Img },
  { id: "g6", title: "Lomba bersama anak-anak TPQ", category: "TPQ", image: tpq6Img },

  // Pemetaan
  { id: "g7", title: "Proses Pemasangan Peta Wilayah RW 3", category: "Pemetaan", image: peta2Img },
  { id: "g8", title: "Peta Wilayah RW 3", category: "Pemetaan", image: pemetaanImg },
  { id: "g9", title: "Penyusunan peta wilayah", category: "Pemetaan", image: petaImg },

  // TOGA
  { id: "g10", title: "Penyiapan Tanaman TOGA", category: "TOGA", image: togaImg },
  { id: "g11", title: "Bibit mint", category: "TOGA", image: mintImg },
  { id: "g12", title: "Tanaman kumis kucing", category: "TOGA", image: kumisImg },

  { id: "g13", title: "Tanaman TOGA RT 01", category: "TOGA", image: togart01Img },
  { id: "g14", title: "Tanaman TOGA RT 02", category: "TOGA", image: togart02Img },
  { id: "g15", title: "Tanaman TOGA RT 03", category: "TOGA", image: togart03Img },
  { id: "g16", title: "Tanaman TOGA RT 04", category: "TOGA", image: togart04Img },
  { id: "g17", title: "Tanaman TOGA RT 05", category: "TOGA", image: togart05Img },
  { id: "g18", title: "Tanaman TOGA RT 06", category: "TOGA", image: togart06Img },
  { id: "g19", title: "Tanaman TOGA RT 07", category: "TOGA", image: togart07Img },
  { id: "g20", title: "Tanaman TOGA RT 08", category: "TOGA", image: togart08Img },
  { id: "g21", title: "Tanaman TOGA RT 09", category: "TOGA", image: togart09Img },

  // Kesehatan
  { id: "g22", title: "Penyuluhan stunting bersama PKK", category: "Kesehatan", image: stuntingImg },

  // Sosial
  { id: "g23", title: "Lomba di wilayah RT", category: "Sosial", image: lombaImg },
  { id: "g24", title: "Menghias Jalan RT 05", category: "Sosial", image: catImg },
  { id: "g25", title: "Kerja bakti bersama warga", category: "Sosial", image: kerjaBaktiImg },
  { id: "g26", title: "Jalan Sehat", category: "Sosial", image: jalanImg },
  { id: "g27", title: "Silaturahmi bersama masyarakat", category: "Sosial", image: sosialImg },
  { id: "g28", title: "Kelompok 117 di Kaligawe", category: "Sosial", image: kelompokImg },
];
