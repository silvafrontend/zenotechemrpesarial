const WA = "https://wa.me/5551981538566?text=";
const order = (item) => WA + encodeURIComponent("Olá! Vim pelo site e quero pedir: " + item);
const img = (id, emoji) => `<img loading="lazy" src="https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=75" alt="" class="w-full h-full object-cover" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'w-full h-full grid place-items-center text-7xl',textContent:'${emoji}'}))">`;
const AC = "photo-1590301157890-4810ed352733";

// Diferenciais
const diffs = [
  ["🚀","Entrega super rápida","Média de 30 minutos, com embalagem térmica."],
  ["🍇","Fruta selecionada","Açaí 100% puro, sem conservantes."],
  ["🥣","Mais de 20 adicionais","Combine frutas, cremes, doces e crocantes."],
  ["💚","Opções sem açúcar e fit","Açaí sem açúcar, com whey ou granola fit."]
];
document.getElementById("diffs").innerHTML = diffs.map(d => `
  <div class="reveal bg-white rounded-3xl p-6 shadow-lg shadow-purple-900/5 hover:-translate-y-1 transition">
    <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold to-gold-dark grid place-items-center text-3xl">${d[0]}</div>
    <h3 class="mt-4 font-display font-extrabold text-lg text-acai-deep">${d[1]}</h3>
    <p class="mt-1 text-sm text-stone-600">${d[2]}</p>
  </div>`).join("");

// Tamanhos
const sizes = [
  ["Copo 300 ml","Ideal para matar a vontade.","R$ 14,90"],
  ["Tigela 400 ml","O clássico do dia a dia.","R$ 18,90"],
  ["Tigela 500 ml","Mais açaí, mais acompanhamentos.","R$ 22,90"],
  ["Tigela 700 ml","Para quem não faz economia.","R$ 29,90"],
  ["Balde Especial 1 Litro","Para a família: o mais vendido!","R$ 39,90", true]
];
document.getElementById("sizes").innerHTML = sizes.map(s => `
  <article class="reveal group relative bg-creme rounded-3xl overflow-hidden shadow-lg shadow-purple-900/10 ${s[3] ? 'ring-2 ring-gold lg:col-span-1' : ''}">
    ${s[3] ? '<span class="absolute top-3 left-3 z-10 bg-gold text-acai-deep text-xs font-bold px-3 py-1 rounded-full">O mais vendido</span>' : ''}
    <div class="card-img overflow-hidden">${img(AC,'🍇').replace('class="w-full','class="group-hover:scale-105 transition duration-500 w-full')}</div>
    <div class="p-5">
      <h3 class="font-display font-extrabold text-xl text-acai-deep">${s[0]}</h3>
      <p class="text-sm text-stone-600 mt-1">${s[1]}</p>
      <div class="mt-4 flex items-center justify-between">
        <span class="font-display font-extrabold text-2xl text-acai">${s[2]}</span>
        <a href="${order(s[0])}" target="_blank" rel="noopener" class="bg-tropic hover:bg-tropic-light text-white text-sm font-bold px-4 py-2 rounded-full transition">Pedir no WhatsApp</a>
      </div>
    </div>
  </article>`).join("");

// Garrafas
const bottles = [
  ["Açaí na Garrafa Tradicional","Açaí puro e cremoso, do jeito clássico.","500 ml R$ 16,90 | 1 L R$ 29,90","🍇"],
  ["Garrafa Leite Ninho e Morango","Doce, cremoso e com pedaços de morango.","500 ml R$ 19,90 | 1 L R$ 34,90","🍓"],
  ["Garrafa Energético","Guaraná e banana para dar aquele gás.","500 ml R$ 18,90 | 1 L R$ 32,90","🍌"]
];
document.getElementById("bottles").innerHTML = bottles.map(b => `
  <article class="reveal glass rounded-3xl p-6 flex flex-col">
    <div class="w-16 h-16 rounded-2xl bg-white/15 grid place-items-center text-4xl">${b[3]}</div>
    <h3 class="mt-4 font-display font-extrabold text-xl">${b[0]}</h3>
    <p class="mt-1 text-sm text-white/80 flex-1">${b[1]}</p>
    <p class="mt-4 font-bold text-gold">${b[2]}</p>
    <a href="${order(b[0])}" target="_blank" rel="noopener" class="mt-4 bg-tropic hover:bg-tropic-light text-center font-bold py-3 rounded-full transition">Pedir no WhatsApp</a>
  </article>`).join("");

// Adicionais
const addons = [["Leite em pó",1],["Granola",1],["Paçoca",1],["Leite condensado",1],["Banana",1],["Morango",0],["Kiwi",0],["Nutella",0],["Creme de Ninho",0],["Creme de Ovetine",0],["M&Ms",0]];
document.getElementById("addons").innerHTML = addons.map(a => `
  <span class="px-4 py-2 rounded-full text-sm font-bold ${a[1] ? 'bg-tropic/15 text-tropic border border-tropic/40' : 'bg-gold/25 text-acai-deep border border-gold-dark/40'}">${a[0]}</span>`).join("");

// FAQ
const faq = [
  ["Qual o tempo médio de entrega?","Em média 30 a 45 minutos, dependendo do bairro e do movimento."],
  ["Quais são as formas de pagamento aceitas?","Pix, cartões de crédito e débito e dinheiro. Avise no pedido se precisar de troco."],
  ["Posso escolher quantos adicionais eu quiser?","Pode! Cada tigela vem com 3 acompanhamentos grátis e você adiciona quantos mais quiser pagando só o valor de cada extra."],
  ["O açaí chega derretido no delivery?","Não. Usamos embalagem térmica e o açaí sai direto do freezer, então chega gelado e cremoso."],
  ["Funcionam em quais dias e horários?","Todos os dias, das 12h às 23h."]
];
document.getElementById("faqList").innerHTML = faq.map((f,i) => `
  <div class="faq-item reveal bg-creme rounded-2xl shadow-md shadow-purple-900/5">
    <button class="w-full flex justify-between items-center gap-4 text-left p-5 font-display font-extrabold text-acai-deep" aria-expanded="false" aria-controls="faq${i}">
      ${f[0]}
      <svg class="chev shrink-0 transition-transform duration-300" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg>
    </button>
    <div class="faq-body" id="faq${i}"><div><p class="px-5 pb-5 text-stone-600">${f[1]}</p></div></div>
  </div>`).join("");
document.querySelectorAll(".faq-item button").forEach(btn => btn.addEventListener("click", () => {
  const item = btn.parentElement, open = item.classList.contains("open");
  document.querySelectorAll(".faq-item").forEach(el => { el.classList.remove("open"); el.querySelector("button").setAttribute("aria-expanded","false"); });
  if (!open) { item.classList.add("open"); btn.setAttribute("aria-expanded","true"); }
}));

// Menu mobile
const menuBtn = document.getElementById("menuBtn"), menu = document.getElementById("mobileMenu");
menuBtn.addEventListener("click", () => { const h = menu.classList.toggle("hidden"); menuBtn.setAttribute("aria-expanded", String(!h)); });
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => { menu.classList.add("hidden"); menuBtn.setAttribute("aria-expanded","false"); }));

// Scroll reveal
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("show"); io.unobserve(e.target); } }), { threshold: .12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));
document.getElementById("year").textContent = new Date().getFullYear();