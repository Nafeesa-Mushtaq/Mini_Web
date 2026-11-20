document.querySelector('#form').addEventListener('submit', (event) => {
    event.preventDefault();
    const percent = Number(document.querySelector('#percent').value);
    const number = Number(document.querySelector('#number').value);
    const answer = Number(((percent * number) / 100).toPrecision(12));
    document.querySelector('#result').textContent = `${percent}% of ${number} = ${answer}`;
});
