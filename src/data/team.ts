import dplKiri from "@/assets/team/DPL KIRI.webp";
import dplTengah from "@/assets/team/DPL TENGAH.webp";
import dplKanan from "@/assets/team/DPL KANAN.webp";

import teamKiri from "@/assets/team/TEAM KIRI.webp";
import teamTengah from "@/assets/team/TEAM TENGAH.webp";
import teamKanan from "@/assets/team/TEAM KANAN.webp";

import bphKiri from "@/assets/team/BPH KIRI.webp";
import bphTengah from "@/assets/team/BPH TENGAH.webp";
import bphKanan from "@/assets/team/BPH KANAN.webp";

import acaraKiri from "@/assets/team/ACARA KIRI.webp";
import acaraTengah from "@/assets/team/ACARA TENGAH.webp";
import acaraKanan from "@/assets/team/ACARA KANAN.webp";

import pddKiri from "@/assets/team/PDD KIRI.webp";
import pddTengah from "@/assets/team/PDD TENGAH.webp";
import pddKanan from "@/assets/team/PDD KANAN.webp";

import humasKiri from "@/assets/team/HUMAS KIRI.webp";
import humasTengah from "@/assets/team/HUMAS TENGAH.webp";
import humasKanan from "@/assets/team/HUMAS KANAN.webp";

import perkapKiri from "@/assets/team/PERKAP KIRI.webp";
import perkapTengah from "@/assets/team/PERKAP TENGAH.webp";
import perkapKanan from "@/assets/team/PERKAP KANAN.webp";

export type Member = {
  name: string;
  role: string;
  faculty: string;
  program: string;
  photo: string | null;
};

export type Tile =
  | {
      kind: "member";
      member: Member;
    }
  | {
      kind: "image";
      src: string;
      alt: string;
    }
  | {
      kind: "placeholder";
      title: string;
      caption?: string;
    };

export type Division = {
  id: string;
  name: string;
  subtitle: string;
  tiles: Tile[];
};

const member = (m: Member): Tile => ({
  kind: "member",
  member: m,
});

export const divisions: Division[] = [
  // =====================================================
  // DPL
  // =====================================================
  {
    id: "dpl",
    name: "DPL",
    subtitle: "Dosen Pembimbing Lapangan",
    tiles: [
      {
        kind: "image",
        src: dplKiri,
        alt: "DPL KKN Kelompok 117 - Kiri",
      },

      member({
        name: "Andhika Dwi Anggara S.Pd.,M.Si.",
        role: "Dosen Pembimbing Lapangan",
        faculty: "Universitas Islam Sultan Agung",
        program: "Dosen Pembimbing Lapangan",
        photo: dplTengah,
      }),

      {
        kind: "image",
        src: dplKanan,
        alt: "DPL KKN Kelompok 117 - Kanan",
      },
    ],
  },

  // =====================================================
  // BPH
  // =====================================================
  {
    id: "bph",
    name: "BPH",
    subtitle: "Badan Pengurus Harian",
    tiles: [
      // TEAM
      {
        kind: "image",
        src: teamKiri,
        alt: "TEAM KKN Kelompok 117 - Kiri",
      },

      member({
        name: "Zidni",
        role: "Ketua",
        faculty: "Fakultas Ilmu Keperawatan",
        program: "Ilmu Keperawatan",
        photo: teamTengah,
      }),

      {
        kind: "image",
        src: teamKanan,
        alt: "TEAM KKN Kelompok 117 - Kanan",
      },

      // BPH
      member({
        name: "Amalia",
        role: "Sekretaris",
        faculty: "Fakultas Ekonomi & Bisnis",
        program: "Manajemen",
        photo: bphKiri,
      }),

      {
        kind: "image",
        src: bphTengah,
        alt: "BPH KKN Kelompok 117 - Kanan",
      },

      member({
        name: "Imelda",
        role: "Bendahara",
        faculty: "Fakultas Ekonomi & Bisnis",
        program: "Akuntansi",
        photo: bphKanan,
      }),

    ],
  },

  // =====================================================
  // ACARA
  // =====================================================
  {
    id: "acara",
    name: "ACARA",
    subtitle: "Divisi Acara",
    tiles: [
      member({
        name: "Nadia",
        role: "Acara",
        faculty: "Fakultas Kedokteran Gigi",
        program: "Kedokteran Gigi",
        photo: acaraKiri,
      }),

      {
        kind: "image",
        src: acaraTengah,
        alt: "Divisi Acara KKN Kelompok 117 - Tengah",
      },

      member({
        name: "Diah",
        role: "Acara",
        faculty: "Fakultas Kedokteran",
        program: "Kedokteran Umum",
        photo: acaraKanan,
      }),
    ],
  },

  // =====================================================
  // PDD
  // =====================================================
  {
    id: "pdd",
    name: "PDD",
    subtitle: "Publikasi, Dekorasi & Dokumentasi",
    tiles: [
      member({
        name: "Himma",
        role: "PDD",
        faculty: "Fakultas Ilmu Keperawatan",
        program: "Ilmu Keperawatan",
        photo: pddKiri,
      }),

      {
        kind: "image",
        src: pddTengah,
        alt: "PDD KKN Kelompok 117 - Tengah",
      },

      member({
        name: "Dhara",
        role: "PDD",
        faculty: "Fakultas Farmasi",
        program: "Farmasi",
        photo: pddKanan,
      }),
    ],
  },

  // =====================================================
  // HUMAS
  // =====================================================
  {
    id: "humas",
    name: "HUMAS",
    subtitle: "Hubungan Masyarakat",
    tiles: [
      member({
        name: "Afif",
        role: "Humas",
        faculty: "Fakultas Agama Islam",
        program: "Hukum Keluarga",
        photo: humasKiri,
      }),

      {
        kind: "image",
        src: humasTengah,
        alt: "HUMAS KKN Kelompok 117 - Tengah",
      },

      member({
        name: "Faiq",
        role: "Humas",
        faculty: "Fakultas Teknik",
        program: "Teknik Industri",
        photo: humasKanan,
      }),
    ],
  },

  // =====================================================
  // PERKAP
  // =====================================================
  {
    id: "perkap",
    name: "PERKAP",
    subtitle: "Perlengkapan",
    tiles: [
      member({
        name: "Agnan",
        role: "Perkap",
        faculty: "Fakultas Teknologi Industri",
        program: "Teknik Informatika",
        photo: perkapKiri,
      }),

      {
        kind: "image",
        src: perkapTengah,
        alt: "PERKAP KKN Kelompok 117 - Tengah",
      },

      member({
        name: "Nafis",
        role: "Perkap",
        faculty: "Fakultas Ilmu Keperawatan",
        program: "Ilmu Keperawatan",
        photo: perkapKanan,
      }),
    ],
  },
];