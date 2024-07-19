import { FC } from 'react';

export enum Label {
    Quality,
    Individualism,
    Creativity,
    Support,
}

interface OrbitaIconProps {
    label: Label;
    isActive: boolean;
}

const OrbitaIcon: FC<OrbitaIconProps> = ({ label, isActive }) => {
    const strokeColor = isActive ? '#84c0ef' : '#a9a9a9';

    switch (label) {
        case Label.Quality:
            return (
                <svg
                    width="668"
                    height="490"
                    viewBox="0 0 668 490"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.56"
                        d="M618.709 394.416C645.433 342.086 536.11 232.727 374.53 150.157C212.951 67.5871 60.3007 43.073 33.577 95.4033C6.85329 147.734 116.176 257.092 277.755 339.662C439.335 422.232 591.985 446.746 618.709 394.416Z"
                        stroke={strokeColor}
                        strokeMiterlimit="10"
                    />
                    <circle cx="411" cy="170" r="4" fill="#84C0EF" />
                </svg>
            );
        case Label.Individualism:
            return (
                <svg
                    width="383"
                    height="507"
                    viewBox="0 0 383 507"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.56"
                        d="M258.413 292.115C326.714 173.775 351.979 60.4553 314.843 39.0081C277.708 17.5608 192.236 96.1079 123.935 214.448C55.6343 332.788 30.3696 446.108 67.5049 467.555C104.64 489.003 190.113 410.455 258.413 292.115Z"
                        stroke={strokeColor}
                        strokeMiterlimit="10"
                    />
                    <circle cx="225" cy="346" r="4" fill="#84C0EF" />
                </svg>
            );

        case Label.Creativity:
            return (
                <svg
                    width="664"
                    height="467"
                    viewBox="0 0 664 467"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.56"
                        d="M376.679 320.046C535.346 239.139 644.18 134.712 619.766 86.8019C595.352 38.8916 446.936 65.6407 288.269 146.548C129.602 227.455 20.7679 331.882 45.1817 379.792C69.5956 427.703 218.012 400.954 376.679 320.046Z"
                        stroke={strokeColor}
                        strokeMiterlimit="10"
                    />
                    <circle cx="49" cy="385" r="4" fill="#84C0EF" />
                </svg>
            );

        case Label.Support:
            return (
                <svg
                    width="786"
                    height="211"
                    viewBox="0 0 786 211"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.56"
                        d="M393.092 210.13C609.542 210.13 785.009 163.42 785.009 105.8C785.009 48.1802 609.542 1.47021 393.092 1.47021C176.643 1.47021 1.17578 48.1802 1.17578 105.8C1.17578 163.42 176.643 210.13 393.092 210.13Z"
                        stroke={strokeColor}
                        strokeMiterlimit="10"
                    />
                    <circle cx="626" cy="190" r="4" fill="#84C0EF" />
                </svg>
            );
    }
};

export default OrbitaIcon;
