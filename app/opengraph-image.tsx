import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#050505",
          padding: "90px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            left: 120,
            width: 460,
            height: 460,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,240,255,0.28) 0%, rgba(0,240,255,0) 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -160,
            right: 60,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(112,0,255,0.28) 0%, rgba(112,0,255,0) 70%)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 62,
              height: 62,
              borderRadius: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              background:
                "linear-gradient(135deg, rgba(0,240,255,0.22), rgba(112,0,255,0.22))",
              border: "1px solid rgba(0,240,255,0.35)",
            }}
          >
            <div
              style={{
                width: 11,
                height: 11,
                borderRadius: "50%",
                background: "#00f0ff",
                display: "flex",
              }}
            />
            <div
              style={{
                width: 11,
                height: 11,
                borderRadius: "50%",
                background: "#00f0ff",
                display: "flex",
              }}
            />
          </div>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 700, color: "#fff" }}>
            rootbusiness
            <span style={{ color: "#00f0ff" }}>ai</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 46,
            fontSize: 58,
            fontWeight: 800,
            lineHeight: 1.15,
            color: "#fff",
            maxWidth: 920,
          }}
        >
          Escalamos tu negocio con Inteligencia Artificial Autónoma
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 26,
            color: "#a1a1aa",
            maxWidth: 760,
          }}
        >
          Agentes de IA, chatbots avanzados y automatización empresarial
          para PyMEs y grandes empresas.
        </div>
      </div>
    ),
    { ...size }
  );
}
