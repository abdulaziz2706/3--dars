let ism = prompt('Ism kiriting')
let harf = prompt('Harf kiriting')

if (ism.toLocaleLowerCase().includes(harf.toLocaleLowerCase())) {
    alert (`${ism}da ${harf} harfi bor`)
} else {
    alert(`${ism}da ${harf} harfi yoq`)
}