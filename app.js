const $=id=>document.getElementById(id);
const rates={Bali:115,Tokyo:185,Sydney:160,Paris:210};
const styles={Budget:.8,Standard:1,Luxury:1.65};
function calculateTrip(event){event.preventDefault();const destination=$('destination').value,people=Number($('travellers').value),days=Number($('days').value),style=$('style').value;
if(!Object.hasOwn(rates,destination)||!Object.hasOwn(styles,style)||!Number.isInteger(people)||people<1||people>30||!Number.isInteger(days)||days<1||days>90){$('estimate').textContent='Please enter 1–30 travellers and 1–90 days.';return;}
const total=Math.round((rates[destination]*days*people+people*180)*styles[style]);
$('estimate').textContent='Estimated cost for '+people+' traveller(s) to '+destination+' for '+days+' day(s): AUD $'+total.toLocaleString('en-AU')+' – '+style+' package. Indicative only; not a booking quote.';
}
function checkForm(event,statusId,kind){event.preventDefault();const form=event.currentTarget;if(!form.reportValidity())return;const message=$(statusId);
if(kind==='appointment'){const d=new Date(form.elements.date.value+'T00:00:00');const today=new Date();today.setHours(0,0,0,0);if(!Number.isFinite(d.getTime())||d<today){message.textContent='Please select today or a future appointment date.';return;}}
message.textContent='Your '+kind+' details passed validation. This is an educational demonstration: the information has NOT been sent or stored. An authorised email service is needed before accepting real enquiries.';}
document.addEventListener('DOMContentLoaded',()=>{const menu=$('menu-toggle'),links=$('site-links');if(menu&&links){menu.addEventListener('click',()=>{const expanded=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!expanded));links.classList.toggle('open',!expanded);});}
if($('calculator'))$('calculator').addEventListener('submit',calculateTrip);
if($('appointment'))$('appointment').addEventListener('submit',e=>checkForm(e,'request-status','appointment'));
if($('contact-form'))$('contact-form').addEventListener('submit',e=>checkForm(e,'contact-status','enquiry'));
if($('date'))$('date').min=new Date().toLocaleDateString('en-CA');
const items=document.querySelectorAll('.reveal');if('IntersectionObserver'in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.1});items.forEach(el=>observer.observe(el));}else items.forEach(el=>el.classList.add('visible'));
const banner=$('banner-text');if(banner){const texts=['Discover Bali’s beaches','Explore Tokyo’s city lights','Experience Paris in spring'];let i=0;setInterval(()=>{i=(i+1)%texts.length;banner.textContent=texts[i];},4200);}});
