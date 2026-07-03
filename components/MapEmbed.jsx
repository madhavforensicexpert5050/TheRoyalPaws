import { siteConfig } from "@/data/siteConfig";

export default function MapEmbed({ title = "The Royal Paws location map" }) {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl shadow-card" style={{ paddingBottom: "75%" }}>
      <iframe
        src={siteConfig.mapEmbedSrc}
        title={title}
        width="600"
        height="450"
        style={{ border: 0, position: "absolute", inset: 0, width: "100%", height: "100%" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
