interface FooterProps {
  className?: string;
}

function Footer({ className }: FooterProps) {
  return (
    <div className={`bg-google-gray-100 h-[10%] ${className}`}>
      <div className="w-full h-1/2 flex items-center ps-5 border-b border-google-gray-50">
        Polska
      </div>
      <div className="w-full h-1/2 flex items-center gap-5 px-5">
        <a>Reklamuj się</a>
        <a>Dla firm</a>
        <a>Jak działa wyszukiwarka</a>
        <div className="flex-1 flex justify-center">
          <a href="" className="text-center">
            Już 30 lat działamy na rzecz klimatu: zobacz, co robimy
          </a>
        </div>
        <a>Prywatność </a>
        <a>Warunki</a>
        <a>Ustawienia</a>
      </div>
    </div>
  );
}

export default Footer;
