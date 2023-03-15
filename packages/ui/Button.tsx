import * as React from "react";
export const Button: React.FC<{ disabled: boolean }> = ({ disabled }) => {
  return <button disabled={disabled}>Boop</button>;
};
