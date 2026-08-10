import { createFileRoute } from "@tanstack/react-router";

import MainLayout from "@/layouts/MainLayout";
import Kontak from "@/pages/Kontak";

export const Route = createFileRoute("/kontak")({
  head: () => ({
    meta: [
      { title: "Kontak — KKN Kelompok 117 Kaligawe UNISSULA" },
      {
        name: "description",
        content:
          "Terhubung bersama KKN Kelompok 117 Kaligawe: lokasi pengabdian dan media sosial Instagram serta TikTok.",
      },
      { property: "og:title", content: "Kontak — KKN Kelompok 117 Kaligawe UNISSULA" },
      { property: "og:description", content: "Ikuti perjalanan KKN Kelompok 117 di Kaligawe." },
    ],
  }),
  component: () => (
    <MainLayout>
      <Kontak />
    </MainLayout>
  ),
});
