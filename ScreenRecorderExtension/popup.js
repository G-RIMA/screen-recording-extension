let recorder;
let stream;

document
  .getElementById("startRecordBtn")
  .addEventListener("click", async () => {
    // Capture screen and get stream
    const sources = await navigator.mediaDevices.getDisplayMedia({
      video: {mediaSource: "screen"},
      audio: true
    });
    stream = sources;

    recorder = new MediaRecorder(stream);

    // Collect the recorded chunks
    const chunks = [];
    recorder.ondataavailable = (e) => chunks.push(e.data);

    // Save the recording as a file when stopping
    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: "video/webm" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "recording_" + getDate() + ".webm";
      a.click();
      URL.revokeObjectURL(url);
    };

    recorder.start();
  });

document.getElementById("stopRecordBtn").addEventListener("click", () => {
  if (recorder && recorder.state === "recording") {
    recorder.stop();
    stream.getTracks().forEach((track) => track.stop());
  }
});


function getDate(){
  let currentdate = new Date();
  return currentdate.getDate() + "-" + (currentdate.getMonth()+1) + "-" + currentdate.getFullYear();
}