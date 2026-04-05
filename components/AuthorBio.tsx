import Image from "next/image";

interface AuthorBioProps {
  locale?: "en" | "es";
}

export default function AuthorBio({ locale = "en" }: AuthorBioProps) {
  const isEs = locale === "es";
  return (
    <div className="flex items-center gap-4 my-8 py-6 px-5 bg-amber-50 border border-amber-200 rounded-xl">
      <Image
        src="/images/marcus-chen.jpg"
        alt="Marcus Chen"
        width={64}
        height={64}
        className="w-16 h-16 rounded-full object-cover flex-shrink-0"
      />
      <div>
        <p className="font-semibold text-gray-900 text-sm">
          {isEs ? "Escrito por" : "Written by"}{" "}
          <span className="text-amber-800">Marcus Chen</span>
        </p>
        <p className="text-gray-600 text-xs mt-0.5">
          {isEs
            ? "Ingeniero de software en The Heights, Houston. Creó HoustonHomeRestore después de perder $47,000 por daño de agua y moho oculto tras el huracán Harvey."
            : "Software engineer in The Heights, Houston. Built HoustonHomeRestore after losing $47,000 to water damage and hidden mold following Hurricane Harvey."}
        </p>
      </div>
    </div>
  );
}
