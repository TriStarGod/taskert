export interface ITask {
  isFetching?: boolean;
  isUpdating?: boolean;
  id: number;
  parentId: number;
  order?: number;
  done?: boolean;
  deleted?: boolean;
  data?: any;
}

export interface ITaskAction {
  type: string;
  payload: {
    id: number;
    data: ITask;
  };
}
