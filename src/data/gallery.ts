import tpqImg from "@/assets/images/tpq.jpg";
import pemetaanImg from "@/assets/images/pemetaan.jpg";
import petaImg from "@/assets/images/peta-rw3.jpg";
import togaImg from "@/assets/images/toga.jpg";
import mintImg from "@/assets/images/mint.jpg";
import kumisImg from "@/assets/images/kumis-kucing.jpg";
import stuntingImg from "@/assets/images/stunting.jpg";
import lombaImg from "@/assets/images/lomba.jpg";
import kerjaBaktiImg from "@/assets/images/kerja-bakti.jpg";
import bersihImg from "@/assets/images/bersih-kelurahan.jpg";
import sosialImg from "@/assets/images/sosial.jpg";
import kelompokImg from "@/assets/images/kelompok.jpg";

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
  { id: "g1", title: "Pendampingan belajar Al-Qur'an", category: "TPQ", image: tpqImg },
  { id: "g2", title: "Belajar bersama anak-anak TPQ", category: "TPQ", image: tpqImg },
  { id: "g3", title: "Survey wilayah RW 3", category: "Pemetaan", image: pemetaanImg },
  { id: "g4", title: "Penyusunan peta wilayah", category: "Pemetaan", image: petaImg },
  { id: "g5", title: "Penanaman di taman TOGA", category: "TOGA", image: togaImg },
  { id: "g6", title: "Bibit mint", category: "TOGA", image: mintImg },
  { id: "g7", title: "Tanaman kumis kucing", category: "TOGA", image: kumisImg },
  { id: "g8", title: "Penyuluhan stunting bersama PKK", category: "Kesehatan", image: stuntingImg },
  { id: "g9", title: "Lomba di wilayah RT", category: "Sosial", image: lombaImg },
  { id: "g10", title: "Kerja bakti bersama warga", category: "Sosial", image: kerjaBaktiImg },
  { id: "g11", title: "Bersih-bersih kelurahan", category: "Sosial", image: bersihImg },
  { id: "g12", title: "Silaturahmi bersama masyarakat", category: "Sosial", image: sosialImg },
  { id: "g13", title: "Kelompok 117 di Kaligawe", category: "Sosial", image: kelompokImg },
];
