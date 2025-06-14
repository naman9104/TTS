const textArea = document.getElementById('text');
const voiceSelect = document.getElementById('voiceSelect');
const rate = document.getElementById('rate');
const pitch = document.getElementById('pitch');
const speakBtn = document.getElementById('speak');

let voices = [];

function populateVoices() {
  voices = speechSynthesis.getVoices();
  voiceSelect.innerHTML = '';
  voices.forEach((voice, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = `${voice.name} (${voice.lang})`;
    voiceSelect.appendChild(option);
  });
}

populateVoices();
speechSynthesis.onvoiceschanged = populateVoices;

speakBtn.addEventListener('click', () => {
  const utter = new SpeechSynthesisUtterance(textArea.value);
  const selectedVoice = voices[voiceSelect.value];
  if (selectedVoice) utter.voice = selectedVoice;
  utter.rate = rate.value;
  utter.pitch = pitch.value;
  utter.volume = 1;  
  speechSynthesis.speak(utter);
});
