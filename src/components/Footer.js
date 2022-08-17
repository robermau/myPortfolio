import { Disclosure } from "@headlessui/react";

import { BsEnvelope } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { Link as LinkRouter } from 'react-router-dom';

const navigation = [
    { name: "Home", to: "/", current: false },
    { name: "Projects", to: "/projects", current: false },
    { name: "Contacts", to: "/contacts", current: false }
    ,
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

export default function Footer() {
    return (

        <Disclosure
            as="footer"
            className=" bg-black justify-evenly pb-10  pt-10 items-center flex flex-row     " >
            <div className=" text-5xl flex flex-row w-60 justify-evenly text-white">
               
                <BsEnvelope />
                <BsLinkedin />
                <BsGithub />
            </div>

            {navigation.map((item) => (
                <LinkRouter to={item.to} key={item.name}
                    as="a"
                    className={classNames(
                        item.current
                            ? "bg-gray-900 text-white "
                            :  "z-10 px-10 py-2 mr-4  font-normal w-40 text-white border border-white font-text  hover:bg-white hover:text-black hover:border-transparent",
                        "font-medium   rounded-3xl ")}
                    aria-current={item.current ? "page" : undefined}>
                    {item.name}
                </LinkRouter>
            ))}
            <p className=" text-white"> © All rights reserved</p>

        </Disclosure>
    );
}