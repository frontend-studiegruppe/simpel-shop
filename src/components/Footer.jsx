import { BiLogoLinkedin, BiLogoInstagram, BiLogoFacebook } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-secondary-cherry-dark text-white px-6 py-20">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center sm:items-start text-center sm:text-left gap-y-10 sm:gap-y-0 sm:gap-x-10">
        <div className="space-y-4 min-w-[250px]">
          <h2 className="text-xl font-semibold">Studio Rouge</h2>
          <ul className="list-none space-y-1 text-sm">
            <li>studiorougemail@gmail.com</li>
            <li>+45 45454545</li>
            <li>Anadresse to place 444, 35688 City</li>
          </ul>
        </div>
        <div className="flex flex-col space-y-4 max-w-[100px] min-w-[250px]">
          <p className="text-sm">Any questions? Send us a mail, or follow us on social media for more information!</p>
          <div className="flex justify-center sm:justify-start space-x-4 text-2xl">
            <BiLogoLinkedin />
            <BiLogoFacebook />
            <BiLogoInstagram />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
