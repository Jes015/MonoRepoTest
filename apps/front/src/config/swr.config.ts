import { SWRConfiguration } from "swr";

//@ts-expect-error idk
const fetcher = (...args: unknown[]) => fetch(...args).then(res => res.json());

export const swrConfig: SWRConfiguration = {
    fetcher,
    revalidateOnFocus: false,
    shouldRetryOnError: false,
    revalidateOnMount: true
}