import React from "react";

export interface TextProps {
  label: string;
}

/** Primary UI component for user interaction */
export const Text = ({ label, ...props }: TextProps) => {
  return <h1 {...props}>{label}</h1>;
};
