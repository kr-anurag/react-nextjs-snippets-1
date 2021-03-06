import { FC } from 'react'

interface Props {
  className: string
}

export const GitHubIcon: FC<Props> = ({ className, ...otherProps }) => {
  return (
    <svg
      className={className}
      {...otherProps}
      width="50"
      height="52"
      viewBox="0 0 50 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>GitHub Icon</title>
      <path
        d="M16.7238 39.8718C16.7238 40.0725 16.4919 40.233 16.1996 40.233C15.8669 40.2631 15.6351 40.1026 15.6351 39.8718C15.6351 39.6712 15.8669 39.5106 16.1593 39.5106C16.4617 39.4805 16.7238 39.6411 16.7238 39.8718ZM13.5887 39.4203C13.5181 39.621 13.7198 39.8518 14.0222 39.912C14.2843 40.0123 14.5867 39.912 14.6472 39.7113C14.7077 39.5106 14.5161 39.2799 14.2137 39.1896C13.9516 39.1193 13.6593 39.2197 13.5887 39.4203ZM18.0444 39.2498C17.752 39.32 17.5504 39.5106 17.5806 39.7414C17.6109 39.9421 17.873 40.0725 18.1754 40.0023C18.4677 39.932 18.6694 39.7414 18.6391 39.5407C18.6089 39.3501 18.3367 39.2197 18.0444 39.2498ZM24.6774 0.802643C10.6956 0.802643 0 11.3676 0 25.2836C0 36.4104 7.03629 45.9319 17.0867 49.283C18.377 49.5137 18.8306 48.7211 18.8306 48.0689C18.8306 47.4469 18.8004 44.0155 18.8004 41.9086C18.8004 41.9086 11.744 43.4135 10.2621 38.9187C10.2621 38.9187 9.1129 35.999 7.45968 35.2465C7.45968 35.2465 5.15121 33.6713 7.62097 33.7014C7.62097 33.7014 10.131 33.9021 11.5121 36.29C13.7198 40.1628 17.4194 39.0491 18.8609 38.3869C19.0927 36.7816 19.748 35.6679 20.4738 35.0057C14.8387 34.3837 9.15323 33.571 9.15323 23.9191C9.15323 21.16 9.91936 19.7754 11.5323 18.0095C11.2702 17.3574 10.4133 14.6685 11.7944 11.197C13.9012 10.5449 18.75 13.906 18.75 13.906C20.7661 13.3441 22.9335 13.0532 25.0806 13.0532C27.2278 13.0532 29.3952 13.3441 31.4113 13.906C31.4113 13.906 36.2601 10.5348 38.3669 11.197C39.748 14.6785 38.8911 17.3574 38.629 18.0095C40.2419 19.7854 41.2298 21.17 41.2298 23.9191C41.2298 33.6011 35.2923 34.3736 29.6573 35.0057C30.5847 35.7984 31.371 37.3033 31.371 39.6611C31.371 43.0423 31.3407 47.2261 31.3407 48.0489C31.3407 48.701 31.8044 49.4936 33.0847 49.2629C43.1653 45.9319 50 36.4104 50 25.2836C50 11.3676 38.6593 0.802643 24.6774 0.802643ZM9.79839 35.4071C9.66734 35.5074 9.69758 35.7382 9.86895 35.9288C10.0302 36.0893 10.2621 36.1596 10.3931 36.0291C10.5242 35.9288 10.494 35.698 10.3226 35.5074C10.1613 35.3469 9.92943 35.2766 9.79839 35.4071ZM8.70968 34.5944C8.63911 34.7248 8.73992 34.8853 8.94153 34.9857C9.10282 35.086 9.30444 35.0559 9.375 34.9154C9.44556 34.785 9.34476 34.6245 9.14314 34.5241C8.94153 34.464 8.78024 34.494 8.70968 34.5944ZM11.9758 38.1662C11.8145 38.2966 11.875 38.5976 12.1069 38.7882C12.3387 39.019 12.631 39.0491 12.7621 38.8886C12.8931 38.7581 12.8327 38.4572 12.631 38.2665C12.4093 38.0358 12.1069 38.0057 11.9758 38.1662ZM10.8266 36.6913C10.6653 36.7916 10.6653 37.0525 10.8266 37.2833C10.9879 37.514 11.2601 37.6144 11.3911 37.514C11.5524 37.3836 11.5524 37.1227 11.3911 36.892C11.25 36.6612 10.9879 36.5609 10.8266 36.6913Z"
        fill="white"
      />
    </svg>
  )
}

export const Logo: FC<Props> = ({ className, ...otherProps }) => {
  return (
    <svg
      className={className}
      {...otherProps}
      xmlns="http://www.w3.org/2000/svg"
      width="65"
      height="65"
      fill="none"
      viewBox="0 0 65 65"
    >
      <g clipPath="url(#clip0_1_3)">
        <rect width="65" height="65" fill="#1E2533" />
        <rect
          width="20.83"
          height="7.956"
          x="8.415"
          y="40.601"
          fill="#43B1E0"
          rx="2.701"
        />
        <rect
          width="20.83"
          height="7.956"
          x="-7.215"
          y="18.459"
          fill="#E06B45"
          rx="2.701"
        />
        <rect
          width="12.874"
          height="7.956"
          x=".74"
          y="29.573"
          fill="#E7B24D"
          rx="2.701"
        />
        <rect
          width="12.874"
          height="7.956"
          x="24.639"
          y="7.324"
          fill="#2E3E5C"
          rx="2.701"
        />
        <rect
          width="35.276"
          height="7.956"
          x="-15.284"
          y="-3.81"
          fill="#2E3E5C"
          rx="2.701"
        />
        <rect
          width="25.746"
          height="7.956"
          x="47.658"
          y="-3.81"
          fill="#2E3E5C"
          rx="2.701"
        />
        <rect
          width="12.874"
          height="7.956"
          x="7.118"
          y="62.797"
          fill="#E7B24D"
          rx="2.701"
        />
        <rect
          width="35.594"
          height="7.956"
          x="47.658"
          y="62.797"
          fill="#43B1E0"
          rx="2.701"
        />
        <rect
          width="12.874"
          height="7.956"
          x="-7.609"
          y="40.601"
          fill="#2E3E5C"
          rx="2.701"
        />
        <rect
          width="12.874"
          height="7.956"
          x="50.352"
          y="40.601"
          fill="#E7B24D"
          rx="2.701"
        />
        <rect
          width="20.83"
          height="7.956"
          x="23.411"
          y="-3.81"
          fill="#E06B45"
          rx="2.701"
        />
        <rect
          width="12.874"
          height="7.956"
          x="50.352"
          y="18.459"
          fill="#2E3E5C"
          rx="2.701"
        />
        <rect
          width="20.83"
          height="7.956"
          x=".74"
          y="7.324"
          fill="#43B1E0"
          rx="2.701"
        />
        <rect
          width="20.83"
          height="7.956"
          x="23.411"
          y="62.797"
          fill="#2E3E5C"
          rx="2.701"
        />
        <rect
          width="20.83"
          height="7.956"
          x="-17.13"
          y="62.797"
          fill="#2E3E5C"
          rx="2.701"
        />
        <rect
          width="20.83"
          height="7.956"
          x="40.583"
          y="7.324"
          fill="#43B1E0"
          rx="2.701"
        />
        <rect
          width="20.83"
          height="7.956"
          x="50.352"
          y="29.573"
          fill="#43B1E0"
          rx="2.701"
        />
        <rect
          width="20.83"
          height="7.956"
          x="14.874"
          y="51.683"
          fill="#2E3E5C"
          rx="2.701"
        />
        <rect
          width="20.83"
          height="7.956"
          x="38.853"
          y="51.683"
          fill="#43B1E0"
          rx="2.701"
        />
        <rect
          width="12.874"
          height="7.956"
          x="-1.15"
          y="51.683"
          fill="#43B1E0"
          rx="2.701"
        />
        <rect
          width="12.874"
          height="7.956"
          x="62.833"
          y="51.683"
          fill="#E06B45"
          rx="2.701"
        />
        <path
          fill="#F6FBFF"
          d="M17.2924 19.3221V36.3622C17.2924 37.1081 17.8971 37.7128 18.6431 37.7128H23.887C24.633 37.7128 25.2377 37.1081 25.2377 36.3622L25.2377 30.2395C25.2377 29.7277 25.9102 29.5389 26.1766 29.9758L37.0602 47.826C37.3054 48.2282 37.7424 48.4735 38.2134 48.4735H45.1273C46.2076 48.4735 46.8507 47.2683 46.2493 46.3709L27.6167 18.5701C27.366 18.1959 26.9452 17.9714 26.4948 17.9714H18.6431C17.8971 17.9714 17.2924 18.5761 17.2924 19.3221Z"
        />
        <path
          fill="#F6FBFF"
          d="M39.5502 18.0127H44.8661C45.612 18.0127 46.2167 18.6174 46.2167 19.3633V34.9848C46.2167 35.9914 44.9077 36.3818 44.3563 35.5397L38.6134 26.7695C38.3434 26.3572 38.1996 25.875 38.1996 25.3822V19.3633C38.1996 18.6174 38.8043 18.0127 39.5502 18.0127Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_3">
          <rect width="65" height="65" fill="#fff" />
        </clipPath>
      </defs>
    </svg>
  )
}

export const VsCodeIcon: FC<Props> = ({ className, ...otherProps }) => {
  return (
    <svg
      className={className}
      {...otherProps}
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      fill="none"
      viewBox="0 0 100 100"
    >
      <mask
        id="mask0"
        width="100"
        height="100"
        x="0"
        y="0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
      >
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M70.9119 99.3171C72.4869 99.9307 74.2828 99.8914 75.8725 99.1264L96.4608 89.2197C98.6242 88.1787 100 85.9892 100 83.5872V16.4133C100 14.0113 98.6243 11.8218 96.4609 10.7808L75.8725 0.873756C73.7862 -0.130129 71.3446 0.11576 69.5135 1.44695C69.252 1.63711 69.0028 1.84943 68.769 2.08341L29.3551 38.0415L12.1872 25.0096C10.589 23.7965 8.35363 23.8959 6.86933 25.2461L1.36303 30.2549C-0.452552 31.9064 -0.454633 34.7627 1.35853 36.417L16.2471 50.0001L1.35853 63.5832C-0.454633 65.2374 -0.452552 68.0938 1.36303 69.7453L6.86933 74.7541C8.35363 76.1043 10.589 76.2037 12.1872 74.9905L29.3551 61.9587L68.769 97.9167C69.3925 98.5406 70.1246 99.0104 70.9119 99.3171ZM75.0152 27.2989L45.1091 50.0001L75.0152 72.7012V27.2989Z"
          clipRule="evenodd"
        />
      </mask>
      <g mask="url(#mask0)">
        <path
          fill="#0065A9"
          d="M96.4614 10.7962L75.8569 0.875542C73.4719 -0.272773 70.6217 0.211611 68.75 2.08333L1.29858 63.5832C-0.515693 65.2373 -0.513607 68.0937 1.30308 69.7452L6.81272 74.754C8.29793 76.1042 10.5347 76.2036 12.1338 74.9905L93.3609 13.3699C96.086 11.3026 100 13.2462 100 16.6667V16.4275C100 14.0265 98.6246 11.8378 96.4614 10.7962Z"
        />
        <g filter="url(#filter0_d)">
          <path
            fill="#007ACC"
            d="M96.4614 89.2038L75.8569 99.1245C73.4719 100.273 70.6217 99.7884 68.75 97.9167L1.29858 36.4169C-0.515693 34.7627 -0.513607 31.9063 1.30308 30.2548L6.81272 25.246C8.29793 23.8958 10.5347 23.7964 12.1338 25.0095L93.3609 86.6301C96.086 88.6974 100 86.7538 100 83.3334V83.5726C100 85.9735 98.6246 88.1622 96.4614 89.2038Z"
          />
        </g>
        <g filter="url(#filter1_d)">
          <path
            fill="#1F9CF0"
            d="M75.8578 99.1263C73.4721 100.274 70.6219 99.7885 68.75 97.9166C71.0564 100.223 75 98.5895 75 95.3278V4.67213C75 1.41039 71.0564 -0.223106 68.75 2.08329C70.6219 0.211402 73.4721 -0.273666 75.8578 0.873633L96.4587 10.7807C98.6234 11.8217 100 14.0112 100 16.4132V83.5871C100 85.9891 98.6234 88.1786 96.4586 89.2196L75.8578 99.1263Z"
          />
        </g>
        <g style={{ mixBlendMode: 'overlay' }} opacity=".25">
          <path
            fill="url(#paint0_linear)"
            fillRule="evenodd"
            d="M70.8511 99.3171C72.4261 99.9306 74.2221 99.8913 75.8117 99.1264L96.4 89.2197C98.5634 88.1787 99.9392 85.9892 99.9392 83.5871V16.4133C99.9392 14.0112 98.5635 11.8217 96.4001 10.7807L75.8117 0.873695C73.7255 -0.13019 71.2838 0.115699 69.4527 1.44688C69.1912 1.63705 68.942 1.84937 68.7082 2.08335L29.2943 38.0414L12.1264 25.0096C10.5283 23.7964 8.29285 23.8959 6.80855 25.246L1.30225 30.2548C-0.513334 31.9064 -0.515415 34.7627 1.29775 36.4169L16.1863 50L1.29775 63.5832C-0.515415 65.2374 -0.513334 68.0937 1.30225 69.7452L6.80855 74.754C8.29285 76.1042 10.5283 76.2036 12.1264 74.9905L29.2943 61.9586L68.7082 97.9167C69.3317 98.5405 70.0638 99.0104 70.8511 99.3171ZM74.9544 27.2989L45.0483 50L74.9544 72.7012V27.2989Z"
            clipRule="evenodd"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d"
          width="116.727"
          height="92.246"
          x="-8.394"
          y="15.829"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="4.167" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            in2="BackgroundImageFix"
            mode="overlay"
            result="effect1_dropShadow"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow"
            mode="normal"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d"
          width="47.917"
          height="116.151"
          x="60.417"
          y="-8.076"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="4.167" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            in2="BackgroundImageFix"
            mode="overlay"
            result="effect1_dropShadow"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow"
            mode="normal"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear"
          x1="49.939"
          x2="49.939"
          y1=".258"
          y2="99.742"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export const JetBrainsIcon: FC<Props> = ({ className, ...otherProps }) => {
  return (
    <svg
      className={className}
      {...otherProps}
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 180 180"
    >
      <linearGradient
        id="a"
        x1="32.64"
        x2="82.77"
        y1="61.16"
        y2="85.54"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".21" stopColor="#fe2857" />
        <stop offset="1" stopColor="#293896" />
      </linearGradient>
      <linearGradient
        id="b"
        x1="17.38"
        x2="82.95"
        y1="69.86"
        y2="21.23"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#fe2857" />
        <stop offset=".01" stopColor="#fe2857" />
        <stop offset=".86" stopColor="#ff318c" />
      </linearGradient>
      <linearGradient
        id="c"
        x1="74.17"
        x2="160.27"
        y1="21.58"
        y2="99.76"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".02" stopColor="#ff318c" />
        <stop offset=".21" stopColor="#fe2857" />
        <stop offset=".86" stopColor="#fdb60d" />
      </linearGradient>
      <linearGradient
        id="d"
        x1="155.46"
        x2="55.07"
        y1="89.8"
        y2="158.9"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset=".01" stopColor="#fdb60d" />
        <stop offset=".86" stopColor="#fcf84a" />
      </linearGradient>
      <path
        fill="url(#a)"
        d="m81.56 83.71-41.35-35a15 15 0 1 0 -14.47 25.7h.15l.39.12 52.16 15.89a3.53 3.53 0 0 0 1.18.21 3.73 3.73 0 0 0 1.93-6.91z"
      />
      <path
        fill="url(#b)"
        d="m89.85 25.93a10.89 10.89 0 0 0 -16.85-9.18l-50.5 30.66a15 15 0 1 0 17.9 24l45.27-36.89.36-.3a10.93 10.93 0 0 0 3.82-8.29z"
      />
      <path
        fill="url(#c)"
        d="m163.29 92-76.62-73.79a10.91 10.91 0 1 0 -14.81 16l.14.12 81.4 68.58a7.36 7.36 0 0 0 12.09-5.65 7.39 7.39 0 0 0 -2.2-5.26z"
      />
      <path
        fill="url(#d)"
        d="m165.5 97.29a7.35 7.35 0 0 0 -11.67-6l-92.71 45.3a15 15 0 1 0 15.48 25.59l85.73-58.84a7.35 7.35 0 0 0 3.17-6.05z"
      />
      <path d="m60 60h60v60h-60z" />
      <g fill="#fff">
        <path d="m66.53 108.75h22.5v3.75h-22.5z" />
        <path d="m65.59 75.47 1.67-1.58a1.88 1.88 0 0 0 1.47.87c.64 0 1.06-.45 1.06-1.32v-5.92h2.58v5.94a3.44 3.44 0 0 1 -.92 2.63 3.52 3.52 0 0 1 -2.57 1 3.84 3.84 0 0 1 -3.29-1.62z" />
        <path d="m73.53 67.52h7.53v2.19h-5v1.43h4.49v2h-4.45v1.49h5v2.2h-7.6z" />
        <path d="m84.73 69.79h-2.8v-2.27h8.21v2.27h-2.81v7.09h-2.6z" />
        <path d="m66.63 80.58h4.42a3.47 3.47 0 0 1 2.55.83 2.09 2.09 0 0 1 .61 1.52 2.18 2.18 0 0 1 -1.45 2.09 2.27 2.27 0 0 1 1.86 2.29c0 1.69-1.31 2.69-3.55 2.69h-4.44zm5 2.89c0-.52-.42-.8-1.18-.8h-1.29v1.64h1.25c.78 0 1.24-.27 1.24-.81zm-.9 2.66h-1.57v1.73h1.62c.8 0 1.24-.31 1.24-.86-.02-.53-.4-.87-1.27-.87z" />
        <path d="m75.45 80.58h4.15a4.14 4.14 0 0 1 3.05 1 2.92 2.92 0 0 1 .83 2.18 3 3 0 0 1 -1.93 2.89l2.24 3.35h-3l-1.89-2.84h-.87v2.84h-2.6zm4 4.5c.87 0 1.4-.43 1.4-1.12 0-.75-.55-1.13-1.41-1.13h-1.39v2.27z" />
        <path d="m87.09 80.51h2.5l4 9.44h-2.79l-.67-1.69h-3.63l-.67 1.74h-2.71zm2.28 5.73-1.05-2.65-1.06 2.65z" />
        <path d="m94 80.55h2.6v9.37h-2.6z" />
        <path d="m97.56 80.55h2.44l3.37 5v-5h2.57v9.37h-2.27l-3.53-5.14v5.14h-2.58z" />
        <path d="m106.37 88.53 1.44-1.73a4.86 4.86 0 0 0 3 1.13c.71 0 1.08-.25 1.08-.65 0-.41-.3-.61-1.59-.91-2-.46-3.53-1-3.53-2.93 0-1.74 1.38-3 3.63-3a5.88 5.88 0 0 1 3.85 1.25l-1.25 1.78a4.56 4.56 0 0 0 -2.62-.92c-.63 0-.94.25-.94.6 0 .43.32.62 1.63.91 2.15.47 3.48 1.17 3.48 2.92 0 1.91-1.51 3-3.78 3a6.56 6.56 0 0 1 -4.4-1.45z" />
      </g>
      <path fill="none" d="m0 0h180v180h-180z" />
    </svg>
  )
}
