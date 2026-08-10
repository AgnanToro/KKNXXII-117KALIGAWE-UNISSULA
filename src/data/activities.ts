import { Trophy, BookOpen, Users, Sparkles, HeartHandshake, type LucideIcon } from "lucide-react";

import lombaImg from "@/assets/images/lomba.jpg";
import tpqImg from "@/assets/images/tpq.jpg";
import kerjaBaktiImg from "@/assets/images/kerja-bakti.jpg";
import bersihImg from "@/assets/images/bersih-kelurahan.jpg";
import sosialImg from "@/assets/images/sosial.jpg";

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
    title: "Lomba di Wilayah RT",
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
    title: "Kerja Bakti",
    tag: "LINGKUNGAN",
    description: "Kerja bakti bersama warga membersihkan lingkungan sekitar.",
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
    title: "Kegiatan Sosial Masyarakat",
    tag: "SOSIAL",
    description: "Terlibat dalam kegiatan sosial dan pertemuan bersama masyarakat.",
    image: sosialImg,
    icon: HeartHandshake,
  },
];
