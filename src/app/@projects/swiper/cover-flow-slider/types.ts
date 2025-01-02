import { ReactNode } from "react";

export interface DetailsComponentConfig {
  videoUrl: string;
  title: string;
  desc: string;
  features: Array<string>;
  tech: Array<string>;
  confidential: boolean;
  githubLink?: string;
  liveUrl?: string;
  playStoreLink?: string;
  appStoreLink?: string;
}

export type CoverFlowSlideType = {
  backgroundGradiant: string;
  summary: ReactNode;
  details: DetailsComponentConfig;
};

export type CardsSlideType = {
  backgroundGradiant: string;
  summary: ReactNode;
  details: DetailsComponentConfig;
};
