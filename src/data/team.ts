import bgBphAsset from "@/assets/team/bg-bph.webp.asset.json";
import bgAcaraAsset from "@/assets/team/bg-acara.webp.asset.json";
import teamLeftAsset from "@/assets/team/team-left.png.asset.json";
import teamRightAsset from "@/assets/team/team-right.png.asset.json";
import zidniAsset from "@/assets/team/zidni.png.asset.json";
import amaliaAsset from "@/assets/team/amalia.webp.asset.json";
import imeldaAsset from "@/assets/team/imelda.webp.asset.json";
import nadiaAsset from "@/assets/team/nadia.png.asset.json";
import diahAsset from "@/assets/team/diah.webp.asset.json";

export type Member = {
  name: string;
  role: string;
  faculty: string;
  program: string;
  /** Feed foto anggota. null = belum ada foto (placeholder) */
  photo: string | null;
};

export type Tile =
  | { kind: "member"; member: Member }
  | { kind: "image"; src: string; alt: string }
  | { kind: "placeholder"; title: string; caption?: string };

export type Division = {
  id: string;
  name: string;
  subtitle: string;
  tiles: Tile[];
};

const banner = (src: string, name: string): Tile => ({
  kind: "image",
  src,
  alt: `Banner divisi ${name}`,
});

const member = (m: Member): Tile => ({ kind: "member", member: m });

export const divisions: Division[] = [
  {
    id: "dpl",
    name: "DPL",
    subtitle: "Dosen Pembimbing Lapangan",
    tiles: [
      { kind: "placeholder", title: "DPL", caption: "Data menyusul" },
      { kind: "placeholder", title: "Foto DPL", caption: "Foto menyusul" },
      { kind: "placeholder", title: "DPL", caption: "Data menyusul" },
    ],
  },
  {
    id: "bph",
    name: "BPH",
    subtitle: "Badan Pengurus Harian",
    tiles: [
      { kind: "image", src: teamLeftAsset.url, alt: "Meet Our Team — KKN Kelompok 117" },
      member({
        name: "Zidni",
        role: "Ketua",
        faculty: "Fakultas Keperawatan",
        program: "Keperawatan",
        photo: zidniAsset.url,
      }),
      { kind: "image", src: teamRightAsset.url, alt: "Meet Our Team — KKN Kelompok 117" },
      member({
        name: "Amalia",
        role: "Sekretaris",
        faculty: "Fakultas Ekonomi & Bisnis",
        program: "Manajemen",
        photo: amaliaAsset.url,
      }),
      banner(bgBphAsset.url, "BPH"),
      member({
        name: "Imelda",
        role: "Bendahara",
        faculty: "Fakultas Ekonomi & Bisnis",
        program: "Akuntansi",
        photo: imeldaAsset.url,
      }),
    ],
  },
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
        photo: nadiaAsset.url,
      }),
      banner(bgAcaraAsset.url, "Acara"),
      member({
        name: "Diah",
        role: "Acara",
        faculty: "Fakultas Kedokteran",
        program: "Kedokteran Umum",
        photo: diahAsset.url,
      }),
    ],
  },
  {
    id: "pdd",
    name: "PDD",
    subtitle: "Publikasi, Dekorasi & Dokumentasi",
    tiles: [
      member({
        name: "Himma",
        role: "PDD",
        faculty: "Fakultas Keperawatan",
        program: "Keperawatan",
        photo: null,
      }),
      { kind: "placeholder", title: "PDD", caption: "@117.kknunissula" },
      member({
        name: "Dhara",
        role: "PDD",
        faculty: "Fakultas Farmasi",
        program: "Farmasi",
        photo: null,
      }),
    ],
  },
  {
    id: "humas",
    name: "HUMAS",
    subtitle: "Hubungan Masyarakat",
    tiles: [
      member({
        name: "Afif",
        role: "Humas",
        faculty: "Fakultas Agama Islam",
        program: "Hukum Islam",
        photo: null,
      }),
      { kind: "placeholder", title: "HUMAS", caption: "@117.kknunissula" },
      member({
        name: "Tariq",
        role: "Humas",
        faculty: "Fakultas Teknik",
        program: "Teknik Industri",
        photo: null,
      }),
    ],
  },
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
        photo: null,
      }),
      { kind: "placeholder", title: "PERKAP", caption: "@117.kknunissula" },
      member({
        name: "Nafis",
        role: "Perkap",
        faculty: "Fakultas Keperawatan",
        program: "Keperawatan",
        photo: null,
      }),
    ],
  },
];
