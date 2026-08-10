import { createFileRoute } from "@tanstack/react-router";

import MainLayout from "@/layouts/MainLayout";
import Kegiatan from "@/pages/Kegiatan";

export const Route = createFileRoute("/kegiatan")({
  head: () => ({
    meta: [
      { title: "Kegiatan Pendukung — KKN Kelompok 117 Kaligawe" },
      {
        name: "description",
        content:
          "Lomba RT, kegiatan TPQ, kerja bakti, bersih-bersih kelurahan, dan kegiatan sosial bersama masyarakat Kaligawe.",
      },
      { property: "og:title", content: "Kegiatan Pendukung — KKN Kelompok 117 Kaligawe" },
      {
        property: "og:description",
        content: "Lebih dari sekadar program kerja: kegiatan bersama masyarakat Kaligawe.",
      },
    ],
  }),
  component: () => (
    <MainLayout>
      <Kegiatan />
    </MainLayout>
  ),
});
