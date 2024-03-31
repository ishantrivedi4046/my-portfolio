import { ReactNode } from "react";

export interface DetailsComponentConfig {
  video: string;
  title: string;
  desc: string;
  features: Array<string>;
  tech: Array<string>;
  confidential: boolean;
}

export type CoverFlowSlideType = {
  backgroundGradiant: string;
  summary: ReactNode;
  details: DetailsComponentConfig;
};
