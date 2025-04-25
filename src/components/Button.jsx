//Katinka

const Button = ({ children, variant, onClick }) => {
  const variants = {
    primary:
      "py-4 px-8 bg-[var(--color-secondary-cherry-light)] text-white text-xl border-2 border-secondary-cherry-light border- hover:bg-white hover:text-[var(--color-secondary-cherry-light)] hover:border-2 hover:border-[var(--color-secondary-cherry-light)]",
    secondary:
      "px-10 text-m bg-white text-[var(--color-secondary-cherry-light)] border-2 border-[var(--color-secondary-cherry-light)] hover:bg-[var(--color-secondary-cherry-light)] hover:text-white",
    active:
      "bg-[var(--color-secondary-cherry-light)] px-10 text-m text-white border-2 border-[var(--color-secondary-cherry-light)]",
    card_hover_btn:
      "border-2 border-white text-white py-2 px-4 hover:bg-white hover:text-primary-black",
  };
  return (
    <button
      className={`min-w-40 w-fit flex items-center justify-center shrink-0 cursor-pointer transition duration-200 ease-in-out ${variants[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
