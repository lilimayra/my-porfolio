import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { MouseEvent } from "react";

const navigation = [
  { name: "Sobre mí", href: "#SobreMi", current: false },
  { name: "Proyectos", href: "#Proyectos", current: false },
  { name: "Skills", href: "#Skills", current: false },
  { name: "Contacto", href: "#Contacto", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const handleScroll = (
    e:
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
      | MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Disclosure as="nav" className="navbar fixed top-0 w-full z-10 shadow-md">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-start">
            <div className="flex flex-shrink-0 items-center">
              <span className=" text-2xl font-bold">Mayra Sánchez</span>
            </div>
          </div>

          {/* Botón del menú móvil */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-[#4b4b4b] focus:outline-none focus:ring-2 focus:ring-transparent">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden text-[#4b4b4b]"
              />
            </DisclosureButton>
          </div>

          {/* Enlaces de navegación */}
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "bg-gold text-white"
                      : "relative text-gray-700 hover:text-green-dark",
                    "rounded-md px-3 py-2 text-sm  font-bold group"
                  )}
                >
                  {item.name}
                  <span
                    className="absolute left-0 bottom-0 h-[2px] w-0 bg-gold transition-all duration-300 group-hover:w-full"
                    aria-hidden="true"
                  ></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Panel de menú móvil */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2 text-zinc-950">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              onClick={(e: MouseEvent<HTMLAnchorElement, MouseEvent>) =>
                handleScroll(e, item.href)
              } // Scroll suave para el menú móvil también
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-blue-900 text-white"
                  : "relative text-custom-dark-gray hover:text-green-dark",
                "block rounded-md px-3 py-2 text-base text-center font-bold group"
              )}
            >
              {item.name}
              <span
                className="absolute left-0 bottom-0 h-[2px] w-0 bg-gold transition-all duration-300 group-hover:w-full"
                aria-hidden="true"
              ></span>
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
