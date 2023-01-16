import { useState } from "react";

const useRecorder = ({ videoRecorderCallback }: any) => {
  const [videoUrl, setVideoUrl] = useState("");
  function startRecording() {
    navigator.mediaDevices.getDisplayMedia({ video: true }).then((stream) => {
      console.log({ stream });
      const recorder = new MediaRecorder(stream);
      const chunks = [] as any[];
      videoRecorderCallback();
      recorder.start();

      recorder.addEventListener("dataavailable", (e) => {
        chunks.push(e.data);
      });

      recorder.addEventListener("stop", (e) => {
        const blob = new Blob(chunks);
        const url = URL.createObjectURL(blob);
        setVideoUrl(url);
        videoRecorderCallback();
      });
    });
  }
  return { start: startRecording, videoUrl };
};

export default useRecorder;
