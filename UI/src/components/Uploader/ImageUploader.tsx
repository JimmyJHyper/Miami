import Image from "next/image";
import { useState } from "react";
import { ButtonStyled } from "./style";
import { Button, Input } from "@mui/material";
import { Label } from "@mui/icons-material";

interface FileUploaderType {
  callback: Function;
  showTextInput: boolean | false;
  autoCallback?: boolean;
}

const FileUploader: React.FC<FileUploaderType> = ({
  callback,
  showTextInput = false,
  autoCallback = false,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [details, setDetails] = useState<string | null>("");
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setSelectedFile(files[0]);
      if (autoCallback === true) {
        callback(selectedFile, details);
      }
    }
  };
  const uploadImage = (file: File | null) => {
    if (file) {
      callback(file, details);
    } else {
      // Handle the case where no file is selected
    }
  };

  const handletextChange = (text: string | null) => {
    setDetails(text);
  };
  return (
    <div>
      <Input type="file" onChange={handleFileChange} />
      {showTextInput ? (
        <>
          <Label values="Alt: " />
          <Input
            type="text"
            value={details}
            onChange={(s) => handletextChange(s.target.value)}
          />
        </>
      ) : null}
      <Button type="button" onClick={() => uploadImage(selectedFile)}>
        Submit
      </Button>
    </div>
  );
};

export default FileUploader;
