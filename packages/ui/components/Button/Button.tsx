import * as stylex from "@stylexjs/stylex";

export const Button = () => {
  return <button {...stylex.props(S.button)}>Click Me</button>;
};

const S = stylex.create({
  button: {
    backgroundColor: {
      default: "lightblue",
      ":hover": "blue",
      ":active": "darkblue",
    },
  },
});
