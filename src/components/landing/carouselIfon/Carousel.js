import { useState } from "react"
import Info from "./Info"
import Cambio from "./images/changes.svg"
import Card from "./images/card.svg"
import Shipping from "./images/shipping.svg"
import Location from "./images/location.svg"



const infoArr = [
    {
        "svg": Cambio,
        "infoBold": "Primer cambio sin cargo",
        "infoPlain": " Si preferís otro color o talle"
    },
    {
        "svg": Card,
        "infoBold": "Financiacion",
        "infoPlain": " En hasta 3 y 6 cuotas"
    },
    {
        "svg": Shipping,
        "infoBold": "Envio a domicilio",
        "infoPlain": " A todo el pais"
    },
    {
        "svg": Location,
        "infoBold": "Retirá gratis",
        "infoPlain": " En puntos de retiro"
    },
]

const Carousel = () => {
    const [infoNumber, setInfoNumber] = useState(2)
    const HandleLeft = () => {
        if (infoNumber !== 0) {
            setInfoNumber(infoNumber - 1)
        }
        else {
            setInfoNumber(3)
        }
    }
    const HandleRight = () => {
        if (infoNumber !== 3) {
            setInfoNumber(infoNumber + 1)
        } else {
            setInfoNumber(0)
        }
    }
    return (
        <div className="carousel__flex">
            {/* Left ARROW */}
            <svg onClick={HandleLeft} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_0_1)">
                    <circle cx="20" cy="16" r="14" transform="rotate(180 20 16)" fill="#F2F2F2" />
                </g>
                <path d="M22.333 9L15.333 16L22.333 23" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <defs>
                    <filter id="filter0_d_0_1" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="3" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
                    </filter>
                </defs>
            </svg>
            {/* Icons and Info */}
            <Info {...infoArr[infoNumber]} />
            {/* Right ARROW */}
            <svg onClick={HandleRight} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d_0_1)">
                    <circle cx="20" cy="16" r="14" fill="#F2F2F2" />
                </g>
                <path d="M17.667 23L24.667 16L17.667 9" stroke="#222222" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <defs>
                    <filter id="filter0_d_0_1" x="0" y="0" width="40" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="3" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
                    </filter>
                </defs>
            </svg>
        </div>
    )
}

export default Carousel