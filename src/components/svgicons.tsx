export const heat_pump_icon_path = `M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6.25 4.08c.82.12 1.57.44 2.2.91l-2.2 2.2V7.08zm-1.5 0v3.11l-2.2-2.2c.63-.47 1.38-.79 2.2-.91zM7.99 9.05l2.2 2.2H7.08c.12-.82.44-1.57.91-2.2zm-.91 3.7h3.11l-2.2 2.2c-.47-.63-.79-1.38-.91-2.2zm4.17 4.17c-.82-.12-1.57-.44-2.2-.91l2.2-2.2v3.11zM12 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm.75 3.92v-3.11l2.2 2.2c-.63.47-1.38.79-2.2.91zm3.26-1.97-2.2-2.2h3.11c-.12.82-.44 1.57-.91 2.2zm-2.2-3.7 2.2-2.2c.47.64.79 1.39.91 2.2h-3.11z`;

export const electricity_icon_path = `M11 21h-1l1-7H7.5c-.58 0-.57-.32-.38-.66.19-.34.05-.08.07-.12C8.48 10.94 10.42 7.54 13 3h1l-1 7h3.5c.49 0 .56.33.47.51l-.07.15C12.96 17.55 11 21 11 21z`;

export const gas_icon_path = `M19.48 12.35c-1.57-4.08-7.16-4.3-5.81-10.23.1-.44-.37-.78-.75-.55C9.29 3.71 6.68 8 8.87 13.62c.18.46-.36.89-.75.59-1.81-1.37-2-3.34-1.84-4.75.06-.52-.62-.77-.91-.34C4.69 10.16 4 11.84 4 14.37c.38 5.6 5.11 7.32 6.81 7.54 2.43.31 5.06-.14 6.95-1.87 2.08-1.93 2.84-5.01 1.72-7.69zm-9.28 5.03c1.44-.35 2.18-1.39 2.38-2.31.33-1.43-.96-2.83-.09-5.09.33 1.87 3.27 3.04 3.27 5.08.08 2.53-2.66 4.7-5.56 2.32z`;

export const link_off_path =
  "M17 7h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1 0 1.43-.98 2.63-2.31 2.98l1.46 1.46C20.88 15.61 22 13.95 22 12c0-2.76-2.24-5-5-5zm-1 4h-2.19l2 2H16zM2 4.27l3.11 3.11C3.29 8.12 2 9.91 2 12c0 2.76 2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1 0-1.59 1.21-2.9 2.76-3.07L8.73 11H8v2h2.73L13 15.27V17h1.73l4.01 4L20 19.74 3.27 3 2 4.27z";

export const link_on_path =
  "M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z";

export const arrow_back = "M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z";

export const arrow_forward = "M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z";

export const mep_icon_path =
  "M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22z";
export const non_mep_icon_path =
  "M17 11V3H7v4H3v14h8v-4h2v4h8V11h-4zM7 19H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm4 4H9v-2h2v2zm0-4H9V9h2v2zm0-4H9V5h2v2zm4 8h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2z";

export const IconSvg = (props: {
  d: string;
  fill?: string;
  width?: number;
  height?: number;
}) => {
  let { d, fill = "black", width, height } = props;
  if (!width) {
    width = 25;
  }
  if (!height) {
    height = 25;
  }
  return (
    <div>
      <svg width={width} height={height}>
        <path fill={fill} d={d} />
      </svg>
    </div>
  );
};
