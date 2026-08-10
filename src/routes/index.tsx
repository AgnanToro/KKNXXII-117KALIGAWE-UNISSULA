import { createFileRoute } from "@tanstack/react-router";

import MainLayout from "@/layouts/MainLayout";
import Home from "@/pages/Home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KKN Kelompok 117 Kaligawe — KKN Tematik XXII UNISSULA" },
      {
        name: "description",
        content:
          "Website resmi KKN Kelompok 117 Kaligawe, KKN Tematik XXII UNISSULA. Profil, program kerja, kegiatan, dan dokumentasi pengabdian di Kelurahan Kaligawe.",
      },
      { property: "og:title", content: "KKN Kelompok 117 Kaligawe — KKN Tematik XXII UNISSULA" },
      {
        property: "og:description",
        content: "Menuju Kaligawe yang lebih hijau, lebih sehat, dan lebih berdaya.",
      },
    ],
  }),
  component: () => (
    <MainLayout>
      <Home />
    </MainLayout>
  ),
});
