import { getStrapiURL } from "./strapi";

export function getStrapiMedia(media) {
  const { url } = media.data.attributes;
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  return `http://${imageUrl}`;
}

export function getStrapiThumbnailImage(media) {
  const { url } = media.data.attributes.formats.medium;
  const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
  return `http://${imageUrl}`;
}
