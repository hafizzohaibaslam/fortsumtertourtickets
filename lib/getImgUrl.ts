export const getImgUrl = (id: number) => {
  return `${process.env.NEXT_PUBLIC_WP_BASE_URL}/wp-json/custom/v1/get-image/?media_id=${id}`;
};
