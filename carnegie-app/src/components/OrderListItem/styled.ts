import styled from "@emotion/native";

export const Section = styled.View<{
  position: "left" | "center" | "right";
  margin?: number;
  gap: number;
}>`
left
${({ position }) =>
  position === "left"
    ? `
   flex: 1;
    margin-left: 12px;
`
    : `
  align-items: flex-end;
`}
${({ gap }) => gap && `gap: ${gap}px;`}
    `;
