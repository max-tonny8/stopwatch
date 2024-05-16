interface Timezone {
  label: string;
  value: string;
}

interface TimeContextType {
  time: number;
  isActive: boolean;
  isPaused: boolean;
  recordList: number[];
  handleRecord: () => void;
  handleStart: () => void;
  handlePauseResume: () => void;
  handleReset: () => void;
}
