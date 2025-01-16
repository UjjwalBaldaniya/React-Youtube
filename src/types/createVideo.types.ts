export interface ICreateVideoInputs {
  title: string;
  description: string;
  videoFile: FileList;
  thumbnail: FileList;
}

export interface IVideo {
  videoFile: string;
  thumbnail: string;
  title: string;
  description: string;
  duration: number;
  views: number;
  isPublished: boolean;
  owner: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ICreateVideoResponse {
  statusCode: number;
  data: IVideo;
  message: string;
  success: boolean;
}
