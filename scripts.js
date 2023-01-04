// Initialize required audio context, instruments/synths, effects
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
const snare = new Tone.NoiseSynth({
    noise: {
        type: "brown"
    },
    envelope: {
        attack: 0.005,
        decay: 0.1,
        sustain: 0.02
    }
});
const feedbackDelay = new Tone.FeedbackDelay({
    delayTime: "32n",
    feedback: 0.25
});

const gate = new Tone.Gate(-50)
const compressor = new Tone.MidSideCompressor();
const gain = new Tone.Gain();

snare.chain(gate, compressor, gain);
snare.chain(gate, compressor, gain);

tom.chain(gate, compressor, gain);
gain.chain(Tone.Master); 

// Set gain levels for instruments 
const snaregain = new Tone.Gain(-.999);
const kickgain = new Tone.Gain(-.01);
const chordgain = new Tone.Gain(-.6);
const chordgainextra = new Tone.Gain(-.98);
const notegain = new Tone.Gain(-.5);

// Required to start transport 
startButton.addEventListener("click", startTransport);

document.querySelector('.button')?.addEventListener('click', async () => {
	await Tone.start();
	console.log('audio is ready');
});

const instrument_list = [
    kick,
    snare,
    tom,
    hat,
    noteclow,
    notedblow,
    notedlow,
    noteeblow,
    noteelow,
    noteflow,
    notegblow,
    noteglow,
    noteablow,
    notealow,
    notebblow,
    noteblow,
    notechigh,
    notedbhigh,
    notedhigh,
    noteebhigh,
    noteehigh,
    notefhigh,
    notegbhigh,
    noteghigh,
    noteabhigh,
    noteahigh,
    notebbhigh,
    notebhigh
];

const effect_list = [
    snaregain,
    kickgain,
    chordgain,
    chordgainextra,
    notegain,
    feedbackDelay,
    gate,
    compressor,
    gain
];

for ( let i = 0; i < effect_list.length; i++ ) {
    effect_list[i].connect(dest);
    effect_list[i].toMaster();
}

for ( let i = 0; i < instrument_list.length; i++ ) {
    instrument_list[i].connect(dest);
    instrument_list[i].toMaster();
    if (instrument_list[i] === tom || instrument_list[i] === snare) {
        instrument_list[i].connect(snaregain);
    } else if (instrument_list[i] === kick) {
        instrument_list[i].connect(kickgain);
    } else if (instrument_list[i] === hat) {
        instrument_list[i].connect(chordgainextra);
    } else {
        instrument_list[i].connect(notegain);
    }
}

// Only for this version bc it has more C rows
notechigh2.connect(dest);
notechigh2.toMaster();
notecextrahigh.connect(dest);
notecextrahigh.toMaster();
notechigh2.connect(notegain);
notecextrahigh.connect(notegain);

let start_record_button = document.querySelector('.start_record')
let stop_record_button = document.querySelector('.stop_record')

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
}

start_record_button.onclick = function() {
    recordingStart();
}

stop_record_button.onclick = function() {
    recordingStop();
}

function startTransport() {
    sequencer();
    Tone.Transport.start();
}

function recordingStart() {
    recorder.start();
    sequencer();
    Tone.Transport.start();
}

function recordingStop(){
    Tone.Transport.cancel();
    recorder.stop();
};

let increase_bpm_button = document.querySelector('.increase_bpm');
let decrease_bpm_button = document.querySelector('.decrease_bpm');
let stop_playing_button = document.querySelector('.stop_playing');
let get_chord_button = document.querySelector('.get_chord');

function playStop() {
    Tone.Transport.cancel();
}

stop_playing_button.onclick = function() {
    playStop();
}

function increaseBpm() {
    Tone.Transport.bpm.value = (Tone.Transport.bpm.value * 1.2);
}

increase_bpm_button.onclick = function() {
    increaseBpm();
}

function decreaseBpm(){
    Tone.Transport.bpm.value = (Tone.Transport.bpm.value * .8);
}

decrease_bpm_button.onclick = function(){
    decreaseBpm();
}

get_chord_button.onclick = function() {
    //let x = prompt("Enter a single number between 1 and 32 that represents the step of the sequencer to fill with this chord.");
    // So prompt was the reason it interrupted transport! Using a text input instead fixed that. 
    let x_input = document.getElementById('stepnumber');
    let x = x_input.value;
    // TODO: add some checks to ensure x is a valid number here !! 
    let chordsdd = document.getElementById("chords");
    let selectedValue = chordsdd.options[chordsdd.selectedIndex].value;
    switch(selectedValue) {
        case "Dmin7":
            Dmin7(x);
            break;
        case "CMaj7":
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
        case "A":
            A(x);
            break;
        case "Am":
            Am(x);
            break;
        case "A7":
            A7(x);
            break;
        case "AMaj7":
            AMaj7(x);
            break;
        case "Amin7":
            Amin7(x);
            break;
        case "A13":
            A13(x);
            break;  
        case "Ab":
            Ab(x);
            break; 
        case "Abm":
            Abm(x);
            break;  
        case "Ab7":
            Ab7(x);
            break; 
        case "AbMaj7":
            AbMaj7(x);
            break;
        case "Abmin7":
            Abmin7(x);
            break;
        case "Ab13":
            Ab13(x);
            break;
        case "Bm":
            Bm(x);
            break;
        case "B7":
            B7(x);
            break;
        case "BMaj7":
            BMaj7(x);
            break;
        case "Bmin7":
            Bmin7(x);
            break;
        case "B13":
            B13(x);
            break;
        case "Bb":
            Bb(x);
            break;
        case "Bbm":
            Bbm(x);
            break;
        case "Bb7":
            Bb7(x);
            break;
        case "BbMaj7":
            BbMaj7(x);
            break;
        case "Bbmin7":
            Bbmin7(x);
            break;
        case "Bb13":
            Bb13(x);
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
    document.getElementById(`dl${x}`).checked = true;
}

function B(x) {
    document.getElementById(`bl${x}`).checked = true;
    document.getElementById(`ebl${x}`).checked = true;
    document.getElementById(`gbl${x}`).checked = true;
}

function Cm(x) {
    document.getElementById(`cl${x}`).checked = true;
    document.getElementById(`ebl${x}`).checked = true;
    document.getElementById(`gl${x}`).checked = true;
    document.getElementById(`ch${x}`).checked = true;
}

function A(x) {
    document.getElementById(`el${x}`).checked = true;
    document.getElementById(`dbl${x}`).checked = true;
    document.getElementById(`al${x}`).checked = true;
}

function Am(x) {
    document.getElementById(`el${x}`).checked = true;
    document.getElementById(`cl${x}`).checked = true;
    document.getElementById(`al${x}`).checked = true;
}

function A7(x) {
    document.getElementById(`el${x}`).checked = true;
    document.getElementById(`dbl${x}`).checked = true;
    document.getElementById(`al${x}`).checked = true;
    document.getElementById(`gl${x}`).checked = true;
}

function AMaj7(x) {
    document.getElementById(`el${x}`).checked = true;
    document.getElementById(`dbl${x}`).checked = true;
    document.getElementById(`al${x}`).checked = true;
    document.getElementById(`abh${x}`).checked = true;
}

function Amin7(x) {
    document.getElementById(`el${x}`).checked = true;
    document.getElementById(`ch${x}`).checked = true;
    document.getElementById(`al${x}`).checked = true;
    document.getElementById(`gl${x}`).checked = true;
}

function A13(x) {
    document.getElementById(`el${x}`).checked = true;
    document.getElementById(`dbl${x}`).checked = true;
    document.getElementById(`al${x}`).checked = true;
    document.getElementById(`gl${x}`).checked = true;
    document.getElementById(`gbh${x}`).checked = true;
}

function Ab(x) {
    document.getElementById(`abl${x}`).checked = true;
    document.getElementById(`cl${x}`).checked = true;
    document.getElementById(`ebl${x}`).checked = true;
}

function Abm(x) {
    document.getElementById(`abl${x}`).checked = true;
    document.getElementById(`bl${x}`).checked = true;
    document.getElementById(`ebl${x}`).checked = true;
}

function Ab7(x) {
    document.getElementById(`abl${x}`).checked = true;
    document.getElementById(`cl${x}`).checked = true;
    document.getElementById(`ebl${x}`).checked = true;
    document.getElementById(`gbl${x}`).checked = true;
}

function AbMaj7(x) {
    document.getElementById(`abl${x}`).checked = true;
    document.getElementById(`cl${x}`).checked = true;
    document.getElementById(`ebl${x}`).checked = true;
    document.getElementById(`gh${x}`).checked = true;
}

function Abmin7(x) {
    document.getElementById(`abl${x}`).checked = true;
    document.getElementById(`bl${x}`).checked = true;
    document.getElementById(`ebl${x}`).checked = true;
    document.getElementById(`gbh${x}`).checked = true;
}

function Ab13(x) {
    document.getElementById(`abl${x}`).checked = true;
    document.getElementById(`cl${x}`).checked = true;
    document.getElementById(`ebl${x}`).checked = true;
    document.getElementById(`gbl${x}`).checked = true;
    document.getElementById(`fh${x}`).checked = true;
}

function Bm(x) {
    document.getElementById(`bl${x}`).checked = true;
    document.getElementById(`dl${x}`).checked = true;
    document.getElementById(`gbl${x}`).checked = true;
}

function B7(x) {
    document.getElementById(`bl${x}`).checked = true;
    document.getElementById(`ebl${x}`).checked = true;
    document.getElementById(`gbl${x}`).checked = true;
    document.getElementById(`al${x}`).checked = true;
}

function BMaj7(x) {
    document.getElementById(`bl${x}`).checked = true;
    document.getElementById(`ebl${x}`).checked = true;
    document.getElementById(`gbl${x}`).checked = true;
    document.getElementById(`bbh${x}`).checked = true;
}

function Bmin7(x) {
    document.getElementById(`bl${x}`).checked = true;
    document.getElementById(`dl${x}`).checked = true;
    document.getElementById(`gbl${x}`).checked = true;
    document.getElementById(`ah${x}`).checked = true;
}

function B13(x) {
    document.getElementById(`bl${x}`).checked = true;
    document.getElementById(`ebl${x}`).checked = true;
    document.getElementById(`gbl${x}`).checked = true;
    document.getElementById(`al${x}`).checked = true;
    document.getElementById(`abh${x}`).checked = true;
}

function Bb(x) {
    document.getElementById(`bbl${x}`).checked = true;
    document.getElementById(`dl${x}`).checked = true;
    document.getElementById(`fl${x}`).checked = true;
}

function Bbm(x) {
    document.getElementById(`bbl${x}`).checked = true;
    document.getElementById(`dbl${x}`).checked = true;
    document.getElementById(`fl${x}`).checked = true;
}

function Bb7(x) {
    document.getElementById(`bbl${x}`).checked = true;
    document.getElementById(`dl${x}`).checked = true;
    document.getElementById(`fl${x}`).checked = true;
    document.getElementById(`abl${x}`).checked = true;
}

function BbMaj7(x) {
    document.getElementById(`bbl${x}`).checked = true;
    document.getElementById(`dl${x}`).checked = true;
    document.getElementById(`fl${x}`).checked = true;
    document.getElementById(`ah${x}`).checked = true;
}

function Bbmin7(x) {
    document.getElementById(`bbl${x}`).checked = true;
    document.getElementById(`dbl${x}`).checked = true;
    document.getElementById(`fl${x}`).checked = true;
    document.getElementById(`abh${x}`).checked = true;
}

function Bb13(x) {
    document.getElementById(`bbl${x}`).checked = true;
    document.getElementById(`dl${x}`).checked = true;
    document.getElementById(`fl${x}`).checked = true;
    document.getElementById(`abl${x}`).checked = true;
    document.getElementById(`gh${x}`).checked = true;
}