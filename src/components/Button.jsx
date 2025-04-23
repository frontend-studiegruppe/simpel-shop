//Katinka
//Skal secondary button have samme width eller w-fit?
//OBS sørge for at active secondary button får samme styling som hover

const Button = ({ children, variant }) => {
  const variants = {
    primary:
      "py-4 px-8 bg-[var(--color-secondary-cherry-light)] text-white text-xl hover:bg-white hover:text-[var(--color-secondary-cherry-light)] hover:border-2 hover:border-[var(--color-secondary-cherry-light)]",
    secondary:
      "px-10 text-m bg-white text-[var(--color-secondary-cherry-light)] border-2 border-[var(--color-secondary-cherry-light)] hover:bg-[var(--color-secondary-cherry-light)] hover:text-white",
    tertiary: "",
  };
  return (
    <div className={`w-fit  shrink-0 cursor-pointer ${variants[variant]}`}>
      {children}
    </div>
  );
};

export default Button;
