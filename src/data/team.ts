import coverAsset from "@/assets/team/team-cover.png.asset.json";
import bgBphAsset from "@/assets/team/bg-bph.webp.asset.json";
import zidniAsset from "@/assets/team/zidni.png.asset.json";
import amaliaAsset from "@/assets/team/amalia.webp.asset.json";
import imeldaAsset from "@/assets/team/imelda.webp.asset.json";

export const teamCover = coverAsset.url;

export type Member = {
  name: string;
  role: string;
  faculty: string;
  program: string;
  /** Feed foto anggota. null = belum ada foto (placeholder) */
  photo: string | null;
};

export type Division = {
  id: string;
  name: string;
  subtitle: string;
  /** Banner divisi. null = belum ada banner (placeholder) */
  banner: string | null;
  members: Member[];
};

export const divisions: Division[] = [
  {
    id: "bph",
    name: "BPH",
    subtitle: "Badan Pengurus Harian",
    banner: bgBphAsset.url,
    members: [
      {
        name: "Zidni",
        role: "Ketua",
        faculty: "Fakultas Keperawatan",
        program: "Keperawatan",
        photo: zidniAsset.url,
      },
      {
        name: "Amalia",
        role: "Sekretaris",
        faculty: "Fakultas Ekonomi & Bisnis",
        program: "Manajemen",
        photo: amaliaAsset.url,
      },
      {
        name: "Imelda",
        role: "Bendahara",
        faculty: "Fakultas Ekonomi & Bisnis",
        program: "Akuntansi",
        photo: imeldaAsset.url,
      },
    ],
  },
  {
    id: "acara",
    name: "ACARA",
    subtitle: "Divisi Acara",
    banner: null,
    members: [
      {
        name: "Nadia",
        role: "Acara",
        faculty: "Fakultas Kedokteran Gigi",
        program: "Kedokteran Gigi",
        photo: null,
      },
      {
        name: "Diah",
        role: "Acara",
        faculty: "Fakultas Kedokteran Gigi",
        program: "Kedokteran Gigi",
        photo: null,
      },
    ],
  },
  {
    id: "pdd",
    name: "PDD",
    subtitle: "Publikasi, Dekorasi & Dokumentasi",
    banner: null,
    members: [
      {
        name: "Himma",
        role: "PDD",
        faculty: "Fakultas Keperawatan",
        program: "Keperawatan",
        photo: null,
      },
      {
        name: "Dhara",
        role: "PDD",
        faculty: "Fakultas Farmasi",
        program: "Farmasi",
        photo: null,
      },
    ],
  },
  {
    id: "humas",
    name: "HUMAS",
    subtitle: "Hubungan Masyarakat",
    banner: null,
    members: [
      {
        name: "Afif",
        role: "Humas",
        faculty: "Fakultas Agama Islam",
        program: "Hukum Islam",
        photo: null,
      },
      {
        name: "Tariq",
        role: "Humas",
        faculty: "Fakultas Teknik",
        program: "Teknik Industri",
        photo: null,
      },
    ],
  },
  {
    id: "perkap",
    name: "PERKAP",
    subtitle: "Perlengkapan",
    banner: null,
    members: [
      {
        name: "Agnan",
        role: "Perkap",
        faculty: "Fakultas Teknologi Industri",
        program: "Teknik Informatika",
        photo: null,
      },
      {
        name: "Nafis",
        role: "Perkap",
        faculty: "Fakultas Keperawatan",
        program: "Keperawatan",
        photo: null,
      },
    ],
  },
];
