import { Trophy, BookOpen, Users, Sparkles, HeartHandshake, type LucideIcon } from "lucide-react";

import lombaImg from "@/assets/images/lomba.webp";
import tpqImg from "@/assets/images/tpq.webp";
import kerjaBaktiImg from "@/assets/images/cat.webp";
import bersihImg from "@/assets/images/kerja-bakti.webp";
import sosialImg from "@/assets/images/sosial.webp";
import jalanImg from "@/assets/images/jalan.webp";
export type Activity = {
  id: string;
  title: string;
  tag: string;
  description: string;
  image: string;
  icon: LucideIcon;
};

export const activities: Activity[] = [
  {
    id: "lomba-rt",
    title: "Lomba di Wilayah RT 05",
    tag: "KEBERSAMAAN",
    description: "Kegiatan lomba bersama warga dan anak-anak di wilayah RT.",
    image: lombaImg,
    icon: Trophy,
  },
  {
    id: "kegiatan-tpq",
    title: "Kegiatan TPQ",
    tag: "PENDIDIKAN",
    description: "Ikut mendampingi kegiatan belajar anak-anak di TPQ lingkungan.",
    image: tpqImg,
    icon: BookOpen,
  },
  {
    id: "kerja-bakti",
    title: "Menghias Jalan",
    tag: "LINGKUNGAN",
    description: "Membantu menghias jalan bersama remaja RT 05 untuk persiapan 17 Agustus.",
    image: kerjaBaktiImg,
    icon: Users,
  },
  {
    id: "bersih-kelurahan",
    title: "Bersih-bersih Kelurahan",
    tag: "LINGKUNGAN",
    description: "Kegiatan bersih-bersih di lingkungan Kelurahan Kaligawe.",
    image: bersihImg,
    icon: Sparkles,
  },
  {
    id: "sosial-masyarakat",
    title: "Rapat Panitia Kegiatan Jalan Sehat RT 01 RW 03 Kaligawe",
    tag: "SOSIAL",
    description: "Terlibat dalam kegiatan sosial dan pertemuan bersama masyarakat.",
    image: sosialImg,
    icon: HeartHandshake,
  },

    {
    id: "jalan Sehat",
    title: "Jalan Sehat RT 01 RW 03",
    tag: "SOSIAL",
    description: "Terlibat dalam Kepanitiaan Jalan Sehat bersama masyarakat RT 01 RW 03.",
    image: jalanImg,
    icon: HeartHandshake,
  },

];

