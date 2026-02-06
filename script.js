document.addEventListener('DOMContentLoaded',()=>{
	// Year
	document.getElementById('year').textContent=new Date().getFullYear();

	// Theme toggle
	const themeToggle=document.getElementById('themeToggle');
	const root=document.documentElement;
	const saved=localStorage.getItem('theme');
	if(saved==='dark') root.classList.add('dark');
	themeToggle.addEventListener('click',()=>{
		root.classList.toggle('dark');
		const active=root.classList.contains('dark')?'dark':'light';
		localStorage.setItem('theme',active);
	});

	// Filtering
	const navBtns=document.querySelectorAll('.nav-btn');
	const mobileFilter=document.getElementById('mobileFilter');
	const cards=document.querySelectorAll('.card');
	function applyFilter(type){
		cards.forEach(c=>{if(type==='all' || c.dataset.type===type) c.style.display='block'; else c.style.display='none'});
	}
	navBtns.forEach(b=>b.addEventListener('click',()=>applyFilter(b.dataset.filter)));
	if(mobileFilter) mobileFilter.addEventListener('change',e=>applyFilter(e.target.value));

	// Cart + toast
	let cartCount=0;
	const cartCountEl=document.getElementById('cartCount');
	const toast=document.getElementById('toast');
	function showToast(msg){toast.textContent=msg;toast.style.display='block';setTimeout(()=>toast.style.display='none',2200)}
	document.querySelectorAll('.add-btn').forEach(btn=>{
		btn.addEventListener('click',()=>{
			cartCount++;
			cartCountEl.textContent=cartCount;
			showToast(btn.dataset.name + ' added');
		});
	});

	// Contact form simple validation
	const form=document.getElementById('contactForm');
	if(form){
		form.addEventListener('submit',e=>{
			e.preventDefault();
			const data=new FormData(form);
			if(!data.get('name')||!data.get('email')||!data.get('message')){showToast('Please complete the form');return}
			showToast('Thanks — we will reply soon!');
			form.reset();
		});
	}
});

