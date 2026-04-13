export type { MetaProps, Routes, MetaConfig } from "./meta.types";
export type {
  DivProps,
  Children,
  IGlobalError,
  Params,
  SectionProps,
} from "./react.types";

export interface ApiResponse<T> {
  message: string;
  statusCode: number;
  success: boolean;
  data: T;
}

export type Blog = {
  id: number;
  heading: string;
  image: string;
  details: string[];
  newsSection: {
    heading: string;
    content: string[];
  }[];
};
