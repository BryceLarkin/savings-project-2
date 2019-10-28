import { createContext } from "react";
import { Steps } from "./StepperCreateProject";

export const StepperCreateProjectContext = createContext<Steps>(0);

export const StepperCreateProjectProvider =
  StepperCreateProjectContext.Provider;
export const StepperCreateProjectConsumer =
  StepperCreateProjectContext.Consumer;
