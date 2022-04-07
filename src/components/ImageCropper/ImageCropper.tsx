import React, {
  useCallback,
  useMemo,
  useRef,
  useEffect,
  useState,
  SyntheticEvent,
} from "react";
import { MeetingTypeOptions } from "@constants";
import * as models from "@interface/models";
import { CreateModal } from "../Modal";
import { HttpApi } from "@api";
import { ConnectGoogleCalendar } from "@utils";
import { Button, showNotification } from "@components";
import { OnlineMeetingTypes } from "@interface/enum";

import Cropper from "cropperjs";

export const ImageCropper: React.FunctionComponent<ImageCropperProps> = ({
  onSelect,
  onCancel,
  file,
  aspectRatio,
}) => {
  const imageUrl = useMemo(() => URL.createObjectURL(file), [file]);
  const [imageCropper, setImageCropper] = useState<Cropper | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      /*
      URL.revokeObjectURL(imageUrl)
      if(imageCropper)
        imageCropper.destroy()
      */
    };
  }, [imageUrl, imageCropper]);

  const onSubmit = useCallback(() => {
    const canvas = imageCropper?.getCroppedCanvas();
    canvas?.toBlob((blob) => {
      onSelect(new File([blob!], `${Date.now()}.png`, { type: "image/png" }));
    });
  }, [onSelect, imageCropper]);

  const onImageLoad = useCallback(
    (event: SyntheticEvent) => {
      const image = event.target as HTMLImageElement;

      setImageCropper((cropper) => {
        if (imageCropper) imageCropper.destroy();

        cropper = new Cropper(image, {
          aspectRatio: aspectRatio,
          preview: previewRef.current!,
          zoomOnWheel: false,
        });

        return cropper;
      });
    },
    [aspectRatio, previewRef?.current]
  );

  return (
    <div className="p-4 overflow-auto">
      <div onSubmit={onSubmit} className="w-full">
        <div className="w-full mb-4">
          <img className="imageView" src={imageUrl} onLoad={onImageLoad} />
          <div ref={previewRef} className="preview hidden"></div>
        </div>

        <div className="flex items-center">
          <Button className="mr-2" onClick={onSubmit}>
            Crop image
          </Button>
          <Button className="ml-2" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export const ImageCropperModal = (props: ImageCropperModalProps) => {
  return new Promise<File | null>((res, rej) => {
    const modalArgs = { args: { dismiss: () => {} } };

    const args = CreateModal<ImageCropperProps>(ImageCropper, {
      ...props,
      onSelect: (file) => {
        res(file);
        modalArgs.args.dismiss();
      },
      onCancel: () => modalArgs.args.dismiss(),
    });

    modalArgs.args = args;
    args.dismissPromise.then(() => res(null));
  });
};

type ImageCropperModalProps = {
  file: File;
  aspectRatio: number;
};

type ImageCropperProps = ImageCropperModalProps & {
  onSelect: (file: File) => void;
  onCancel: () => void;
};
