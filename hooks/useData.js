import { useCSR } from "./useCSR";
import { useLocalStore } from "./useLocalStore";
import useAsyncFetch from "async-fetch";
import {
  LOCALSTORE_DATA_KEY,
  LOCALSTORE_DATA_DEFAULT_VALUE,
  API_DATA_ENDPOINT,
  API_DATA_POLL,
  API_DATA_CLEANUP,
} from "../constant";

export function useData() {
  const csr = useCSR();

  const localStore = useLocalStore(
    LOCALSTORE_DATA_KEY,
    LOCALSTORE_DATA_DEFAULT_VALUE
  );

  const request = useAsyncFetch({
    url: API_DATA_ENDPOINT,
    poll: API_DATA_POLL,
    ignoreCleanup: API_DATA_CLEANUP === false,
    onSuccess: localStore.update,
  });

  return { ...csr, ...request, data: request.data || localStore.value };
}
