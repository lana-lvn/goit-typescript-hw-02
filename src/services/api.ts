import axios from "axios";
import { Picture } from "../App";

interface FetchPicturesData {
  total: number;
  total_pages: number;
  results: Picture[];
}

export const fetchPictures = async (
  query: string,
  page: number
): Promise<FetchPicturesData> => {
  const url = "https://api.unsplash.com/search/photos";
  const headers = {
    Authorization: "Client-ID W933fw0DrbYyQmH4QDcKXKKLFbvYdzx0-T-bX8zM08c",
    "Accept-Version": "v1",
  };

  const params = {
    page,
    per_page: 12,
    query,
  };

  const { data } = await axios.get<FetchPicturesData>(url, { headers, params });
  return data;
};
