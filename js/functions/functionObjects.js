// 1. Susikurkite darbuotojo objektą, kuriame turėtumėte šias savybes: vardas,
// pavardė, dabartinis atlyginimas, etatas. Šiame objekte sukurkite funkciją, kuri
// per argumentus priimtų procentus ir paskaičiuotų koks būtų darbuotojo
// atlyginimas, jei jo atlyginimas būtų pakeltas per nurodytą kiekį procentų. Taip
// pat, susikurkite funkciją, kuri per argumentus priimtų atnaujintą etato skaičių,
// ji turėtų paskaičiuoti kiek pasikeistų darbuotojo atlyginimas, jei jis pradėtų
// dirbti nurodytu etatu (tarkim jei dirba pilnu etatu ir atlyginimas 1000 eurų, tai
// per pusę sumažinus etatą (argumentuose būtų 0.5) jo atlyginimas kristų iki
// 500). Iškvieskite šias objekto funkcijas ir išsiveskite gautus atsakymus.

worker = {
    name: 'Jonas',
    surname: 'Jonaitis',
    salary: 1100,
    etat: 1,
    raiseSalary: function(percent) {
        this.salary += this.salary * (percent / 100);
        return this.salary;
    },
    newEtats: function(new_etat) {
        this.salary = this.salary * new_etat
        return this.salary
    },
}
console.log(worker.raiseSalary(10));
console.log(worker.newEtats(0.5));