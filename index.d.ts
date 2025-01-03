interface Result {
  day: number;
  hour: number;
  minute: number;
  second: number;
  millisecond: number;
  datetime: string;
}

interface NxStatic {
  timeFormat: (ts: number) => Result;
}
