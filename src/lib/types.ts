interface IProgress {
  header?: string,
  percent?: number | null,
  custom?: string,
  footer?: string
}

interface ICallback {
  keepalive?: number,
  onActivated?(): void,
  onDismissed?(reason: string): void
}

interface IGroup {
  id: string,
  title: string
}

interface IButton {
  text: string,
  onClick: string,
  activationType?: string,
  contextMenu?: boolean,
  icon?: string
}

export interface IOption {
  disableWinRT?: boolean,
  usePowerShellCore?: boolean,
  appID?: string,
  uniqueID?: string | null,
  sequenceNumber?: number,
  title?: string,
  message?: string,
  attribution?: string,
  icon?: string,
  cropIcon?: boolean,
  headerImg?: string,
  footerImg?: string,
  silent?: boolean,
  hide?: boolean,
  audio?: string,
  longTime?: boolean,
  onClick?: string,
  activationType?: string,
  scenario?: string,
  timeStamp?: number | string,
  button?: IButton[],
  group?: IGroup | null,
  progress?: IProgress,
  callback?: ICallback
}


export const isWinRTAvailable: boolean = false

interface IToastProperties {
  expirationTime: string,
  tag: string,
  group: string,
  remoteID: string | null,
  suppressPopup: boolean,
  mirroringAllowed: boolean,
  expiresOnReboot: boolean,
  highPriority: boolean,
  status: string | null
}

// export function remove(appID: string, uniqueID?: string | string[]): Promise<void>;
// export function getHistory(appID: string, verbose?: boolean): Promise<IToastProperties[]>;
// export function makeXML(option?: IOption): string;
