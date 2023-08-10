export interface VideoListInterface {
  id: number;
  url: string;
  poster: string;
  title: string;
  duration: string;
  views: number;
  uploadedOn: string;
  uploadedBy: string;
  uploadYear: number;
  uploadDate: string;
  disclaimer: string;
  videoTags: string[];
}

export interface VideoCardInterface {
  item: VideoListInterface;
  handleVideoPosterPress: (item: VideoListInterface) => void;
}

export interface VideoScreenHookReturnType {
  videoData: VideoListInterface[];
  handleVideoPosterPress: (item: VideoListInterface) => void;
}
