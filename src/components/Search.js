"use client";
import { Box, Button, IconButton, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import Image from "next/image";
import ContentPasteRoundedIcon from "@mui/icons-material/ContentPasteRounded";
import { Download } from "@mui/icons-material";

const AirbnbSlider = styled(Slider)(({ theme }) => ({
    color: "#ffff00",
    height: 3,
    padding: "13px 0",
    "& .MuiSlider-thumb": {
        height: 37,
        width: 37,
        // backgroundColor: "#ffff00",
        // border: "1px solid currentColor",
        "&:hover": {
            boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
        },
        "& .airbnb-bar": {
            height: 9,
            width: 1,
            backgroundColor: "currentColor",
            marginLeft: 1,
            marginRight: 1,
        },
    },
    "& .MuiSlider-track": {
        height: 3,
    },
    "& .MuiSlider-rail": {
        color: theme.palette.mode === "dark" ? "#bfbfbf" : "#d8d8d8",
        opacity: theme.palette.mode === "dark" ? undefined : 1,
        height: 3,
    },
}));
function AirbnbThumbComponent(props) {
    const { children, ...other } = props;
    return (
        <SliderThumb {...other}>
            {children}
            <Image
                src={"/mini.png"}
                width={150}
                height={100}
                alt="sliderThumb "
            />
        </SliderThumb>
    );
}

AirbnbThumbComponent.propTypes = {
    children: PropTypes.node,
};

function Search() {
    const [show, setShow] = useState(false);
    const [value, setValue] = React.useState(30);
    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    // async function getImages() {
    //     const { data, error } = await supabase.storage.from("cat");
    //     console.log(data, "data");
    //     console.log(error, "error");
    // }

    // useEffect(() => {
    //     getImages();
    // });

    // const [data, setData] = useState(4);

    return (
        <>
            <div className="flex gap-4 justify-center">
                <input
                    type="text"
                    placeholder="Find a cat"
                    style={{
                        color: "#fff",
                        backgroundColor: "#8b684d",
                        outline: "none",
                        borderRadius: "8px",
                        padding: "8px",
                        fontSize: "30px",
                        maxWidth: "250px",
                    }}
                />
                <Button
                    variant="contained"
                    sx={{
                        borderRadius: "8px",
                        backgroundColor: "#8b684d",
                    }}
                    color="warning"
                >
                    Random <br /> Cat
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        borderRadius: "8px",
                        backgroundColor: "#8b684d",
                    }}
                    color="warning"
                    onClick={() => setShow(!show)}
                >
                    {show ? "Show" : "hide"} <br /> 18+
                </Button>
            </div>
            <Box sx={{ width: 300, margin: "12px auto" }}>
                {" "}
                <AirbnbSlider
                    slots={{ thumb: AirbnbThumbComponent }}
                    defaultValue={100}
                    onChange={handleSliderChange}
                    min={100}
                    max={350}
                />
            </Box>

            <Box
                sx={{
                    display: "flex",
                    gap: 4,
                    flexWrap: "wrap",
                    padding: " 20px",
                    margin: "40px",
                }}
            >
                {/* {data.map((item) => { */}
                <Box
                    sx={{
                        borderRadius: "8px",
                        // border: "2px solid #ffff00",
                        boxShadow: "0 0 2px #ffff00",
                        position: "relative",
                        "&:hover": {
                            boxShadow: "0px 0px 5px 2px #ffff00",
                        },
                    }}
                >
                    <Image
                        src={"/shop.gif"}
                        width={value * 2}
                        height={value * 2}
                        alt="c"
                    />
                    <Box sx={{ position: "absolute" }}>
                        <IconButton
                            sx={{
                                color: "#ffff00",
                            }}
                        >
                            <ContentPasteRoundedIcon />
                        </IconButton>
                        <IconButton sx={{ color: "#ffff00" }}>
                            <Download />
                        </IconButton>
                    </Box>
                </Box>
                <Box
                    sx={{
                        borderRadius: "8px",
                        // border: "2px solid #ffff00",
                        boxShadow: "0 0 2px #ffff00",
                        position: "relative",
                        "&:hover": {
                            boxShadow: "0px 0px 5px 2px #ffff00",
                        },
                    }}
                >
                    <Image
                        src={"/nub_meme_fading.png"}
                        width={value * 2}
                        height={value * 2}
                        alt="c"
                    />
                    <Box sx={{ position: "absolute" }}>
                        <IconButton
                            sx={{
                                color: "#ffff00",
                            }}
                        >
                            <ContentPasteRoundedIcon />
                        </IconButton>
                        <IconButton sx={{ color: "#ffff00" }}>
                            <Download />
                        </IconButton>
                    </Box>
                </Box>
                <Box
                    sx={{
                        borderRadius: "8px",
                        // border: "2px solid #ffff00",
                        boxShadow: "0 0 2px #ffff00",
                        position: "relative",
                        "&:hover": {
                            boxShadow: "0px 0px 5px 2px #ffff00",
                        },
                    }}
                >
                    <Image
                        src={"/nub_meme_nerd.png"}
                        width={value * 2}
                        height={value * 2}
                        alt="c"
                    />
                    <Box sx={{ position: "absolute" }}>
                        <IconButton
                            sx={{
                                color: "#ffff00",
                            }}
                        >
                            <ContentPasteRoundedIcon />
                        </IconButton>
                        <IconButton sx={{ color: "#ffff00" }}>
                            <Download />
                        </IconButton>
                    </Box>
                </Box>
                {/* })} */}
            </Box>
        </>
    );
}

export default Search;
