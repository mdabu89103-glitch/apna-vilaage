const buttons = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.store-card');
const search = document.getElementById('searchInput');
const count = document.getElementById('count');
const noResults = document.getElementById('noResults');
let selected = 'all';

function updateStores() {
  const query = search.value.trim().toLowerCase();
  let visible = 0;
  cards.forEach(card => {
    const matchesCategory = selected === 'all' || card.dataset.category === selected;
    const matchesSearch = !query || card.dataset.search.toLowerCase().includes(query) || card.textContent.toLowerCase().includes(query);
    const show = matchesCategory && matchesSearch;
    card.style.display = show ? 'flex' : 'none';
    if (show) visible++;
  });
  count.textContent = visible;
  noResults.style.display = visible ? 'none' : 'block';
}

buttons.forEach(button => button.addEventListener('click', () => {
  buttons.forEach(item => item.classList.remove('active'));
  button.classList.add('active');
  selected = button.dataset.filter;
  updateStores();
}));

const details = {
  'Faruq General Store': 'राशन, दाल, तेल, साबुन और घर का सामान',
  'Aftab General Store': 'दैनिक उपयोग का सामान, बिस्कुट और कोल्ड ड्रिंक',
  'Arbaj Furniture': 'कुर्सी, टेबल, बेड और घर का फर्नीचर',
  'Cement Store': 'सीमेंट, सरिया, ईंट और निर्माण सामग्री',
  'Flour Milling Shop': 'गेहूँ, मक्का और मसालों की पिसाई उपलब्ध',
  'Gagan Shiringar Store': 'कॉस्मेटिक्स, ब्यूटी प्रोडक्ट्स और श्रृंगार सामान',
  'Sagir Medihub': 'सभी प्रकार की दवाइयाँ उपलब्ध · 20% तक डिस्काउंट',
  'Kumdan General Store': 'किराना, बच्चों का सामान और घरेलू जरूरतें',
  'Sohan General Store': 'राशन, चाय, स्नैक्स और रोज़मर्रा का सामान',
  'Sahil Motorcycle Repairing': 'बाइक सर्विस, पंचर और छोटी-मोटी रिपेयरिंग',
  'Flour & Wheat Sell Shop': 'ताज़ा आटा, गेहूँ और अनाज उपलब्ध',
  'Ajit Coaching Center': 'कक्षा 1 से 10 तक की पढ़ाई · पुल के पास',
  'Sohani General Store': 'दाल, चावल, मसाले और घरेलू सामान',
  'Medihub': 'सभी प्रकार की दवाइयाँ उपलब्ध · 20% तक डिस्काउंट'
};

cards.forEach(card => {
  const name = card.querySelector('h3').textContent;
  if (details[name]) card.querySelector('.card-main p').textContent = details[name];
});

search.addEventListener('input', updateStores);
updateStores();
