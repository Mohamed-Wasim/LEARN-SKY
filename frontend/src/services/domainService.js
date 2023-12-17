import HttpService from "./base.service.js";
import { getApiEndUrl } from "../utils/apiServices.js";

// Service function for search languages
export const SearchLanguages = async (quary) => {
  const { data, errors } = await HttpService.post(
    getApiEndUrl("DOMAIN_SEARCH_LANGUAGES"),
    { quary }
  );
  if (errors) {
    throw errors;
  }
  return data;
};
