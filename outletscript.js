let arr=["https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120556.01377007818!2d72.85082642655325!3d19.22246313631774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9666160a75b%3A0x105a5333c2a95751!2sLakme%20Salon!5e0!3m2!1sen!2sin!4v1722692297203!5m2!1sen!2sin","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d148524.3640880721!2d72.7538906570983!3d19.108643498659866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9b51222092f%3A0x89cb958615e528e9!2sLakme%20Salon!5e0!3m2!1sen!2sin!4v1722692367401!5m2!1sen!2sin","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220273.46615733232!2d72.85684923548233!3d19.173933744560237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be79517705f74a9%3A0x1b772e028156ba4a!2sLakme%20Salon!5e0!3m2!1sen!2sin!4v1722692426326!5m2!1sen!2sin"]


document.querySelector(".thane").addEventListener("click",()=>{
    document.querySelector(".map iframe").src = arr[0]
    document.querySelector(".address").innerHTML = "<br><b>ADDRESS</b></br> High School, Shop No. 1 & 2, Siddhachal Building No. 3 Phase 8, Pokharan Rd Number 2, opposite Vasant Vihar, Vasant Vihar, Thane West, Mumbai, Maharashtra 400610"
    document.querySelector(".mapT").innerHTML="Thane"
})
document.querySelector(".mumbai").addEventListener("click",()=>{
    document.querySelector(".map iframe").src = arr[1]
    document.querySelector(".address").innerHTML = "<br><b>ADDRESS</b></br> Ground floor, Khadayta Bhuvan, Hanuman Rd, opp. Shivleela Hotel, Om Shri Siddhivinayak Society, Navpada, Vile Parle East, Vile Parle, Mumbai, Maharashtra 400057"
    document.querySelector(".mapT").innerHTML="Mumbai"
})
document.querySelector(".kalyan").addEventListener("click",()=>{
    document.querySelector(".map iframe").src = arr[2]
    document.querySelector(".address").innerHTML ="<br><b>ADDRESS</b></br> Shop no 5/6, Tulip Building, Flower Valley, Khadakpada Cir, Beturkar Pada, Kalyan, Maharashtra 421301"
    document.querySelector(".mapT").innerHTML="Kalyan"
})