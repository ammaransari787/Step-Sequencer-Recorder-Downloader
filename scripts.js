const audio = document.querySelector('audio');
const kick = new Tone.MembraneSynth();
const hat = new Tone.MetalSynth();
const noteclow = new Tone.Synth();
const notedblow = new Tone.Synth();
const notedlow = new Tone.Synth();
const noteeblow = new Tone.Synth();
const noteelow = new Tone.Synth();
const noteflow = new Tone.Synth();
const notegblow = new Tone.Synth();
const noteglow = new Tone.Synth();
const noteablow = new Tone.Synth();
const notealow = new Tone.Synth();
const notebblow = new Tone.Synth();
const noteblow = new Tone.Synth();
const notechigh = new Tone.Synth();
const notechigh2 = new Tone.Synth();
const notedbhigh = new Tone.Synth();
const notedhigh = new Tone.Synth();
const noteebhigh = new Tone.Synth();
const noteehigh = new Tone.Synth();
const notefhigh = new Tone.Synth();
const notegbhigh = new Tone.Synth();
const noteghigh = new Tone.Synth();
const noteabhigh = new Tone.Synth();
const noteahigh = new Tone.Synth();
const notebbhigh = new Tone.Synth();
const notebhigh = new Tone.Synth();
const notecextrahigh = new Tone.Synth();
const actx = Tone.context;
const dest = actx.createMediaStreamDestination();
const recorder = new MediaRecorder(dest.stream);
const startButton = document.querySelector('.button');
const tom = new Tone.MembraneSynth();
const snare = new Tone.NoiseSynth(
  {
    
noise  : {
type  : "brown"
}  ,
envelope  : {
attack  : 0.005 ,
decay  : 0.1 ,
sustain  : 0.02
}
}
)

const feedbackDelay = new Tone.FeedbackDelay({
delayTime  : "32n",
  feedback : 0.25
});
const gate = new Tone.Gate(-50)
const compressor = new Tone.MidSideCompressor();
const gain = new Tone.Gain();

snare.chain( gate, compressor, gain);
snare.chain( gate, compressor, gain);

//tom.chain(reverb, gate, compressor, gain);
tom.chain( gate, compressor, gain);


gain.chain(Tone.Master); 

startButton.addEventListener("click", startTransport);

document.querySelector('.button')?.addEventListener('click', async () => {
	await Tone.start()
	console.log('audio is ready')
})

kick.connect(dest);
kick.toMaster();
snare.connect(dest);
snare.toMaster();
tom.connect(dest);
tom.toMaster();
hat.connect(dest);
hat.toMaster();
noteclow.connect(dest);
noteclow.toMaster();
notedblow.connect(dest);
notedblow.toMaster();
notedlow.connect(dest);
notedlow.toMaster();
noteeblow.connect(dest);
noteeblow.toMaster();
noteelow.connect(dest);
noteelow.toMaster();
noteflow.connect(dest);
noteflow.toMaster();
notegblow.connect(dest);
notegblow.toMaster();
noteglow.connect(dest);
noteglow.toMaster();
noteablow.connect(dest);
noteablow.toMaster();
notealow.connect(dest);
notealow.toMaster();
notebblow.connect(dest);
notebblow.toMaster();
noteblow.connect(dest);
noteblow.toMaster();
notechigh.connect(dest);
notechigh.toMaster();
notechigh2.connect(dest);
notechigh2.toMaster();
notedbhigh.connect(dest);
notedbhigh.toMaster();
notedhigh.connect(dest);
notedhigh.toMaster();
noteebhigh.connect(dest);
noteebhigh.toMaster();
noteehigh.connect(dest);
noteehigh.toMaster();
notefhigh.connect(dest);
notefhigh.toMaster();
notegbhigh.connect(dest);
notegbhigh.toMaster();
noteghigh.connect(dest);
noteghigh.toMaster();
noteabhigh.connect(dest);
noteabhigh.toMaster();
noteahigh.connect(dest);
noteahigh.toMaster();
notebbhigh.connect(dest);
notebbhigh.toMaster();
notebhigh.connect(dest);
notebhigh.toMaster();
notecextrahigh.connect(dest);
notecextrahigh.toMaster();


const snaregain = new Tone.Gain(-.95);
snaregain.toMaster();
snaregain.connect(dest);
const kickgain = new Tone.Gain(-.1);
kickgain.toMaster();
kickgain.connect(dest);
const chordgain = new Tone.Gain(-.6);
chordgain.toMaster();
chordgain.connect(dest);
const chordgainextra = new Tone.Gain(-.8);
chordgainextra.toMaster();
chordgainextra.connect(dest);
const notegain = new Tone.Gain(-.5);
notegain.toMaster();
notegain.connect(dest);
feedbackDelay.toMaster();
feedbackDelay.connect(dest);
gate.connect(dest);
gate.toMaster();
compressor.connect(dest);
compressor.toMaster();
gain.connect(dest);
gain.toMaster();

tom.connect(snaregain);
snare.connect(snaregain);
kick.connect(kickgain);
hat.connect(snaregain);
noteclow.connect(notegain);
notedblow.connect(notegain);
notedlow.connect(notegain);
noteeblow.connect(notegain);
noteelow.connect(notegain);
noteflow.connect(notegain);
notegblow.connect(notegain);
noteglow.connect(notegain);
noteablow.connect(notegain);
notealow.connect(notegain);
notebblow.connect(notegain);
noteblow.connect(notegain);
notechigh.connect(notegain);
notechigh2.connect(notegain);
notedbhigh.connect(notegain);
notedhigh.connect(notegain);
noteebhigh.connect(notegain);
noteehigh.connect(notegain);
notefhigh.connect(notegain);
notegbhigh.connect(notegain);
noteghigh.connect(notegain);
noteabhigh.connect(notegain);
noteahigh.connect(notegain);
notebbhigh.connect(notegain);
notebhigh.connect(notegain);
notecextrahigh.connect(notegain);

let myButton4 = document.querySelector('.button4')
let myButton5 = document.querySelector('.button5')

const chunks = [];

function sequencer(){
    let index = 0;

    Tone.Transport.scheduleRepeat(repeat,'32n')

    function repeat(){
        let step = index % 32;
        let kickInputs = document.querySelector(`.kick input:nth-child(${step + 1})`);
        let snareInputs = document.querySelector(`.snare input:nth-child(${step + 1})`);
        let hatInputs = document.querySelector(`.hat input:nth-child(${step + 1})`);
        let noteclowInputs = document.querySelector(`.noteclow input:nth-child(${step + 1})`);
        let notedblowInputs = document.querySelector(`.notedblow input:nth-child(${step + 1})`);
        let notedlowInputs = document.querySelector(`.notedlow input:nth-child(${step + 1})`);
        let noteeblowInputs = document.querySelector(`.noteeblow input:nth-child(${step + 1})`);
        let noteelowInputs = document.querySelector(`.noteelow input:nth-child(${step + 1})`);
        let noteflowInputs = document.querySelector(`.noteflow input:nth-child(${step + 1})`);
        let notegblowInputs = document.querySelector(`.notegblow input:nth-child(${step + 1})`);
        let noteglowInputs = document.querySelector(`.noteglow input:nth-child(${step + 1})`);
        let noteablowInputs = document.querySelector(`.noteablow input:nth-child(${step + 1})`);
        let notealowInputs = document.querySelector(`.notealow input:nth-child(${step + 1})`);
        let notebblowInputs = document.querySelector(`.notebblow input:nth-child(${step + 1})`);
        let noteblowInputs = document.querySelector(`.noteblow input:nth-child(${step + 1})`);
        let notechighInputs = document.querySelector(`.notechigh input:nth-child(${step + 1})`);
        let notechigh2Inputs = document.querySelector(`.notechigh2 input:nth-child(${step + 1})`);
        let notedbhighInputs = document.querySelector(`.notedbhigh input:nth-child(${step + 1})`);
        let notedhighInputs = document.querySelector(`.notedhigh input:nth-child(${step + 1})`);
        let noteebhighInputs = document.querySelector(`.noteebhigh input:nth-child(${step + 1})`);
        let noteehighInputs = document.querySelector(`.noteehigh input:nth-child(${step + 1})`);
        let notefhighInputs = document.querySelector(`.notefhigh input:nth-child(${step + 1})`);
        let notegbhighInputs = document.querySelector(`.notegbhigh input:nth-child(${step + 1})`);
        let noteghighInputs = document.querySelector(`.noteghigh input:nth-child(${step + 1})`);
        let noteabhighInputs = document.querySelector(`.noteabhigh input:nth-child(${step + 1})`);
        let noteahighInputs = document.querySelector(`.noteahigh input:nth-child(${step + 1})`);
        let notebbhighInputs = document.querySelector(`.notebbhigh input:nth-child(${step + 1})`);
        let notebhighInputs = document.querySelector(`.notebhigh input:nth-child(${step + 1})`);
        let notecextrahighInputs = document.querySelector(`.notecextrahigh input:nth-child(${step + 1})`);

        if (kickInputs.checked){
            kick.triggerAttackRelease("C1", "32n");
        }
        if(snareInputs.checked){
            snare.triggerAttackRelease("32n");
            tom.triggerAttackRelease("C1","32n");
        }
        if(hatInputs.checked){
            hat.triggerAttackRelease("C4", "32n");
        }    
        if(noteclowInputs.checked){
            noteclow.triggerAttackRelease("C3", "32n")
        }
        if(notedblowInputs.checked){
            notedblow.triggerAttackRelease("C#3", "32n")
        }
        if(notedlowInputs.checked){
            notedlow.triggerAttackRelease("D3", "32n")
        }
        if(noteeblowInputs.checked){
            noteeblow.triggerAttackRelease("D#3", "32n")
        }
        if(noteelowInputs.checked){
            noteelow.triggerAttackRelease("E3", "32n")
        }
        if(noteflowInputs.checked){
            noteflow.triggerAttackRelease("F3", "32n")
        }
        if(notegblowInputs.checked){
            notegblow.triggerAttackRelease("F#3", "32n")
        }
        if(noteglowInputs.checked){
            noteglow.triggerAttackRelease("G3", "32n")
        }
        if(noteablowInputs.checked){
            noteablow.triggerAttackRelease("G#3", "32n")
        }
        if(notealowInputs.checked){
            notealow.triggerAttackRelease("A3", "32n")
        }
        if(notebblowInputs.checked){
            notebblow.triggerAttackRelease("A#3", "32n")
        }
        if(noteblowInputs.checked){
            noteblow.triggerAttackRelease("B3", "32n")
        }
        if(notechighInputs.checked){
            notechigh.triggerAttackRelease("C4", "32n")
        }
        if(notechigh2Inputs.checked){
            notechigh2.triggerAttackRelease("C4", "32n")
        }
        if(notedbhighInputs.checked){
            notedbhigh.triggerAttackRelease("C#4", "32n")
        }
        if(notedhighInputs.checked){
            notedhigh.triggerAttackRelease("D4", "32n")
        }
        if(noteebhighInputs.checked){
            noteebhigh.triggerAttackRelease("D#4", "32n")
        }
        if(noteehighInputs.checked){
            noteehigh.triggerAttackRelease("E4", "32n")
        }
        if(notefhighInputs.checked){
            notefhigh.triggerAttackRelease("F4", "32n")
        }
        if(notegbhighInputs.checked){
            notegbhigh.triggerAttackRelease("F#4", "32n")
        }
        if(noteghighInputs.checked){
            noteghigh.triggerAttackRelease("G4", "32n")
        }
        if(noteabhighInputs.checked){
            noteabhigh.triggerAttackRelease("G#4", "32n")
        }
        if(noteahighInputs.checked){
            noteahigh.triggerAttackRelease("A4", "32n")
        }
        if(notebbhighInputs.checked){
            notebbhigh.triggerAttackRelease("A#4", "32n")
        }
        if(notebhighInputs.checked){
            notebhigh.triggerAttackRelease("B4", "32n")
        }
        if(notecextrahighInputs.checked){
            notecextrahigh.triggerAttackRelease("C5", "32n")
        }
        index++
    }
}

recorder.ondataavailable = evt => chunks.push(evt.data);
recorder.onstop = evt => {
    let blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' });
    audio.src = URL.createObjectURL(blob);
};

myButton4.onclick = function() {
    recordingStart();
}

myButton5.onclick = function() {
    recordingStop();
}

function startTransport() {
    sequencer();
    Tone.Transport.start();
};

function recordingStart() {
    recorder.start();
    sequencer();
    Tone.Transport.start();

}

function recordingStop(){
    Tone.Transport.cancel();
    recorder.stop()
}

let myButton2 = document.querySelector('.button2');
let myButton3 = document.querySelector('.button3');
let myButton1 = document.querySelector('.button1');
let myButton6 = document.querySelector('.button6');

function playStop() {
    Tone.Transport.cancel();
}

myButton1.onclick = function() {
    playStop();
}

function increaseBpm() {
    Tone.Transport.bpm.value = (Tone.Transport.bpm.value * 1.2);
}

myButton2.onclick = function() {
    increaseBpm();
}

function decreaseBpm(){
    Tone.Transport.bpm.value = (Tone.Transport.bpm.value * .8);
}

myButton3.onclick = function(){
    decreaseBpm();
}

myButton6.onclick = function() {
    let x = prompt("Enter a single number between 1 and 32 that represents the step of the sequencer to fill with this chord.");
    let chordsdd = document.getElementById("chords");
    let selectedValue = chordsdd.options[chordsdd.selectedIndex].value;
    switch(selectedValue) {
        case "Dmin7":
            Dmin7(x);
            break;
        case "Cmaj7":
            CMaj7(x);
            break;
        case "G13":
            G13(x);
            break;
        case "C":
            C(x);
            break;
        case "C7":
            C7(x);
            break;
        case "Cmin7":
            Cmin7(x);
            break;
        case "G":
            G(x);
            break;
        case "B":
            B(x);
            break;
        case "Cm":
            Cm(x);
            break;
    }
}

function Dmin7(x) {
    document.getElementById(`dl${x}`).checked = true;
    document.getElementById(`fl${x}`).checked = true;
    document.getElementById(`al${x}`).checked = true;
    document.getElementById(`c2h${x}`).checked = true;
}

function CMaj7(x) {
    document.getElementById(`cl${x}`).checked = true;
    document.getElementById(`el${x}`).checked = true;
    document.getElementById(`gl${x}`).checked = true;
    document.getElementById(`bl${x}`).checked = true;
}

function G13(x) {
    document.getElementById(`gl${x}`).checked = true;
    document.getElementById(`fl${x}`).checked = true;
    document.getElementById(`bl${x}`).checked = true;
    document.getElementById(`dh${x}`).checked = true;
    document.getElementById(`eh${x}`).checked = true;
}

function C(x) {
    document.getElementById(`cl${x}`).checked = true;
    document.getElementById(`el${x}`).checked = true;
    document.getElementById(`gl${x}`).checked = true;
    document.getElementById(`ch${x}`).checked = true;
}

function C7(x) {
    document.getElementById(`cl${x}`).checked = true;
    document.getElementById(`el${x}`).checked = true;
    document.getElementById(`gl${x}`).checked = true;
    document.getElementById(`bbl${x}`).checked = true;
}

function Cmin7(x) {
    document.getElementById(`cl${x}`).checked = true;
    document.getElementById(`ebl${x}`).checked = true;
    document.getElementById(`gl${x}`).checked = true;
    document.getElementById(`bbl${x}`).checked = true;
}

function G(x) {
    document.getElementById(`gl${x}`).checked = true;
    document.getElementById(`bl${x}`).checked = true;
    document.getElementById(`dh${x}`).checked = true;
    document.getElementById(`gh${x}`).checked = true;
}

function B(x) {
    document.getElementById(`bl${x}`).checked = true;
    document.getElementById(`ebh${x}`).checked = true;
    document.getElementById(`gbh${x}`).checked = true;
    document.getElementById(`bh${x}`).checked = true;
}

function Cm(x) {
    document.getElementById(`cl${x}`).checked = true;
    document.getElementById(`ebl${x}`).checked = true;
    document.getElementById(`gl${x}`).checked = true;
    document.getElementById(`ch${x}`).checked = true;
}