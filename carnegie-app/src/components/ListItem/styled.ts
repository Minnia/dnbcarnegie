import styled from "@emotion/native";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-vertical: 12px;
  padding-horizontal: 16px;
  border-bottom-width: 1px;
  border-bottom-color: #e5e5e5;
`;

export const InstrumentName = styled.Text`
  font-size: 15px;
  font-weight: 400;
  color: #1a1a1a;
`;

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
${({ gap }) => gap && `gap: ${gap};`}
    `;
