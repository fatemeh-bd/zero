"use client";
import { postMethod } from "@/api/callApi";
import { UPLOAD_GIF, UPLOAD_IMAGE, UPLOAD_VIDEO } from "@/api/endpoints";
import Button from "@/components/buttons/Button";
import { AttachmentIcon } from "@/components/icons";
import Modal from "@/components/modal/Modal";
import Paraghrap from "@/components/typography/Paraghrap";
import { notify } from "@/utils/notify";
import Image from "next/image";
import React, { useRef, useState } from "react";

const UploadFile = () => {
  const chooseFileRef = useRef<HTMLInputElement>(null);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);
  const [openErrorModal, setOpenErrorModal] = useState<{
    status: boolean;
    msg: string;
  }>({ status: false, msg: "" });
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  const [fileInfo, setFileInfo] = useState<{
    name: string;
    size: string;
    type: string;
    file: File;
  } | null>(null);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    const maxFileSize = 50 * 1024 * 1024; // 50MB in bytes

    if (file) {
      if (file.size > maxFileSize) {
        notify("حجم فایل نباید بیشتر از 50 مگابایت باشد.", "error");
        return;
      }

      const sizeInKB = (file.size / 1024).toFixed(2); // Convert size to KB
      const type = file.type.startsWith("image")
        ? "image"
        : file.type.startsWith("video")
        ? "video"
        : file.name.endsWith(".gif")
        ? "gif"
        : "unknown";

      setFileInfo({ name: file.name, size: `${sizeInKB} KB`, type, file });
    }
  };

  const detectedHandler = async () => {
    if (!fileInfo) {
      notify("لطفاً یک فایل انتخاب کنید.", "error");
      return;
    }

    const { type, file } = fileInfo;
    const formData = new FormData();
    formData.append("file", file);

    const endpoint =
      type === "video"
        ? UPLOAD_VIDEO
        : type === "gif"
        ? UPLOAD_GIF
        : type === "image"
        ? UPLOAD_IMAGE
        : null;

    if (!endpoint) {
      notify("نوع فایل نامعتبر است.", "error");
      return;
    }
    setIsUploading(true);
    setUploadProgress(0);
    postMethod(
      endpoint,
      formData,
      undefined,
      undefined,
      (progressEvent: any) => {
        const progress = Math.round(
          (progressEvent.loaded / progressEvent.total) * 100
        );
        setUploadProgress(progress);
      }
    )
      .then((res) => {
        if (res?.isSuccess) {
          setOpenSuccessModal(true);
        } else {
          setOpenErrorModal({ status: true, msg: res.message });
        }
      })
      .catch((error) => notify(error.message, "error"))
      .finally(() => setIsUploading(false));
  };

  return (
    <>
      <Button
        className="!pl-0 max-[500px]:pr-4  !py-0 lg:!gap-8 !gap-2 justify-between lg:w-[500px]"
        onClick={() => chooseFileRef.current?.click()}
      >
        <span className="w-[90%]">
          {fileInfo ? (
            `${
              fileInfo.name.length >= 20
                ? `${fileInfo.name.slice(0, 15)}..${fileInfo.name.slice(
                    fileInfo.name.length - 4,
                    200
                  )} `
                : fileInfo.name
            } - ${fileInfo.size}`
          ) : (
            <>
              <span className="hidden sm:block">
                فایل عکس، گیف، ویدیوی مورد نظر خود را آپلود کنید
              </span>
              <span className="block sm:hidden">
                فایل مورد نظر خود را آپلود کنید
              </span>
            </>
          )}
        </span>

        <AttachmentIcon className="bg-primary p-2 rounded-full text-center self-center" />
      </Button>
      <p className="block sm:hidden text-primary text-xs">
        فایل انتخابی باید عکس، گیف و یا ویدیو باشد (زیر ۵۰ مگابایت)
      </p>
      {/* <Button
        className="bg-primary !border-transparent"
        onClick={detectedHandler}
      >
        تست رایگان
      </Button> */}
      <Button
        className=" !border-transparent w-36 overflow-hidden transition-all duration-300"
        onClick={detectedHandler}
        disabled={isUploading}
        style={{
          background: isUploading
            ? `linear-gradient(
              to right,
              #407880 ${uploadProgress}%,
              #e5e5e52d ${uploadProgress}%
            )`
            : "#407880",
          transition: "background 0.4s ease",
        }}
      >
        {isUploading ? `${uploadProgress}%` : "تست رایگان"}
      </Button>
      <input
        ref={chooseFileRef}
        type="file"
        className="hidden"
        accept="image/*,video/*,.gif"
        onChange={handleFileChange}
      />
      <Modal
        isOpen={openSuccessModal}
        onClose={() => setOpenSuccessModal(false)}
      >
        <Image
          src={"/images/done.webp"}
          width={100}
          height={100}
          className="size-32"
          alt="done icon"
        />
        <Paraghrap>
          تبریک <br /> ما در فایل ارسالی شما محتوای ناهنجاری پیدا نکردیم
        </Paraghrap>
        <Button
          onClick={() => setOpenSuccessModal(false)}
          className="!bg-[#17C46E] shadow-button !border-none !rounded-lg font-bold min-w-[120px]"
        >
          بستن
        </Button>
      </Modal>

      <Modal
        isOpen={openErrorModal.status}
        onClose={() => setOpenErrorModal({ status: false, msg: "" })}
      >
        <Image
          src={"/images/bot.webp"}
          width={100}
          height={100}
          className="w-32"
          alt="done icon"
        />
        <Paraghrap>فایل مورد شامل دارای محتوای ناهنجار است.</Paraghrap>
        <Button
          onClick={() => setOpenErrorModal({ status: false, msg: "" })}
          className="!bg-[#E05353] shadow-button  !border-none !rounded-lg font-bold min-w-[120px]"
        >
          بستن
        </Button>
      </Modal>
    </>
  );
};

export default UploadFile;
