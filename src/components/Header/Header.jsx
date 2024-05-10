"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { RxChevronDown } from "react-icons/rx";
import { MenuNames } from "../../../data";

const Header = () => {
  const [openMenus, setOpenMenus] = useState({}); // State to track open/closed state of each menu
  const pathname = usePathname();

  const isActiveLink = (href) => {
    return href === pathname;
  };

  const toggleMenu = (menuId) => {
    setOpenMenus((prevOpenMenus) => ({
      ...prevOpenMenus,
      [menuId]: !prevOpenMenus[menuId],
    }));
  };

  return (
    <div className="text-white">
      <NavigationMenu.Root>
        <NavigationMenu.List className="flex flex-wrap flex-col lg:flex-row gap-2 lg:gap-5 justify-between max-lg:p-5 max-lg:overflow-auto max-lg:bg-blue-300">
          {MenuNames?.length > 0
            ? MenuNames?.map((MenuName) => {
                return MenuName?.dropDown?.length > 0 ? (
                  <NavigationMenu.Item className="relative" key={MenuName?.id}>
                    <div className="max-lg:rounded-md max-lg:shadow-xl max-lg:p-5">
                      <NavigationMenu.Trigger>
                        <Link
                          href={MenuName?.link}
                          className="flex items-center gap-1 group max-lg:z-40"
                          onMouseEnter={() => toggleMenu(MenuName.id)}
                          onMouseLeave={() => toggleMenu(MenuName.id)}
                        >
                          <span>{MenuName?.name}</span>
                          <RxChevronDown
                            className={`text-2xl font-bold transition-transform  ease-in ${
                              openMenus[MenuName.id] ? "-rotate-180" : ""
                            }`}
                            aria-hidden
                          />
                        </Link>
                      </NavigationMenu.Trigger>
                      <NavigationMenu.Content className="text-white bg-green-400 p-3 text-start  w-[225px] absolute top-[41px] lg:rounded-b-md max-lg:rounded-md max-lg:w-2/3 max-lg:p-5 max-lg:bg-green-400 max-lg:z-50">
                        <ul className="flex flex-col gap-2 lg:gap-3">
                          {MenuName?.dropDown.map((droplink) => {
                            return (
                              <li key={droplink?.id}>
                                <NavigationMenu.Link asChild>
                                  <Link href={droplink?.link}>
                                    {droplink?.name}
                                  </Link>
                                </NavigationMenu.Link>
                              </li>
                            );
                          })}
                        </ul>
                      </NavigationMenu.Content>
                    </div>
                  </NavigationMenu.Item>
                ) : (
                  <NavigationMenu.Item key={MenuName?.id}>
                    <NavigationMenu.Link asChild>
                      <div className="max-lg:rounded-md max-lg:shadow-xl max-lg:p-5">
                        <Link
                          href={MenuName?.link}
                          className={
                            isActiveLink(`${MenuName?.link}`)
                              ? "font-bold text-amber-950"
                              : ""
                          }
                        >
                          {MenuName?.name}
                        </Link>
                      </div>
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                );
              })
            : "Loading"}
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </div>
  );
};

export default Header;
