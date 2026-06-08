export const Patchpanel = (props) => {
  return (
    <svg viewBox="0 0 380 35" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g transform="translate(1.0004 55.008)">
        <path
          fill="#333333"
          d="m3.5621-55.008c-2.5223 0-4.5625 2.0402-4.5625 4.5625v25.875c0 2.5223 2.0402 4.5625 4.5625 4.5625h370.88c2.5223 0 4.5625-2.0402 4.5625-4.5625v-25.875c0-2.5223-2.0402-4.5625-4.5625-4.5625h-370.88z"
        />

        <path
          fill="#b3b3b3"
          d="m17-44.008v12h112v-12h-112zm4 2h6v2h2v6h-10v-6h2v-2zm14 0h6v2h2v6h-10v-6h2v-2zm14 0h6v2h2v6h-10v-6h2v-2zm14 0h6v2h2v6h-10v-6h2v-2zm14 0h6v2h2v6h-10v-6h2v-2zm14 0h6v2h2v6h-10v-6h2v-2zm14 0h6v2h2v6h-10v-6h2v-2zm14 0h6v2h2v6h-10v-6h2v-2z"
        />

        <path
          fill="#b3b3b3"
          d="m133-44.008v12h112v-12h-112zm4 2h6v2h2v6h-10v-6h2v-2zm14 0h6v2h2v6h-10v-6h2v-2zm14 0h6v2h2v6h-10v-6h2v-2zm14 0h6v2h2v6h-10v-6h2v-2zm14 0h6v2h2v6h-10v-6h2v-2zm14 0h6v2h2v6h-10v-6h2v-2zm14 0h6v2h2v6h-10v-6h2v-2zm14 0h6v2h2v6h-10v-6h2v-2z"
        />

        <path
          fill="#b3b3b3"
          d="m249-44.008v12h112v-12h-112zm4 2h6v2h2v6h-10v-6h2v-2zm14 0h6v2h2v6h-10v-6h2v-2zm14 0h6v2h2v6h-10v-6h2v-2zm14 0h6v2h2v6h-10v-6h2v-2zm14 0h6v2h2v6h-10v-6h2v-2zm14 0h6v2h2v6h-10v-6h2v-2zm14 0h6v2h2v6h-10v-6h2v-2zm14 0h6v2h2v6h-10v-6h2v-2z"
        />

        {[...Array(24)].map((_, i) => (
          <text
            key={i}
            x={i < 8 ? 22 + i * 14 : 138 + (i - 8) * 14}
            y="-26"
            fill="#fff"
            fontSize="6"
            fontFamily="Verdana"
          >
            {i + 1}
          </text>
        ))}

        <text x="368" y="-36" fill="#fff" fontSize="6" fontFamily="Verdana">
          5e
        </text>
      </g>
    </svg>
  );
};
