/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
interface Window {
  electron: any;
}
interface Document {
  fullscreenElement: any;
  webkitFullscreenElement: any;
}
