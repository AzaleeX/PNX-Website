import useSWR from 'swr';

const CHARTS_URL =
    'https://bstats.org/api/v1/plugins/16708/charts/players/data/?maxElements=1';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useBstatsPlayers = () =>
    useSWR(CHARTS_URL, fetcher);
