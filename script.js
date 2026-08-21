const explainers = {
  nlp: {
    tag: "Natural language processing",
    title: "How does the computer guess your drawing?",
    body: "Before today, this computer looked at millions of drawings people made of the same objects. It learned the common shapes, lines, and patterns for a 'cat' or a 'tree'. When you draw, it compares your lines to everything it has already seen and picks its best guess. More past drawings means better guesses."
  },
  genai: {
    tag: "Generative AI",
    title: "How does the computer mix two emoji?",
    body: "Every emoji is stored as numbers that describe its shape, color, and style. When you pick two emoji, the computer blends their numbers together and draws a brand new image from that blend. It isn't copying and pasting, it's creating something new from data it already understands."
  },
  cv: {
    tag: "Computer vision",
    title: "How does the camera read your hand?",
    body: "A camera doesn't see a 'hand', it sees a grid of tiny colored dots called pixels. The computer was trained on thousands of hand photos, so it knows what patterns of pixels usually mean 'finger', 'palm', or 'thumb'. It uses that training to find your hand in the picture right now."
  },
  nn: {
    tag: "Neural networks",
    title: "How does the computer learn a new pattern?",
    body: "Inside this tool is a tiny web of switches called neurons, arranged in layers. Each one looks at a piece of data and passes a signal to the next layer. When you change the wiring, you change how those signals travel, and you can watch the computer get better at sorting the data with every pass."
  }
};

function openModal(key){
  const data = explainers[key];
  document.getElementById('modal-tag').textContent = data.tag;
  document.getElementById('modal-title').textContent = data.title;
  document.getElementById('modal-body').textContent = data.body;
  document.getElementById('overlay').classList.add('open');
}
function closeModal(){
  document.getElementById('overlay').classList.remove('open');
}
document.getElementById('overlay').addEventListener('click', function(e){
  if(e.target === this) closeModal();
});
document.addEventListener('keydown', function(e){
  if(e.key === 'Escape') closeModal();
});

