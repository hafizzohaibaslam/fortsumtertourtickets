import axios from "axios";

export const WP_BASE_URL = process.env.NEXT_PUBLIC_WP_BASE_URL;
const WP_API_AUTH_USER = process.env.WP_API_AUTH_USER;
const WP_API_AUTH_PASS = process.env.WP_API_AUTH_PASS;

const base64 = Buffer.from(`${WP_API_AUTH_USER}:${WP_API_AUTH_PASS}`).toString(
  "base64"
);

const WP = axios.create({
  baseURL: `${WP_BASE_URL}/wp-json/wp/v2`,
  headers: {
    Authorization: `Basic ${base64}`,
  },
});

export default WP;
