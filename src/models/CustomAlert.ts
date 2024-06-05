export interface ICustomAlert {
  title?: string;
  content: string;
  alertType: 'success' | 'error';
  isShow: boolean
}