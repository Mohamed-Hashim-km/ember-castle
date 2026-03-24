import React from "react";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import RedirectTimer from "./RedirectTimer";

export const metadata: Metadata = {
  title: "Thank You | Hotel Éden",
  description: "Your stay is confirmed. Thank you for choosing Hotel Éden.",
};

const ThankYouPage = () => {
  return (
    <div className="relative min-h-dvh flex flex-col items-center justify-center bg-[#fdfdfd] overflow-hidden pt-[100px] md:pt-[120px]">
      <RedirectTimer />
      
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <svg 
          width="1284" 
          height="1083" 
          viewBox="0 0 1284 1083" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="object-cover w-full max-w-[800px] h-full opacity-20"
        >
          <path d="M644.6 1341.93C644.6 1341.93 645.409 1342.51 645.872 1342.74C759.889 1263.42 834.589 1131.36 834.589 981.844C834.589 832.327 759.889 700.387 645.872 620.945C531.739 700.271 457.154 832.327 457.154 981.844C457.154 1130.78 531.277 1262.38 644.6 1341.82V1341.93Z" stroke="#E2BA86" strokeWidth="3" strokeMiterlimit="10"/>
          <path d="M769.945 1212.77C738.029 1160.85 695.707 1115.98 645.868 1081.29C596.029 1115.98 553.706 1160.62 521.906 1212.42" stroke="#E2BA86" strokeWidth="3" strokeMiterlimit="10"/>
          <path d="M645.877 621.057V1083.83" stroke="#E2BA86" strokeWidth="3" strokeMiterlimit="10"/>
          <path d="M645.874 1105.11C656.986 1105.11 665.994 1096.11 665.994 1084.99C665.994 1073.88 656.986 1064.87 645.874 1064.87C634.761 1064.87 625.753 1073.88 625.753 1084.99C625.753 1096.11 634.761 1105.11 645.874 1105.11Z" fill="#E2BA86" stroke="#E2BA86" strokeWidth="3" strokeMiterlimit="10"/>
          <path d="M12.1874 239.115C12.1874 239.115 11.2623 239.578 10.7998 239.809C22.479 378.225 99.4924 509.009 229.004 583.71C358.401 658.41 510.115 659.798 635.926 600.708C624.247 462.292 547.234 331.508 417.838 256.808C288.788 182.338 137.768 180.719 12.3031 239.231L12.1874 239.115Z" stroke="#E2BA86" strokeWidth="3" strokeMiterlimit="10"/>
          <path d="M61.458 412.224C122.398 410.606 182.297 396.267 237.34 370.48C232.252 310.002 214.675 251.028 185.766 197.604" stroke="#E2BA86" strokeWidth="3" strokeMiterlimit="10"/>
          <path d="M635.931 600.712L235.138 369.325" stroke="#E2BA86" strokeWidth="3" strokeMiterlimit="10"/>
          <path d="M234.209 388.866C245.322 388.866 254.33 379.857 254.33 368.745C254.33 357.633 245.322 348.625 234.209 348.625C223.097 348.625 214.089 357.633 214.089 368.745C214.089 379.857 223.097 388.866 234.209 388.866Z" fill="#E2BA86" stroke="#E2BA86" strokeWidth="3" strokeMiterlimit="10"/>
          <path d="M1283.48 242.817C1283.48 242.817 1283.48 241.776 1283.6 241.314C1157.9 182.224 1006.19 183.612 876.678 258.312C747.282 333.013 670.153 463.681 658.474 602.213C784.17 661.303 935.884 660.031 1065.4 585.214C1194.45 510.745 1271.34 380.771 1283.48 242.817Z" stroke="#E2BA86" strokeWidth="3" strokeMiterlimit="10"/>
          <path d="M1109 198.992C1079.97 252.531 1062.28 311.621 1057.19 372.214C1112.12 398.001 1171.9 412.34 1232.73 413.958" stroke="#E2BA86" strokeWidth="3" strokeMiterlimit="10"/>
          <path d="M658.587 602.21L1059.38 370.823" stroke="#E2BA86" strokeWidth="3" strokeMiterlimit="10"/>
          <path d="M1060.31 390.367C1071.42 390.367 1080.43 381.359 1080.43 370.247C1080.43 359.134 1071.42 350.126 1060.31 350.126C1049.19 350.126 1040.18 359.134 1040.18 370.247C1040.18 381.359 1049.19 390.367 1060.31 390.367Z" fill="#E2BA86" stroke="#E2BA86" strokeWidth="3" strokeMiterlimit="10"/>
          <path d="M253.632 602.443C244.844 606.374 236.171 610.653 227.499 615.163C95.7896 684.775 14.0352 811.859 -3.1945 949.234C-3.1945 949.697 -3.31015 950.275 -3.42578 950.738C120.073 1014.45 271.672 1018.85 403.843 948.887C423.27 938.596 441.656 927.148 458.886 914.428" stroke="#E2BA86" strokeWidth="3" strokeMiterlimit="10"/>
          <path d="M634.774 613.312L225.655 829.551" stroke="#E2BA86" strokeWidth="3" strokeMiterlimit="10"/>
          <path d="M224.726 850.253C235.838 850.253 244.847 841.245 244.847 830.132C244.847 819.02 235.838 810.012 224.726 810.012C213.614 810.012 204.605 819.02 204.605 830.132C204.605 841.245 213.614 850.253 224.726 850.253Z" fill="#E2BA86" stroke="#E2BA86" strokeWidth="3" strokeMiterlimit="10"/>
          <path d="M848.233 270.34C849.274 260.742 849.852 251.144 850.314 241.315C855.865 92.4921 786.715 -41.8765 676.398 -125.481C676.051 -125.828 675.589 -126.059 675.242 -126.406C558.334 -51.3587 478.777 77.8064 473.226 227.208C472.417 249.179 473.226 270.802 475.539 292.079" stroke="#E2BA86" strokeWidth="3" strokeMiterlimit="10"/>
          <path d="M648.181 594.932L665.41 132.504" stroke="#E2BA86" strokeWidth="3" strokeMiterlimit="10"/>
          <path d="M665.411 151.463C676.523 151.463 685.531 142.455 685.531 131.342C685.531 120.23 676.523 111.222 665.411 111.222C654.298 111.222 645.29 120.23 645.29 131.342C645.29 142.455 654.298 151.463 665.411 151.463Z" fill="#E2BA86" stroke="#E2BA86" strokeWidth="3" strokeMiterlimit="10"/>
          <path d="M838.521 951.204C846.268 956.87 854.363 962.305 862.573 967.393C988.731 1046.6 1139.64 1053.89 1267.18 1000.12C1267.64 999.886 1268.11 999.771 1268.57 999.539C1262.09 860.776 1189.94 727.217 1063.43 647.776C1044.81 636.096 1025.62 625.92 1006.08 617.363" stroke="#E2BA86" strokeWidth="3" strokeMiterlimit="10"/>
          <path d="M657.434 615.745L1049.32 861.934" stroke="#E2BA86" strokeWidth="3" strokeMiterlimit="10"/>
          <path d="M1050.25 882.634C1061.36 882.634 1070.37 873.626 1070.37 862.513C1070.37 851.401 1061.36 842.393 1050.25 842.393C1039.14 842.393 1030.13 851.401 1030.13 862.513C1030.13 873.626 1039.14 882.634 1050.25 882.634Z" fill="#E2BA86" stroke="#E2BA86" strokeWidth="3" strokeMiterlimit="10"/>
          <path d="M966.975 1007.86C966.975 1064.75 920.837 1110.89 863.944 1110.89C844.748 1110.89 826.825 1105.69 811.445 1096.55" stroke="#E2BA86" strokeWidth="3" strokeMiterlimit="10"/>
          <path d="M460.626 1085.23C411.365 1113.67 348.344 1096.79 319.897 1047.53C310.3 1030.88 305.905 1012.72 306.137 994.914" stroke="#E2BA86" strokeWidth="3" strokeMiterlimit="10"/>
          <path d="M140.417 685.361C91.1562 656.914 74.2733 593.893 102.72 544.632C112.317 527.98 125.847 515.145 141.342 506.356" stroke="#E2BA86" strokeWidth="3" strokeMiterlimit="10"/>
          <path d="M326.587 208.128C326.587 151.235 372.726 105.096 429.618 105.096C448.814 105.096 466.737 110.3 482.117 119.435" stroke="#E2BA86" strokeWidth="3" strokeMiterlimit="10"/>
          <path d="M832.97 130.768C882.231 102.321 945.252 119.204 973.698 168.465C983.296 185.116 987.69 203.271 987.459 221.079" stroke="#E2BA86" strokeWidth="3" strokeMiterlimit="10"/>
          <path d="M1153.16 530.635C1202.42 559.082 1219.3 622.103 1190.85 671.364C1181.26 688.015 1167.73 700.851 1152.23 709.639" stroke="#E2BA86" strokeWidth="3" strokeMiterlimit="10"/>
        </svg>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-3xl mx-auto px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl lg:text-5xl lg2:text-6xl text-primary leading-tight mb-8">
          Your Stay Is Confirmed
        </h1>

        <div className="text-base md:text-lg text-secondary mb-8 leading-relaxed flex flex-col gap-4">
          <p>
            Thank you for choosing us for your upcoming getaway. Your reservation has been successfully confirmed, and our team is preparing to
            deliver an experience defined by comfort, elegance, and personalized hospitality.
          </p>
          <p>We look forward to welcoming you for a truly exceptional stay.</p>
        </div>

        <Link href="/">
          <Button aria-label="Homepage" variant="tertiary" className="flex items-center gap-2">
            <FiArrowLeft className="w-4 h-4" />
            Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ThankYouPage;