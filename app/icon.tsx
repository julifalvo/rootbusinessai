import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 5,
          backgroundColor: "#0a0a0c",
          borderRadius: 7,
        }}
      >
        <div
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#00f0ff",
            display: "flex",
          }}
        />
        <div
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: "#00f0ff",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
