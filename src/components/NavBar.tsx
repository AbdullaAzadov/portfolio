import { Card } from "./ui/card";
import { IconLogo } from "./icons/logo";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { clsx } from "clsx";

export default function NavBar() {
  const [isActive, setIsActive] = useState<boolean>(true);
  const location = useLocation().pathname;

  return (
    <header className="flex min-w-full items-center">
      <Card className="z-10 rounded-full p-2 sm:mr-2">
        <motion.div animate={{ rotate: isActive ? 90 : 0 }}>
          <IconLogo
            isActive={isActive}
            onClick={() => setIsActive(!isActive)}
          />
        </motion.div>
      </Card>

      <motion.div
        animate={{
          x: isActive ? 0 : "-3rem",
          flexGrow: isActive ? 1 : 0,
          opacity: isActive ? 1 : 0,
          display: isActive ? "block" : "none",
          transition: {
            duration: 1.125,
            ease: "anticipate",
          },
        }}
        className="relative z-0 min-h-12 flex-1"
      >
        <Card className="absolute flex max-h-12 w-full items-center justify-between rounded-3xl px-4 py-3">
          <Link
            to="/"
            className={clsx(location === "/" ? styleActiveLink : styleLink)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={clsx(
              location === "/about" ? styleActiveLink : styleLink,
            )}
          >
            About
          </Link>
          <Link
            to="/portfolio"
            className={clsx(
              location === "/portfolio" ? styleActiveLink : styleLink,
            )}
          >
            Portfolio
          </Link>
          <Link
            to="/contact"
            className={clsx(
              location === "/contact" ? styleActiveLink : styleLink,
            )}
          >
            Contact
          </Link>
        </Card>
      </motion.div>
    </header>
  );
}

const styleLink = "text-xs font-bold uppercase text-stone-200 sm:text-sm";
const styleActiveLink =
  "text-xs font-bold uppercase sm:text-sm text-red-500 drop-shadow-md";
