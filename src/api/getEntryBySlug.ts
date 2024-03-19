import { ContentfulResponse } from "@/types/content.type";
import { appConfig } from "@/utils/config";

const { accessToken, baseUrl, environmentId, spaceId } = appConfig;

export const getEntriesBySlug = async (
  slug: string,
): Promise<ContentfulResponse> => {
  const res = await fetch(
    baseUrl +
      `/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}&content_type=blog&fields.slug=${slug}`,
    {
      next: { revalidate: 10 },
    },
  );
  return res.json();
};
