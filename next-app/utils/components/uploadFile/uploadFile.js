import firebase from "firebase/app";
import "firebase/storage";
import { storage } from "@/utils/data/firebase";

export const uploadFile = async (file) => {
  if (!file) {
    return;
  }

  const storageRef = storage.ref("images/" + file.name);
  const uploadTask = storageRef.put(file);

  try {
    await uploadTask;
    const downloadURL = await storageRef.getDownloadURL();
    return downloadURL;
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};
