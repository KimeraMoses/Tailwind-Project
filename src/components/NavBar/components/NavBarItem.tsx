import React from "react";
import { Link } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment } from "react";
import * as types from "@interface/models";
export const classNames = (...classes: any) => {
  return classes.filter(Boolean).join(" ");
};

export const NavBarComponent = ({ children, submenu = [] }: any) => {
  return (
    <Popover className="relative ">
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? "text-gray-900" : "text-gray-500",
              "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            )}
          >
            <span className="xl:text-xl md:text-md transition-all hover:text-accent ">
              {children}
            </span>
            <ChevronDownIcon
              className={classNames(
                open ? "text-gray-600" : "text-gray-400",
                "ml-2 h-5 w-5 group-hover:text-gray-500"
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform w-60  max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden ">
                <div className=" bg-white  divide-y divide-background">
                  {submenu.map((item: any) => (
                    <div className="p-2" key={item.name}>
                      <Popover.Button>
                        <Link
                          to={item.href}
                          className="
                      transition-all
                    hover:text-accent
                      "
                        >
                          {item.name}
                        </Link>
                      </Popover.Button>
                    </div>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};
