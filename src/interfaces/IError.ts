export default interface IError {
  message: string;
  response?: {
    data: {
      message?: string;
    };
  };
}
