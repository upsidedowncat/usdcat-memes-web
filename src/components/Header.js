import Image from "next/image";
import React from "react";

function Header() {
    return (
        <>
            <div className="flex justify-between">
                <div className="flex items-center">
                    <Image
                        width={90}
                        height={90}
                        alt="Logo"
                        src={"/logo.png"}
                    />
                    <h1
                        className="text-3xl font-bold text-yellow-300 stroke-black "
                        style={{
                            textShadow: "3px 3px 3px #000 ",
                        }}
                    >
                        UpSideDownCat
                    </h1>
                </div>
                <div className="flex items-center">
                    <Image
                        width={90}
                        height={90}
                        alt="Logo"
                        src={"/shop.gif"}
                    />
                    <Image
                        width={90}
                        height={90}
                        alt="Logo"
                        src={"/head.png"}
                    />
                </div>
            </div>
        </>
    );
}

export default Header;
