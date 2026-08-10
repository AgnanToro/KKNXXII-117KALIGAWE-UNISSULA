import { createFileRoute } from "@tanstack/react-router";

import MainLayout from "@/layouts/MainLayout";
import Profil from "@/pages/Profil";

export const Route = createFileRoute("/profil")({
  head: () => ({
    meta: [
      { title: "Profil Kelompok 117 — KKN Kaligawe UNISSULA" },
      {
        name: "description",
        content:
          "Profil KKN Kelompok 117 Kaligawe: identitas kelompok, lokasi pengabdian di Kelurahan Kaligawe, dan nilai yang kami bawa.",
      },
      { property: "og:title", content: "Profil Kelompok 117 — KKN Kaligawe UNISSULA" },
      {
        property: "og:description",
        content: "Mahasiswa KKN Tematik XXII UNISSULA yang belajar bersama masyarakat Kaligawe.",
      },
    ],
  }),
  component: () => (
    <MainLayout>
      <Profil />
    </MainLayout>
  ),
});
