var btn = document.querySelector('.btn')
btn.addEventListener('click', (ea) => {
  btn.classList.add('fade')

  let recognition = new webkitSpeechRecognition()
  recognition.lang = 'en-GB'
  recognition.addEventListener('result', (e) => {
    document.querySelector('.text').value = e.results[0][0].transcript
    btn.classList.remove('fade')
  })
  recognition.start()
})


//info of webkitspeechRecognition

{/* <button id="record">Record Voice</button>
 <script>
// Set up a new Speech Recognizer
const recognition = new webkitSpeechRecognition();
// Set the new language setting.
recognition.lang = "en-US";
recognition.continuous = false;
recognition.interimResults = false;

// Start recognizing after the button is clicked.
document.getElementById("record").onclick = function() {
  recognition.start();
  console.log('Listening...');
}

// Once a result is parsed, send the parsed text to a Rasa server
// Note that all of this is asynchronous, we update on response
recognition.onresult = function(event) {
  var transcript = event.results[0][0].transcript;
  // Log the transcript 
  console.log(transcript)
  console.log('Confidence: ' + event.results[0][0].confidence);
	}
</script>  */}