import { createFileRoute } from "@tanstack/react-router";

import MainLayout from "@/layouts/MainLayout";
import Galeri from "@/pages/Galeri";

export const Route = createFileRoute("/galeri")({
  head: () => ({
    meta: [
      { title: "Galeri Dokumentasi — KKN Kelompok 117 Kaligawe" },
      {
        name: "description",
        content:
          "Galeri dokumentasi perjalanan KKN Kelompok 117 bersama masyarakat Kelurahan Kaligawe.",
      },
      { property: "og:title", content: "Galeri Dokumentasi — KKN Kelompok 117 Kaligawe" },
      { property: "og:description", content: "Jejak perjalanan Kelompok 117 di Kaligawe." },
    ],
  }),
  component: () => (
    <MainLayout>
      <Galeri />
    </MainLayout>
  ),
});
