import { getStrapiURL } from "./strapi";

export function getStrapiMedia(media) {
  const { url } = media.data.attributes;
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  return `http://${imageUrl}`;
}

export function getStrapiThumbnailImage(media) {
  //if there is not  thumbnail then choose orginal image.
  const { url } = media.data.attributes?.formats?.medium || media.data.attributes;
  
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  return `http://${imageUrl}`;
}
