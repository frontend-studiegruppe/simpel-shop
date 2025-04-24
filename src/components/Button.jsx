//Katinka

const Button = ({ children, variant, onClick }) => {
  const variants = {
    primary:
      "py-4 px-8 bg-[var(--color-secondary-cherry-light)] text-white text-xl border-2 border-secondary-cherry-light border- hover:bg-white hover:text-[var(--color-secondary-cherry-light)] hover:border-2 hover:border-[var(--color-secondary-cherry-light)]",
    secondary:
      "justify-center px-10 text-m bg-white text-[var(--color-secondary-cherry-light)] border-2 border-[var(--color-secondary-cherry-light)] hover:bg-[var(--color-secondary-cherry-light)] hover:text-white",
    active:
      "bg-[var(--color-secondary-cherry-light)] px-10 text-m text-white border-2 border-[var(--color-secondary-cherry-light)]",
  };
  return (
    <div className={`w-40 flex shrink-0 cursor-pointer ${variants[variant]}`}>
      {children}
    </div>
  );
};

export default Button;
