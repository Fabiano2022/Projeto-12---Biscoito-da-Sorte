//elements:

const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnReset = document.querySelector('#btnReset')
const openCookie = document.querySelector('#img1')

openCookie.addEventListener('click', raffleMessage)
btnReset.addEventListener('click', raffleMessage)

document.addEventListener('keydown', function(e) {
    if(e.key == 'Enter' && screen2.classList.contains('hide')) {
        raffleMessage()
    } else if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        raffleMessage()
    }
})

function raffleMessage() {
    toggleScreen()
    let randomNumber = Math.round(Math.random() * 10)

    switch(randomNumber) {
        case 0: screen2.querySelector('p').innerText = 
        'Se alguém está tão cansando que não possa te dar um sorriso, deixa lhe o teu.'
        break

        case 1: screen2.querySelector('p').innerText = 
        'Nem todas as tempestades vêm para atrapalhar a sua vida. Algumas vêm para limpar seu caminho.'
        break

        case 2: screen2.querySelector('p').innerText = 
        'Não se desespere quando a caminhada estiver difícil, é sinal de que você está no caminho certo.'
        break

        case 3: screen2.querySelector('p').innerText = 
        'Seus sonhos não precisam de plateia, eles só precisam de você.'
        break

        case 4: screen2.querySelector('p').innerText = 
        'As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente.'
        break

        case 5: screen2.querySelector('p').innerText = 
        'Faça da alegria a maior certeza da sua vida, e o tempo se encarregará de permitir que grandes momentos aconteçam todos os dias.'
        break

        case 6: screen2.querySelector('p').innerText = 
        'Sinta carinho, goste, adore e ame! Mas, jamais precise de alguém pra ser feliz, além de você mesmo.'
        break

        case 7: screen2.querySelector("p").innerText = 
        "No tempo certo, tudo dará certo."
        break

        case 8: screen2.querySelector("p").innerText = 
        "Atitude é uma coisa pequena que faz toda a diferença."
        break

        case 9: screen2.querySelector("p").innerText = 
        "A persistência pode transformar um fracasso em um sucesso extraordinário!"
        break

        case 10: screen2.querySelector("p").innerText = 
        "Não existe um caminho para a felicidade. A felicidade é o caminho."
        break

        default:
            break
    }

}

function toggleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}



















    
    
