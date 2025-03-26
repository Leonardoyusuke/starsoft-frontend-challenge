export interface IProducts {
    data: IProduct[] | undefined;
    isLoading: boolean;
    error: unknown;
}

export interface IProduct {
    id: number;
    name: string;
    description: string;
    image: string;
    price: number;
    createdAt: string;
}

export interface IMetadata {
    page: number;
    limit: number;
    count: number;
    pageCount: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
}

export interface IProductsResponse {
    data: IProduct[];
    metadata: IMetadata;
}

export interface IProductsProps {
    data: IProductsResponse | undefined;
    isLoading: boolean;
    error: unknown;
    visibleCount: number;
}

export interface IProductsContainerProps {
    visibleCount: number;
}

export interface IPercentageProps {
    percent: number
}

export interface IInfiniteProducts {
    pages: IProductsResponse[];
    pageParams: number[];
}