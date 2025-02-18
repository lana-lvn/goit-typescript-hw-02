import axios from "axios";

export const fetchPictures = async (query, page) => {
    const url = 'https://api.unsplash.com/search/photos';
    const headers = {
      'Authorization': 'Client-ID W933fw0DrbYyQmH4QDcKXKKLFbvYdzx0-T-bX8zM08c',
      "Accept-Version": "v1"
    }
    
    const params = {
      page,
      per_page: 12,
      query
    }
    
    const { data } = await axios.get(url, { headers, params });
    return data;
}