declare module "next/dist/compiled/image-size" {
  type ImageSizeResult = {
    width?: number;
    height?: number;
    type?: string;
  };

  function imageSize(input: Buffer | string): ImageSizeResult;
  export default imageSize;
}
