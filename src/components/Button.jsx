//Katinka

const Button = ({ children, variant }) => {
  const variants = {
    primary:
      "py-4 px-8 bg-[var(--color-secondary-cherry-light)] text-white text-xl hover:bg-white hover:text-[var(--color-secondary-cherry-light)] hover:border-2 hover:border-[var(--color-secondary-cherry-light)]",
    secondary:
      "justify-center px-10 text-m bg-white text-[var(--color-secondary-cherry-light)] border-2 border-[var(--color-secondary-cherry-light)] hover:bg-[var(--color-secondary-cherry-light)] hover:text-white",
  };
  return (
    <div className={`w-40 flex shrink-0 cursor-pointer ${variants[variant]}`}>
      {children}
    </div>
  );
};

export default Button;
