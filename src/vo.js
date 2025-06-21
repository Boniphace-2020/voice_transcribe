const startBtn = document.getElementById("start-btn");
const micIcon = document.getElementById("mic-icon");
const statusText = document.getElementById("status-text");
const responseText = document.getElementById("response-text");

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition;
let audioContext, analyser, microphone;
let isListening = false;

if (!window.SpeechRecognition) {
  alert("Speech Recognition is not supported. Please use Chrome or Edge.");
} else {
  recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = 'en-US';

  let finalTranscript = "";

  startBtn.addEventListener('click', async () => {
    if (!isListening) {
      try {
        statusText.textContent = "Opening mic";
        statusText.classList.add("loading");

        recognition.start();
        isListening = true;
        micIcon.textContent = "⏸️";
        finalTranscript = "";
        responseText.textContent = "";

        await setupVolumeMeter();

        statusText.classList.remove("loading");
        statusText.textContent = "Listening...";
      } catch (error) {
        statusText.classList.remove("loading");
        statusText.textContent = "Mic access failed.";
        console.error(error);
      }
    } else {
      recognition.stop();
      isListening = false;
      micIcon.textContent = "▶️";
      statusText.textContent = "Tap to speak";
      stopVolumeMeter();
    }
  });

  recognition.onresult = (event) => {
    let interimTranscript = "";

    for (let i = event.resultIndex; i < event.results.length; ++i) {
      const transcript = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        finalTranscript += transcript + " ";
      } else {
        interimTranscript += transcript;
      }
    }

    responseText.textContent = finalTranscript + interimTranscript;
  };

  recognition.onerror = (event) => {
    statusText.textContent = "Error: " + event.error;
    micIcon.textContent = "▶️";
    isListening = false;
    stopVolumeMeter();
  };

  recognition.onend = () => {
    if (isListening) {
      // auto-restart if unexpectedly stopped
      recognition.start();
    } else {
      statusText.textContent = "Tap to speak";
      micIcon.textContent = "▶️";
    }
  };
}

async function setupVolumeMeter() {
  if (!audioContext) {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
  }

  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  microphone = audioContext.createMediaStreamSource(stream);
  analyser = audioContext.createAnalyser();
  analyser.fftSize = 512;
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);

  microphone.connect(analyser);

  function updateVolume() {
    if (!isListening) return;
    analyser.getByteFrequencyData(dataArray);
    const volume = dataArray.reduce((a, b) => a + b, 0) / bufferLength;
    const intensity = Math.min(volume / 100, 1);

    startBtn.style.boxShadow = `0 0 ${30 + intensity * 50}px ${10 + intensity * 20}px rgba(241, 110, 0, ${0.2 + intensity * 0.6})`;

    requestAnimationFrame(updateVolume);
  }

  updateVolume();
}
function stopVolumeMeter() {
  if (audioContext) {
    audioContext.close();
    audioContext = null;
  }
}
