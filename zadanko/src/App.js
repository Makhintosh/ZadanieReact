import './App.css';

function handleClick() {
  let txt1 = document.querySelector('#txt1').value;
  let txt2 = document.querySelector('#txt2').value;

  let span = document.querySelector('#span');
  span.innerHTML = `${txt1} ${txt2}`;
}

function App() {
  const liczba = 50;
  return (
    <div className="App">
      <header className="App-header">
        <div className="content">
          <h1>Zadanie z React</h1>
          <p>Polubione przez { liczba } osób</p>

          <p>{'Stworzone przez Igora Szatkowskiego'}</p>
          <a href="https://www.ptoszek.pl/">Fajny link do gry</a><br />

          <label for="txt1" className='lab'>Tekst 1</label><br></br>
          <input type="text" id="txt1" className='txt'></input><br></br>
          <label for="txt2" className='lab'>Tekst 2</label><br></br>
          <input type="text" id="txt2" className='txt'></input><br></br>
          <button className='btn' onClick={handleClick}>Kliknij</button><br></br>
          <p id='span'></p>
        </div>
      </header>
    </div>
  );
}

export default App;
